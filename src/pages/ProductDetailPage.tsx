import { useEffect, useState, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { ShoppingCart, ArrowLeft, ChevronDown } from 'lucide-react';

interface ProductDetailPageProps {
  productId: string;
  onNavigate: (page: string, data?: any) => void;
  onAddToCart: (productId: string) => void;
}

export default function ProductDetailPage({ productId, onNavigate, onAddToCart }: ProductDetailPageProps) {
  const [product, setProduct] = useState<any>(null);
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadProduct();

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [productId]);

  const loadProduct = async () => {
    const [productResult, imagesResult] = await Promise.all([
      supabase.from('products').select('*, category:categories(name)').eq('id', productId).single(),
      supabase.from('product_images').select('*').eq('product_id', productId).order('display_order')
    ]);

    if (productResult.data) setProduct(productResult.data);
    if (imagesResult.data) setImages(imagesResult.data);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-slate-400">Product not found</p>
      </div>
    );
  }

  const displayImages = images.length > 0 ? images : [
    { image_url: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200', alt_text: product.name },
    { image_url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200', alt_text: product.name },
    { image_url: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200', alt_text: product.name }
  ];

  const scrollProgress = Math.min(scrollY / 800, 1);
  const heroOpacity = Math.max(1 - scrollY / 600, 0);
  const heroScale = 1 + scrollProgress * 0.1;

  return (
    <div className="bg-black text-white">
      <div className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => onNavigate('products')}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Products</span>
          </button>

          <button
            onClick={() => onAddToCart(product.id)}
            disabled={product.stock_status === 'out_of_stock'}
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full font-medium hover:bg-slate-200 transition-all disabled:bg-slate-700 disabled:text-slate-500 disabled:cursor-not-allowed text-sm"
          >
            <ShoppingCart className="w-4 h-4" />
            {product.stock_status === 'out_of_stock' ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>

      <section
        ref={heroRef}
        className="h-screen flex items-center justify-center relative overflow-hidden"
        style={{ opacity: heroOpacity }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              transform: `scale(${heroScale})`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <img
              src={displayImages[0].image_url}
              alt={displayImages[0].alt_text}
              className="max-w-3xl w-full h-auto object-contain px-8"
            />
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none">
          <div className="max-w-4xl px-8">
            {product.category && (
              <p className="text-slate-400 text-sm font-medium mb-3 tracking-wide uppercase">{product.category.name}</p>
            )}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">{product.name}</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              {product.short_description}
            </p>
            <div className="flex items-center justify-center gap-6">
              <p className="text-3xl md:text-4xl font-semibold">${product.retail_price.toFixed(2)}</p>
              {product.trade_price && (
                <p className="text-lg text-slate-400">Trade: ${product.trade_price.toFixed(2)}</p>
              )}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-slate-400" />
        </div>
      </section>

      {displayImages.slice(1).map((image, index) => (
        <section key={index} className="min-h-screen flex items-center justify-center py-20 px-4">
          <div className="max-w-6xl w-full">
            <div
              className="rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-[1.02]"
              style={{
                opacity: Math.max(0, Math.min(1, (scrollY - (800 + index * 800)) / 400)),
                transform: `translateY(${Math.max(0, 100 - (scrollY - (800 + index * 800)) / 4)}px)`
              }}
            >
              <img
                src={image.image_url}
                alt={image.alt_text}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>
      ))}

      <section className="py-32 px-4 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Crafted to Perfection</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {product.material && (
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-slate-800 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-slate-700 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Material</h3>
                <p className="text-slate-400 text-lg">{product.material}</p>
              </div>
            )}

            {product.dimensions && (
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-slate-800 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-slate-700 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Dimensions</h3>
                <p className="text-slate-400 text-lg">{product.dimensions}</p>
              </div>
            )}

            {product.weight && (
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-slate-800 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-slate-700 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Weight</h3>
                <p className="text-slate-400 text-lg">{product.weight}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-32 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800 rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Specifications</h2>
            <dl className="space-y-6 mt-12 max-w-2xl mx-auto">
              <div className="flex justify-between items-center border-b border-slate-700 pb-4">
                <dt className="text-slate-400 text-lg">SKU</dt>
                <dd className="font-medium text-lg">{product.sku}</dd>
              </div>

              {product.finish && (
                <div className="flex justify-between items-center border-b border-slate-700 pb-4">
                  <dt className="text-slate-400 text-lg">Finish</dt>
                  <dd className="font-medium text-lg">{product.finish}</dd>
                </div>
              )}

              {product.color && (
                <div className="flex justify-between items-center border-b border-slate-700 pb-4">
                  <dt className="text-slate-400 text-lg">Color</dt>
                  <dd className="font-medium text-lg">{product.color}</dd>
                </div>
              )}

              <div className="flex justify-between items-center border-b border-slate-700 pb-4">
                <dt className="text-slate-400 text-lg">Availability</dt>
                <dd className="font-medium text-lg">
                  {product.stock_status === 'in_stock' ? 'In Stock' :
                   product.stock_status === 'pre_order' ? 'Pre-Order' : 'Out of Stock'}
                </dd>
              </div>

              {product.lead_time_days > 0 && (
                <div className="flex justify-between items-center pb-4">
                  <dt className="text-slate-400 text-lg">Lead Time</dt>
                  <dd className="font-medium text-lg">{product.lead_time_days} days</dd>
                </div>
              )}
            </dl>

            <button
              onClick={() => onAddToCart(product.id)}
              disabled={product.stock_status === 'out_of_stock'}
              className="mt-12 inline-flex items-center gap-3 bg-white text-black px-12 py-5 rounded-full font-semibold hover:bg-slate-200 transition-all disabled:bg-slate-700 disabled:text-slate-500 disabled:cursor-not-allowed text-lg shadow-xl"
            >
              <ShoppingCart className="w-5 h-5" />
              {product.stock_status === 'out_of_stock' ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <button
            onClick={() => onNavigate('products')}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to all products
          </button>
        </div>
      </section>
    </div>
  );
}
