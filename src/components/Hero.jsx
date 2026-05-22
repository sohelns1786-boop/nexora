import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white opacity-[0.03] blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-white opacity-[0.02] blur-[150px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block glass px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border-white border-opacity-20">
              New Collection 2024
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8 gradient-text tracking-tighter">
              ELEVATING THE <br />
              <span className="text-white">MODERN ESSENCE.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white text-opacity-60 max-w-2xl mb-12 leading-relaxed">
              Experience the pinnacle of minimalist craftsmanship. Designed for those who appreciate the finer details of modern life.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/shop" className="premium-button group flex items-center justify-center">
                Shop Collection
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/collections" className="premium-button-outline flex items-center justify-center">
                Explore Lookbook
              </Link>
            </div>
          </motion.div>

          {/* Stats/Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-12"
          >
            <div className="space-y-1">
              <span className="block text-3xl font-display font-bold">12K+</span>
              <span className="text-xs uppercase tracking-widest text-white text-opacity-40 font-bold">Curated Products</span>
            </div>
            <div className="space-y-1 border-l border-white border-opacity-10 pl-12">
              <span className="block text-3xl font-display font-bold">98%</span>
              <span className="text-xs uppercase tracking-widest text-white text-opacity-40 font-bold">Customer Rating</span>
            </div>
            <div className="hidden md:block space-y-1 border-l border-white border-opacity-10 pl-12">
              <span className="block text-3xl font-display font-bold">24H</span>
              <span className="text-xs uppercase tracking-widest text-white text-opacity-40 font-bold">Global Shipping</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Product Image (Visual Flair) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 pointer-events-none hidden lg:block"
      >
        <img 
          src="https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=1000&auto=format&fit=crop" 
          alt="Premium Product"
          className="w-full rotate-12 scale-125"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
