import { c as createComponent } from './astro-component_BXrwO0Pw.mjs';
import { a6 as addAttribute, be as renderHead, F as Fragment, V as renderTemplate, G as renderSlot } from './sequence_BMZP2NkZ.mjs';
import { r as renderComponent } from './entrypoint_XJ_bjjkO.mjs';

const $$SiteLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SiteLayout;
  const { title = "Rad Plants", variant = "default" } = Astro2.props;
  const loggedIn = !!Astro2.locals.user;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${variant === "store" ? renderTemplate`<header class="site-header store-header"> <div class="store-header-row"> <a href="/" class="store-logo"> <svg class="store-logo-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"> <path d="M12 22c4-6 8-10 8-15a8 8 0 1 0-16 0c0 5 4 9 8 15z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path> <path d="M12 16c-2-3-4-5-4-8a4 4 0 0 1 8 0c0 3-2 5-4 8z" fill="currentColor" opacity="0.35"></path> </svg> <span class="store-logo-text font-serif">Rad Plants</span> </a> <nav class="store-nav-center" aria-label="Store"> <a href="/">Home</a> <a href="/#categories">Catalogue</a> <a href="/#newsletter">Contact</a> </nav> <div class="store-header-actions"> ${loggedIn ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a href="/profile" class="store-login-btn">
Profile
</a> <form class="inline-form" method="post" action="/api/auth/logout"> <input type="hidden" name="returnTo" value="/"> <button type="submit" class="store-logout-btn">
Log out
</button> </form> ` })}` : renderTemplate`<a href="/login" class="store-login-btn">
Log in
</a>`} <button type="button" class="icon-btn" aria-label="Search"> <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"> <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm9 2-4.35-4.35" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path> </svg> </button> <a href="#" class="icon-btn" aria-label="Shopping cart"> <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"> <path d="M6 6h15l-1.5 9h-12L6 6zm0 0L5 3H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="9" cy="20" r="1" fill="currentColor"></circle> <circle cx="18" cy="20" r="1" fill="currentColor"></circle> </svg> </a> </div> </div> </header>` : renderTemplate`<header class="site-header"> <a href="/" class="site-logo">Rad Plants</a> <nav class="site-nav" aria-label="Main"> <a href="/#categories">Shop</a> <a href="/#featured">Featured</a> ${loggedIn ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a href="/profile">Profile</a> <form class="inline-form" method="post" action="/api/auth/logout"> <input type="hidden" name="returnTo" value="/"> <button type="submit" class="link-button">
Log out
</button> </form> ` })}` : renderTemplate`<a href="/login">Log in</a>`} </nav> </header>`} ${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/home/thunder/ecommerce-app-fuhrer/src/layouts/SiteLayout.astro", void 0);

export { $$SiteLayout as $ };
