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
const p3c = exampleImages.product3c;

export const catalogProducts: CatalogProduct[] = [
	{
		slug: 'plant-1',
		title: 'Plant 1',
		priceCents: 19000,
		currencySuffix: '€',
		soldOut: false,
		stock: 12,
		imageMain: p1,
		thumbnails: [p1, p2, exampleImages.extraA],
		imageAlt: 'Large leafy plant in a textured pot',
	},
	{
		slug: 'plant-2',
		title: 'Plant 2',
		priceCents: 5000,
		currencySuffix: '€',
		soldOut: false,
		stock: 3,
		imageMain: p2,
		thumbnails: [p2, p1, exampleImages.extraB],
		imageAlt: 'Two small plants in terracotta pots',
	},
	{
		slug: 'plant-3',
		title: 'Plant 3',
		priceCents: 5000,
		currencySuffix: '€',
		soldOut: true,
		stock: 0,
		imageMain: p3a,
		thumbnails: [p3a, p3b, exampleImages.extraC],
		imageAlt: 'Plant in a wooden pot',
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
