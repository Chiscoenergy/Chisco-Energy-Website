'use client';

import { useState } from 'react';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    quantity: '',
    deliveryLocation: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const products = [
    'Automotive Gas Oil (AGO)',
    'Dual Purpose Kerosene (DPK)',
    'Premium Motor Spirit (PMS)',
    'Low Pour Fuel Oil (LPFO)',
    'Liquefied Petroleum Gas (LPG)',
    'Engine Lubricants',
    'Industrial Lubricants',
    'Other (Please specify)'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        product: '',
        quantity: '',
        deliveryLocation: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-chisco-surface via-white to-chisco-surface/50">
      <NavBar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-chisco-navy/5 via-transparent to-chisco-petrol/5"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-chisco-navy mb-6">
              Get Quote
            </h1>
            <p className="text-lg md:text-xl text-chisco-steel max-w-2xl mx-auto leading-relaxed">
              Request a personalized quote for your fuel and energy needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Form */}
      <AnimatedSection>
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-chisco-navy mb-4">
                    Quote Request Submitted!
                  </h3>
                  <p className="text-chisco-steel text-lg">
                    Thank you for your interest. Our team will contact you within 24 hours with a personalized quote.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-chisco-navy mb-4">
                      Select Products
                    </h2>
                    <p className="text-chisco-steel">
                      Get Quote
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Personal Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-heading font-bold text-chisco-navy">Contact Information</h3>

                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-chisco-navy mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-chisco-petrol focus:border-transparent transition-all duration-300"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-chisco-navy mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-chisco-petrol focus:border-transparent transition-all duration-300"
                          placeholder="Enter your email"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-chisco-navy mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-chisco-petrol focus:border-transparent transition-all duration-300"
                          placeholder="Enter your phone number"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-chisco-navy mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-chisco-petrol focus:border-transparent transition-all duration-300"
                          placeholder="Enter your company name"
                        />
                      </div>
                    </div>

                    {/* Product Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-heading font-bold text-chisco-navy">Product Requirements</h3>

                      <div>
                        <label htmlFor="product" className="block text-sm font-semibold text-chisco-navy mb-2">
                          Product Type *
                        </label>
                        <select
                          id="product"
                          name="product"
                          required
                          value={formData.product}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-chisco-petrol focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select a product</option>
                          {products.map((product, index) => (
                            <option key={index} value={product}>{product}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="quantity" className="block text-sm font-semibold text-chisco-navy mb-2">
                          Quantity Required *
                        </label>
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          required
                          value={formData.quantity}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-chisco-petrol focus:border-transparent transition-all duration-300"
                          placeholder="e.g., 1000 liters, 500kg"
                        />
                      </div>

                      <div>
                        <label htmlFor="deliveryLocation" className="block text-sm font-semibold text-chisco-navy mb-2">
                          Delivery Location *
                        </label>
                        <input
                          type="text"
                          id="deliveryLocation"
                          name="deliveryLocation"
                          required
                          value={formData.deliveryLocation}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-chisco-petrol focus:border-transparent transition-all duration-300"
                          placeholder="City, State, Nigeria"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-chisco-navy mb-2">
                      Additional Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-chisco-petrol focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Any special requirements or additional information..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-chisco-navy to-chisco-petrol text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-chisco-petrol/25 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          Get Quote
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Info */}
      <AnimatedSection>
        <section className="py-16 px-6 bg-gradient-to-br from-chisco-navy to-chisco-petrol">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Our team is ready to help you with your energy needs
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-white font-bold mb-2">Call Us</h3>
                <p className="text-white/80 text-sm mb-3">+234 812 345 6789</p>
                <a
                  href="tel:+2348123456789"
                  className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-xl hover:bg-white/30 transition-colors text-sm"
                >
                  Call Now
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="text-3xl mb-4">💬</div>
                <h3 className="text-white font-bold mb-2">WhatsApp</h3>
                <p className="text-white/80 text-sm mb-3">Instant support</p>
                <a
                  href="https://wa.me/2348166319502?text=Hello%20Chisco%20Energy%2C%20I%27d%20like%20to%20inquire%20about%20your%20fuel%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors text-sm"
                >
                  WhatsApp Us
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-white font-bold mb-2">Email</h3>
                <p className="text-white/80 text-sm mb-3">Get in touch</p>
                <a
                  href="mailto:info@chiscoenergy.com"
                  className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-xl hover:bg-white/30 transition-colors text-sm"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Back to Home */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-chisco-navy to-chisco-petrol text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-chisco-petrol/25 transition-all duration-300 transform hover:-translate-y-1"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}