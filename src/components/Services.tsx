'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "Retail",
      description: "Convenient retail outlets providing quality fuel products across multiple locations nationwide.",
      slug: "retail",
      image: "/retail.png"
    },
    {
      title: "Bulk Storage",
      description: "State-of-the-art depot facilities with extensive storage capacity for large-scale fuel requirements.",
      slug: "bulk-storage",
      image: "/bulk-storage.png"
    },
    {
      title: "Haulage",
      description: "Professional transportation services with a modern fleet ensuring safe and timely deliveries.",
      slug: "haulage",
      image: "/haulage.png"
    },
    {
      title: "Gas",
      description: "Premium gas products meeting industry standards for various applications and requirements.",
      slug: "gas",
      image: "/gas.png"
    },
    {
      title: "Lube Oil",
      description: "High-performance lubricants and oils designed to optimize equipment performance and longevity.",
      slug: "lube-oil",
      image: "/lube-oil.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-br from-chisco-surface/50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-chisco-navy mb-4">
            Our Services
          </h2>
          <p className="text-lg text-chisco-steel max-w-2xl mx-auto">
            Comprehensive energy solutions tailored to meet your business needs
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Link href={`/services/${service.slug}`} className="group">
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl hover:bg-white/90 transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 h-full relative overflow-hidden">
                  {/* Glass effect gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-chisco-petrol/10 via-transparent to-chisco-amber/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-full h-48 mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-chisco-navy mb-4 group-hover:text-chisco-petrol transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-chisco-steel leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-4 text-chisco-petrol font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn More →
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}