/*
  # Add Sample Products (Fixed)

  1. Products
    - Adds sample products for each category:
      - Fluted Panels (4 products)
      - PVC Panels (4 products)
      - Wallpapers (4 products)
      - Charcoal Louvers (3 products)
      - Charcoal Panels (3 products)
      - UV Sheets (4 products)
  
  2. Details
    - Each product includes realistic specifications
    - Some products marked as featured for homepage display
    - Includes product images with stock photos
    - Pricing for both retail and trade customers
*/

-- Fluted Panels Products
DO $$
DECLARE
  v_category_id uuid;
  v_product_id uuid;
BEGIN
  SELECT id INTO v_category_id FROM categories WHERE slug = 'fluted-panels';
  
  INSERT INTO products (name, slug, description, short_description, category_id, sku, retail_price, trade_price, material, dimensions, color, finish, stock_status, is_featured)
  VALUES (
    'Oak Wood Fluted Panel',
    'oak-wood-fluted-panel',
    'Premium oak veneer fluted panels featuring natural wood grain and vertical grooves. Perfect for creating sophisticated accent walls in living rooms, bedrooms, and commercial spaces. Easy to install with hidden mounting system.',
    'Premium oak veneer with natural wood grain and vertical grooves',
    v_category_id,
    'FP-OAK-001',
    189.99,
    149.99,
    'Oak Veneer on MDF Core',
    '96 inch H x 48 inch W x 0.75 inch D',
    'Natural Oak',
    'Matte Lacquer',
    'in_stock',
    true
  ) RETURNING id INTO v_product_id;
  
  INSERT INTO product_images (product_id, image_url, alt_text, display_order, is_primary)
  VALUES 
    (v_product_id, 'https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg', 'Oak Wood Fluted Panel', 0, true),
    (v_product_id, 'https://images.pexels.com/photos/6585765/pexels-photo-6585765.jpeg', 'Oak Panel Close-up', 1, false);
  
  INSERT INTO products (name, slug, description, short_description, category_id, sku, retail_price, trade_price, material, dimensions, color, finish, stock_status, is_featured)
  VALUES (
    'Walnut Fluted Panel',
    'walnut-fluted-panel',
    'Rich walnut veneer fluted panels with deep, warm tones. Adds luxury and depth to any interior. Acoustic properties help dampen sound while creating visual interest.',
    'Rich walnut veneer with deep, warm tones',
    v_category_id,
    'FP-WAL-001',
    219.99,
    175.99,
    'Walnut Veneer on MDF Core',
    '96 inch H x 48 inch W x 0.75 inch D',
    'Dark Walnut',
    'Satin Finish',
    'in_stock',
    true
  ) RETURNING id INTO v_product_id;
  
  INSERT INTO product_images (product_id, image_url, alt_text, display_order, is_primary)
  VALUES 
    (v_product_id, 'https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg', 'Walnut Fluted Panel', 0, true);
  
  INSERT INTO products (name, slug, description, short_description, category_id, sku, retail_price, trade_price, material, dimensions, color, finish, stock_status, is_featured)
  VALUES (
    'White Painted Fluted Panel',
    'white-painted-fluted-panel',
    'Clean and contemporary white painted fluted panels. Perfect for modern and minimalist interiors. UV-resistant paint ensures long-lasting color.',
    'Clean white painted panels for modern interiors',
    v_category_id,
    'FP-WHT-001',
    159.99,
    127.99,
    'Painted MDF',
    '96 inch H x 48 inch W x 0.75 inch D',
    'Pure White',
    'Matte Paint',
    'in_stock',
    false
  ) RETURNING id INTO v_product_id;
  
  INSERT INTO product_images (product_id, image_url, alt_text, display_order, is_primary)
  VALUES 
    (v_product_id, 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg', 'White Painted Fluted Panel', 0, true);
  
  INSERT INTO products (name, slug, description, short_description, category_id, sku, retail_price, trade_price, material, dimensions, color, finish, stock_status, is_featured)
  VALUES (
    'Black Textured Fluted Panel',
    'black-textured-fluted-panel',
    'Bold black textured fluted panels create dramatic statement walls. The deep grooves and matte finish add sophistication to contemporary spaces.',
    'Bold black textured panels for dramatic statements',
    v_category_id,
    'FP-BLK-001',
    169.99,
    135.99,
    'Textured MDF',
    '96 inch H x 48 inch W x 0.75 inch D',
    'Matte Black',
    'Textured Matte',
    'in_stock',
    false
  ) RETURNING id INTO v_product_id;
  
  INSERT INTO product_images (product_id, image_url, alt_text, display_order, is_primary)
  VALUES 
    (v_product_id, 'https://images.pexels.com/photos/6969832/pexels-photo-6969832.jpeg', 'Black Textured Fluted Panel', 0, true);
END $$;

-- PVC Panels Products
DO $$
DECLARE
  v_category_id uuid;
  v_product_id uuid;
BEGIN
  SELECT id INTO v_category_id FROM categories WHERE slug = 'pvc-panels';
  
  INSERT INTO products (name, slug, description, short_description, category_id, sku, retail_price, trade_price, material, dimensions, color, finish, stock_status, is_featured)
  VALUES (
    'Marble Effect PVC Panel',
    'marble-effect-pvc-panel',
    '100% waterproof PVC panels with realistic marble effect. Perfect for bathrooms, kitchens, and wet areas. Easy to clean and maintain. No grout lines or sealing required.',
    '100% waterproof with realistic marble effect',
    v_category_id,
    'PVC-MAR-001',
    79.99,
    63.99,
    '100% Virgin PVC',
    '96 inch H x 48 inch W x 0.25 inch D',
    'White Marble',
    'High Gloss',
    'in_stock',
    true
  ) RETURNING id INTO v_product_id;
  
  INSERT INTO product_images (product_id, image_url, alt_text, display_order, is_primary)
  VALUES 
    (v_product_id, 'https://images.pexels.com/photos/6585607/pexels-photo-6585607.jpeg', 'Marble Effect PVC Panel', 0, true);
  
  INSERT INTO products (name, slug, description, short_description, category_id, sku, retail_price, trade_price, material, dimensions, color, finish, stock_status, is_featured)
  VALUES (
    'Wood Grain PVC Panel',
    'wood-grain-pvc-panel',
    'PVC panels with authentic wood grain texture. Combines the beauty of wood with waterproof durability. Ideal for moisture-prone areas where wood cannot be used.',
    'Authentic wood grain texture with waterproof durability',
    v_category_id,
    'PVC-WOD-001',
    69.99,
    55.99,
    '100% Virgin PVC',
    '96 inch H x 48 inch W x 0.25 inch D',
    'Oak Wood Grain',
    'Matte Texture',
    'in_stock',
    false
  ) RETURNING id INTO v_product_id;
  
  INSERT INTO product_images (product_id, image_url, alt_text, display_order, is_primary)
  VALUES 
    (v_product_id, 'https://images.pexels.com/photos/7061662/pexels-photo-7061662.jpeg', 'Wood Grain PVC Panel', 0, true);
  
  INSERT INTO products (name, slug, description, short_description, category_id, sku, retail_price, trade_price, material, dimensions, color, finish, stock_status, is_featured)
  VALUES (
    'Glossy White PVC Panel',
    'glossy-white-pvc-panel',
    'High-gloss white PVC panels create a bright, clean look. Perfect for small bathrooms to maximize light reflection. Mold and mildew resistant.',
    'High-gloss white for bright, clean spaces',
    v_category_id,
    'PVC-WHT-001',
    59.99,
    47.99,
    '100% Virgin PVC',
    '96 inch H x 48 inch W x 0.25 inch D',
    'Pure White',
    'High Gloss',
    'in_stock',
    false
  ) RETURNING id INTO v_product_id;
  
  INSERT INTO product_images (product_id, image_url, alt_text, display_order, is_primary)
  VALUES 
    (v_product_id, 'https://images.pexels.com/photos/6969844/pexels-photo-6969844.jpeg', 'Glossy White PVC Panel', 0, true);
  
  INSERT INTO products (name, slug, description, short_description, category_id, sku, retail_price, trade_price, material, dimensions, color, finish, stock_status, is_featured)
  VALUES (
    'Stone Effect PVC Panel',
    'stone-effect-pvc-panel',
    'Textured PVC panels with natural stone appearance. Adds rustic charm without the weight and cost of real stone. Easy installation with interlocking system.',
    'Textured natural stone appearance, lightweight',
    v_category_id,
    'PVC-STN-001',
    84.99,
    67.99,
    '100% Virgin PVC',
    '96 inch H x 48 inch W x 0.25 inch D',
    'Grey Stone',
    'Textured Matte',
    'in_stock',
    true
  ) RETURNING id INTO v_product_id;
  
  INSERT INTO product_images (product_id, image_url, alt_text, display_order, is_primary)
  VALUES 
    (v_product_id, 'https://images.pexels.com/photos/6969850/pexels-photo-6969850.jpeg', 'Stone Effect PVC Panel', 0, true);
END $$;

-- Wallpapers Products
DO $$
DECLARE
  v_category_id uuid;
  v_product_id uuid;
BEGIN
  SELECT id INTO v_category_id FROM categories WHERE slug = 'wallpapers';
  
  INSERT INTO products (name, slug, description, short_description, category_id, sku, retail_price, trade_price, material, dimensions, color, finish, stock_status, is_featured)
  VALUES (
    'Geometric Modern Wallpaper',
    'geometric-modern-wallpaper',
    'Contemporary geometric pattern wallpaper with metallic accents. Washable vinyl surface perfect for high-traffic areas. Available in multiple colorways.',
    'Contemporary geometric pattern with metallic accents',
    v_category_id,
    'WP-GEO-001',
    129.99,
    103.99,
    'Vinyl on Non-Woven Backing',
    '33 ft L x 21 inch W (Roll)',
    'Gold and White',
    'Matte with Metallic',
    'in_stock',
    true
  ) RETURNING id INTO v_product_id;
  
  INSERT INTO product_images (product_id, image_url, alt_text, display_order, is_primary)
  VALUES 
    (v_product_id, 'https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg', 'Geometric Modern Wallpaper', 0, true);
  
  INSERT INTO products (name, slug, description, short_description, category_id, sku, retail_price, trade_price, material, dimensions, color, finish, stock_status, is_featured)
  VALUES (
    'Botanical Tropical Wallpaper',
    'botanical-tropical-wallpaper',
    'Lush tropical leaf pattern brings nature indoors. Printed on premium fabric backing for superior durability. Fade-resistant inks maintain vibrant colors.',
    'Lush tropical leaf pattern, fade-resistant',
    v_category_id,
    'WP-BOT-001',
    149.99,
    119.99,
    'Fabric Backed Vinyl',
    '33 ft L x 21 inch W (Roll)',
    'Green Multi',
    'Matte',
    'in_stock',
    true
  ) RETURNING id INTO v_product_id;
  
  INSERT INTO product_images (product_id, image_url, alt_text, display_order, is_primary)
  VALUES 
    (v_product_id, 'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg', 'Botanical Tropical Wallpaper', 0, true);
  
  INSERT INTO products (name, slug, description, short_description, category_id, sku, retail_price, trade_price, material, dimensions, color, finish, stock_status, is_featured)
  VALUES (
    'Classic Damask Wallpaper',
    'classic-damask-wallpaper',
    'Timeless damask pattern with subtle texture. Perfect for traditional and transitional interiors. Premium quality with excellent coverage.',
    'Timeless damask pattern with subtle texture',
    v_category_id,
    'WP-DAM-001',
    119.99,
    95.99,
    'Vinyl on Paper Backing',
    '33 ft L x 21 inch W (Roll)',
    'Champagne',
    'Textured Matte',
    'in_stock',
    false
  ) RETURNING id INTO v_product_id;
  
  INSERT INTO product_images (product_id, image_url, alt_text, display_order, is_primary)
  VALUES 
    (v_product_id, 'https://images.pexels.com/photos/6969848/pexels-photo-6969848.jpeg', 'Classic Damask Wallpaper', 0, true);
  
  INSERT INTO products (name, slug, description, short_description, category_id, sku, retail_price, trade_price, material, dimensions, color, finish, stock_status, is_featured)
  VALUES (
    'Industrial Brick Wallpaper',
    'industrial-brick-wallpaper',
    'Realistic brick texture wallpaper for urban industrial style. 3D embossed surface creates authentic depth. Water-resistant for easy maintenance.',
    'Realistic 3D embossed brick texture',
    v_category_id,
    'WP-BRK-001',
    99.99,
    79.99,
    '3D Embossed Vinyl',
    '33 ft L x 21 inch W (Roll)',
    'Red Brick',
    '3D Textured',
    'in_stock',
    false
  ) RETURNING id INTO v_product_id;
  
  INSERT INTO product_images (product_id, image_url, alt_text, display_order, is_primary)
  VALUES 
    (v_product_id, 'https://images.pexels.com/photos/6969846/pexels-photo-6969846.jpeg', 'Industrial Brick Wallpaper', 0, true);
END $$;

-- Charcoal Louvers Products
DO $$
DECLARE
  v_category_id uuid;
  v_product_id uuid;
BEGIN
  SELECT id INTO v_category_id FROM categories WHERE slug = 'charcoal-louvers';
  
  INSERT INTO products (name, slug, description, short_description, category_id, sku, retail_price, trade_price, material, dimensions, color, finish, stock_status, is_featured)
  VALUES (
    'Fixed Blade Charcoal Louver',
    'fixed-blade-charcoal-louver',
    'Weather-resistant fixed blade louvers with powder-coated charcoal finish. Perfect for architectural screening and privacy. Suitable for interior and exterior use.',
    'Weather-resistant fixed blade louvers',
    v_category_id,
    'CL-FIX-001',
    299.99,
    239.99,
    'Aluminum Powder Coated',
    '96 inch H x 48 inch W',
    'Charcoal Grey',
    'Powder Coat Matte',
    'in_stock',
    true
  ) RETURNING id INTO v_product_id;
  
  INSERT INTO product_images (product_id, image_url, alt_text, display_order, is_primary)
  VALUES 
    (v_product_id, 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg', 'Fixed Blade Charcoal Louver', 0, true);
  
  INSERT INTO products (name, slug, description, short_description, category_id, sku, retail_price, trade_price, material, dimensions, color, finish, stock_status, is_featured, lead_time_days)
  VALUES (
    'Adjustable Charcoal Louver System',
    'adjustable-charcoal-louver',
    'Operable louver system with adjustable blades for ventilation control. Heavy-duty construction for commercial and residential applications. Custom sizes available.',
    'Operable louver with adjustable blades',
    v_category_id,
    'CL-ADJ-001',
    449.99,
    359.99,
    'Aluminum Powder Coated',
    '96 inch H x 48 inch W',
    'Charcoal Grey',
    'Powder Coat Matte',
    'made_to_order',
    true,
    14
  ) RETURNING id INTO v_product_id;
  
  INSERT INTO product_images (product_id, image_url, alt_text, display_order, is_primary)
  VALUES 
    (v_product_id, 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg', 'Adjustable Charcoal Louver', 0, true);
  
  INSERT INTO products (name, slug, description, short_description, category_id, sku, retail_price, trade_price, material, dimensions, color, finish, stock_status, is_featured)
  VALUES (
    'Decorative Charcoal Louver Screen',
    'decorative-charcoal-louver',
    'Decorative louver screening for room dividers and accent walls. Lightweight yet durable design. Easy to install with mounting brackets included.',
    'Decorative louver for room dividers',
    v_category_id,
    'CL-DEC-001',
    249.99,
    199.99,
    'Aluminum Powder Coated',
    '84 inch H x 36 inch W',
    'Charcoal Grey',
    'Powder Coat Matte',
    'in_stock',
    false
  ) RETURNING id INTO v_product_id;
  
  INSERT INTO product_images (product_id, image_url, alt_text, display_order, is_primary)
  VALUES 
    (v_product_id, 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg', 'Decorative Louver Screen', 0, true);
END $$;

-- Charcoal Panels Products
DO $$
DECLARE
  v_category_id uuid;
  v_product_id uuid;
BEGIN
  SELECT id INTO v_category_id FROM categories WHERE slug = 'charcoal-panels';
  
  INSERT INTO products (name, slug, description, short_description, category_id, sku, retail_price, trade_price, material, dimensions, color, finish, stock_status, is_featured)
  VALUES (
    'Textured Charcoal Panel',
    'textured-charcoal-panel',
    'Contemporary textured charcoal panels with subtle grain pattern. Adds depth and sophistication to modern interiors. Impact-resistant and easy to maintain.',
    'Contemporary textured with subtle grain',
    v_category_id,
    'CP-TEX-001',
    179.99,
    143.99,
    'High-Pressure Laminate',
    '96 inch H x 48 inch W x 0.5 inch D',
    'Charcoal Grey',
    'Textured Matte',
    'in_stock',
    true
  ) RETURNING id INTO v_product_id;
  
  INSERT INTO product_images (product_id, image_url, alt_text, display_order, is_primary)
  VALUES 
    (v_product_id, 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg', 'Textured Charcoal Panel', 0, true);
  
  INSERT INTO products (name, slug, description, short_description, category_id, sku, retail_price, trade_price, material, dimensions, color, finish, stock_status, is_featured)
  VALUES (
    'Smooth Charcoal Panel',
    'smooth-charcoal-panel',
    'Sleek smooth-finish charcoal panels for minimalist designs. Premium melamine surface resists scratches and stains. Perfect for feature walls and cabinetry.',
    'Sleek smooth-finish for minimalist designs',
    v_category_id,
    'CP-SMT-001',
    159.99,
    127.99,
    'Melamine on Particle Board',
    '96 inch H x 48 inch W x 0.5 inch D',
    'Charcoal Grey',
    'Smooth Matte',
    'in_stock',
    true
  ) RETURNING id INTO v_product_id;
  
  INSERT INTO product_images (product_id, image_url, alt_text, display_order, is_primary)
  VALUES 
    (v_product_id, 'https://images.pexels.com/photos/2102588/pexels-photo-2102588.jpeg', 'Smooth Charcoal Panel', 0, true);
  
  INSERT INTO products (name, slug, description, short_description, category_id, sku, retail_price, trade_price, material, dimensions, color, finish, stock_status, is_featured)
  VALUES (
    'Ribbed Charcoal Panel',
    'ribbed-charcoal-panel',
    'Horizontal ribbed charcoal panels create linear visual interest. Modern architectural detail for accent walls. Sound-dampening properties reduce echo.',
    'Horizontal ribbed with sound-dampening',
    v_category_id,
    'CP-RIB-001',
    199.99,
    159.99,
    'Composite Wood',
    '96 inch H x 48 inch W x 0.75 inch D',
    'Charcoal Grey',
    'Matte',
    'in_stock',
    false
  ) RETURNING id INTO v_product_id;
  
  INSERT INTO product_images (product_id, image_url, alt_text, display_order, is_primary)
  VALUES 
    (v_product_id, 'https://images.pexels.com/photos/2102589/pexels-photo-2102589.jpeg', 'Ribbed Charcoal Panel', 0, true);
END $$;

-- UV Sheets Products
DO $$
DECLARE
  v_category_id uuid;
  v_product_id uuid;
BEGIN
  SELECT id INTO v_category_id FROM categories WHERE slug = 'uv-sheets';
  
  INSERT INTO products (name, slug, description, short_description, category_id, sku, retail_price, trade_price, material, dimensions, color, finish, stock_status, is_featured)
  VALUES (
    'High Gloss White UV Sheet',
    'high-gloss-white-uv-sheet',
    'Premium high-gloss UV-coated sheet with mirror-like finish. Superior scratch and chemical resistance. Perfect for kitchen cabinets and modern furniture.',
    'Mirror-like high-gloss with superior scratch resistance',
    v_category_id,
    'UV-WHT-001',
    139.99,
    111.99,
    'UV Coated MDF',
    '96 inch H x 48 inch W x 0.75 inch D',
    'Pure White',
    'High Gloss UV',
    'in_stock',
    true
  ) RETURNING id INTO v_product_id;
  
  INSERT INTO product_images (product_id, image_url, alt_text, display_order, is_primary)
  VALUES 
    (v_product_id, 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg', 'High Gloss White UV Sheet', 0, true);
  
  INSERT INTO products (name, slug, description, short_description, category_id, sku, retail_price, trade_price, material, dimensions, color, finish, stock_status, is_featured)
  VALUES (
    'Glossy Black UV Sheet',
    'glossy-black-uv-sheet',
    'Sophisticated glossy black UV sheet with deep color depth. Fingerprint-resistant surface. Ideal for contemporary kitchen and wardrobe applications.',
    'Deep black with fingerprint-resistant surface',
    v_category_id,
    'UV-BLK-001',
    149.99,
    119.99,
    'UV Coated MDF',
    '96 inch H x 48 inch W x 0.75 inch D',
    'Piano Black',
    'High Gloss UV',
    'in_stock',
    true
  ) RETURNING id INTO v_product_id;
  
  INSERT INTO product_images (product_id, image_url, alt_text, display_order, is_primary)
  VALUES 
    (v_product_id, 'https://images.pexels.com/photos/1643385/pexels-photo-1643385.jpeg', 'Glossy Black UV Sheet', 0, true);
  
  INSERT INTO products (name, slug, description, short_description, category_id, sku, retail_price, trade_price, material, dimensions, color, finish, stock_status, is_featured)
  VALUES (
    'Metallic Silver UV Sheet',
    'metallic-silver-uv-sheet',
    'Stunning metallic silver UV sheet with reflective properties. Creates luxury feel in any application. Easy to clean and maintain.',
    'Reflective metallic silver for luxury applications',
    v_category_id,
    'UV-SLV-001',
    169.99,
    135.99,
    'UV Coated MDF',
    '96 inch H x 48 inch W x 0.75 inch D',
    'Metallic Silver',
    'High Gloss UV Metallic',
    'in_stock',
    true
  ) RETURNING id INTO v_product_id;
  
  INSERT INTO product_images (product_id, image_url, alt_text, display_order, is_primary)
  VALUES 
    (v_product_id, 'https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg', 'Metallic Silver UV Sheet', 0, true);
  
  INSERT INTO products (name, slug, description, short_description, category_id, sku, retail_price, trade_price, material, dimensions, color, finish, stock_status, is_featured)
  VALUES (
    'Red UV Sheet',
    'red-uv-sheet',
    'Bold red UV sheet for statement pieces. Vibrant color stays true with UV protection. Perfect for accent panels and modern furniture.',
    'Vibrant red for bold statement pieces',
    v_category_id,
    'UV-RED-001',
    159.99,
    127.99,
    'UV Coated MDF',
    '96 inch H x 48 inch W x 0.75 inch D',
    'Cherry Red',
    'High Gloss UV',
    'in_stock',
    false
  ) RETURNING id INTO v_product_id;
  
  INSERT INTO product_images (product_id, image_url, alt_text, display_order, is_primary)
  VALUES 
    (v_product_id, 'https://images.pexels.com/photos/1643390/pexels-photo-1643390.jpeg', 'Red UV Sheet', 0, true);
END $$;
