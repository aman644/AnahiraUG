import { ArrowRight, Check, Package, DollarSign, TrendingUp, Headphones } from 'lucide-react';

interface RetailersPageProps {
  onNavigate: (page: string) => void;
}

export default function RetailersPage({ onNavigate }: RetailersPageProps) {
  return (
    <div className="min-h-screen pt-24">
      <section className="relative bg-gradient-to-br from-[#1F2121] via-[#252727] to-[#1F2121] text-white py-24 rounded-3xl mx-4 mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgxMHYxMEgzNnptMC0xMGgxMHYxMEgzNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Partner With Us</h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10">
            Join our network of trusted retailers and bring premium architectural finishes to your customers
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <section className="py-20 mx-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#1F2121]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Wholesale Pricing</h3>
              <p className="text-slate-300">Competitive wholesale rates with volume discounts and special promotions</p>
            </div>

            <div className="bg-[#1F2121]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <Package className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Display Materials</h3>
              <p className="text-slate-300">Free samples, display units, and marketing materials for your showroom</p>
            </div>

            <div className="bg-[#1F2121]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Marketing Support</h3>
              <p className="text-slate-300">Co-branded campaigns, social media assets, and promotional resources</p>
            </div>

            <div className="bg-[#1F2121]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <Headphones className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Dedicated Support</h3>
              <p className="text-slate-300">Personal account manager and priority customer service team</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1F2121]/40 backdrop-blur-sm rounded-3xl mx-4 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Partner With Us?</h2>
              <p className="text-lg text-slate-300 mb-8">
                We're committed to helping our retail partners succeed with premium products, competitive pricing, and unmatched support.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Exclusive territory protection in select markets</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Net 30-60 payment terms for qualified retailers</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Access to new products before public launch</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Training and education for your sales team</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Flexible minimum order quantities</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Drop shipping options available</span>
                </li>
              </ul>
            </div>
            <div className="group">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[rgb(59 130 246)]/20 to-[rgb(59 130 246)]/10 overflow-hidden shadow-2xl border border-white/5 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(33,128,141,0.3)]">
                <img
                  src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Retail showroom"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1F2121]/60 backdrop-blur-sm rounded-3xl mx-4 mb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-10">
            Fill out our partnership application and our team will reach out within 1-2 business days to discuss the next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Apply for Partnership
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
            >
              View Product Catalog
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
