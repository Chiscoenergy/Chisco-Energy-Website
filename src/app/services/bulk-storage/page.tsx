'use client';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BulkStoragePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <div className="min-h-screen bg-gradient-to-br from-chisco-surface via-white to-chisco-surface/50">
      <NavBar />

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-chisco-petrol/80 to-chisco-navy/80 text-chisco-surface overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            Bulk Storage
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            State-of-the-art storage facilities ensuring continuous availability of high-quality energy products
          </p>
        </div>
      </section>

      {/* Main Content */}
      <motion.div
        className="max-w-6xl mx-auto px-6 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {/* Storage Facilities */}
        <motion.section
          className="mb-16"
          variants={itemVariants}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-chisco-navy mb-6">
                Advanced Storage Solutions
              </h2>
              <p className="text-lg text-chisco-ink leading-relaxed mb-6">
                At Chisco Energy, we are dedicated to ensuring the continuous availability of high-quality energy products to meet the diverse needs of our valued customers.
                Our commitment to excellence is reflected in our Bulk Storage facilities, strategically located in Apapa and Surulere, boasting a combined storage capacity of 40 million liters.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-chisco-petrol mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-chisco-ink">40 million liters combined storage capacity</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-chisco-petrol mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-chisco-ink">Strategic locations in Apapa and Surulere</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-chisco-petrol mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-chisco-ink">Reliable supply for retail stations and industrial customers</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">
                <Image
                  src="/bulk-storage.png"
                  alt="Chisco Energy Bulk Storage Facilities"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Expanding Capacities */}
        <motion.section
          className="mb-16"
          variants={itemVariants}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-white/50">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-chisco-navy mb-4">
                Expanding Capacities for Greater Support
              </h2>
              <p className="text-lg text-chisco-steel max-w-3xl mx-auto">
                Chisco Energy is continuously investing in expanding our storage capacities to reinforce our commitment to providing unparalleled supply and distribution support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-bold text-chisco-navy">Our Commitment</h3>
                <p className="text-chisco-ink leading-relaxed">
                  Our efforts are geared towards accommodating the growing demand from our network of retail stations and industrial clients,
                  ensuring that they receive the energy products they need, precisely when they need them.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-heading font-bold text-chisco-navy">Reliable Supply Chain</h3>
                <p className="text-chisco-ink leading-relaxed">
                  Whether you&apos;re a retail station looking for a consistent supply or an industrial customer with specific energy needs,
                  we&apos;ve got you covered with our state-of-the-art bulk storage facilities.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="text-center bg-gradient-to-r from-chisco-navy to-chisco-petrol text-white rounded-2xl p-12"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Need Bulk Storage Solutions?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us for information on our bulk storage services and capacity availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/2348166319502?text=Hello%20Chisco%20Energy%2C%20I%27d%20like%20to%20inquire%20about%20your%20bulk%20storage%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-chisco-amber text-chisco-black font-semibold rounded-xl shadow-lg hover:bg-chisco-amber/90 transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              Contact Us
            </a>
            <a
              href="mailto:info@chiscoenergy.com"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-chisco-navy transition-all duration-200"
            >
              Email Inquiry
            </a>
          </div>
        </motion.section>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
