import type { SupabaseClient } from '@supabase/supabase-js';

export async function isSuperadminUser(
	supabase: SupabaseClient,
	userId: string,
): Promise<boolean> {
	const { data, error } = await supabase
		.from('user_profiles')
		.select('id')
		.eq('id', userId)
		.eq('user_type', 'superadmin')
		.maybeSingle();

	if (error) {
		return false;
	}
	return !!data;
}
