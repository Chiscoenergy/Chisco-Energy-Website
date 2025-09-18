import { motion } from 'framer-motion';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaPrimary?: () => void;
  ctaSecondary?: () => void;
}

export default function Hero({
  title = "Your Trusted Source for Energy Solutions",
  subtitle = "Welcome to Chisco Energy, where innovation meets energy. As a leading downstream oil and gas company, we take pride in powering progress and shaping a sustainable future. Explore our world of comprehensive energy solutions and join us in driving tomorrow's success. Let's embark on a journey of excellence together.",
  ctaPrimary,
  ctaSecondary
}: HeroProps) {
  const trustIndicators = [
    { text: "10+ Retail Outlets", delay: 0.1 },
    { text: "2 Depots", delay: 0.2 },
    { text: "50+ Tanker Trucks", delay: 0.3 },
    { text: "15 Years in Service", delay: 0.4 }
  ];

  return (
    <section className="relative py-20 px-6 bg-cover bg-center bg-no-repeat text-chisco-surface overflow-hidden bg-hero-background">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Trust indicators */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm text-chisco-surface/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {trustIndicators.map((indicator, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: indicator.delay }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span>{indicator.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto text-chisco-surface/90 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <motion.a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 bg-chisco-amber text-chisco-black font-semibold rounded-xl shadow-lg hover:bg-chisco-amber/90 transition-all duration-200 hover:shadow-xl hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>

          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-chisco-surface text-chisco-surface font-semibold rounded-xl hover:bg-chisco-surface hover:text-chisco-navy transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-chisco-surface to-transparent"></div>
    </section>
  );
}