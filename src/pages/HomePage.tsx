import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { ArrowRight, Award, Truck, Shield, Users, Waves, Droplet, Sparkles, Wind, Check } from 'lucide-react';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';

interface HomePageProps {
  onNavigate: (page: string, data?: any) => void;
  onAddToCart: (productId: string) => void;
}

export default function HomePage({ onNavigate, onAddToCart }: HomePageProps) {
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([]);
  const [featuredProjects, setFeaturedProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const parallaxOffset = useParallax();
  const section1 = useScrollAnimation();
  const section2 = useScrollAnimation();
  const section3 = useScrollAnimation();
  const section4 = useScrollAnimation();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const [productsResult, projectsResult] = await Promise.all([
      supabase
        .from('products')
        .select(`
          *,
          images:product_images(image_url, alt_text)
        `)
        .eq('is_featured', true)
        .limit(6),
      supabase
        .from('projects')
        .select('*')
        .eq('is_featured', true)
        .limit(3)
    ]);

    if (productsResult.data) setFeaturedProducts(productsResult.data);
    if (projectsResult.data) setFeaturedProjects(projectsResult.data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen pt-24">
      <section className="relative bg-gradient-to-br from-[#1F2121] via-[#252727] to-[#1F2121] text-white py-32 rounded-3xl mx-4 mb-8 overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgxMHYxMEgzNnptMC0xMGgxMHYxMEgzNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"
          style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
        ></div>

        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fadeInUp">Bridging India & Germany</h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-10 animate-fadeInUp" style={{animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards'}}>
                Your trusted partner for premium home interior products from India to Germany. Quality materials, seamless logistics, exceptional service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fadeInUp" style={{animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards'}}>
                <button
                  onClick={() => onNavigate('products')}
                  className="cta-button inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  View Catalog
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="cta-button inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>

            <div className="relative animate-fadeInUp" style={{animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards'}}>
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/40 to-blue-600/40 rounded-full blur-3xl animate-pulse"></div>

                <div className="absolute top-0 left-0 w-48 h-48 group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-transparent rounded-2xl rotate-12 group-hover:rotate-0 transition-transform duration-500"></div>
                  <img
                    src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="PVC Panels"
                    className="relative w-full h-full object-cover rounded-2xl shadow-2xl border-2 border-white/10 transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-bold text-sm">Wall Panels</span>
                  </div>
                </div>

                <div className="absolute top-1/4 right-0 w-44 h-44 group cursor-pointer" style={{animationDelay: '0.8s'}}>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-2xl -rotate-12 group-hover:rotate-0 transition-transform duration-500"></div>
                  <img
                    src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Charcoal Panels"
                    className="relative w-full h-full object-cover rounded-2xl shadow-2xl border-2 border-white/10 transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-bold text-sm">Fluted Panels</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-1/4 w-52 h-52 group cursor-pointer" style={{animationDelay: '1s'}}>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-transparent rounded-2xl rotate-6 group-hover:rotate-0 transition-transform duration-500"></div>
                  <img
                    src="https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Wallpapers"
                    className="relative w-full h-full object-cover rounded-2xl shadow-2xl border-2 border-white/10 transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-bold text-sm">Premium Wallpapers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={section1.ref} className={`py-24 bg-white/50 backdrop-blur-sm rounded-3xl mx-4 mb-8 scroll-fade-in ${section1.isVisible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-primary-600/20 px-4 py-2 rounded-full mb-6">
                <Waves className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-primary-600">PREMIUM MATERIALS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">Sourced from India's Finest</h2>
              <p className="text-lg text-neutral-600 mb-6">
                We import premium home interior materials directly from India's leading manufacturers, bringing authentic quality and competitive pricing to the German market.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '100ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-600">Direct sourcing from verified Indian manufacturers</span>
                </li>
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '200ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-600">Quality inspected before shipping to Germany</span>
                </li>
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-600">Competitive pricing with bulk order options</span>
                </li>
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '400ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-600">Wide range of styles and finishes available</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate('products')}
                className="cta-button inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                View Product Range
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="order-1 md:order-2 group">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[rgb(59 130 246)]/20 to-[rgb(59 130 246)]/10 overflow-hidden shadow-2xl border border-white/5 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(33,128,141,0.3)] group-hover:scale-[1.02]">
                <img
                  src="https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Fluted wall panels"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/50 backdrop-blur-sm rounded-3xl mx-4 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="group">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-200/50 to-primary-100/30 overflow-hidden shadow-2xl border border-primary-200/30 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(184,160,124,0.3)] group-hover:scale-[1.02]">
                <img
                  src="https://images.pexels.com/photos/8486020/pexels-photo-8486020.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Reliable logistics"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-600/20 px-4 py-2 rounded-full mb-6">
                <Truck className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-primary-600">LOGISTICS & DELIVERY</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">Seamless International Shipping</h2>
              <p className="text-lg text-neutral-600 mb-6">
                We handle all aspects of international logistics, from customs clearance to final delivery, ensuring your products arrive safely and on time.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '100ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-600">End-to-end logistics management</span>
                </li>
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '200ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-600">Customs documentation and clearance handled</span>
                </li>
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-600">Real-time shipment tracking</span>
                </li>
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '400ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-600">Secure packaging for international transit</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate('contact')}
                className="cta-button inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary-50/40 backdrop-blur-sm rounded-3xl mx-4 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-primary-600/20 px-4 py-2 rounded-full mb-6">
                <Shield className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-primary-600">QUALITY ASSURANCE</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">Certified & Verified</h2>
              <p className="text-lg text-neutral-600 mb-6">
                Every product meets international quality standards. We work exclusively with ISO-certified manufacturers and conduct rigorous quality checks.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '100ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-600">ISO-certified manufacturer partnerships</span>
                </li>
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '200ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-600">Pre-shipment quality inspection</span>
                </li>
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-600">European safety and compliance standards</span>
                </li>
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '400ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-600">Comprehensive warranty coverage</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate('about')}
                className="cta-button inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                About Our Standards
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="order-1 md:order-2 group">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-200/50 to-primary-100/30 overflow-hidden shadow-2xl border border-primary-200/30 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(184,160,124,0.3)] group-hover:scale-[1.02]">
                <img
                  src="https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Quality assurance"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/50 backdrop-blur-sm rounded-3xl mx-4 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="group">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-200/50 to-primary-100/30 overflow-hidden shadow-2xl border border-primary-200/30 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(184,160,124,0.3)] group-hover:scale-[1.02]">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Customer support"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-600/20 px-4 py-2 rounded-full mb-6">
                <Users className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-primary-600">DEDICATED SUPPORT</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">Your Success Partner</h2>
              <p className="text-lg text-neutral-600 mb-6">
                Our bilingual team provides personalized support in German and English, helping you from product selection to final delivery.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '100ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-600">Bilingual support (German & English)</span>
                </li>
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '200ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-600">Product consultation and recommendations</span>
                </li>
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-600">Custom order assistance</span>
                </li>
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '400ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-600">After-sales support and warranty service</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate('contact')}
                className="cta-button inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 mx-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-neutral-800">Premium Quality</h3>
              <p className="text-neutral-600">Certified Indian manufacturers</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-neutral-800">Direct Import</h3>
              <p className="text-neutral-600">India to Germany shipping</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-neutral-800">Expert Support</h3>
              <p className="text-neutral-600">Bilingual customer service</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-neutral-800">Best Prices</h3>
              <p className="text-neutral-600">Competitive import pricing</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-50/40 backdrop-blur-sm rounded-3xl mx-4 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Featured Products</h2>
              <p className="text-lg text-neutral-600">Imported directly from India</p>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="hidden md:inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-primary-100/30 rounded-lg h-96 animate-pulse"></div>
              ))}
            </div>
          ) : featuredProducts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {featuredProducts.map(product => (
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
              <p className="text-neutral-600">No featured products available yet.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-800 text-white relative overflow-hidden rounded-3xl mx-4 mb-8">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgxMHYxMEgzNnptMC0xMGgxMHYxMEgzNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Importing Today</h2>
            <p className="text-xl text-neutral-100 mb-4 max-w-3xl mx-auto">
              Ready to bring premium Indian home interior products to Germany? We make international trade simple and reliable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary-800" />
              </div>
              <h3 className="text-xl font-bold mb-3">For Retailers</h3>
              <p className="text-neutral-100 mb-4">
                Wholesale pricing, dropshipping options, and marketing support. Build your inventory with authentic Indian products.
              </p>
              <button
                onClick={() => onNavigate('retailers')}
                className="text-white font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-primary-800" />
              </div>
              <h3 className="text-xl font-bold mb-3">Bulk Orders</h3>
              <p className="text-neutral-100 mb-4">
                Volume discounts for contractors and designers. Competitive pricing for large projects with flexible payment terms.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="text-white font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                Request Quote
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary-800" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trade Partners</h3>
              <p className="text-neutral-100 mb-4">
                Become our distribution partner in Germany. Exclusive territories, full support, and premium profit margins.
              </p>
              <button
                onClick={() => onNavigate('trade')}
                className="text-white font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('contact')}
              className="cta-button inline-flex items-center gap-2 bg-white text-primary-800 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-100 transition-colors text-lg"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-neutral-200 mt-4 text-sm">
              Questions? Our team is here to help with quotes, samples, and shipping details.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
