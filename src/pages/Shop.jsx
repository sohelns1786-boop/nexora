import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Search, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('Featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Set initial category from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'Price: Low to High') return a.price - b.price;
        if (sortBy === 'Price: High to Low') return b.price - a.price;
        return 0; // Featured/Default
      });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter">THE SHOP</h1>
          <p className="text-white text-opacity-50 max-w-lg">
            Browse our full collection of premium essentials, carefully designed for the modern lifestyle.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col gap-6 mb-12">
          {/* Categories - All Devices */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSearchParams(cat === 'All' ? {} : { category: cat });
                }}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === cat 
                  ? 'bg-white text-black' 
                  : 'glass hover:bg-white hover:bg-opacity-5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Sort */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-opacity-30" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-full py-2.5 pl-12 pr-6 focus:outline-none focus:border-opacity-30"
              />
            </div>
            
            <div className="relative group">
              <button className="glass px-6 py-2.5 rounded-full text-sm font-semibold flex items-center space-x-2 w-full sm:w-auto justify-center">
                <span>{sortBy}</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 glass-dark rounded-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                {['Featured', 'Price: Low to High', 'Price: High to Low'].map((option) => (
                  <button
                    key={option}
                    onClick={() => setSortBy(option)}
                    className="w-full text-left px-4 py-2 rounded-xl text-sm hover:bg-white hover:bg-opacity-10 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-32 text-center">
            <p className="text-2xl font-display text-white text-opacity-30">No products found for your selection.</p>
            <button 
              onClick={() => {setSelectedCategory('All'); setSearchQuery('');}}
              className="mt-6 text-white border-b border-white border-opacity-20 pb-1"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
