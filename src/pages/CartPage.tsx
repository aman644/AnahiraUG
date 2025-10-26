import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';

interface CartPageProps {
  onNavigate: (page: string) => void;
  cartItems: string[];
  onUpdateCart: (items: string[]) => void;
}

export default function CartPage({ onNavigate, cartItems, onUpdateCart }: CartPageProps) {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCartItems();
  }, [cartItems]);

  const loadCartItems = async () => {
    if (cartItems.length === 0) {
      setItems([]);
      setLoading(false);
      return;
    }

    const { data } = await supabase
      .from('products')
      .select('*, images:product_images(image_url, alt_text)')
      .in('id', cartItems);

    if (data) {
      const itemsWithQuantity = data.map(product => ({
        ...product,
        quantity: cartItems.filter(id => id === product.id).length
      }));
      setItems(itemsWithQuantity);
    }
    setLoading(false);
  };

  const removeItem = (productId: string) => {
    const newCartItems = cartItems.filter(id => id !== productId);
    onUpdateCart(newCartItems);
  };

  const subtotal = items.reduce((sum, item) => sum + (item.retail_price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + tax + shipping;

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => onNavigate('products')}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="w-5 h-5" />
            Continue Shopping
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="bg-white rounded-lg p-12 text-center">
            <ShoppingBag className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">Your cart is empty</h2>
            <p className="text-slate-600 mb-6">Add some products to get started</p>
            <button
              onClick={() => onNavigate('products')}
              className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm divide-y">
                {items.map(item => {
                  const imageUrl = item.images?.[0]?.image_url || 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600';

                  return (
                    <div key={item.id} className="p-6">
                      <div className="flex gap-6">
                        <img
                          src={imageUrl}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg bg-slate-100"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between mb-2">
                            <h3 className="font-semibold text-lg text-slate-900">{item.name}</h3>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-slate-400 hover:text-red-600 transition-colors"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                          <p className="text-sm text-slate-600 mb-4">Quantity: {item.quantity}</p>
                          <p className="text-xl font-bold text-slate-900">
                            ${(item.retail_price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <button
                  className="w-full bg-slate-900 text-white py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                  onClick={() => alert('Checkout functionality would be implemented here')}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
