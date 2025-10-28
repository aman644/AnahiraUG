import { Mail } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  slug: string;
  short_description: string;
  retail_price: number;
  trade_price: number | null;
  stock_status: string;
  is_featured: boolean;
  images?: { image_url: string; alt_text: string }[];
}

interface ProductCardProps {
  product: Product;
  onViewDetails: (productId: string) => void;
  showTradePrice?: boolean;
}

export default function ProductCard({ product, onViewDetails, showTradePrice }: ProductCardProps) {
  const imageUrl = product.images?.[0]?.image_url || 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600';
  const price = showTradePrice && product.trade_price ? product.trade_price : product.retail_price;

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.is_featured && (
          <div className="absolute top-3 left-3 bg-slate-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
        {product.stock_status !== 'in_stock' && (
          <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {product.stock_status === 'out_of_stock' ? 'Out of Stock' : 'Pre-Order'}
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg text-slate-900 mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-2">{product.short_description}</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-slate-900">${price.toFixed(2)}</p>
            {showTradePrice && product.trade_price && (
              <p className="text-xs text-slate-500 line-through">${product.retail_price.toFixed(2)}</p>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onViewDetails(product.id)}
              className="px-4 py-2 text-sm font-medium text-neutral-800 bg-primary-100 hover:bg-primary-200 rounded-lg transition-colors"
            >
              View Details
            </button>
            <button
              onClick={() => onViewDetails(product.id)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
            >
              <Mail className="w-4 h-4" />
              Inquire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
