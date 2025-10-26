import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative bg-slate-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 opacity-90"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Premium Products for Exceptional Spaces
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Discover our curated collection of high-quality products with professional installation support nationwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Browse Products
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('trade')}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"
            >
              Join Trade Program
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  );
}
