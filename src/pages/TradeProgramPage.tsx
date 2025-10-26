import { Check, TrendingUp, Clock, Shield } from 'lucide-react';

interface TradeProgramPageProps {
  onNavigate: (page: string) => void;
}

export default function TradeProgramPage({ onNavigate }: TradeProgramPageProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Trade Program</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Join our exclusive trade program and unlock wholesale pricing, net terms, and priority support
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Wholesale Pricing</h3>
            <p className="text-slate-600">
              Save 20-40% on all products with our tiered pricing structure.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Net Payment Terms</h3>
            <p className="text-slate-600">
              Flexible payment options with net 30-60 terms available.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Priority Support</h3>
            <p className="text-slate-600">
              Dedicated account manager and priority order processing.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-slate-600 mb-6">Apply today to start saving on your orders</p>
          <button
            onClick={() => alert('Trade application form would be here')}
            className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
