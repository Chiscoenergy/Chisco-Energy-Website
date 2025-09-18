'use client';

import Link from 'next/link';
import NavBar from '@/components/NavBar';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

export default function CareersPage() {
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
              Build the Future of Petroleum with Us
            </h1>
            <p className="text-lg md:text-xl text-chisco-steel max-w-2xl mx-auto leading-relaxed">
              Join our dynamic team and contribute to Nigeria&apos;s energy sector excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Status */}
      <AnimatedSection>
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 bg-chisco-petrol/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-chisco-petrol" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-chisco-navy mb-4">
                  We&apos;re Not Hiring at the Moment
                </h2>
                <p className="text-chisco-steel text-lg leading-relaxed mb-8">
                  Thank you for your interest in joining Chisco Energy. Currently, we don&apos;t have any job openings.
                  However, we encourage you to stay connected with us through our social media platforms.
                </p>
                <p className="text-chisco-steel text-base leading-relaxed mb-8">
                  We believe in building a community that shares our passion for excellence and innovation.
                  By following us on Instagram and LinkedIn, you&apos;ll stay updated on any new job opportunities and company news.
                </p>
                <p className="text-chisco-navy font-semibold">
                  Your interest in Chisco Energy is appreciated, and we look forward to connecting with you in the future.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Join Us */}
      <AnimatedSection>
        <section className="py-16 px-6 bg-gradient-to-br from-chisco-navy to-chisco-petrol">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Why Join Chisco Energy?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Be part of a team that&apos;s shaping Nigeria&apos;s energy future
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description: "Work with cutting-edge technology and modern fuel solutions",
                  icon: "🚀"
                },
                {
                  title: "Growth",
                  description: "Continuous learning and professional development opportunities",
                  icon: "📈"
                },
                {
                  title: "Impact",
                  description: "Contribute to Nigeria's energy security and economic development",
                  icon: "💡"
                },
                {
                  title: "Teamwork",
                  description: "Collaborate with passionate professionals in a supportive environment",
                  icon: "🤝"
                },
                {
                  title: "Excellence",
                  description: "Maintain the highest standards in everything we do",
                  icon: "⭐"
                },
                {
                  title: "Community",
                  description: "Be part of a company that gives back to local communities",
                  icon: "🌍"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center group hover:bg-white/15 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Stay Connected */}
      <AnimatedSection>
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-chisco-navy mb-6">
              Stay Connected
            </h2>
            <p className="text-chisco-steel text-lg mb-8">
              Follow us on social media to stay updated on new opportunities and company news
            </p>

            <div className="flex justify-center space-x-6">
              <a
                href="https://en-gb.facebook.com/people/Chisco-Energy/100016923426526"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              >
                <svg className="w-8 h-8 text-chisco-navy group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/Chisco-energy-nigeria-limited-002754145"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              >
                <svg className="w-8 h-8 text-chisco-navy group-hover:text-blue-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            <div className="mt-8">
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
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}