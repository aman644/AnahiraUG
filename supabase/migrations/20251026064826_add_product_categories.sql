/*
  # Add Product Categories

  1. Categories
    - Creates initial product categories for:
      - Fluted Panels
      - PVC Panels
      - Wallpapers
      - Charcoal Louvers
      - Charcoal Panels
      - UV Sheets
  
  2. Details
    - Each category includes name, slug, description, and display order
    - Image URLs use placeholder stock photos from Pexels
    - Display order determines sorting in navigation and listings
*/

-- Insert Fluted Panels category
INSERT INTO categories (name, slug, description, image_url, display_order)
VALUES (
  'Fluted Panels',
  'fluted-panels',
  'Elegant three-dimensional textured wall panels perfect for accent walls, headboards, and feature areas. Available in wood veneer, painted, and textured finishes.',
  'https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg?auto=compress&cs=tinysrgb&w=800',
  1
) ON CONFLICT (slug) DO NOTHING;

-- Insert PVC Panels category
INSERT INTO categories (name, slug, description, image_url, display_order)
VALUES (
  'PVC Panels',
  'pvc-panels',
  '100% waterproof and mold-resistant panels ideal for bathrooms, kitchens, and high-humidity environments. Low maintenance and cost-effective.',
  'https://images.pexels.com/photos/6585607/pexels-photo-6585607.jpeg?auto=compress&cs=tinysrgb&w=800',
  2
) ON CONFLICT (slug) DO NOTHING;

-- Insert Wallpapers category
INSERT INTO categories (name, slug, description, image_url, display_order)
VALUES (
  'Wallpapers',
  'wallpapers',
  'Premium wallpapers featuring exclusive patterns and designs. Available in vinyl, fabric, and textured options with washable and fade-resistant finishes.',
  'https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=800',
  3
) ON CONFLICT (slug) DO NOTHING;

-- Insert Charcoal Louvers category
INSERT INTO categories (name, slug, description, image_url, display_order)
VALUES (
  'Charcoal Louvers',
  'charcoal-louvers',
  'Weather-resistant charcoal louvers with customizable spacing and orientation. Perfect for interior and exterior architectural applications with modern aesthetic.',
  'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
  4
) ON CONFLICT (slug) DO NOTHING;

-- Insert Charcoal Panels category
INSERT INTO categories (name, slug, description, image_url, display_order)
VALUES (
  'Charcoal Panels',
  'charcoal-panels',
  'Sophisticated charcoal-finished wall panels offering contemporary style and durability. Ideal for modern interiors requiring bold, dramatic statements.',
  'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
  5
) ON CONFLICT (slug) DO NOTHING;

-- Insert UV Sheets category
INSERT INTO categories (name, slug, description, image_url, display_order)
VALUES (
  'UV Sheets',
  'uv-sheets',
  'High-gloss UV-coated sheets with superior scratch resistance and easy maintenance. Perfect for furniture, cabinetry, and high-traffic applications.',
  'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
  6
) ON CONFLICT (slug) DO NOTHING;
