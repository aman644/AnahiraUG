export type Database = {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string;
          image_url: string;
          parent_id: string | null;
          display_order: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['categories']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['categories']['Insert']>;
      };
      products: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string;
          short_description: string;
          category_id: string | null;
          sku: string;
          retail_price: number;
          trade_price: number | null;
          material: string;
          dimensions: string;
          weight: string;
          color: string;
          finish: string;
          stock_status: string;
          lead_time_days: number;
          minimum_order_quantity: number;
          is_featured: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['products']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['products']['Insert']>;
      };
      product_images: {
        Row: {
          id: string;
          product_id: string;
          image_url: string;
          alt_text: string;
          display_order: number;
          is_primary: boolean;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['product_images']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['product_images']['Insert']>;
      };
      installers: {
        Row: {
          id: string;
          business_name: string;
          contact_name: string;
          email: string;
          phone: string;
          website: string;
          description: string;
          specializations: string[];
          service_areas: string[];
          city: string;
          state: string;
          zip_code: string;
          latitude: number | null;
          longitude: number | null;
          rating: number;
          review_count: number;
          is_verified: boolean;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['installers']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['installers']['Insert']>;
      };
      projects: {
        Row: {
          id: string;
          title: string;
          description: string;
          installer_id: string | null;
          location: string;
          completion_date: string | null;
          featured_image_url: string;
          is_featured: boolean;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['projects']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['projects']['Insert']>;
      };
      trade_accounts: {
        Row: {
          id: string;
          user_id: string;
          company_name: string;
          business_type: string;
          tax_id: string;
          billing_address: string;
          shipping_address: string;
          phone: string;
          status: string;
          discount_tier: string;
          net_terms: number;
          approved_at: string | null;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['trade_accounts']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['trade_accounts']['Insert']>;
      };
      orders: {
        Row: {
          id: string;
          user_id: string | null;
          order_number: string;
          status: string;
          is_trade_order: boolean;
          subtotal: number;
          tax: number;
          shipping: number;
          discount: number;
          total: number;
          shipping_address: string;
          billing_address: string;
          notes: string;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['orders']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['orders']['Insert']>;
      };
      cart_items: {
        Row: {
          id: string;
          user_id: string;
          product_id: string;
          quantity: number;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['cart_items']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['cart_items']['Insert']>;
      };
    };
  };
};
