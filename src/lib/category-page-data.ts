import type { SupabaseClient } from '@supabase/supabase-js';
import { mapDbProductToFeaturedCard, type HomeFeaturedCard, type ProductCardQueryRow } from './home-data';

export type CategoryPagePayload = {
	title: string;
	slug: string;
	description: string | null;
	products: HomeFeaturedCard[];
};

export async function fetchCategoryPageData(
	supabase: SupabaseClient,
	slug: string,
): Promise<CategoryPagePayload | null> {
	const { data: cat, error: catErr } = await supabase
		.from('categories')
		.select('id, title, description, slug')
		.eq('slug', slug)
		.eq('is_active', true)
		.maybeSingle();

	if (catErr || !cat) {
		return null;
	}

	const { data: rows, error: prodErr } = await supabase
		.from('products')
		.select('slug, title, price, is_available, tags, categories ( cover_image )')
		.eq('category_id', cat.id)
		.eq('is_active', true)
		.order('created_at', { ascending: false });

	if (prodErr) {
		return {
			title: cat.title,
			slug: cat.slug,
			description: cat.description,
			products: [],
		};
	}

	const products = (rows ?? []).map((p) => mapDbProductToFeaturedCard(p as ProductCardQueryRow));

	return {
		title: cat.title,
		slug: cat.slug,
		description: cat.description,
		products,
	};
}
