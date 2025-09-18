'use client';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function GasPage() {
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
            Gas Service
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Premium quality gas products including LPG, CNG, and LNG for domestic and industrial applications
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
        {/* Overview */}
        <motion.section
          className="mb-16"
          variants={itemVariants}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-chisco-navy mb-4">
              Comprehensive Gas Solutions
            </h2>
            <p className="text-lg text-chisco-steel max-w-3xl mx-auto">
              Chisco Energy is your one-stop destination for all your liquefied petroleum gas (LPG), compressed natural gas (CNG),
              and liquefied natural gas (LNG) needs. We provide premium-quality gas, competitive pricing on bulk quantities and cylinders,
              and reliable, timely deliveries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-white/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-chisco-petrol to-chisco-navy rounded-2xl flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <Image
                  src="/gas.png"
                  alt="Chisco Energy Gas Service"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <h3 className="text-xl font-heading font-bold text-chisco-navy mb-2">LPG</h3>
              <p className="text-chisco-steel text-sm">Liquefied Petroleum Gas for domestic and industrial use</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-white/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-chisco-petrol to-chisco-navy rounded-2xl flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <Image
                  src="/gas.png"
                  alt="Chisco Energy Gas Service"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <h3 className="text-xl font-heading font-bold text-chisco-navy mb-2">CNG</h3>
              <p className="text-chisco-steel text-sm">Compressed Natural Gas for efficient energy solutions</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-white/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-chisco-petrol to-chisco-navy rounded-2xl flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <Image
                  src="/gas.png"
                  alt="Chisco Energy Gas Service"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <h3 className="text-xl font-heading font-bold text-chisco-navy mb-2">LNG</h3>
              <p className="text-chisco-steel text-sm">Liquefied Natural Gas for large-scale applications</p>
            </div>
          </div>
        </motion.section>

        {/* Services */}
        <motion.section
          className="mb-16"
          variants={itemVariants}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-white/50">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-chisco-navy mb-8 text-center">
              Our Gas Services
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-chisco-petrol mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-chisco-navy">Industrial Applications</h3>
                    <p className="text-chisco-steel">Cater to industrial clients by delivering LPG in bulk for use in manufacturing processes, heating, or other industrial applications.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-chisco-petrol mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-chisco-navy">Reliable Supply</h3>
                    <p className="text-chisco-steel">Ensure a reliable and consistent supply of LPG to both domestic households and industrial facilities.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-chisco-petrol mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-chisco-navy">Technical Support</h3>
                    <p className="text-chisco-steel">Provide technical support for LPG systems, including troubleshooting, maintenance, and repairs.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-chisco-petrol mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-chisco-navy">Consultancy Services</h3>
                    <p className="text-chisco-steel">Offer consultancy services for clients looking to optimize their LPG usage, improve efficiency, and reduce costs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-chisco-surface/50 rounded-xl">
              <h3 className="text-xl font-heading font-bold text-chisco-navy mb-2">Additional Services</h3>
              <p className="text-chisco-ink">Sales and Service of assorted cylinders & Accessories</p>
            </div>
          </div>
        </motion.section>

        {/* Target Audience */}
        <motion.section
          variants={itemVariants}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-chisco-petrol/10 to-chisco-navy/10 rounded-2xl p-8 border border-chisco-petrol/20">
              <h3 className="text-2xl font-heading font-bold text-chisco-navy mb-4">For Businesses</h3>
              <p className="text-chisco-ink leading-relaxed mb-4">
                Whether you're running a business or powering your home, Chisco Energy is the partner you can trust to deliver the energy you need.
              </p>
              <ul className="space-y-2 text-chisco-ink">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-chisco-petrol mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Competitive bulk pricing
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-chisco-petrol mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Timely deliveries
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-chisco-petrol mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Premium quality products
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-chisco-navy/10 to-chisco-petrol/10 rounded-2xl p-8 border border-chisco-navy/20">
              <h3 className="text-2xl font-heading font-bold text-chisco-navy mb-4">For Homes</h3>
              <p className="text-chisco-ink leading-relaxed mb-4">
                Safe and efficient gas solutions for residential applications with reliable supply and expert support.
              </p>
              <ul className="space-y-2 text-chisco-ink">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-chisco-petrol mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cylinder delivery service
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-chisco-petrol mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Safety inspections
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-chisco-petrol mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 customer support
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          variants={itemVariants}
          className="text-center bg-gradient-to-r from-chisco-navy to-chisco-petrol text-white rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready for Gas Solutions?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us for premium gas products and expert consultancy services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
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