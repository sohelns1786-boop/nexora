import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Sparkles } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver premium quality in every product and interaction."
    },
    {
      icon: Users,
      title: "Community",
      description: "We build lasting relationships with our customers and partners."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "We serve luxury seekers across the world with same dedication."
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "We constantly evolve to exceed expectations and set new standards."
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "10K+", label: "Premium Products" },
    { number: "150+", label: "Countries Served" },
    { number: "24/7", label: "Customer Support" }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter">
            ABOUT NEXORA
          </h1>
          <p className="text-white text-opacity-50 max-w-3xl mx-auto text-lg leading-relaxed">
            Redefining luxury retail through curated collections, exceptional service, and an unwavering commitment to excellence.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-dark p-12 md:p-16 rounded-[40px] mb-20"
        >
          <h2 className="text-4xl font-display font-bold mb-8">Our Story</h2>
          <div className="space-y-6 text-white text-opacity-70 text-lg leading-relaxed">
            <p>
              Founded with a singular vision to transform luxury retail, NEXORA emerged from a deep understanding of what discerning customers truly seek. We recognized a gap in the market for authentic, curated luxury experiences.
            </p>
            <p>
              What started as a passion project has evolved into a platform trusted by thousands. We believe luxury isn't just about price tags—it's about stories, craftsmanship, and the perfect blend of elegance and innovation.
            </p>
            <p>
              Today, NEXORA stands as a beacon for those who appreciate the finer things in life. We continue to raise the bar, one curated collection at a time.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2">
                {stat.number}
              </div>
              <p className="text-white text-opacity-50 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-display font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-dark p-8 rounded-2xl text-center hover:border-white hover:border-opacity-40 border border-white border-opacity-20 transition-all"
                >
                  <Icon size={40} className="mx-auto mb-4 text-white text-opacity-70" />
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-white text-opacity-60 text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-dark p-12 md:p-16 rounded-[40px] text-center"
        >
          <h2 className="text-4xl font-display font-bold mb-6">Dedicated to Your Experience</h2>
          <p className="text-white text-opacity-60 max-w-2xl mx-auto text-lg mb-8">
            Our team comprises industry veterans, designers, and luxury experts who are passionate about delivering an unparalleled shopping experience.
          </p>
          <p className="text-white text-opacity-50">
            Available 24/7 to ensure every customer receives the attention and service they deserve.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
