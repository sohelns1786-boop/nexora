import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Collections = () => {
  const collections = [
    {
      title: "Watches",
      description: "Cutting-edge timepieces meet sleek design. Premium watches curated for modern living.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000",
      items: 142,
      color: "#1a73e8",
      category: "Watches"
    },
    {
      title: "Audio",
      description: "Timeless audio pieces that define elegance. Hand-selected audio items for discerning taste.",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1000",
      items: 89,
      color: "#e27300",
      category: "Audio"
    },
    {
      title: "Accessories",
      description: "Transform your style with contemporary accessories. Curated items that inspire.",
      image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=1000",
      items: 156,
      color: "#d33527",
      category: "Accessories"
    },
    {
      title: "Lifestyle",
      description: "Artisanal lifestyle collections showcasing premium craftsmanship. Each piece tells a story.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000",
      items: 73,
      color: "#208748",
      category: "Lifestyle"
    },
    {
      title: "Apparel",
      description: "Exclusive apparel available in limited quantities. Own something truly unique.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000",
      items: 34,
      color: "#a50e4e",
      category: "Apparel"
    },
    {
      title: "Footwear",
      description: "Eco-friendly premium footwear. Luxury that cares for our planet.",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1000",
      items: 67,
      color: "#0d5e3e",
      category: "Footwear"
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter">
            COLLECTIONS
          </h1>
          <p className="text-white text-opacity-50 max-w-2xl mx-auto text-lg">
            Explore our carefully curated collections, each representing a unique vision of luxury and style.
          </p>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link
              key={collection.title}
              to={`/shop?category=${collection.category}`}
              className="no-underline"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-3xl cursor-pointer"
              >
                {/* Background Image */}
                <div className="absolute inset-0 h-96">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>

                {/* Content */}
                <div className="relative h-96 p-8 flex flex-col justify-between">
                  <div>
                    <span
                      className="inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-4"
                      style={{ backgroundColor: collection.color, opacity: 0.9 }}
                    >
                      {collection.items} Items
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl font-display font-bold text-white leading-tight">
                      {collection.title}
                    </h3>
                    <p className="text-white text-opacity-80 text-sm leading-relaxed">
                      {collection.description}
                    </p>

                    <button className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white border-b-2 border-white border-opacity-40 pb-2 group-hover:border-opacity-100 transition-all">
                      Explore
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Featured Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 glass-dark p-12 md:p-16 rounded-[40px] text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Curated by Luxury Experts
          </h2>
          <p className="text-white text-opacity-60 max-w-2xl mx-auto mb-10 text-lg">
            Every collection is thoughtfully assembled by our team of expert curators, ensuring only the finest items make it to our platform.
          </p>
          <Link to="/shop" className="premium-button inline-flex items-center">
            Browse All Products
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Collections;
