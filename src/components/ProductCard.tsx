import { FileText } from 'lucide-react';

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
  onGetQuote: (productId: string, productName: string) => void;
}

export default function ProductCard({ product, onViewDetails, onGetQuote }: ProductCardProps) {
  const imageUrl = product.images?.[0]?.image_url || 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600';

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
        <div className="flex gap-2">
          <button
            onClick={() => onViewDetails(product.id)}
            className="flex-1 px-4 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            View Details
          </button>
          <button
            onClick={() => onGetQuote(product.id, product.name)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
          >
            <FileText className="w-4 h-4" />
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}
