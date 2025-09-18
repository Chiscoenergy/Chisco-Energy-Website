'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="py-16 px-6 bg-chisco-surface">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-chisco-navy mb-4">
            Stay Updated with Industry Insights
          </h2>
          <p className="text-chisco-steel mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates on fuel prices, industry news,
            and exclusive offers from Chisco Energy.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-chisco-petrol focus:border-transparent"
                  required
                />
                <motion.button
                  type="submit"
                  className="px-6 py-3 bg-chisco-petrol text-white font-semibold rounded-lg hover:bg-chisco-navy transition-colors duration-300 whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-md mx-auto"
            >
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span className="text-green-800 font-medium">Successfully subscribed!</span>
              </div>
            </motion.div>
          )}

          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-chisco-steel"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span>✓ Weekly fuel price updates</span>
            <span>✓ Industry news & insights</span>
            <span>✓ Exclusive offers</span>
            <span>✓ Safety tips</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}