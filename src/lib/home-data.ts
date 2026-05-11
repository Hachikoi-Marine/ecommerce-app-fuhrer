import type { SupabaseClient } from '@supabase/supabase-js';
import { exampleImages } from './example-images';

/** Hardcoded storefront hero (main image above the fold). */
export const HOME_HERO_IMAGE_URL =
	'https://res.cloudinary.com/dfixfnldt/image/upload/v1778474309/qqcwdxvezqmoygzm0uyb.jpg';

const FALLBACK_IMAGE = exampleImages.product1;

export type HomeCategoryCard = {
	slug: string;
	title: string;
	description: string | null;
	imageUrl: string;
	imageAlt: string;
	href: string;
};

export type HomeFeaturedCard = {
	slug: string;
	title: string;
	priceLabel: string;
	imageUrl: string;
	imageAlt: string;
	href: string;
	soldOut: boolean;
	limitBadge: boolean;
};

export type HomePagePayload = {
	categories: HomeCategoryCard[];
	featuredProducts: HomeFeaturedCard[];
};

export type ProductCardQueryRow = {
	slug: string;
	title: string;
	price: string | number;
	is_available: boolean;
	tags: unknown;
	categories: { cover_image: string | null } | { cover_image: string | null }[] | null;
};

export function pickCategoryCover(
	row: { categories: { cover_image: string | null } | { cover_image: string | null }[] | null } | null,
): string | null {
	const c = row?.categories;
	if (!c) return null;
	const one = Array.isArray(c) ? c[0] : c;
	return one?.cover_image ?? null;
}

export function formatEur(price: string | number): string {
	const n = typeof price === 'string' ? parseFloat(price) : Number(price);
	if (!Number.isFinite(n)) return '—';
	const rounded = Math.round(n * 100) / 100;
	const text = Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(2);
	return `${text}€`;
}

export function tagsIncludeLimited(tags: string[] | null | undefined): boolean {
	if (!tags?.length) return false;
	return tags.some((t) => t.toLowerCase().includes('limited'));
}

export function mapDbProductToFeaturedCard(p: ProductCardQueryRow): HomeFeaturedCard {
	const cover = pickCategoryCover(p);
	const imageUrl = cover?.trim() || FALLBACK_IMAGE;
	const tags = Array.isArray(p.tags) ? p.tags : [];
	return {
		slug: p.slug,
		title: p.title,
		priceLabel: formatEur(p.price),
		imageUrl,
		imageAlt: p.title,
		href: `/products/${p.slug}`,
		soldOut: !p.is_available,
		limitBadge: tagsIncludeLimited(tags),
	};
}

export async function fetchHomePageData(supabase: SupabaseClient): Promise<HomePagePayload> {
	const { data: rawCategories, error: catErr } = await supabase
		.from('categories')
		.select('slug, title, description, cover_image')
		.eq('is_active', true)
		.order('title', { ascending: true });

	const categories: HomeCategoryCard[] =
		!catErr && rawCategories
			? rawCategories.map((c) => {
					const imageUrl = c.cover_image?.trim() || FALLBACK_IMAGE;
					return {
						slug: c.slug,
						title: c.title,
						description: c.description,
						imageUrl,
						imageAlt: c.title,
						href: `/categories/${c.slug}`,
					};
				})
			: [];

	const productSelect =
		'slug, title, price, is_available, is_featured, tags, categories ( cover_image )';

	let { data: featuredRows, error: featErr } = await supabase
		.from('products')
		.select(productSelect)
		.eq('is_active', true)
		.eq('is_featured', true)
		.order('created_at', { ascending: false })
		.limit(8);

	if (featErr || !featuredRows?.length) {
		const { data: fallback } = await supabase
			.from('products')
			.select(productSelect)
			.eq('is_active', true)
			.order('created_at', { ascending: false })
			.limit(8);
		featuredRows = fallback ?? [];
	}

	const featuredProducts: HomeFeaturedCard[] = (featuredRows ?? []).map((p) =>
		mapDbProductToFeaturedCard(p as ProductCardQueryRow),
	);

	return { categories, featuredProducts };
}
