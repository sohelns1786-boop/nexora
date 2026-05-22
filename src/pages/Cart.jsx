import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, Check, ShieldCheck, Truck, Calendar, X } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const { user, showToast } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [orderedItems, setOrderedItems] = useState([]);
  const [orderFinalTotal, setOrderFinalTotal] = useState(0);

  const handleCheckout = () => {
    if (!user) {
      showToast('Please sign in to complete your secure checkout.', 'info');
      // Pass the current location in the redirect state so Login returns here
      navigate('/login', { state: { from: location } });
      return;
    }

    // Generate simulated luxury order receipt
    const genOrderNum = `NEX-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(10 + Math.random() * 89)}`;
    setOrderNumber(genOrderNum);
    setOrderedItems([...cart]);
    setOrderFinalTotal(cartTotal);
    
    // Save order in localStorage for orders history page
    const newOrder = {
      id: genOrderNum,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      status: "Processing",
      total: cartTotal,
      items: cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
        category: item.category
      })),
      itemCount: cart.reduce((acc, item) => acc + item.quantity, 0)
    };

    try {
      const storageKey = `nexora_orders_${user.email.toLowerCase().trim()}`;
      const existingOrders = JSON.parse(localStorage.getItem(storageKey) || '[]');
      localStorage.setItem(storageKey, JSON.stringify([newOrder, ...existingOrders]));
    } catch (e) {
      console.error('Failed to save order history:', e);
    }

    // Open checkout success screen
    setShowSuccessModal(true);
    
    // Empty the cart
    clearCart();
    
    showToast('Secure SSL Order Processed!', 'success');
  };

  if (cart.length === 0 && !showSuccessModal) {
    return (
      <div className="pt-40 pb-20 text-center min-h-[70vh] flex flex-col items-center justify-center px-4">
        <div className="w-24 h-24 glass rounded-full flex items-center justify-center mb-8 opacity-20">
          <ShoppingBag size={48} />
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 tracking-tighter uppercase">Your Bag is Empty.</h2>
        <p className="text-white text-opacity-50 mb-10 max-w-xs text-sm">Seems like you haven't added any luxury essentials to your bag yet.</p>
        <Link to="/shop" className="premium-button">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen relative px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-12 md:mb-16 tracking-tighter text-center lg:text-left">YOUR BAG</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-8 space-y-6">
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="glass p-6 md:p-8 rounded-[28px] flex flex-col md:flex-row items-center gap-6 md:gap-8 relative"
                >
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden bg-secondary flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-display font-bold mb-2 leading-tight">{item.name}</h3>
                    <p className="text-white text-opacity-40 text-xs md:text-sm mb-4 tracking-wide">{item.category}</p>
                    <div className="flex items-center justify-center md:justify-start space-x-6">
                      <div className="flex items-center glass rounded-full px-3.5 py-1.5 border-white border-opacity-5">
                        <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:opacity-50 text-white"><Minus size={12} /></button>
                        <span className="mx-3.5 font-bold text-xs md:text-sm text-white">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:opacity-50 text-white"><Plus size={12} /></button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-white text-opacity-30 hover:text-red-500 transition-colors p-1"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="text-xl md:text-2xl font-display font-bold text-white">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="lg:col-span-4">
            <div className="glass-dark p-6 md:p-10 rounded-[32px] md:rounded-[40px] sticky top-32">
              <h2 className="text-2xl font-display font-bold mb-8 uppercase tracking-wide">Summary</h2>
              
              <div className="space-y-5 mb-8 text-sm text-white text-opacity-60">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-white text-xs uppercase tracking-wider font-semibold">Complimentary</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span className="text-white text-xs">Included in total</span>
                </div>
              </div>

              <div className="flex justify-between items-end border-t border-white border-opacity-10 pt-6 mb-8">
                <span className="text-base text-white text-opacity-70">Total</span>
                <span className="text-3xl md:text-4xl font-display font-bold text-white">₹{cartTotal.toLocaleString('en-IN')}</span>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full premium-button flex items-center justify-center group py-4 cursor-pointer text-sm"
              >
                Checkout Now
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="mt-6 text-[9px] text-center text-white text-opacity-30 uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-1.5">
                <ShieldCheck size={12} className="text-white text-opacity-40" />
                Secure SSL Encrypted Checkout
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Checkout Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
            {/* Modal Backdrop overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md cursor-default"
            />

            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-xl glass-dark p-8 md:p-12 rounded-[36px] shadow-2xl border border-white border-opacity-10 text-center z-50 pointer-events-auto"
              style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 1px 1px 0 rgba(255,255,255,0.05) inset' }}
            >
              {/* Gold Glowing Header */}
              <div className="flex flex-col items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center mb-4 shadow-lg border border-white border-opacity-30">
                  <Check size={26} />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-white text-opacity-40">Client Confirmation</span>
                <h2 className="text-2xl md:text-3xl font-display font-bold mt-1 tracking-tight text-white uppercase">Order Placed</h2>
              </div>

              {/* Receipt Body */}
              <div className="bg-white bg-opacity-[0.02] border border-white border-opacity-5 rounded-2xl p-5 md:p-6 mb-6 text-left space-y-4">
                <div className="flex justify-between items-center border-b border-white border-opacity-5 pb-3">
                  <span className="text-xs text-white text-opacity-40 uppercase tracking-wider">Receipt Number</span>
                  <span className="text-xs font-mono font-bold text-white tracking-widest">{orderNumber}</span>
                </div>
                
                <div className="flex justify-between items-center text-xs border-b border-white border-opacity-5 pb-3">
                  <span className="text-white text-opacity-40 uppercase tracking-wider">Recipient Client</span>
                  <span className="font-semibold text-white">{user?.name}</span>
                </div>

                {/* Delivery Info */}
                <div className="flex items-start gap-3.5 text-xs text-white text-opacity-65 py-1">
                  <Truck size={16} className="text-white text-opacity-40 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-opacity-90">White-Glove Express Courier</p>
                    <p className="text-white text-opacity-40 mt-0.5 text-[11px]">Complimentary premium packaging with thermal tracking.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-xs text-white text-opacity-65 py-1 border-b border-white border-opacity-5 pb-4">
                  <Calendar size={16} className="text-white text-opacity-40 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-opacity-90">Estimated Arrival Date</p>
                    <p className="text-white text-opacity-40 mt-0.5 text-[11px]">Within 2 to 3 Luxury Business Days.</p>
                  </div>
                </div>

                {/* Ordered Items Summary */}
                <div className="pt-2">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-white text-opacity-35 mb-2">Itemized Portfolio</p>
                  <div className="max-h-28 overflow-y-auto space-y-2.5 pr-2 scrollbar-thin">
                    {orderedItems.map((item) => (
                      <div key={item.id} className="flex justify-between items-center text-xs">
                        <span className="text-white text-opacity-50 truncate max-w-xs">{item.name} <span className="text-[10px] text-white text-opacity-25 ml-1">x{item.quantity}</span></span>
                        <span className="font-mono text-white font-medium">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Total Summary */}
              <div className="flex justify-between items-baseline mb-8 px-2">
                <span className="text-sm text-white text-opacity-50 font-medium">Secured Payment Total</span>
                <span className="text-3xl font-display font-bold text-white">₹{orderFinalTotal.toLocaleString('en-IN')}</span>
              </div>

              {/* Dismiss Button */}
              <button 
                onClick={() => {
                  setShowSuccessModal(false);
                  navigate('/shop');
                }}
                className="w-full premium-button py-4 cursor-pointer text-sm font-semibold tracking-wide"
              >
                Return to Collections
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cart;
