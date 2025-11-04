/*
  # Add Wood Category and Indian Wood Products

  1. New Category
    - `Wood & Timber` category for various Indian wood types

  2. New Products
    - Gurjan Wood (Dipterocarpus turbinatus) - Premium hardwood from Northeast India
    - Teak Wood - High-grade Indian teak timber
    - Sal Wood - Durable hardwood for construction
    - Sheesham Wood (Indian Rosewood) - Premium furniture wood
    - Mango Wood - Sustainable hardwood for furniture
    - Neem Wood - Natural pest-resistant timber
    - Plywood - Multi-ply engineered boards
    - MDF Boards (Medium Density Fiberboard) - Smooth engineered panels
    - Particle Board - Cost-effective engineered wood
    - Blockboard - Strong core board for furniture
    - Hardboard - Dense engineered board
    - Marine Plywood - Water-resistant plywood for marine applications

  3. Security
    - RLS enabled on all tables (already configured)
*/

-- Insert Wood category
INSERT INTO categories (id, name, slug, description, display_order)
VALUES (
  gen_random_uuid(),
  'Wood & Timber',
  'wood-timber',
  'Premium solid wood and engineered wood products from India, including traditional hardwoods and modern composite boards',
  7
);

-- Get the wood category ID for product inserts
DO $$
DECLARE
  wood_category_id uuid;
