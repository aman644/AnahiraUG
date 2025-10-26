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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fadeInUp">Transform Your Spaces</h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards'}}>
            Premium architectural finishes that elevate every interior. From elegant fluted panels to sophisticated wallpapers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards'}}>
            <button
              onClick={() => onNavigate('products')}
              className="cta-button inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('installers')}
              className="cta-button inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
            >
              Find Installers
            </button>
          </div>
        </div>
      </section>

      <section ref={section1.ref} className={`py-24 bg-[#1F2121]/40 backdrop-blur-sm rounded-3xl mx-4 mb-8 scroll-fade-in ${section1.isVisible ? 'visible' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-primary-600/20 px-4 py-2 rounded-full mb-6">
                <Waves className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-primary-600">FLUTED PANELS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Elegant Texture & Depth</h2>
              <p className="text-lg text-slate-300 mb-6">
                Our fluted panels bring sophisticated three-dimensional texture to any wall. Perfect for accent walls, headboards, and feature areas that demand attention.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '100ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Easy installation with pre-finished surfaces</span>
                </li>
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '200ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Multiple finishes: wood veneer, painted, and textured</span>
                </li>
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Acoustic benefits for sound dampening</span>
                </li>
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '400ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Available in standard and custom dimensions</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate('products')}
                className="cta-button inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                View Fluted Panels
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

      <section className="py-24 bg-[#1F2121]/60 backdrop-blur-sm rounded-3xl mx-4 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="group">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[rgb(59 130 246)]/20 to-[rgb(59 130 246)]/10 overflow-hidden shadow-2xl border border-white/5 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(33,128,141,0.3)] group-hover:scale-[1.02]">
                <img
                  src="https://images.pexels.com/photos/6585607/pexels-photo-6585607.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="PVC wall panels"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-600/20 px-4 py-2 rounded-full mb-6">
                <Droplet className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-primary-600">PVC PANELS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Built to Last</h2>
              <p className="text-lg text-slate-300 mb-6">
                Engineered for moisture resistance and exceptional durability, our PVC panels are ideal for bathrooms, kitchens, and high-traffic commercial spaces.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '100ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">100% waterproof and mold-resistant</span>
                </li>
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '200ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Low maintenance with easy-to-clean surfaces</span>
                </li>
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Cost-effective alternative to tile or wood</span>
                </li>
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '400ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Perfect for high-humidity environments</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate('products')}
                className="cta-button inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                View PVC Panels
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1F2121]/40 backdrop-blur-sm rounded-3xl mx-4 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-primary-600/20 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-primary-600">WALLPAPERS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Design Without Limits</h2>
              <p className="text-lg text-slate-300 mb-6">
                From classic patterns to contemporary murals, our curated wallpaper collection offers endless possibilities for personalization and style.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '100ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Premium materials: vinyl, fabric, and textured options</span>
                </li>
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '200ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Washable and fade-resistant finishes</span>
                </li>
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Custom sizing and design services available</span>
                </li>
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '400ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Extensive pattern library with exclusive designs</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate('products')}
                className="cta-button inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                View Wallpapers
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="order-1 md:order-2 group">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[rgb(59 130 246)]/20 to-[rgb(59 130 246)]/10 overflow-hidden shadow-2xl border border-white/5 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(33,128,141,0.3)] group-hover:scale-[1.02]">
                <img
                  src="https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Premium wallpaper designs"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1F2121]/60 backdrop-blur-sm rounded-3xl mx-4 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="group">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[rgb(59 130 246)]/20 to-[rgb(59 130 246)]/10 overflow-hidden shadow-2xl border border-white/5 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(33,128,141,0.3)] group-hover:scale-[1.02]">
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Charcoal louvers"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-600/20 px-4 py-2 rounded-full mb-6">
                <Wind className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-primary-600">CHARCOAL LOUVERS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Form Meets Function</h2>
              <p className="text-lg text-slate-300 mb-6">
                Architectural louvers that provide privacy, ventilation, and striking visual appeal. Perfect for modern facades, screens, and decorative partitions.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '100ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Weather-resistant charcoal finish</span>
                </li>
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '200ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Customizable spacing and orientation</span>
                </li>
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Ideal for both interior and exterior applications</span>
                </li>
                <li className="flex items-start gap-3 opacity-0 animate-fadeIn" style={{animationDelay: '400ms', animationFillMode: 'forwards'}}>
                  <Check className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Provides privacy while maintaining airflow</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate('products')}
                className="cta-button inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                View Louvers
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1F2121]/40 backdrop-blur-sm rounded-3xl mx-4 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Compare Our Products</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Find the perfect solution for your project. Each product is designed for specific applications and aesthetic goals.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-primary-600">
                  <th className="text-left py-4 px-4 font-bold text-white">Feature</th>
                  <th className="text-center py-4 px-4 font-bold text-white">Fluted Panels</th>
                  <th className="text-center py-4 px-4 font-bold text-white">PVC Panels</th>
                  <th className="text-center py-4 px-4 font-bold text-white">Wallpapers</th>
                  <th className="text-center py-4 px-4 font-bold text-white">Charcoal Louvers</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 font-medium text-slate-300">Waterproof</td>
                  <td className="text-center py-4 px-4 text-slate-400">Partial</td>
                  <td className="text-center py-4 px-4 text-primary-600 font-semibold">Yes</td>
                  <td className="text-center py-4 px-4 text-slate-400">Varies</td>
                  <td className="text-center py-4 px-4 text-primary-600 font-semibold">Yes</td>
                </tr>
                <tr className="border-b border-white/10 bg-white/5">
                  <td className="py-4 px-4 font-medium text-slate-300">Installation Difficulty</td>
                  <td className="text-center py-4 px-4 text-slate-400">Moderate</td>
                  <td className="text-center py-4 px-4 text-slate-400">Easy</td>
                  <td className="text-center py-4 px-4 text-slate-400">Easy</td>
                  <td className="text-center py-4 px-4 text-slate-400">Moderate</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 font-medium text-slate-300">Texture/Depth</td>
                  <td className="text-center py-4 px-4 text-primary-600 font-semibold">3D</td>
                  <td className="text-center py-4 px-4 text-slate-400">Flat</td>
                  <td className="text-center py-4 px-4 text-slate-400">Varies</td>
                  <td className="text-center py-4 px-4 text-primary-600 font-semibold">3D</td>
                </tr>
                <tr className="border-b border-white/10 bg-white/5">
                  <td className="py-4 px-4 font-medium text-slate-300">Best For</td>
                  <td className="text-center py-4 px-4 text-slate-400">Accent Walls</td>
                  <td className="text-center py-4 px-4 text-slate-400">Bathrooms</td>
                  <td className="text-center py-4 px-4 text-slate-400">Full Rooms</td>
                  <td className="text-center py-4 px-4 text-slate-400">Facades</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 font-medium text-slate-300">Durability</td>
                  <td className="text-center py-4 px-4 text-slate-400">High</td>
                  <td className="text-center py-4 px-4 text-primary-600 font-semibold">Very High</td>
                  <td className="text-center py-4 px-4 text-slate-400">Medium</td>
                  <td className="text-center py-4 px-4 text-primary-600 font-semibold">Very High</td>
                </tr>
                <tr className="border-b border-white/10 bg-white/5">
                  <td className="py-4 px-4 font-medium text-slate-300">Customization</td>
                  <td className="text-center py-4 px-4 text-slate-400">Limited</td>
                  <td className="text-center py-4 px-4 text-slate-400">Limited</td>
                  <td className="text-center py-4 px-4 text-primary-600 font-semibold">Extensive</td>
                  <td className="text-center py-4 px-4 text-slate-400">Moderate</td>
                </tr>
              </tbody>
            </table>
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
              <h3 className="font-semibold text-lg mb-2 text-white">Premium Quality</h3>
              <p className="text-slate-300">Top-tier products from trusted manufacturers</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Fast Shipping</h3>
              <p className="text-slate-300">Quick delivery with transparent lead times</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Installer Network</h3>
              <p className="text-slate-300">Vetted professionals ready to help</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Trade Pricing</h3>
              <p className="text-slate-300">Exclusive discounts for professionals</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1F2121]/60 backdrop-blur-sm rounded-3xl mx-4 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Products</h2>
              <p className="text-lg text-slate-300">Discover our most popular items</p>
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
                <div key={i} className="bg-white/5 rounded-lg h-96 animate-pulse"></div>
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
              <p className="text-slate-300">No featured products available yet.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#1F2121] via-[#252727] to-[#1F2121] text-white relative overflow-hidden rounded-3xl mx-4 mb-8">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgxMHYxMEgzNnptMC0xMGgxMHYxMEgzNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Bulk Orders?</h2>
            <p className="text-xl text-slate-300 mb-4 max-w-3xl mx-auto">
              Whether you're a contractor, designer, or retailer, we've got you covered with competitive pricing and dedicated support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trade Program</h3>
              <p className="text-slate-300 mb-4">
                Exclusive pricing tiers, net payment terms, and priority customer support for verified professionals.
              </p>
              <button
                onClick={() => onNavigate('trade')}
                className="text-white font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Volume Discounts</h3>
              <p className="text-slate-300 mb-4">
                Save more when you order more. Get instant volume pricing on all products with no minimum requirements.
              </p>
              <button
                onClick={() => onNavigate('products')}
                className="text-white font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                View Products
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Retailer Partners</h3>
              <p className="text-slate-300 mb-4">
                Stock our products in your showroom. Access wholesale pricing, marketing support, and dedicated account management.
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
              onClick={() => onNavigate('trade')}
              className="cta-button inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-lg"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-slate-400 mt-4 text-sm">
              Have questions? Contact our sales team for custom pricing and solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
