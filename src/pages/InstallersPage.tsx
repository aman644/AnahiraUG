import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { MapPin, Star, Award } from 'lucide-react';

interface InstallersPageProps {
  onNavigate: (page: string, data?: any) => void;
}

export default function InstallersPage({ onNavigate }: InstallersPageProps) {
  const [installers, setInstallers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadInstallers();
  }, []);

  const loadInstallers = async () => {
    const { data } = await supabase
      .from('installers')
      .select('*')
      .eq('is_verified', true)
      .order('rating', { ascending: false });

    if (data) setInstallers(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Find an Installer</h1>
          <p className="text-lg text-slate-600">Connect with verified professionals in your area</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-lg h-64 animate-pulse"></div>
            ))}
          </div>
        ) : installers.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {installers.map(installer => (
              <div key={installer.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-slate-900 mb-1">
                      {installer.business_name}
                    </h3>
                    <p className="text-sm text-slate-600">{installer.contact_name}</p>
                  </div>
                  {installer.is_verified && (
                    <Award className="w-6 h-6 text-green-600" />
                  )}
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <p className="text-sm text-slate-600">
                    {installer.city}, {installer.state}
                  </p>
                </div>

                {installer.rating > 0 && (
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map(i => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i <= installer.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-slate-600">
                      {installer.rating.toFixed(1)} ({installer.review_count} reviews)
                    </span>
                  </div>
                )}

                <p className="text-sm text-slate-700 mb-4 line-clamp-2">{installer.description}</p>

                {installer.phone && (
                  <a
                    href={`tel:${installer.phone}`}
                    className="block text-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    Contact Installer
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-slate-600">No installers found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
