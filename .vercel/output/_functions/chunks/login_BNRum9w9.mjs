import { c as createComponent } from './astro-component_BXrwO0Pw.mjs';
import { V as renderTemplate, C as maybeRenderHead, a6 as addAttribute } from './sequence_BMZP2NkZ.mjs';
import { r as renderComponent } from './entrypoint_XJ_bjjkO.mjs';
import { $ as $$SuperAdminLayout } from './SuperAdminLayout_CGT2Lsd0.mjs';

const prerender = false;
const $$Login = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Login;
  const rawReturn = Astro2.url.searchParams.get("returnTo") ?? "/superadmin/profile";
  const returnTo = rawReturn.startsWith("/superadmin/") && !rawReturn.startsWith("//") ? rawReturn : "/superadmin/profile";
  const error = Astro2.url.searchParams.get("error");
  const errorMessage = error === "missing" ? "Enter both email and password." : error === "invalid" ? "Email or password was not recognized." : error === "forbidden" ? "This account is not allowed to use superadmin." : error === "config" ? "Superadmin is not configured (set SUPERADMIN_EMAIL in your environment)." : error ? "Something went wrong. Try again." : null;
  return renderTemplate`${renderComponent($$result, "SuperAdminLayout", $$SuperAdminLayout, { "title": "Superadmin — Sign in", "data-astro-cid-x2h73fli": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="auth-main" data-astro-cid-x2h73fli> <h1 class="font-serif page-title" data-astro-cid-x2h73fli>Superadmin sign in</h1> <p class="lede" data-astro-cid-x2h73fli>Restricted access. After sign in you will go to your superadmin profile.</p> ${errorMessage && renderTemplate`<p class="error" role="alert" data-astro-cid-x2h73fli>${errorMessage}</p>`} <form class="auth-form" method="post" action="/api/auth/superadmin-login" data-astro-cid-x2h73fli> <input type="hidden" name="returnTo"${addAttribute(returnTo, "value")} data-astro-cid-x2h73fli> <label class="field" data-astro-cid-x2h73fli> <span class="label" data-astro-cid-x2h73fli>Email</span> <input class="input" type="email" name="email" required autocomplete="username" data-astro-cid-x2h73fli> </label> <label class="field" data-astro-cid-x2h73fli> <span class="label" data-astro-cid-x2h73fli>Password</span> <input class="input" type="password" name="password" required autocomplete="current-password" data-astro-cid-x2h73fli> </label> <button type="submit" class="btn btn-solid" data-astro-cid-x2h73fli>Sign in</button> </form> </main> ` })}`;
}, "/home/thunder/ecommerce-app-fuhrer/src/pages/superadmin/login.astro", void 0);

const $$file = "/home/thunder/ecommerce-app-fuhrer/src/pages/superadmin/login.astro";
const $$url = "/superadmin/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Login,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
