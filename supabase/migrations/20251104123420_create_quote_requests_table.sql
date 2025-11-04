/*
  # Create Quote Requests Table

  1. New Tables
    - `quote_requests`
      - `id` (uuid, primary key) - Unique identifier
      - `product_id` (uuid, foreign key) - Reference to products table
      - `company_name` (text) - Name of the requesting company
      - `email` (text) - Contact email
      - `phone` (text) - Contact phone number
      - `quantity` (integer) - Requested quantity
      - `message` (text, optional) - Additional notes or requirements
      - `status` (text) - Quote status (pending, sent, closed)
      - `created_at` (timestamptz) - Timestamp of request
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `quote_requests` table
    - Add policy for public to insert quote requests (form submissions)
    - Add policy for authenticated users to view all requests (admin access)

  3. Notes
    - Stores all quote requests from customers
    - Allows tracking and management of quote inquiries
    - Public can submit, but only admins can view all requests
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid REFERENCES products(id) ON DELETE CASCADE NOT NULL,
  company_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  quantity integer NOT NULL DEFAULT 1,
  message text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'closed')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit quote requests"
  ON quote_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all quote requests"
  ON quote_requests
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update quote requests"
  ON quote_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_quote_requests_product_id ON quote_requests(product_id);
CREATE INDEX IF NOT EXISTS idx_quote_requests_status ON quote_requests(status);
CREATE INDEX IF NOT EXISTS idx_quote_requests_created_at ON quote_requests(created_at DESC);
