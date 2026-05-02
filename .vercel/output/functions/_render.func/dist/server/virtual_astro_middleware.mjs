import { aa as defineMiddleware, ak as sequence } from './chunks/sequence_BMZP2NkZ.mjs';
import { c as createSupabaseServerClient } from './chunks/server_BeAEOk12.mjs';
import { i as isSuperadminEmail } from './chunks/superadmin_CEFPIrIq.mjs';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  let supabase;
  let user = null;
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
  if (pathname === "/profile" || pathname.startsWith("/profile/")) {
    if (!user) {
      const returnTo = encodeURIComponent(pathname);
      return context.redirect(`/login?returnTo=${returnTo}`);
    }
  }
  const isSuperadminRoute = pathname.startsWith("/superadmin/") && pathname !== "/superadmin/login";
  if (isSuperadminRoute) {
    if (!user || !isSuperadminEmail(user.email)) {
      const returnTo = encodeURIComponent(pathname);
      return context.redirect(`/superadmin/login?returnTo=${returnTo}`);
    }
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
