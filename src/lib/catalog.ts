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

const p1 =
	'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80';
const p2 =
	'https://images.unsplash.com/photo-1545241047-6083a8f593db?auto=format&fit=crop&w=900&q=80';
const p3a =
	'https://images.unsplash.com/photo-1466698058961-a35f575a815c?auto=format&fit=crop&w=900&q=80';
const p3b =
	'https://images.unsplash.com/photo-1509423350716-97b936e769bf?auto=format&fit=crop&w=600&q=80';
const p3c =
	'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=600&q=80';

export const catalogProducts: CatalogProduct[] = [
	{
		slug: 'plant-1',
		title: 'Plant 1',
		priceCents: 19000,
		currencySuffix: '€',
		soldOut: false,
		stock: 12,
		imageMain: p1,
		thumbnails: [p1, p2, p3a],
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
		thumbnails: [p2, p1, p3b],
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
		thumbnails: [p3a, p3b, p3c],
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
