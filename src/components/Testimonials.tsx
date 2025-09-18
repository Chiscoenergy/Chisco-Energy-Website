import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Chisco Energy has been our reliable partner for over 5 years. Their fuel quality and delivery service are consistently excellent.",
      author: "John Adebayo",
      position: "Fleet Manager, Lagos Transport Company",
      rating: 5
    },
    {
      quote: "The professionalism and safety standards at Chisco Energy depots are impressive. They truly prioritize customer satisfaction.",
      author: "Mrs. Fatima Ibrahim",
      position: "Operations Director, Northern Industries Ltd",
      rating: 5
    },
    {
      quote: "From retail outlets to bulk deliveries, Chisco Energy delivers on their promises. Highly recommended for businesses.",
      author: "Emeka Okafor",
      position: "CEO, Okafor Logistics",
      rating: 5
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 px-6 bg-chisco-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-chisco-navy mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-chisco-steel max-w-2xl mx-auto">
            Trusted by businesses across Nigeria for reliable energy solutions
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl hover:bg-white/90 transition-all duration-500 transform hover:-translate-y-3 h-full relative overflow-hidden group"
            >
              {/* Glass effect gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-chisco-petrol/10 via-transparent to-chisco-amber/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-chisco-amber" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-chisco-steel mb-6 italic leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div>
                  <div className="font-semibold text-chisco-navy">{testimonial.author}</div>
                  <div className="text-sm text-chisco-steel">{testimonial.position}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}