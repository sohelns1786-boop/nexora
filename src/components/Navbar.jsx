import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User as UserIcon, Search, Menu, X, Package, Settings, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const { cartCount } = useCart();
  const { user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and dropdown on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 glass-dark shadow-2xl' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-display font-bold tracking-tighter hover:opacity-80 transition-opacity">
          NEXORA<span className="text-white text-opacity-30">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/" className="nav-link font-medium">Home</Link>
          <Link to="/shop" className="nav-link font-medium">Shop</Link>
          <Link to="/collections" className="nav-link font-medium">Collections</Link>
          <Link to="/about" className="nav-link font-medium">About</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6 relative">
          <button className="text-white text-opacity-70 hover:text-opacity-100 transition-all">
            <Search size={20} />
          </button>
          
          {/* User Account / Dropdown */}
          {user ? (
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs tracking-wider border border-white border-opacity-20 cursor-pointer shadow-lg hover:scale-105 active:scale-95 transition-all focus:outline-none ${user.color ? '' : 'bg-white text-black'}`}
                style={user.color ? { backgroundColor: user.color, color: '#ffffff' } : {}}
              >
                {user.initials || user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <>
                    {/* Backdrop Click Shield to close dropdown on click outside */}
                    <div 
                      className="fixed inset-0 z-40 cursor-default" 
                      onClick={() => setIsDropdownOpen(false)} 
                    />
                    
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute right-0 top-full mt-4 w-72 glass-dark p-6 rounded-[24px] shadow-2xl border border-white border-opacity-[0.08] z-50 text-left pointer-events-auto"
                      style={{ boxShadow: '0 20px 40px -15px rgba(0,0,0,0.7), 0 1px 1px 0 rgba(255,255,255,0.05) inset' }}
                    >
                      <div className="mb-4">
                        <span className="text-[9px] uppercase font-bold tracking-widest text-white text-opacity-30">Luxury Member</span>
                        <h4 className="text-base font-display font-bold text-white mt-1 leading-tight truncate">{user.name}</h4>
                        <span className="text-xs text-white text-opacity-40 font-mono truncate block mt-0.5">{user.email}</span>
                      </div>
                      
                      <div className="border-t border-white border-opacity-5 my-4"></div>
                      
                      <div className="space-y-1.5">
                        <Link 
                          to="/orders" 
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center space-x-3 text-sm text-white text-opacity-60 hover:text-opacity-100 hover:bg-white hover:bg-opacity-5 p-2 rounded-xl transition-all"
                        >
                          <Package size={15} className="text-white text-opacity-45" />
                          <span className="font-medium">My Orders</span>
                        </Link>
                        <Link 
                          to="/settings" 
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center space-x-3 text-sm text-white text-opacity-60 hover:text-opacity-100 hover:bg-white hover:bg-opacity-5 p-2 rounded-xl transition-all"
                        >
                          <Settings size={15} className="text-white text-opacity-45" />
                          <span className="font-medium">Account Settings</span>
                        </Link>
                      </div>
                      
                      <div className="border-t border-white border-opacity-5 my-4"></div>
                      
                      <button 
                        onClick={() => {
                          setIsDropdownOpen(false);
                          logout();
                        }}
                        className="w-full py-2.5 rounded-xl border border-red-500 border-opacity-20 hover:border-opacity-45 bg-red-500 bg-opacity-[0.02] hover:bg-opacity-[0.08] text-red-400 hover:text-red-300 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center space-x-2"
                      >
                        <LogOut size={13} />
                        <span>Sign Out</span>
                      </button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link to="/login" className="text-white text-opacity-70 hover:text-opacity-100 transition-all">
              <UserIcon size={20} />
            </Link>
          )}

          {/* Cart Icon */}
          <Link to="/cart" className="relative group">
            <ShoppingBag size={20} className="text-white text-opacity-70 group-hover:text-opacity-100 transition-all" />
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-white text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full"
              >
                {cartCount}
              </motion.span>
            )}
          </Link>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-dark py-10 px-6 flex flex-col space-y-6 md:hidden z-50 shadow-2xl"
          >
            <Link to="/" className="text-2xl font-medium border-b border-white border-opacity-10 pb-4">Home</Link>
            <Link to="/shop" className="text-2xl font-medium border-b border-white border-opacity-10 pb-4">Shop</Link>
            <Link to="/collections" className="text-2xl font-medium border-b border-white border-opacity-10 pb-4">Collections</Link>
            
            {user ? (
              <div className="flex flex-col space-y-4 pt-4 border-t border-white border-opacity-10">
                <div className="flex items-center space-x-4 mb-2">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border border-white border-opacity-20 ${user.color ? '' : 'bg-white text-black'}`}
                    style={user.color ? { backgroundColor: user.color, color: '#ffffff' } : {}}
                  >
                    {user.initials || user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                  </div>
                  <div>
                    <h4 className="text-base font-display font-bold text-white leading-tight">{user.name}</h4>
                    <p className="text-xs text-white text-opacity-40 font-mono">{user.email}</p>
                  </div>
                </div>
                
                <Link to="/orders" className="text-xl font-medium border-b border-white border-opacity-10 pb-4 pl-1">
                  My Orders
                </Link>
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    logout();
                  }}
                  className="text-xl font-medium text-red-400 hover:text-red-300 text-left pl-1 flex items-center space-x-2 pt-2"
                >
                  <LogOut size={20} />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <Link to="/login" className="text-2xl font-medium">Account</Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
