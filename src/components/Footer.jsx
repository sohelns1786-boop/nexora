import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary pt-24 pb-12 border-t border-white border-opacity-5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-display font-bold tracking-tighter">
              NEXORA<span className="text-white text-opacity-30">.</span>
            </Link>
            <p className="text-white text-opacity-50 max-w-xs leading-relaxed">
              Redefining luxury through minimalist design and premium craftsmanship. Join the evolution.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 rounded-full glass hover:bg-white hover:text-black transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-3 rounded-full glass hover:bg-white hover:text-black transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-3 rounded-full glass hover:bg-white hover:text-black transition-all duration-300">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-white text-opacity-50 hover:text-opacity-100 transition-all">New Arrivals</Link></li>
              <li><Link to="/shop" className="text-white text-opacity-50 hover:text-opacity-100 transition-all">Best Sellers</Link></li>
              <li><Link to="/collections" className="text-white text-opacity-50 hover:text-opacity-100 transition-all">Collections</Link></li>
              <li><Link to="/sale" className="text-white text-opacity-50 hover:text-opacity-100 transition-all">Sale</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/shipping" className="text-white text-opacity-50 hover:text-opacity-100 transition-all">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="text-white text-opacity-50 hover:text-opacity-100 transition-all">FAQ</Link></li>
              <li><Link to="/contact" className="text-white text-opacity-50 hover:text-opacity-100 transition-all">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-white text-opacity-50 hover:text-opacity-100 transition-all">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Join Our Newsletter</h4>
            <p className="text-white text-opacity-50 leading-relaxed">
              Be the first to know about new collections and exclusive offers.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-full px-6 py-3 focus:outline-none focus:border-opacity-30 transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white text-black rounded-full hover:scale-105 transition-all">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white border-opacity-5 text-white text-opacity-30 text-sm">
          <p>© 2024 NEXORA. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Payment Methods: Visa, Mastercard, AMEX</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
