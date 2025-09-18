'use client';

import Link from 'next/link';
import NavBar from '@/components/NavBar';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

export default function ManagementPage() {
  const managementTeam = [
    {
      name: "Chidi Anyaegbu",
      position: "CEO/Chairman",
      profileUrl: "/management/chidi-anyaegbu"
    },
    {
      name: "Chidi Anyaegbu Jr",
      position: "Managing Director",
      profileUrl: "/management/chidi-anyaegbu-jr"
    },
    {
      name: "Joseph Kalu",
      position: "Head of Trade & Business Strategy",
      profileUrl: "/management/joseph-kalu"
    },
    {
      name: "Fakorede Sunday",
      position: "Head of Accounts",
      profileUrl: "/management/fakorede-sunday"
    },
    {
      name: "Kingsley Uzoaru",
      position: "Head of Human Resources",
      profileUrl: "/management/kingsley-uzoaru"
    },
    {
      name: "Lawal Adeyemi",
      position: "Head of Operations & Supply Chain",
      profileUrl: "/management/lawal-adeyemi"
    },
    {
      name: "Muhammad Kabir",
      position: "Depot Manager",
      profileUrl: "https://chiscoenergy.com/engineer-muhammad-kabir/"
    }
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
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
              Management Team
            </h1>
            <p className="text-lg md:text-xl text-chisco-steel max-w-2xl mx-auto leading-relaxed">
              The Chisco Group Management Team is responsible for providing advice and recommendations to the Board of Directors, setting the strategy, and running the operations of the company.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Management Team Grid */}
      <AnimatedSection>
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {managementTeam.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl hover:shadow-chisco-petrol/20 transition-all duration-500 transform hover:-translate-y-2 group"
                >
                  {/* Profile Picture Placeholder */}
                  <div className="w-24 h-24 bg-gradient-to-br from-chisco-petrol to-chisco-navy rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ')[0][0]}{member.name.split(' ')[1]?.[0] || ''}
                    </span>
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-chisco-black mb-2 group-hover:text-chisco-petrol transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-chisco-petrol font-semibold mb-4 text-sm md:text-base">
                      {member.position}
                    </p>

                    {/* View Profile Button */}
                    {member.profileUrl.startsWith('/') ? (
                      <Link
                        href={member.profileUrl}
                        className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-chisco-black font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 text-sm group-hover:shadow-lg"
                      >
                        View Profile
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    ) : (
                      <a
                        href={member.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-chisco-black font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 text-sm group-hover:shadow-lg"
                      >
                        View Profile
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Leadership Message */}
      <AnimatedSection>
        <section className="py-16 px-6 bg-gradient-to-br from-chisco-navy to-chisco-petrol">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                Our Leadership Philosophy
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Our management team combines decades of experience in the energy sector with innovative thinking to drive Chisco Energy's mission of providing reliable, high-quality fuel solutions across Nigeria.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl mb-2">🎯</div>
                  <h3 className="text-white font-bold mb-2">Strategic Vision</h3>
                  <p className="text-white/80 text-sm">Setting the direction for sustainable growth</p>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl mb-2">🤝</div>
                  <h3 className="text-white font-bold mb-2">Team Excellence</h3>
                  <p className="text-white/80 text-sm">Fostering collaboration and innovation</p>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl mb-2">⚡</div>
                  <h3 className="text-white font-bold mb-2">Operational Excellence</h3>
                  <p className="text-white/80 text-sm">Delivering reliable energy solutions</p>
                </div>
              </div>
            </motion.div>
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