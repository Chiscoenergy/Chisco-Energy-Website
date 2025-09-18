import { motion } from 'framer-motion';

export default function Partners() {
  const partners = [
    { name: "Dangote Group", logo: "/dangote-logo.png", industry: "Manufacturing & Logistics" },
    { name: "Flour Mills Nigeria", logo: "/flour-mills-logo.png", industry: "Food Processing" },
    { name: "Julius Berger", logo: "/julius-berger-logo.png", industry: "Construction" },
    { name: "Unilever Nigeria", logo: "/unilever-logo.png", industry: "Consumer Goods" },
    { name: "Nestlé Nigeria", logo: "/nestle-logo.png", industry: "Food & Beverages" },
    { name: "Oando PLC", logo: "/oando-logo.png", industry: "Oil & Gas" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-chisco-surface/50 to-chisco-navy/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-chisco-navy mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-chisco-steel max-w-2xl mx-auto">
            We proudly serve some of Nigeria&apos;s most respected companies across various sectors
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center justify-center p-4 group"
            >
              <div className="w-full h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center group-hover:bg-white/15 transition-all duration-300 transform group-hover:-translate-y-1 shadow-lg border border-white/20 hover:shadow-xl hover:shadow-chisco-petrol/10">
                <div className="text-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-chisco-petrol to-chisco-navy rounded-xl flex items-center justify-center mx-auto mb-1 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xs font-bold text-white">
                      {partner.name.split(' ')[0][0]}{partner.name.split(' ')[1]?.[0] || ''}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-chisco-navy group-hover:text-chisco-petrol transition-colors duration-300 leading-tight block">
                    {partner.name.split(' ')[0]}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-chisco-steel">
            Join hundreds of satisfied clients who trust Chisco Energy for their energy needs
          </p>
        </motion.div>
      </div>
    </section>
  );
}
