import type { SupabaseClient } from '@supabase/supabase-js';
import type { CatalogProduct } from './catalog';
import { exampleImages } from './example-images';

const FALLBACK_IMAGE = exampleImages.product1;

function pickCategoryCover(
	row: { categories: { cover_image: string | null } | { cover_image: string | null }[] | null } | null,
): string | null {
	const c = row?.categories;
	if (!c) return null;
	const one = Array.isArray(c) ? c[0] : c;
	return one?.cover_image ?? null;
}

export async function getDbProductAsCatalog(
	supabase: SupabaseClient,
	slug: string,
): Promise<CatalogProduct | undefined> {
	const { data, error } = await supabase
		.from('products')
		.select('title, slug, price, is_available, description, categories ( cover_image )')
		.eq('slug', slug)
		.eq('is_active', true)
		.maybeSingle();

	if (error || !data) {
		return undefined;
	}

	const priceNum = typeof data.price === 'string' ? parseFloat(data.price) : Number(data.price);
	const cents = Number.isFinite(priceNum) ? Math.round(priceNum * 100) : 0;
	const cover = pickCategoryCover(data);
	const imageMain = cover?.trim() || FALLBACK_IMAGE;

	return {
		slug: data.slug,
		title: data.title,
		priceCents: cents,
		currencySuffix: '€',
		soldOut: !data.is_available,
		stock: data.is_available ? 99 : 0,
		imageMain,
		thumbnails: [imageMain],
		imageAlt: data.title,
	};
}
