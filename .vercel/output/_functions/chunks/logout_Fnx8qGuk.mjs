import { c as createSupabaseServerClient } from './server_BeAEOk12.mjs';

const prerender = false;
const POST = async ({ request, cookies, redirect }) => {
  const formData = await request.formData().catch(() => null);
  const returnToRaw = formData ? String(formData.get("returnTo") ?? "/") : "/";
  const returnTo = returnToRaw.startsWith("/") && !returnToRaw.startsWith("//") ? returnToRaw : "/";
  const supabase = createSupabaseServerClient(request, cookies);
  await supabase.auth.signOut();
  return redirect(returnTo, 302);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
