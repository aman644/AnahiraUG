/*
  # Add Wood Product Images

  1. Images Added
    - Gurjan Wood - Installed hardwood flooring
    - Teak Wood - Premium teak panels and furniture
    - Sal Wood - Structural timber installation
    - Sheesham Wood - Rosewood furniture and panels
    - Mango Wood - Sustainable wood furniture
    - Neem Wood - Natural timber boards
    - Commercial Plywood - BWR grade panels
    - Marine Plywood - Waterproof installation
    - MDF Board - Smooth painted panels
    - Particle Board - Laminated furniture
    - Blockboard - Core board structure
    - Hardboard - Dense panel backing

  2. Security
    - RLS already enabled on product_images table
*/

-- Insert images for Gurjan Wood
INSERT INTO product_images (product_id, image_url, alt_text, is_primary, display_order)
SELECT id, 'https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg', 'Gurjan wood flooring installation', true, 1
FROM products WHERE sku = 'WOOD-GRJ-001';

INSERT INTO product_images (product_id, image_url, alt_text, is_primary, display_order)
SELECT id, 'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg', 'Close-up of gurjan hardwood texture', false, 2
FROM products WHERE sku = 'WOOD-GRJ-001';

-- Insert images for Indian Teak Wood
INSERT INTO product_images (product_id, image_url, alt_text, is_primary, display_order)
SELECT id, 'https://images.pexels.com/photos/1350734/pexels-photo-1350734.jpeg', 'Premium teak wood panels installed', true, 1
FROM products WHERE sku = 'WOOD-TEK-001';

INSERT INTO product_images (product_id, image_url, alt_text, is_primary, display_order)
SELECT id, 'https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg', 'Teak wood furniture detail', false, 2
FROM products WHERE sku = 'WOOD-TEK-001';

-- Insert images for Sal Wood
INSERT INTO product_images (product_id, image_url, alt_text, is_primary, display_order)
SELECT id, 'https://images.pexels.com/photos/326311/pexels-photo-326311.jpeg', 'Sal wood structural beams', true, 1
FROM products WHERE sku = 'WOOD-SAL-001';

INSERT INTO product_images (product_id, image_url, alt_text, is_primary, display_order)
SELECT id, 'https://images.pexels.com/photos/1268551/pexels-photo-1268551.jpeg', 'Sal timber construction', false, 2
FROM products WHERE sku = 'WOOD-SAL-001';

-- Insert images for Sheesham Wood
INSERT INTO product_images (product_id, image_url, alt_text, is_primary, display_order)
SELECT id, 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg', 'Sheesham rosewood furniture installation', true, 1
FROM products WHERE sku = 'WOOD-SHM-001';

INSERT INTO product_images (product_id, image_url, alt_text, is_primary, display_order)
SELECT id, 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg', 'Sheesham wood grain detail', false, 2
FROM products WHERE sku = 'WOOD-SHM-001';

-- Insert images for Mango Wood
INSERT INTO product_images (product_id, image_url, alt_text, is_primary, display_order)
SELECT id, 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg', 'Mango wood table installation', true, 1
FROM products WHERE sku = 'WOOD-MNG-001';

INSERT INTO product_images (product_id, image_url, alt_text, is_primary, display_order)
SELECT id, 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg', 'Sustainable mango wood boards', false, 2
FROM products WHERE sku = 'WOOD-MNG-001';

-- Insert images for Neem Wood
INSERT INTO product_images (product_id, image_url, alt_text, is_primary, display_order)
SELECT id, 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg', 'Neem wood planks', true, 1
FROM products WHERE sku = 'WOOD-NEM-001';

INSERT INTO product_images (product_id, image_url, alt_text, is_primary, display_order)
SELECT id, 'https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg', 'Natural neem timber texture', false, 2
FROM products WHERE sku = 'WOOD-NEM-001';

-- Insert images for Commercial Plywood
INSERT INTO product_images (product_id, image_url, alt_text, is_primary, display_order)
SELECT id, 'https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg', 'Commercial plywood sheets stacked', true, 1
FROM products WHERE sku = 'WOOD-PLY-001';

INSERT INTO product_images (product_id, image_url, alt_text, is_primary, display_order)
SELECT id, 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg', 'BWR plywood cabinet installation', false, 2
FROM products WHERE sku = 'WOOD-PLY-001';

-- Insert images for Marine Plywood
INSERT INTO product_images (product_id, image_url, alt_text, is_primary, display_order)
SELECT id, 'https://images.pexels.com/photos/4207891/pexels-photo-4207891.jpeg', 'Marine grade plywood panels', true, 1
FROM products WHERE sku = 'WOOD-PLY-002';

INSERT INTO product_images (product_id, image_url, alt_text, is_primary, display_order)
SELECT id, 'https://images.pexels.com/photos/8961243/pexels-photo-8961243.jpeg', 'Waterproof plywood installation', false, 2
FROM products WHERE sku = 'WOOD-PLY-002';

-- Insert images for MDF Board
INSERT INTO product_images (product_id, image_url, alt_text, is_primary, display_order)
SELECT id, 'https://images.pexels.com/photos/6045325/pexels-photo-6045325.jpeg', 'MDF board smooth surface', true, 1
FROM products WHERE sku = 'WOOD-MDF-001';

INSERT INTO product_images (product_id, image_url, alt_text, is_primary, display_order)
SELECT id, 'https://images.pexels.com/photos/4207715/pexels-photo-4207715.jpeg', 'MDF panels for cabinets', false, 2
FROM products WHERE sku = 'WOOD-MDF-001';

-- Insert images for Particle Board
INSERT INTO product_images (product_id, image_url, alt_text, is_primary, display_order)
SELECT id, 'https://images.pexels.com/photos/5691653/pexels-photo-5691653.jpeg', 'Pre-laminated particle board', true, 1
FROM products WHERE sku = 'WOOD-PRT-001';

INSERT INTO product_images (product_id, image_url, alt_text, is_primary, display_order)
SELECT id, 'https://images.pexels.com/photos/6045326/pexels-photo-6045326.jpeg', 'Particle board furniture panels', false, 2
FROM products WHERE sku = 'WOOD-PRT-001';

-- Insert images for Blockboard
INSERT INTO product_images (product_id, image_url, alt_text, is_primary, display_order)
SELECT id, 'https://images.pexels.com/photos/4207908/pexels-photo-4207908.jpeg', 'Blockboard solid core structure', true, 1
FROM products WHERE sku = 'WOOD-BLK-001';

INSERT INTO product_images (product_id, image_url, alt_text, is_primary, display_order)
SELECT id, 'https://images.pexels.com/photos/5691647/pexels-photo-5691647.jpeg', 'BWP blockboard panels', false, 2
FROM products WHERE sku = 'WOOD-BLK-001';

-- Insert images for Hardboard
INSERT INTO product_images (product_id, image_url, alt_text, is_primary, display_order)
SELECT id, 'https://images.pexels.com/photos/4207906/pexels-photo-4207906.jpeg', 'Tempered hardboard sheets', true, 1
FROM products WHERE sku = 'WOOD-HRD-001';

INSERT INTO product_images (product_id, image_url, alt_text, is_primary, display_order)
SELECT id, 'https://images.pexels.com/photos/5691620/pexels-photo-5691620.jpeg', 'Hardboard backing panels', false, 2
FROM products WHERE sku = 'WOOD-HRD-001';
