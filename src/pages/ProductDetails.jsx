import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, ArrowLeft, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = useMemo(() => products.find(p => p.id === parseInt(id)), [id]);
  const isWishlisted = wishlist.some(item => item.id === product?.id);

  if (!product) return (
    <div className="pt-40 pb-20 text-center">
      <h2 className="text-4xl font-display font-bold">Product not found.</h2>
      <Link to="/shop" className="mt-8 inline-block premium-button">Back to Shop</Link>
    </div>
  );

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <Link to="/shop" className="inline-flex items-center text-sm text-white text-opacity-40 hover:text-opacity-100 mb-12 transition-all">
          <ArrowLeft size={16} className="mr-2" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-secondary">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const fallbacks = {
                    Watches: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
                    Audio: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
                    Footwear: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
                    Apparel: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
                    Lifestyle: 'https://images.unsplash.com/photo-1678124118308-fc514a33d93a?q=80&w=800&auto=format&fit=crop',
                    Accessories: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop',
                  };
                  e.target.onerror = null;
                  e.target.src = fallbacks[product.category] || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop';
                }}
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden bg-secondary opacity-50 hover:opacity-100 cursor-pointer transition-all">
                  <img src={product.image} alt="" className="w-full h-full object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop'; }}
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <span className="text-white text-opacity-40 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
                {product.category}
              </span>
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tighter">
                {product.name}
              </h1>
              <p className="text-3xl font-display font-semibold mb-8">₹{product.price.toLocaleString('en-IN')}</p>
              <p className="text-lg text-white text-opacity-60 leading-relaxed mb-8">
                {product.description}
              </p>
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-y-4 mb-10 border-t border-white border-opacity-10 pt-8">
              {product.specs.map((spec, i) => (
                <div key={i} className="flex items-center text-sm text-white text-opacity-70">
                  <div className="w-1.5 h-1.5 rounded-full bg-white opacity-30 mr-3"></div>
                  {spec}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="space-y-6 mt-auto">
              <div className="flex items-center space-x-6">
                <div className="flex items-center glass rounded-full px-4 py-2">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-xl hover:text-opacity-50"
                  >-</button>
                  <span className="mx-6 font-bold w-4 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-xl hover:text-opacity-50"
                  >+</button>
                </div>
                <button 
                  onClick={() => addToCart({ ...product, quantity })}
                  className="flex-1 glass text-white font-bold py-4 flex items-center justify-center space-x-3 hover:bg-white hover:text-black transition-all"
                >
                  <ShoppingBag size={20} />
                  <span>Add to Bag</span>
                </button>
                <a 
                  href={product.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 premium-button flex items-center justify-center space-x-3"
                >
                  <span>Buy Now</span>
                </a>
                <button 
                  onClick={() => toggleWishlist(product)}
                  className={`p-4 rounded-full glass transition-all ${isWishlisted ? 'bg-white text-black' : 'hover:bg-white hover:text-black'}`}
                >
                  <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white border-opacity-10">
                <div className="flex items-center space-x-3 text-white text-opacity-40">
                  <ShieldCheck size={20} />
                  <span className="text-[10px] uppercase font-bold tracking-widest">2 Year Warranty</span>
                </div>
                <div className="flex items-center space-x-3 text-white text-opacity-40">
                  <Truck size={20} />
                  <span className="text-[10px] uppercase font-bold tracking-widest">Free Shipping</span>
                </div>
                <div className="flex items-center space-x-3 text-white text-opacity-40">
                  <RefreshCw size={20} />
                  <span className="text-[10px] uppercase font-bold tracking-widest">30 Day Returns</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
