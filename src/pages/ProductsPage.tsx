import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import ProductCard from '../components/ProductCard';
import { Filter, SlidersHorizontal } from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (page: string, data?: any) => void;
  onAddToCart: (productId: string) => void;
}

export default function ProductsPage({ onNavigate, onAddToCart }: ProductsPageProps) {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: '',
    material: '',
    priceRange: '',
    stockStatus: '',
    sortBy: 'name'
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    loadProducts();
  }, [filters]);

  const loadCategories = async () => {
    const { data } = await supabase
      .from('categories')
      .select('*')
      .order('display_order');

    if (data) setCategories(data);
  };

  const loadProducts = async () => {
    setLoading(true);
    let query = supabase
      .from('products')
      .select(`
        *,
        images:product_images(image_url, alt_text)
      `);

    if (filters.category) {
      query = query.eq('category_id', filters.category);
    }
    if (filters.material) {
      query = query.ilike('material', `%${filters.material}%`);
    }
    if (filters.stockStatus) {
      query = query.eq('stock_status', filters.stockStatus);
    }

    query = query.order(filters.sortBy);

    const { data } = await query;

    if (data) {
      let filtered = data;

      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split('-').map(Number);
        filtered = filtered.filter(p => {
          if (max) {
            return p.retail_price >= min && p.retail_price <= max;
          }
          return p.retail_price >= min;
        });
      }

      setProducts(filtered);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Product Catalog</h1>
          <p className="text-lg text-slate-600">Browse our complete collection of premium products</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <aside className={`${showFilters ? 'block' : 'hidden'} lg:block fixed lg:relative inset-0 lg:inset-auto z-40 lg:z-auto w-full lg:w-64 flex-shrink-0 bg-white lg:bg-transparent p-4 lg:p-0 overflow-y-auto`}>
            <div className="lg:sticky lg:top-24">
              <div className="flex justify-between items-center mb-6 lg:mb-4">
                <h2 className="font-semibold text-lg flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filters
                </h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden text-slate-600 hover:text-slate-900"
                >
                  Close
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Category</label>
                  <select
                    value={filters.category}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  >
                    <option value="">All Categories</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Price Range</label>
                  <select
                    value={filters.priceRange}
                    onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  >
                    <option value="">All Prices</option>
                    <option value="0-100">Under $100</option>
                    <option value="100-500">$100 - $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000">Over $5,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Material</label>
                  <input
                    type="text"
                    value={filters.material}
                    onChange={(e) => setFilters({ ...filters, material: e.target.value })}
                    placeholder="e.g., wood, metal"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  />
                </div>

                <button
                  onClick={() => setFilters({ category: '', material: '', priceRange: '', stockStatus: '', sortBy: 'name' })}
                  className="w-full py-2 text-sm text-slate-600 hover:text-slate-900 font-medium"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-slate-600">
                {products.length} {products.length === 1 ? 'product' : 'products'} found
              </p>
              <div className="flex gap-3">
                <select
                  value={filters.sortBy}
                  onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                  className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                >
                  <option value="name">Name</option>
                  <option value="retail_price">Price: Low to High</option>
                  <option value="created_at">Newest First</option>
                </select>
                <button
                  onClick={() => setShowFilters(true)}
                  className="lg:hidden inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                  Filters
                </button>
              </div>
            </div>

            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="bg-white rounded-lg h-96 animate-pulse"></div>
                ))}
              </div>
            ) : products.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetails={(id) => onNavigate('product-detail', { productId: id })}
                    onAddToCart={onAddToCart}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-600">No products found matching your criteria.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
