-- User profiles linked 1:1 to auth.users (Supabase Auth).
-- Promote a user to superadmin after they exist:
--   UPDATE public.user_profiles SET user_type = 'superadmin' WHERE id = '<user-uuid>';
--
-- Stripe: store customer / Connect account IDs here. 

-- ---------------------------------------------------------------------------
-- Types
-- ---------------------------------------------------------------------------

CREATE TYPE public.app_user_type AS ENUM (
  'customer',
  'admin',
  'superadmin'
);

COMMENT ON TYPE public.app_user_type IS 'Application role; set superadmin via SQL or admin tooling.';

-- ---------------------------------------------------------------------------
-- Table
-- ---------------------------------------------------------------------------

CREATE TABLE public.user_profiles (
  id uuid NOT NULL PRIMARY KEY REFERENCES auth.users (id) ON DELETE CASCADE,

  user_type public.app_user_type NOT NULL DEFAULT 'customer',

  display_name text,
  avatar_url text,
  phone text,

  address_line1 text,
  address_line2 text,
  city text,
  region text,
  postal_code text,
  country text,

  -- Stripe references (safe to persist). Never store secret_key / webhook secret here.
  stripe_customer_id text,
  stripe_connect_account_id text,
  -- stripe encrypted secrets
  stripe_secret_key text,
  stripe_publishable_key text,
  stripe_account_id text,




  -- Non-sensitive app-specific fields (preferences, UI state).
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,

  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

COMMENT ON TABLE public.user_profiles IS 'Extended profile and app role; FK to auth.users.';
COMMENT ON COLUMN public.user_profiles.stripe_customer_id IS 'Stripe Customer id (cus_...).';
COMMENT ON COLUMN public.user_profiles.stripe_connect_account_id IS 'Stripe Connect account id (acct_...), if applicable.';

CREATE INDEX user_profiles_user_type_idx ON public.user_profiles (user_type);

-- Keep updated_at in sync on row change
CREATE OR REPLACE FUNCTION public.set_user_profiles_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER user_profiles_set_updated_at
  BEFORE UPDATE ON public.user_profiles
  FOR EACH ROW
  EXECUTE PROCEDURE public.set_user_profiles_updated_at();

-- ---------------------------------------------------------------------------
-- Auto-create profile row when a new auth.users row is inserted
-- ---------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.user_profiles (id)
  VALUES (NEW.id);
  RETURN NEW;
END;
$$;

COMMENT ON FUNCTION public.handle_new_user IS 'Creates public.user_profiles row for new auth.users; runs as SECURITY DEFINER.';

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE PROCEDURE public.handle_new_user();

-- Existing accounts (created before this migration) need a profile row once.
INSERT INTO public.user_profiles (id)
SELECT u.id
FROM auth.users AS u
LEFT JOIN public.user_profiles AS p ON p.id = u.id
WHERE p.id IS NULL;

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------

ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- Read own profile
CREATE POLICY user_profiles_select_own
  ON public.user_profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Update own profile (adjust columns in app if you want to restrict which fields users may change)
CREATE POLICY user_profiles_update_own
  ON public.user_profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Inserts are expected from handle_new_user only; no INSERT policy for authenticated clients.
