import { Metadata } from 'next'
import Link from 'next/link'
import NavBar from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Peter Echezonam - Head of Operations & Supply Chain | Chisco Energy',
  description: 'Meet Peter Echezonam, Head of Operations & Supply Chain at Chisco Energy. Learn about his expertise in operational management and supply chain optimization.',
}

export default function PeterEchezonamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-chisco-surface via-white to-chisco-surface/50">
      <NavBar />
      
      {/* Profile Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="text-center mb-12">
            <div className="w-32 h-32 bg-gradient-to-br from-chisco-petrol to-chisco-navy rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl font-bold text-white">PE</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-chisco-navy mb-2">
              Peter Echezonam
            </h1>
            <p className="text-xl text-chisco-petrol font-semibold mb-6">
              Head of Operations & Supply Chain
            </p>
          </div>

          {/* About Section */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl mb-8">
            <h2 className="text-3xl font-semibold text-chisco-navy mb-6">About Peter Echezonam</h2>
            <div className="space-y-4 text-chisco-steel text-lg leading-relaxed">
              <p>
                Peter Echezonam serves as Head of Operations & Supply Chain at Chisco Energy,
                bringing extensive expertise in operational management, logistics coordination,
                and supply chain optimization to ensure efficient energy distribution across Nigeria.
              </p>
              <p>
                His leadership encompasses the strategic oversight of depot operations, inventory management,
                and supply chain logistics, ensuring seamless fuel distribution and maintaining
                the highest standards of operational excellence throughout the organization.
              </p>
              <p>
                With a proven track record in operational management and supply chain optimization,
                Peter plays a pivotal role in maintaining Chisco Energy's reputation for reliability
                and operational efficiency in the competitive energy sector.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4 mt-8">Operational Leadership</h3>
            <ul className="text-chisco-steel space-y-2">
              <li>• Leading nationwide operations and depot management</li>
              <li>• Strategic operational planning and execution</li>
              <li>• Quality control and safety compliance oversight</li>
              <li>• Operational efficiency optimization</li>
              <li>• Cross-functional team coordination</li>
              <li>• Performance monitoring and improvement initiatives</li>
            </ul>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4 mt-8">Supply Chain Excellence</h3>
            <p className="text-chisco-steel text-lg leading-relaxed mb-4">
              Peter's expertise in supply chain management includes:
            </p>
            <ul className="text-chisco-steel space-y-2">
              <li>• End-to-end supply chain strategy and planning</li>
              <li>• Inventory management and control systems</li>
              <li>• Logistics coordination and transportation management</li>
              <li>• Supplier relationship management</li>
              <li>• Risk management and contingency planning</li>
              <li>• Cost optimization and efficiency improvements</li>
            </ul>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4 mt-8">Strategic Impact</h3>
            <p className="text-chisco-steel text-lg leading-relaxed">
              Peter combines operational excellence with financial acumen in his approach to
              operational management. He integrates financial planning with operational strategies,
              ensuring that Chisco Energy's operations are not only efficient but also
              financially sustainable and profitable.
            </p>

            <p className="text-chisco-steel text-lg leading-relaxed mt-4">
              His leadership extends across multiple operational hubs and distribution centers throughout
              Nigeria. His leadership ensures consistent service quality, operational reliability,
              and customer satisfaction while managing complex logistics networks and coordinating
              regional teams to maintain operational excellence and customer satisfaction.
            </p>

            <p className="text-chisco-steel text-lg leading-relaxed mt-4">
              Under Peter's guidance, Chisco Energy continues to strengthen its market position through
              strategic operational improvements, enhanced supply chain efficiency, and a steadfast
              focus on operational efficiency, supply chain optimization, and team development
              that drives sustainable growth in the energy sector.
            </p>
          </div>
        </div>
      </section>

      {/* Back to Management */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/management"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-chisco-navy to-chisco-petrol text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-chisco-petrol/25 transition-all duration-300 transform hover:-translate-y-1"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            ← Back to Management Team
          </Link>
        </div>
      </section>
    </div>
  )
}