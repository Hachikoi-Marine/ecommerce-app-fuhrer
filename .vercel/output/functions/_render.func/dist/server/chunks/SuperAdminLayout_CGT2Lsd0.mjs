import { c as createComponent } from './astro-component_BXrwO0Pw.mjs';
import { a6 as addAttribute, be as renderHead, F as Fragment, V as renderTemplate, G as renderSlot } from './sequence_BMZP2NkZ.mjs';
import { r as renderComponent } from './entrypoint_XJ_bjjkO.mjs';

const $$SuperAdminLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SuperAdminLayout;
  const { title = "Superadmin" } = Astro2.props;
  const user = Astro2.locals.user;
  const loggedIn = !!user;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700&display=swap" rel="stylesheet">${renderHead()}</head> <body> <header class="sa-header"> <span class="sa-brand font-serif">Superadmin</span> <nav class="sa-nav" aria-label="Superadmin"> ${loggedIn ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a href="/superadmin/profile">Profile</a> <form class="inline-form" method="post" action="/api/auth/logout"> <input type="hidden" name="returnTo" value="/superadmin/login"> <button type="submit" class="link-button">
Log out
</button> </form> ` })}` : null} </nav> </header> ${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/home/thunder/ecommerce-app-fuhrer/src/layouts/SuperAdminLayout.astro", void 0);

export { $$SuperAdminLayout as $ };
