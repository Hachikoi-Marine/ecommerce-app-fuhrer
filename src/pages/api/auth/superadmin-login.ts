import type { APIRoute } from 'astro';
import { createSupabaseServerClient } from '../../../lib/supabase/server';
import { isSuperadminUser } from '../../../lib/superadmin';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
	const formData = await request.formData();
	const email = String(formData.get('email') ?? '').trim();
	const password = String(formData.get('password') ?? '');

	if (!email || !password) {
		return redirect('/superadmin/login?error=missing', 302);
	}

	const supabase = createSupabaseServerClient(request, cookies);
	const { data, error } = await supabase.auth.signInWithPassword({ email, password });

	if (error || !data.user) {
		return redirect('/superadmin/login?error=invalid', 302);
	}

	const allowed = await isSuperadminUser(supabase, data.user.id);
	if (!allowed) {
		await supabase.auth.signOut();
		return redirect('/superadmin/login?error=forbidden', 302);
	}

	const returnToRaw = String(formData.get('returnTo') ?? '/superadmin/profile');
	const returnTo =
		returnToRaw.startsWith('/superadmin/') && !returnToRaw.startsWith('//')
			? returnToRaw
			: '/superadmin/profile';

	return redirect(returnTo, 302);
};
