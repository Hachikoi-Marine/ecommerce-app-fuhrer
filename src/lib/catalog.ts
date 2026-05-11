import { exampleImages } from './example-images';

export type CatalogProduct = {
	slug: string;
	title: string;
	priceCents: number;
	currencySuffix: string;
	soldOut: boolean;
	stock: number;
	imageMain: string;
	thumbnails: string[];
	imageAlt: string;
};

const p1 = exampleImages.product1;
const p2 = exampleImages.product2;
const p3a = exampleImages.product3a;
const p3b = exampleImages.product3b;

export const catalogProducts: CatalogProduct[] = [
	{
		slug: 'serpent-necklace',
		title: 'Serpent necklace',
		priceCents: 19000,
		currencySuffix: '€',
		soldOut: false,
		stock: 12,
		imageMain: p1,
		thumbnails: [p1, p2, exampleImages.extraA],
		imageAlt: 'Gold serpent necklace on a dark display surface',
	},
	{
		slug: 'stacked-rings',
		title: 'Stacked signet rings',
		priceCents: 5000,
		currencySuffix: '€',
		soldOut: false,
		stock: 3,
		imageMain: p2,
		thumbnails: [p2, p1, exampleImages.extraB],
		imageAlt: 'Two stacked signet rings on a neutral backdrop',
	},
	{
		slug: 'heritage-cuff',
		title: 'Heritage cuff',
		priceCents: 5000,
		currencySuffix: '€',
		soldOut: true,
		stock: 0,
		imageMain: p3a,
		thumbnails: [p3a, p3b, exampleImages.extraC],
		imageAlt: 'Wide metal cuff bracelet with a brushed finish',
	},
];

export const productSlugs = catalogProducts.map((p) => p.slug);

export function getProductBySlug(slug: string): CatalogProduct | undefined {
	return catalogProducts.find((p) => p.slug === slug);
}

export function formatPrice(product: CatalogProduct): string {
	const whole = Math.floor(product.priceCents / 100);
	return `${whole}${product.currencySuffix}`;
}
