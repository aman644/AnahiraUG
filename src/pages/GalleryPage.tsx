import { useState } from 'react';

interface GalleryPageProps {
  onNavigate: (page: string) => void;
}

export default function GalleryPage({ onNavigate }: GalleryPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'fluted', name: 'Fluted Panels' },
    { id: 'pvc', name: 'PVC Panels' },
    { id: 'wallpaper', name: 'Wallpapers' },
  ];

  const galleryItems = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Modern Living Room',
      category: 'residential',
      description: 'Fluted wall panels in natural oak finish'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/6585607/pexels-photo-6585607.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Luxury Bathroom',
      category: 'residential',
      description: 'Waterproof PVC panels in marble texture'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Boutique Hotel Lobby',
      category: 'commercial',
      description: 'Custom wallpaper installation'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Office Reception',
      category: 'commercial',
      description: 'Charcoal louvers for modern aesthetic'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Master Bedroom',
      category: 'residential',
      description: 'Textured wallpaper accent wall'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Restaurant Interior',
      category: 'commercial',
      description: 'Mixed material wall treatment'
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Contemporary Kitchen',
      category: 'residential',
      description: 'PVC backsplash panels'
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Retail Showroom',
      category: 'commercial',
      description: 'Fluted panels with integrated lighting'
    },
    {
      id: 9,
      image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Home Office',
      category: 'residential',
      description: 'Sophisticated wallpaper design'
    },
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24">
      <section className="relative bg-gradient-to-br from-[#1F2121] via-[#252727] to-[#1F2121] text-white py-24 rounded-3xl mx-4 mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgxMHYxMEgzNnptMC0xMGgxMHYxMEgzNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Project Gallery</h1>
          <p className="text-xl md:text-2xl text-slate-300">
            Explore stunning spaces transformed with our premium products
          </p>
        </div>
      </section>

      <section className="py-12 mx-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-[#1F2121]/40 text-slate-300 hover:bg-[#1F2121]/60 border border-white/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-[#1F2121]/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(33,128,141,0.3)]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1F2121]/40 backdrop-blur-sm rounded-3xl mx-4 mb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Your Project</h2>
          <p className="text-xl text-slate-300 mb-10">
            Ready to transform your space? Browse our products or contact us for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Browse Products
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
