import { defineMiddleware } from 'astro:middleware';
import type { SupabaseClient, User } from '@supabase/supabase-js';
import { createSupabaseServerClient } from './lib/supabase/server';
import { isSuperadminUser } from './lib/superadmin';

export const onRequest = defineMiddleware(async (context, next) => {
	const { pathname } = context.url;

	let supabase: SupabaseClient;
	let user: User | null = null;

	try {
		supabase = createSupabaseServerClient(context.request, context.cookies);
		const { data } = await supabase.auth.getUser();
		user = data.user ?? null;
	} catch {
		context.locals.supabase = null;
		context.locals.user = null;
		return next();
	}

	context.locals.supabase = supabase;
	context.locals.user = user;

	if (pathname === '/profile' || pathname.startsWith('/profile/')) {
		if (!user) {
			const returnTo = encodeURIComponent(pathname);
			return context.redirect(`/login?returnTo=${returnTo}`);
		}
	}

	const isSuperadminRoute =
		pathname.startsWith('/superadmin/') && pathname !== '/superadmin/login';

	if (isSuperadminRoute) {
		const isSuperadmin = user ? await isSuperadminUser(supabase, user.id) : false;
		if (!user || !isSuperadmin) {
			const returnTo = encodeURIComponent(pathname);
			return context.redirect(`/superadmin/login?returnTo=${returnTo}`);
		}
	}

	return next();
});
