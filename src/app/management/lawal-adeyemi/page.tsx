import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lawal Adeyemi - Head of Operations & Supply Chain | Chisco Energy',
  description: 'Meet Lawal Adeyemi, Head of Operations & Supply Chain at Chisco Energy. Learn about his expertise in operational management and supply chain optimization.',
}

export default function LawalAdeyemiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-chisco-surface via-white to-chisco-surface/50">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-chisco-navy/5 via-transparent to-chisco-petrol/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-chisco-navy mb-4">
              Lawal Adeyemi
            </h1>
            <p className="text-xl md:text-2xl text-chisco-petrol mb-8">
              Head of Operations & Supply Chain
            </p>
            <p className="text-lg text-chisco-steel max-w-3xl mx-auto">
              Driving operational excellence and supply chain efficiency to ensure
              reliable energy distribution nationwide.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-chisco-navy mb-6">About Lawal Adeyemi</h2>

            <p className="text-chisco-steel mb-6">
              Lawal Adeyemi serves as Head of Operations & Supply Chain at Chisco Energy,
              bringing extensive accounting and operational experience to lead the company&apos;s
              nationwide operations. As an Associate Member of the Institute of Chartered
              Accountants of Nigeria, he combines financial acumen with operational expertise
              to optimize supply chain management and ensure efficient energy distribution.
            </p>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">Professional Background</h3>
            <p className="text-chisco-steel mb-6">
              Lawal holds a Higher National Diploma in Accountancy and is an Associate Member
              of the Institute of Chartered Accountants of Nigeria. His diverse experience across
              different organizations has equipped him with comprehensive knowledge in accounting,
              operational management, and supply chain optimization.
            </p>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">Operational Leadership</h3>
            <ul className="text-chisco-steel mb-6 space-y-2">
              <li>• Leading nationwide operations and depot management</li>
              <li>• Overseeing supply chain and logistics operations</li>
              <li>• Managing operational efficiency and process optimization</li>
              <li>• Coordinating station and depot operations</li>
              <li>• Ensuring compliance with operational standards</li>
            </ul>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">Supply Chain Expertise</h3>
            <p className="text-chisco-steel mb-6">
              Lawal&apos;s expertise in supply chain management includes:
            </p>
            <ul className="text-chisco-steel mb-6 space-y-2">
              <li>• Strategic supply chain planning and optimization</li>
              <li>• Inventory management and control systems</li>
              <li>• Logistics coordination and transportation management</li>
              <li>• Supplier relationship management</li>
              <li>• Risk management and contingency planning</li>
            </ul>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">Financial-Operational Integration</h3>
            <p className="text-chisco-steel mb-6">
              With his strong accounting background, Lawal brings a unique perspective to
              operational management. He integrates financial planning with operational strategies,
              ensuring cost-effective operations while maintaining high service standards. His
              approach balances operational efficiency with financial prudence.
            </p>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">National Operations Oversight</h3>
            <p className="text-chisco-steel mb-6">
              Lawal oversees Chisco Energy&apos;s extensive network of stations and depots across
              Nigeria. His leadership ensures consistent service quality, operational reliability,
              and efficient distribution of energy products nationwide. He works closely with
              regional teams to maintain operational excellence and customer satisfaction.
            </p>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">Commitment to Excellence</h3>
            <p className="text-chisco-steel mb-6">
              Lawal is committed to continuous improvement and innovation in operations. His
              focus on operational efficiency, supply chain optimization, and team development
              contributes significantly to Chisco Energy&apos;s position as a reliable energy solutions
              provider.
            </p>
          </div>
        </div>
      </div>

      {/* Back to Management */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center">
          <a
            href="/management"
            className="inline-flex items-center px-6 py-3 bg-chisco-navy hover:bg-chisco-navy/90 text-white font-medium rounded-lg transition-colors duration-200"
          >
            ← Back to Management Team
          </a>
        </div>
      </div>
    </div>
  )
}
