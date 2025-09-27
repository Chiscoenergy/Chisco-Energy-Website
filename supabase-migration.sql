-- Create products table
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  description TEXT,
  price INTEGER NOT NULL, -- Price in Naira (stored as integer for precision)
  images TEXT[] DEFAULT '{}', -- Array of image URLs from Supabase Storage
  sku TEXT,
  pack_size TEXT, -- e.g., "20L", "210L", "5L"
  availability TEXT DEFAULT 'in-stock' CHECK (availability IN ('in-stock', 'out-of-stock', 'pre-order')),
  tags TEXT[] DEFAULT '{}', -- Array of product tags
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_products_updated_at 
  BEFORE UPDATE ON products 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Policy: Allow everyone to read products (for public website)
CREATE POLICY "Products are viewable by everyone" ON products
  FOR SELECT USING (true);

-- Policy: Only authenticated users can insert/update/delete (for admin)
CREATE POLICY "Admin can manage products" ON products
  FOR ALL USING (auth.role() = 'authenticated');

-- Create indexes for better performance
CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_products_availability ON products(availability);
CREATE INDEX idx_products_tags ON products USING GIN(tags);
CREATE INDEX idx_products_created_at ON products(created_at DESC);

-- Insert sample data
INSERT INTO products (slug, title, excerpt, price, pack_size, availability, tags) VALUES
('automotive-gas-oil-ago-20l', 'Automotive Gas Oil (AGO) - 20L', 'High-quality diesel fuel for automotive and industrial use.', 1500000, '20L', 'in-stock', '{"diesel", "fuel", "automotive"}'),
('diesel-fuel-210l', 'Diesel Fuel - 210L', 'Bulk diesel fuel for industrial and commercial applications.', 7500000, '210L', 'in-stock', '{"diesel", "bulk", "industrial"}'),
('engine-lubricants-5l', 'Engine Lubricants - 5L', 'Premium engine oil for optimal performance and protection.', 800000, '5L', 'in-stock', '{"lubricants", "engine-oil"}'),
('premium-motor-spirit-pms-petrol-20l', 'Premium Motor Spirit (PMS) Petrol - 20L', 'High-quality petrol for vehicles and generators.', 1400000, '20L', 'in-stock', '{"petrol", "fuel", "automotive"}'),
('kerosene-20l', 'Kerosene - 20L', 'Clean-burning kerosene for household and commercial use.', 1200000, '20L', 'in-stock', '{"kerosene", "fuel", "household"}'),
('cooking-gas-lpg-12-5kg', 'Cooking Gas (LPG) - 12.5kg', 'Clean cooking gas for homes and restaurants.', 750000, '12.5kg', 'in-stock', '{"lpg", "cooking-gas", "household"}');