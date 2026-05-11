/// <reference types="astro/client" />

declare namespace App {
	interface Locals {
		user: import('@supabase/supabase-js').User | null;
		supabase: import('@supabase/supabase-js').SupabaseClient | null;
	}
}

type ImportMetaEnvAugmented = {
	readonly SUPABASE_URL: string;
	readonly SUPABASE_KEY: string;
};

interface ImportMetaEnv extends ImportMetaEnvAugmented {}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
