import { c as createComponent } from './astro-component_BXrwO0Pw.mjs';
import { V as renderTemplate, C as maybeRenderHead } from './sequence_BMZP2NkZ.mjs';
import { r as renderComponent } from './entrypoint_XJ_bjjkO.mjs';
import { $ as $$SiteLayout } from './SiteLayout_BImNkpBG.mjs';

const prerender = false;
const $$Login = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Login;
  const error = Astro2.url.searchParams.get("error");
  const errorMessage = error === "missing" ? "Enter both email and password." : error === "invalid" ? "Email or password was not recognized." : error ? "Something went wrong. Try again." : null;
  return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, { "title": "Log in — Rad Plants", "data-astro-cid-sgpqyurt": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="auth-main" data-astro-cid-sgpqyurt> <h1 class="font-serif page-title" data-astro-cid-sgpqyurt>Log in</h1> <p class="lede" data-astro-cid-sgpqyurt>Sign in with your Supabase account. You will be redirected to the homepage.</p> ${errorMessage && renderTemplate`<p class="error" role="alert" data-astro-cid-sgpqyurt>${errorMessage}</p>`} <form class="auth-form" method="post" action="/api/auth/supabase-login" data-astro-cid-sgpqyurt> <label class="field" data-astro-cid-sgpqyurt> <span class="label" data-astro-cid-sgpqyurt>Email</span> <input class="input" type="email" name="email" required autocomplete="email" data-astro-cid-sgpqyurt> </label> <label class="field" data-astro-cid-sgpqyurt> <span class="label" data-astro-cid-sgpqyurt>Password</span> <input class="input" type="password" name="password" required autocomplete="current-password" data-astro-cid-sgpqyurt> </label> <button type="submit" class="btn btn-solid" data-astro-cid-sgpqyurt>Sign in</button> </form> <p class="hint" data-astro-cid-sgpqyurt> <a href="/" data-astro-cid-sgpqyurt>Back to home</a> </p> </main> ` })}`;
}, "/home/thunder/ecommerce-app-fuhrer/src/pages/login.astro", void 0);

const $$file = "/home/thunder/ecommerce-app-fuhrer/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Login,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
