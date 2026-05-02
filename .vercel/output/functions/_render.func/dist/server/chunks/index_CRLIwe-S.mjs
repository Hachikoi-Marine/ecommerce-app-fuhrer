import { c as createComponent } from './astro-component_BXrwO0Pw.mjs';
import { V as renderTemplate, C as maybeRenderHead } from './sequence_BMZP2NkZ.mjs';
import { r as renderComponent } from './entrypoint_XJ_bjjkO.mjs';
import { $ as $$SuperAdminLayout } from './SuperAdminLayout_CGT2Lsd0.mjs';

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SuperAdminLayout", $$SuperAdminLayout, { "title": "Superadmin profile", "data-astro-cid-kwy6xj7v": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="profile-main" data-astro-cid-kwy6xj7v> <h1 class="font-serif page-title" data-astro-cid-kwy6xj7v>Superadmin profile</h1> <p class="lede" data-astro-cid-kwy6xj7v>You are signed in as the configured superadmin user.</p> </main> ` })}`;
}, "/home/thunder/ecommerce-app-fuhrer/src/pages/superadmin/profile/index.astro", void 0);

const $$file = "/home/thunder/ecommerce-app-fuhrer/src/pages/superadmin/profile/index.astro";
const $$url = "/superadmin/profile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
