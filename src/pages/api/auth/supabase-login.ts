import type { APIRoute } from 'astro';
import { createSupabaseServerClient } from '../../../lib/supabase/server';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
	const formData = await request.formData();
	const email = String(formData.get('email') ?? '').trim();
	const password = String(formData.get('password') ?? '');

	if (!email || !password) {
		return redirect('/login?error=missing', 302);
	}

	const supabase = createSupabaseServerClient(request, cookies);
	const { error } = await supabase.auth.signInWithPassword({ email, password });

	if (error) {
		return redirect('/login?error=invalid', 302);
	}

	return redirect('/', 302);
};
