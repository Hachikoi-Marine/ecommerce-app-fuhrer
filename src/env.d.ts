/// <reference types="astro/client" />

import type { SupabaseClient, User } from '@supabase/supabase-js';

declare namespace App {
	interface Locals {
		user: User | null;
		supabase: SupabaseClient | null;
	}
}

type ImportMetaEnvAugmented = {
	readonly SUPABASE_URL: string;
	readonly SUPABASE_KEY: string;
	readonly SUPERADMIN_EMAIL?: string;
};

interface ImportMetaEnv extends ImportMetaEnvAugmented {}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
