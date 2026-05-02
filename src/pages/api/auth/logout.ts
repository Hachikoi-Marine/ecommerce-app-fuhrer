import type { APIRoute } from 'astro';
import { createSupabaseServerClient } from '../../../lib/supabase/server';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
	const formData = await request.formData().catch(() => null);
	const returnToRaw = formData ? String(formData.get('returnTo') ?? '/') : '/';
	const returnTo =
		returnToRaw.startsWith('/') && !returnToRaw.startsWith('//') ? returnToRaw : '/';

	const supabase = createSupabaseServerClient(request, cookies);
	await supabase.auth.signOut();

	return redirect(returnTo, 302);
};
