import { motion } from 'framer-motion';
import { FaStore, FaWarehouse, FaTruck, FaClock } from 'react-icons/fa';

export default function Statistics() {
  const stats = [
    {
      number: "10+",
      label: "Retail Outlets",
      description: "More than 12 stations located throughout the country",
      icon: <FaStore className="w-12 h-12" />
    },
    {
      number: "2",
      label: "Depots",
      description: "Two cutting-edge depots, with a combined storage capacity of 40 million liters",
      icon: <FaWarehouse className="w-12 h-12" />
    },
    {
      number: "50+",
      label: "Tanker Trucks",
      description: "We manage a fleet of 50 trucks",
      icon: <FaTruck className="w-12 h-12" />
    },
    {
      number: "15",
      label: "Years in Service",
      description: "15 years delivering exceptional & quality service to our clients",
      icon: <FaClock className="w-12 h-12" />
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
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-chisco-navy mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-chisco-steel max-w-2xl mx-auto">
            Building trust through consistent performance and nationwide presence
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={itemVariants}
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl px-6 py-6 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-3xl hover:shadow-chisco-petrol/20 min-h-[280px] flex flex-col justify-center relative overflow-hidden group">
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-chisco-amber mb-2 flex items-center justify-center w-16 h-16 mx-auto">
                    {stat.icon}
                  </div>
                  <motion.div
                    className="text-4xl md:text-5xl font-heading font-bold text-white mb-2"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xl font-semibold text-chisco-amber mb-3">
                    {stat.label}
                  </div>
                  <p className="text-chisco-steel text-sm leading-relaxed flex-grow">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}