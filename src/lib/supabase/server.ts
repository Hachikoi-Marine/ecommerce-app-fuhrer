import { createServerClient } from '@supabase/ssr';
import type { AstroCookies } from 'astro';

function getAllCookiesFromRequest(request: Request): { name: string; value: string }[] {
	const header = request.headers.get('cookie');
	if (!header) return [];
	const pairs: { name: string; value: string }[] = [];
	for (const part of header.split(';')) {
		const eq = part.indexOf('=');
		if (eq === -1) continue;
		const name = part.slice(0, eq).trim();
		if (!name) continue;
		pairs.push({ name, value: part.slice(eq + 1).trim() });
	}
	return pairs;
}

export function createSupabaseServerClient(request: Request, cookies: AstroCookies) {
	const url = import.meta.env.SUPABASE_URL;
	const key = import.meta.env.SUPABASE_KEY;
	if (!url || !key) {
		throw new Error('Missing SUPABASE_URL or SUPABASE_KEY');
	}
	return createServerClient(url, key, {
		cookies: {
			getAll() {
				return getAllCookiesFromRequest(request);
			},
			setAll(cookiesToSet, _responseHeaders) {
				void _responseHeaders;
				cookiesToSet.forEach(({ name, value, options }) => {
					if (!value) {
						cookies.delete(name, { path: '/', ...options });
					} else {
						cookies.set(name, value, { path: '/', ...options });
					}
				});
			},
		},
	});
}
