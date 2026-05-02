import { c as createComponent } from './astro-component_BXrwO0Pw.mjs';
import { V as renderTemplate, C as maybeRenderHead } from './sequence_BMZP2NkZ.mjs';
import { r as renderComponent } from './entrypoint_XJ_bjjkO.mjs';
import { $ as $$SiteLayout } from './SiteLayout_BImNkpBG.mjs';

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, { "title": "Your profile — Rad Plants", "data-astro-cid-35oxftto": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="profile-main" data-astro-cid-35oxftto> <h1 class="font-serif page-title" data-astro-cid-35oxftto>Your profile</h1> <p class="lede" data-astro-cid-35oxftto>
This page is only visible when you are signed in. Use Log out in the header to clear your
			session.
</p> <p data-astro-cid-35oxftto> <a href="/" data-astro-cid-35oxftto>Continue shopping</a> </p> </main> ` })}`;
}, "/home/thunder/ecommerce-app-fuhrer/src/pages/profile/index.astro", void 0);

const $$file = "/home/thunder/ecommerce-app-fuhrer/src/pages/profile/index.astro";
const $$url = "/profile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