BEGIN
  SELECT id INTO wood_category_id FROM categories WHERE slug = 'wood-timber';

  -- Insert Gurjan Wood
  INSERT INTO products (
    id, name, slug, category_id, sku,
    short_description, description,
    material, dimensions, retail_price, trade_price,
    stock_status, is_featured, lead_time_days
  ) VALUES (
    gen_random_uuid(),
    'Gurjan Wood (Premium Grade)',
    'gurjan-wood-premium',
    wood_category_id,
    'WOOD-GRJ-001',
    'Premium hardwood from Northeast India, known for exceptional durability and natural resistance',
    'Gurjan (Dipterocarpus turbinatus) is a premium hardwood harvested from the forests of Northeast India. Known for its high density, excellent durability, and natural resistance to termites and moisture. Ideal for heavy construction, flooring, and outdoor applications. Features a rich reddish-brown color that darkens beautifully with age.',
    'Solid Gurjan Hardwood',
    'Available in standard timber sizes or custom dimensions',
    850.00,
    680.00,
    'in_stock',
    true,
    30
  );

  -- Insert Teak Wood
  INSERT INTO products (
    id, name, slug, category_id, sku,
    short_description, description,
    material, dimensions, retail_price, trade_price,
    stock_status, is_featured, lead_time_days
  ) VALUES (
    gen_random_uuid(),
    'Indian Teak Wood (A-Grade)',
    'indian-teak-wood-agrade',
    wood_category_id,
    'WOOD-TEK-001',
    'Premium A-grade Indian teak, naturally oily wood with golden-brown color',
    'High-grade Indian teak wood from sustainable plantations. Features natural oils that provide exceptional weather resistance. Perfect for premium furniture, boat building, and outdoor applications. Beautiful golden-brown color with darker streaks. Extremely durable and resistant to decay.',
    'Solid Teak Hardwood (A-Grade)',
    'Custom sizes available',
    1250.00,
    1000.00,
    'in_stock',
    true,
    30
  );

  -- Insert Sal Wood
  INSERT INTO products (
    id, name, slug, category_id, sku,
    short_description, description,
    material, dimensions, retail_price, trade_price,
    stock_status, is_featured, lead_time_days
  ) VALUES (
    gen_random_uuid(),
    'Sal Wood Timber',
    'sal-wood-timber',
    wood_category_id,
    'WOOD-SAL-001',
    'Dense hardwood ideal for structural applications and heavy-duty construction',
    'Sal wood (Shorea robusta) is one of India''s most important timber species. Extremely durable and strong, making it ideal for construction, railway sleepers, and heavy furniture. Light brown to dark brown color. Excellent resistance to weather and insect damage.',
    'Solid Sal Hardwood',
    'Various sizes available',
    720.00,
    580.00,
    'in_stock',
    false,
    25
  );

  -- Insert Sheesham Wood
  INSERT INTO products (
    id, name, slug, category_id, sku,
    short_description, description,
    material, dimensions, retail_price, trade_price,
    stock_status, is_featured, lead_time_days
  ) VALUES (
    gen_random_uuid(),
    'Sheesham Wood (Indian Rosewood)',
    'sheesham-rosewood',
    wood_category_id,
    'WOOD-SHM-001',
    'Premium furniture-grade rosewood with rich grain patterns',
    'Sheesham (Dalbergia sissoo), also known as Indian Rosewood, is highly prized for fine furniture and decorative items. Features beautiful grain patterns and rich brown color. Medium to hard density, easy to work with hand and machine tools. Naturally termite-resistant.',
    'Solid Sheesham/Rosewood',
    'Custom dimensions available',
    980.00,
    790.00,
    'in_stock',
    true,
    30
  );

  -- Insert Mango Wood
  INSERT INTO products (
    id, name, slug, category_id, sku,
    short_description, description,
    material, dimensions, retail_price, trade_price,
    stock_status, is_featured, lead_time_days
  ) VALUES (
    gen_random_uuid(),
    'Mango Wood (Sustainable)',
    'mango-wood-sustainable',
    wood_category_id,
    'WOOD-MNG-001',
    'Eco-friendly hardwood from non-fruit bearing mango trees',
    'Sustainably harvested mango wood from retired fruit trees. Medium hardness with attractive grain patterns and natural color variations from light to dark brown. Perfect for furniture, decorative items, and interior applications. Environmentally responsible choice.',
    'Solid Mango Hardwood',
    'Various sizes in stock',
    650.00,
    520.00,
    'in_stock',
    false,
    20
  );

  -- Insert Neem Wood
  INSERT INTO products (
    id, name, slug, category_id, sku,
    short_description, description,
    material, dimensions, retail_price, trade_price,
    stock_status, is_featured, lead_time_days
  ) VALUES (
    gen_random_uuid(),
    'Neem Wood',
    'neem-wood',
    wood_category_id,
    'WOOD-NEM-001',
    'Natural pest-resistant timber with medicinal properties',
    'Neem wood (Azadirachta indica) is naturally pest-resistant and has antimicrobial properties. Reddish-brown color with excellent durability. Used for furniture, cabinets, and agricultural implements. The natural oils provide protection against insects and fungi.',
    'Solid Neem Hardwood',
    'Standard timber sizes',
    590.00,
    470.00,
    'in_stock',
    false,
    25
  );

  -- Insert Commercial Plywood
  INSERT INTO products (
    id, name, slug, category_id, sku,
    short_description, description,
    material, dimensions, retail_price, trade_price,
    stock_status, is_featured, lead_time_days
  ) VALUES (
    gen_random_uuid(),
    'Commercial Plywood (BWR Grade)',
    'commercial-plywood-bwr',
    wood_category_id,
    'WOOD-PLY-001',
    'Boiling Water Resistant plywood for interior applications',
    'High-quality commercial plywood with BWR (Boiling Water Resistant) grade adhesive. Multiple layers of wood veneers bonded together for strength and stability. Suitable for furniture, cabinets, and interior applications. Available in various thicknesses.',
    'Multi-ply Engineered Board (BWR)',
    '8ft x 4ft, thickness: 6mm to 25mm',
    85.00,
    68.00,
    'in_stock',
    false,
    15
  );

  -- Insert Marine Plywood
  INSERT INTO products (
    id, name, slug, category_id, sku,
    short_description, description,
    material, dimensions, retail_price, trade_price,
    stock_status, is_featured, lead_time_days
  ) VALUES (
    gen_random_uuid(),
    'Marine Plywood (IS:710)',
    'marine-plywood-is710',
    wood_category_id,
    'WOOD-PLY-002',
    'Premium waterproof plywood for marine and exterior applications',
    'Marine grade plywood conforming to IS:710 standards. Made with phenolic resin for superior water resistance. Ideal for boat building, exterior cladding, and high-moisture environments. Contains no voids in core layers for maximum strength.',
    'Marine Grade Plywood (Phenolic)',
    '8ft x 4ft, thickness: 6mm to 25mm',
    125.00,
    100.00,
    'in_stock',
    true,
    20
  );

  -- Insert MDF Board
  INSERT INTO products (
    id, name, slug, category_id, sku,
    short_description, description,
    material, dimensions, retail_price, trade_price,
    stock_status, is_featured, lead_time_days
  ) VALUES (
    gen_random_uuid(),
    'MDF Board (Medium Density)',
    'mdf-board-medium-density',
    wood_category_id,
    'WOOD-MDF-001',
    'Smooth engineered board perfect for painting and veneering',
    'Medium Density Fiberboard made from wood fibers and resin under high pressure. Extremely smooth surface ideal for painting, laminating, or veneering. Consistent density throughout with no grain. Perfect for cabinets, furniture, and decorative panels.',
    'Medium Density Fiberboard',
    '8ft x 4ft, thickness: 6mm to 25mm',
    65.00,
    52.00,
    'in_stock',
    false,
    12
  );

  -- Insert Particle Board
  INSERT INTO products (
    id, name, slug, category_id, sku,
    short_description, description,
    material, dimensions, retail_price, trade_price,
    stock_status, is_featured, lead_time_days
  ) VALUES (
    gen_random_uuid(),
    'Particle Board (Pre-laminated)',
    'particle-board-prelaminated',
    wood_category_id,
    'WOOD-PRT-001',
    'Cost-effective engineered board with decorative laminate surface',
    'Pre-laminated particle board made from wood particles bonded with resin. Available in various colors and wood grain patterns. Cost-effective solution for furniture, cabinets, and interior applications. Good screw-holding capacity and dimensional stability.',
    'Pre-laminated Particle Board',
    '8ft x 4ft, thickness: 12mm to 25mm',
    45.00,
    36.00,
    'in_stock',
    false,
    10
  );

  -- Insert Blockboard
  INSERT INTO products (
    id, name, slug, category_id, sku,
    short_description, description,
    material, dimensions, retail_price, trade_price,
    stock_status, is_featured, lead_time_days
  ) VALUES (
    gen_random_uuid(),
    'Blockboard (BWP Grade)',
    'blockboard-bwp-grade',
    wood_category_id,
    'WOOD-BLK-001',
    'Strong core board with solid wood strips for heavy-duty furniture',
    'BWP (Boiling Water Proof) grade blockboard with solid wood strip core. Excellent screw holding capacity and resistance to warping. Ideal for doors, furniture, and shelving. Stronger than plywood for certain applications.',
    'Blockboard BWP (Solid Core)',
    '8ft x 4ft, thickness: 19mm to 25mm',
    95.00,
    76.00,
    'in_stock',
    false,
    15
  );

  -- Insert Hardboard
  INSERT INTO products (
    id, name, slug, category_id, sku,
    short_description, description,
    material, dimensions, retail_price, trade_price,
    stock_status, is_featured, lead_time_days
  ) VALUES (
    gen_random_uuid(),
    'Hardboard (Tempered)',
    'hardboard-tempered',
    wood_category_id,
    'WOOD-HRD-001',
    'Dense, smooth panel for backing and underlayment',
    'Tempered hardboard with smooth surface on both sides. High density and excellent strength for its thickness. Perfect for furniture backing, drawer bottoms, underlayment, and craft projects. Resistant to moisture and impact.',
    'Tempered Hardboard',
    '8ft x 4ft, thickness: 3mm to 6mm',
    35.00,
    28.00,
    'in_stock',
    false,
    10
  );

END $$;
