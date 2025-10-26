import { useState } from 'react';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import InstallersPage from './pages/InstallersPage';
import TradeProgramPage from './pages/TradeProgramPage';
import CartPage from './pages/CartPage';
import RetailersPage from './pages/RetailersPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import ScrollShowcase from './ScrollShowcase';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [pageData, setPageData] = useState<any>(null);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleNavigate = (page: string, data?: any) => {
    setCurrentPage(page);
    setPageData(data || null);
    window.scrollTo(0, 0);
  };

  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onAddToCart={handleAddToCart} />;
      case 'products':
        return <ProductsPage onNavigate={handleNavigate} onAddToCart={handleAddToCart} />;
      case 'product-detail':
        return (
          <ProductDetailPage
            productId={pageData?.productId}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
          />
        );
      case 'projects':
        return <ProjectsPage onNavigate={handleNavigate} />;
      case 'project-detail':
        return (
          <ProjectDetailPage
            projectId={pageData?.projectId}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
          />
        );
      case 'installers':
        return <InstallersPage onNavigate={handleNavigate} />;
      case 'trade':
        return <TradeProgramPage onNavigate={handleNavigate} />;
      case 'cart':
        return <CartPage onNavigate={handleNavigate} cartItems={cartItems} onUpdateCart={setCartItems} />;
      case 'retailers':
        return <RetailersPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'gallery':
        return <GalleryPage onNavigate={handleNavigate} />;
      case 'scroll-showcase':
        return <ScrollShowcase />;
      default:
        return <HomePage onNavigate={handleNavigate} onAddToCart={handleAddToCart} />;
    }
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header onNavigate={handleNavigate} cartCount={cartItems.length} currentPage={currentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
