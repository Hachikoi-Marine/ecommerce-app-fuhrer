import { c as createComponent } from './astro-component_BXrwO0Pw.mjs';
import { C as maybeRenderHead, V as renderTemplate, bd as defineScriptVars, a6 as addAttribute } from './sequence_BMZP2NkZ.mjs';
import { r as renderComponent } from './entrypoint_XJ_bjjkO.mjs';
import { $ as $$SiteLayout } from './SiteLayout_BImNkpBG.mjs';
import { e as exampleImages } from './example-images_D7Q-2RqB.mjs';

const $$StoreChromeFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="newsletter" class="section newsletter" aria-labelledby="newsletter-heading" data-astro-cid-ntujvoxe> <h2 id="newsletter-heading" class="font-serif newsletter-title" data-astro-cid-ntujvoxe>
Get 15% off your next order, subscribe to our newsletter
</h2> <div class="newsletter-form" role="group" aria-label="Newsletter signup" data-astro-cid-ntujvoxe> <label class="visually-hidden" for="store-newsletter-email" data-astro-cid-ntujvoxe>Email</label> <input id="store-newsletter-email" class="newsletter-input" type="email" name="email" placeholder="Enter your email here" autocomplete="email" data-astro-cid-ntujvoxe> <button type="button" class="btn btn-solid" data-astro-cid-ntujvoxe>Subscribe</button> </div> </section> <footer class="site-footer" data-astro-cid-ntujvoxe> <div class="footer-top" data-astro-cid-ntujvoxe> <p class="footer-brand font-serif" data-astro-cid-ntujvoxe>Rad Plants</p> <label class="currency-label" data-astro-cid-ntujvoxe> <span class="visually-hidden" data-astro-cid-ntujvoxe>Currency</span> <select class="currency-select" name="currency" aria-label="Currency" data-astro-cid-ntujvoxe> <option value="eur" selected data-astro-cid-ntujvoxe>EUR</option> <option value="usd" data-astro-cid-ntujvoxe>USD</option> <option value="gbp" data-astro-cid-ntujvoxe>GBP</option> </select> </label> </div> <div class="footer-columns" data-astro-cid-ntujvoxe> <div data-astro-cid-ntujvoxe> <h3 class="footer-heading" data-astro-cid-ntujvoxe>Connect</h3> <ul class="footer-list" data-astro-cid-ntujvoxe> <li data-astro-cid-ntujvoxe><a href="#" data-astro-cid-ntujvoxe>Instagram</a></li> <li data-astro-cid-ntujvoxe><a href="#" data-astro-cid-ntujvoxe>Facebook</a></li> <li data-astro-cid-ntujvoxe><a href="#" data-astro-cid-ntujvoxe>Pinterest</a></li> <li data-astro-cid-ntujvoxe><a href="#" data-astro-cid-ntujvoxe>YouTube</a></li> </ul> </div> <div data-astro-cid-ntujvoxe> <h3 class="footer-heading" data-astro-cid-ntujvoxe>Resources</h3> <ul class="footer-list" data-astro-cid-ntujvoxe> <li data-astro-cid-ntujvoxe><a href="#" data-astro-cid-ntujvoxe>Return policy</a></li> <li data-astro-cid-ntujvoxe><a href="#" data-astro-cid-ntujvoxe>Track an order</a></li> <li data-astro-cid-ntujvoxe><a href="#" data-astro-cid-ntujvoxe>FAQs</a></li> <li data-astro-cid-ntujvoxe><a href="#" data-astro-cid-ntujvoxe>Privacy policy</a></li> </ul> </div> <div data-astro-cid-ntujvoxe> <h3 class="footer-heading" data-astro-cid-ntujvoxe>About</h3> <ul class="footer-list" data-astro-cid-ntujvoxe> <li data-astro-cid-ntujvoxe><a href="#" data-astro-cid-ntujvoxe>Our story</a></li> <li data-astro-cid-ntujvoxe><a href="#" data-astro-cid-ntujvoxe>Careers</a></li> <li data-astro-cid-ntujvoxe><a href="#" data-astro-cid-ntujvoxe>Press</a></li> </ul> </div> </div> <p class="footer-credit" data-astro-cid-ntujvoxe>Designed by Slobodan Rad</p> </footer>`;
}, "/home/thunder/ecommerce-app-fuhrer/src/components/store/StoreChromeFooter.astro", void 0);

const p1 = exampleImages.product1;
const p2 = exampleImages.product2;
const p3a = exampleImages.product3a;
const p3b = exampleImages.product3b;
const catalogProducts = [
  {
    slug: "plant-1",
    title: "Plant 1",
    priceCents: 19e3,
    currencySuffix: "€",
    soldOut: false,
    stock: 12,
    imageMain: p1,
    thumbnails: [p1, p2, exampleImages.extraA],
    imageAlt: "Large leafy plant in a textured pot"
  },
  {
    slug: "plant-2",
    title: "Plant 2",
    priceCents: 5e3,
    currencySuffix: "€",
    soldOut: false,
    stock: 3,
    imageMain: p2,
    thumbnails: [p2, p1, exampleImages.extraB],
    imageAlt: "Two small plants in terracotta pots"
  },
  {
    slug: "plant-3",
    title: "Plant 3",
    priceCents: 5e3,
    currencySuffix: "€",
    soldOut: true,
    stock: 0,
    imageMain: p3a,
    thumbnails: [p3a, p3b, exampleImages.extraC],
    imageAlt: "Plant in a wooden pot"
  }
];
const productSlugs = catalogProducts.map((p) => p.slug);
function getProductBySlug(slug) {
  return catalogProducts.find((p) => p.slug === slug);
}
function formatPrice(product) {
  const whole = Math.floor(product.priceCents / 100);
  return `${whole}${product.currencySuffix}`;
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
function getStaticPaths() {
  return productSlugs.map((slug) => ({ params: { slug } }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const slug = Astro2.params.slug;
  const product = slug ? getProductBySlug(slug) : void 0;
  if (!product) {
    return Astro2.redirect("/");
  }
  const priceLabel = formatPrice(product);
  const thumbSources = product.thumbnails.length ? product.thumbnails : [product.imageMain];
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", "\n	const mainImg = document.getElementById('product-main-img');\n	const qtyValue = document.getElementById('qty-value');\n	const minus = document.getElementById('qty-minus');\n	const plus = document.getElementById('qty-plus');\n	const thumbButtons = document.querySelectorAll('.thumb-btn');\n\n	let qty = 1;\n	const cap = soldOut ? 1 : maxQty;\n\n	if (soldOut) {\n		if (minus) {\n			minus.disabled = true;\n		}\n		if (plus) {\n			plus.disabled = true;\n		}\n	}\n\n	function setQty(next) {\n		qty = Math.min(cap, Math.max(1, next));\n		if (qtyValue) {\n			qtyValue.textContent = String(qty);\n		}\n	}\n\n	function syncThumbActive(activeBtn) {\n		thumbButtons.forEach((btn) => {\n			btn.classList.toggle('is-active', btn === activeBtn);\n			btn.setAttribute('aria-pressed', btn === activeBtn ? 'true' : 'false');\n		});\n	}\n\n	thumbButtons.forEach((btn) => {\n		btn.addEventListener('click', () => {\n			const src = btn.getAttribute('data-src');\n			if (src && mainImg) {\n				mainImg.setAttribute('src', src);\n			}\n			syncThumbActive(btn);\n		});\n	});\n\n	minus?.addEventListener('click', () => {\n		if (!soldOut) {\n			setQty(qty - 1);\n		}\n	});\n	plus?.addEventListener('click', () => {\n		if (!soldOut) {\n			setQty(qty + 1);\n		}\n	});\n})();<\/script>"])), renderComponent($$result, "SiteLayout", $$SiteLayout, { "variant": "store", "title": `${product.title} — Rad Plants`, "data-astro-cid-o422f4lv": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="product-page" data-astro-cid-o422f4lv> <div class="product-inner" data-astro-cid-o422f4lv> <div class="product-gallery" data-astro-cid-o422f4lv> <div class="product-main-frame" data-astro-cid-o422f4lv> <img id="product-main-img" class="product-main-img"${addAttribute(product.imageMain, "src")}${addAttribute(product.imageAlt, "alt")} width="900" height="1120" data-astro-cid-o422f4lv> </div> <div class="product-thumbs" role="tablist" aria-label="Product images" data-astro-cid-o422f4lv> ${thumbSources.map((src, i) => renderTemplate`<button type="button"${addAttribute(["thumb-btn", { "is-active": i === 0 }], "class:list")}${addAttribute(src, "data-src")}${addAttribute(`View image ${i + 1}`, "aria-label")}${addAttribute(i === 0 ? "true" : "false", "aria-pressed")} data-astro-cid-o422f4lv> <img${addAttribute(src, "src")} alt="" width="200" height="200" loading="lazy" data-astro-cid-o422f4lv> </button>`)} </div> </div> <div class="product-info" data-astro-cid-o422f4lv> ${product.soldOut && renderTemplate`<span class="stock-badge" data-astro-cid-o422f4lv>Sold out</span>`} <h1 class="product-title font-serif" data-astro-cid-o422f4lv>${product.title}</h1> <p class="product-price font-serif" data-astro-cid-o422f4lv>${priceLabel}</p> <div class="qty-block" data-astro-cid-o422f4lv> <span class="qty-label" data-astro-cid-o422f4lv>Quantity</span> <div class="qty-control" data-astro-cid-o422f4lv> <button type="button" class="qty-btn" id="qty-minus" aria-label="Decrease quantity" data-astro-cid-o422f4lv>
−
</button> <span class="qty-value" id="qty-value" data-astro-cid-o422f4lv>1</span> <button type="button" class="qty-btn" id="qty-plus" aria-label="Increase quantity" data-astro-cid-o422f4lv>
+
</button> </div> </div> <button type="button" class="btn-add-cart" id="add-to-cart"${addAttribute(product.soldOut, "disabled")} data-astro-cid-o422f4lv>
Add to cart
</button> </div> </div> </main> ${renderComponent($$result2, "StoreChromeFooter", $$StoreChromeFooter, { "data-astro-cid-o422f4lv": true })} ` }), defineScriptVars({ soldOut: product.soldOut, maxQty: Math.max(1, product.stock) }));
}, "/home/thunder/ecommerce-app-fuhrer/src/pages/products/[slug].astro", void 0);

const $$file = "/home/thunder/ecommerce-app-fuhrer/src/pages/products/[slug].astro";
const $$url = "/products/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
