import { c as createSupabaseServerClient } from './server_BeAEOk12.mjs';
import { g as getSuperadminEmail, i as isSuperadminEmail } from './superadmin_CEFPIrIq.mjs';

const prerender = false;
const POST = async ({ request, cookies, redirect }) => {
  if (!getSuperadminEmail()) {
    return redirect("/superadmin/login?error=config", 302);
  }
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  if (!email || !password) {
    return redirect("/superadmin/login?error=missing", 302);
  }
  const supabase = createSupabaseServerClient(request, cookies);
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error || !data.user) {
    return redirect("/superadmin/login?error=invalid", 302);
  }
  if (!isSuperadminEmail(data.user.email)) {
    await supabase.auth.signOut();
    return redirect("/superadmin/login?error=forbidden", 302);
  }
  const returnToRaw = String(formData.get("returnTo") ?? "/superadmin/profile");
  const returnTo = returnToRaw.startsWith("/superadmin/") && !returnToRaw.startsWith("//") ? returnToRaw : "/superadmin/profile";
  return redirect(returnTo, 302);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
