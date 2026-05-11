-- Catalog: categories, reusable offers, products.
--
-- - **categories**: browse/filter taxonomy for products.
-- - **offers**: global promotions (no category FK); many products can reference the same offer via offer_id.
-- - **products**: category_id required; offer_id optional (same offer row reused across products).
-- - **tags** is `text[]` in Postgres (array of strings).
-- - **price** uses numeric(12,2) to avoid floating-point money bugs.

-- ---------------------------------------------------------------------------
-- Tables (order: categories, offers, products)
-- ---------------------------------------------------------------------------

CREATE TABLE public.categories (
  id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),

  title text NOT NULL,
  description text,
  slug text NOT NULL,
  is_active boolean NOT NULL DEFAULT true,
  cover_image text,

  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()

);

COMMENT ON TABLE public.categories IS 'Product taxonomy (browse/filter).';

CREATE TYPE public.offer_discount_type AS ENUM ('percentage', 'fixed');

CREATE TABLE public.offers (
  id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),

  title text NOT NULL,
  description text,
  active_days_mask bit(7) DEFAULT '1111111'::bit(7),
  discount_type public.offer_discount_type NOT NULL DEFAULT 'percentage',
  discount_value numeric(12, 2) NOT NULL CHECK (discount_value >= 0),

  starts_at timestamptz NOT NULL,
  ends_at timestamptz NOT NULL,
  is_active boolean NOT NULL DEFAULT true,

  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),

  CONSTRAINT offers_window_valid CHECK (
    ends_at > starts_at
  )
);

COMMENT ON TABLE public.offers IS 'Promotions or sale windows; optional link from products.';

CREATE INDEX offers_active_window_idx ON public.offers (is_active, starts_at, ends_at);

CREATE TABLE public.products (
  id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),

  category_id uuid NOT NULL REFERENCES public.categories (id) ON DELETE RESTRICT,
  offer_id uuid REFERENCES public.offers (id) ON DELETE SET NULL,

  title text NOT NULL,
  description text,
  price numeric(12, 2) NOT NULL CHECK (price >= 0),
  is_active boolean NOT NULL DEFAULT true,
  is_available boolean NOT NULL DEFAULT true,
  is_featured boolean NOT NULL DEFAULT false,
  tags text[] NOT NULL DEFAULT '{}'::text[],
  slug text NOT NULL,

  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

COMMENT ON TABLE public.products IS 'Sellable items; optional offer for promotional context.';
COMMENT ON COLUMN public.products.tags IS 'String array (e.g. labels, materials, search helpers).';

CREATE INDEX products_category_id_idx ON public.products (category_id);
CREATE INDEX products_offer_id_idx ON public.products (offer_id);

-- ---------------------------------------------------------------------------
-- updated_at triggers (same pattern as user_profiles)
-- ---------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION public.set_catalog_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER categories_set_updated_at
  BEFORE UPDATE ON public.categories
  FOR EACH ROW
  EXECUTE PROCEDURE public.set_catalog_updated_at();

CREATE TRIGGER offers_set_updated_at
  BEFORE UPDATE ON public.offers
  FOR EACH ROW
  EXECUTE PROCEDURE public.set_catalog_updated_at();

CREATE TRIGGER products_set_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW
  EXECUTE PROCEDURE public.set_catalog_updated_at();

-- ---------------------------------------------------------------------------
-- Row Level Security — public read, admin/superadmin writes
-- ---------------------------------------------------------------------------

ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.offers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

CREATE POLICY categories_select_public
  ON public.categories
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY offers_select_public
  ON public.offers
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY products_select_public
  ON public.products
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY categories_write_admin
  ON public.categories
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1
      FROM public.user_profiles AS p
      WHERE p.id = auth.uid()
        AND p.user_type IN ('admin', 'superadmin')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1
      FROM public.user_profiles AS p
      WHERE p.id = auth.uid()
        AND p.user_type IN ('admin', 'superadmin')
    )
  );

CREATE POLICY offers_write_admin
  ON public.offers
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1
      FROM public.user_profiles AS p
      WHERE p.id = auth.uid()
        AND p.user_type IN ('admin', 'superadmin')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1
      FROM public.user_profiles AS p
      WHERE p.id = auth.uid()
        AND p.user_type IN ('admin', 'superadmin')
    )
  );

CREATE POLICY products_write_admin
  ON public.products
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1
      FROM public.user_profiles AS p
      WHERE p.id = auth.uid()
        AND p.user_type IN ('admin', 'superadmin')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1
      FROM public.user_profiles AS p
      WHERE p.id = auth.uid()
        AND p.user_type IN ('admin', 'superadmin')
    )
  );
