import React from 'react';
import { ShoppingCart, Heart, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const navigate = useNavigate();
  const isWishlisted = wishlist.some(item => item.id === product.id);

  // Full-card click handler taking the user to the product details page
  const handleCardClick = (e) => {
    // Only trigger if they did not click a button or anchor/link inside the card
    if (e.target.closest('button') || e.target.closest('a')) {
      return;
    }
    navigate(`/product/${product.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={handleCardClick}
      className="group relative cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary mb-4">
        <img
          src={product.images?.[0] || product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
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
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product);
            }}
            className={`p-3 rounded-full glass transition-all duration-300 hover:bg-white hover:text-black ${isWishlisted ? 'bg-white text-black' : ''}`}
          >
            <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
          </button>
          
          <a
            href={product.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-3 rounded-full glass transition-all duration-300 hover:bg-white hover:text-black"
          >
            <ExternalLink size={20} />
          </a>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="p-3 rounded-full glass transition-all duration-300 hover:bg-white hover:text-black"
          >
            <ShoppingCart size={20} />
          </button>
        </div>

        {/* Badge */}
        {product.price > 1000 && (
          <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
            Premium
          </div>
        )}
      </div>

      {/* Info */}
      <div className="space-y-1">
        <h3 className="text-lg font-medium tracking-tight group-hover:text-white transition-colors">
          <Link
            to={`/product/${product.id}`}
            onClick={(e) => e.stopPropagation()}
          >
            {product.name}
          </Link>
        </h3>
        <p className="text-white text-opacity-50 text-sm">{product.category}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-display font-semibold">₹{product.price.toLocaleString('en-IN')}</span>
          <a 
            href={product.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-xs font-bold uppercase tracking-tighter border-b border-white border-opacity-20 pb-1 hover:border-opacity-100 transition-all"
          >
            Buy Now
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
