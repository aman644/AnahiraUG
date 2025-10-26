import { ShoppingCart, User, Search, Menu, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  cartCount: number;
  currentPage: string;
}

export default function Header({ onNavigate, cartCount, currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-navy-900/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
          <div className="px-6 sm:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-8">
                <button onClick={() => onNavigate('home')} className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                  <span className="font-bold text-xl text-white">Premier Products</span>
                </button>

                <nav className="hidden md:flex gap-6 items-center">
                  <div className="relative"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <button
                      onClick={() => onNavigate('products')}
                      className={`text-sm font-medium transition-colors flex items-center gap-1 ${currentPage === 'products' ? 'text-primary-500' : 'text-slate-300 hover:text-white'}`}
                    >
                      Products
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {productsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-navy-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                        <button
                          onClick={() => { onNavigate('products'); setProductsDropdownOpen(false); }}
                          className="w-full text-left px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-primary-600/20 transition-colors"
                        >
                          All Products
                        </button>
                        <button
                          onClick={() => { onNavigate('products'); setProductsDropdownOpen(false); }}
                          className="w-full text-left px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-primary-600/20 transition-colors"
                        >
                          Fluted Panels
                        </button>
                        <button
                          onClick={() => { onNavigate('products'); setProductsDropdownOpen(false); }}
                          className="w-full text-left px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-primary-600/20 transition-colors"
                        >
                          PVC Panels
                        </button>
                        <button
                          onClick={() => { onNavigate('products'); setProductsDropdownOpen(false); }}
                          className="w-full text-left px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-primary-600/20 transition-colors"
                        >
                          Wallpapers
                        </button>
                        <button
                          onClick={() => { onNavigate('products'); setProductsDropdownOpen(false); }}
                          className="w-full text-left px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-primary-600/20 transition-colors"
                        >
                          Charcoal Louvers
                        </button>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => onNavigate('retailers')}
                    className={`text-sm font-medium transition-colors ${currentPage === 'retailers' ? 'text-primary-500' : 'text-slate-300 hover:text-white'}`}
                  >
                    For Retailers
                  </button>
                  <button
                    onClick={() => onNavigate('gallery')}
                    className={`text-sm font-medium transition-colors ${currentPage === 'gallery' ? 'text-primary-500' : 'text-slate-300 hover:text-white'}`}
                  >
                    Gallery
                  </button>
                  <button
                    onClick={() => onNavigate('about')}
                    className={`text-sm font-medium transition-colors ${currentPage === 'about' ? 'text-primary-500' : 'text-slate-300 hover:text-white'}`}
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className={`text-sm font-medium transition-colors ${currentPage === 'contact' ? 'text-primary-500' : 'text-slate-300 hover:text-white'}`}
                  >
                    Contact
                  </button>
                </nav>
              </div>

              <div className="flex items-center gap-4">
                <button className="p-2 text-slate-300 hover:text-white transition-colors">
                  <Search className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate('cart')}
                  className="p-2 text-slate-300 hover:text-white transition-colors relative"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>
                <button className="p-2 text-slate-300 hover:text-white transition-colors">
                  <User className="w-5 h-5" />
                </button>
                <button
                  className="md:hidden p-2 text-slate-300 hover:text-white"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </div>

            {mobileMenuOpen && (
              <nav className="md:hidden py-4 border-t border-white/10">
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => { onNavigate('products'); setMobileMenuOpen(false); }}
                    className="text-left text-sm font-medium text-slate-300 hover:text-white"
                  >
                    Products
                  </button>
                  <button
                    onClick={() => { onNavigate('retailers'); setMobileMenuOpen(false); }}
                    className="text-left text-sm font-medium text-slate-300 hover:text-white"
                  >
                    For Retailers
                  </button>
                  <button
                    onClick={() => { onNavigate('gallery'); setMobileMenuOpen(false); }}
                    className="text-left text-sm font-medium text-slate-300 hover:text-white"
                  >
                    Gallery
                  </button>
                  <button
                    onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }}
                    className="text-left text-sm font-medium text-slate-300 hover:text-white"
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
                    className="text-left text-sm font-medium text-slate-300 hover:text-white"
                  >
                    Contact
                  </button>
                </div>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
