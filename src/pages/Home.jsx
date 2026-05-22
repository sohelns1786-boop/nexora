import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-primary">
      <Hero />

      {/* Categories Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-white text-opacity-40 uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Selection</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold">Curated Collections</h2>
            </div>
            <Link to="/shop" className="group flex items-center text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">
              View All <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Watches', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000' },
              { name: 'Audio', img: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1000' },
              { name: 'Accessories', img: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=1000' }
            ].map((cat, i) => (
              <Link
                key={cat.name}
                to={`/shop?category=${cat.name}`}
                className="no-underline"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative h-96 rounded-3xl overflow-hidden group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 z-10 transition-opacity group-hover:bg-opacity-20"></div>
                  <img 
                    src={cat.img} 
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-8 left-8 z-20">
                    <h3 className="text-2xl font-display font-bold mb-2">{cat.name}</h3>
                    <span className="text-xs font-bold uppercase tracking-widest border-b border-white border-opacity-40 pb-1 group-hover:border-opacity-100 transition-all">Explore</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Designed to Inspire.</h2>
            <p className="text-white text-opacity-50 max-w-xl mx-auto">
              Our products are crafted with a commitment to quality and a passion for minimalist design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust/Benefits Section */}
      <section className="py-24 border-y border-white border-opacity-5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 glass rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={24} className="text-white text-opacity-80" />
              </div>
              <h4 className="text-xl font-bold font-display">Secure Experience</h4>
              <p className="text-white text-opacity-40 text-sm leading-relaxed">
                End-to-end encryption for all transactions and data privacy.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 glass rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap size={24} className="text-white text-opacity-80" />
              </div>
              <h4 className="text-xl font-bold font-display">Instant Delivery</h4>
              <p className="text-white text-opacity-40 text-sm leading-relaxed">
                Logistics optimized for the fastest possible shipping times.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 glass rounded-full flex items-center justify-center mx-auto mb-6">
                <Star size={24} className="text-white text-opacity-80" />
              </div>
              <h4 className="text-xl font-bold font-display">Premium Quality</h4>
              <p className="text-white text-opacity-40 text-sm leading-relaxed">
                Hand-picked materials and rigorous quality control for every piece.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white opacity-[0.01] blur-[150px] rounded-full"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-12 tracking-tighter">
            READY TO JOIN THE <br /> NEXORA SOCIETY?
          </h2>
          <Link to="/shop" className="premium-button inline-flex items-center">
            Explore All Products <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
