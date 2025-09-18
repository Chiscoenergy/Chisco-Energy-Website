import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chidi Anyaegbu - CEO/Chairman | Chisco Energy',
  description: 'Meet Chidi Anyaegbu, CEO and Chairman of Chisco Energy. Learn about his extensive background in energy, finance, and business leadership.',
}

export default function ChidiAnyaegbuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-chisco-surface via-white to-chisco-surface/50">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-chisco-navy/5 via-transparent to-chisco-petrol/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-chisco-navy mb-4">
              Chidi Anyaegbu
            </h1>
            <p className="text-xl md:text-2xl text-chisco-petrol mb-8">
              CEO & Chairman
            </p>
            <p className="text-lg text-chisco-steel max-w-3xl mx-auto">
              A visionary leader with over three decades of experience in the energy sector,
              driving innovation and sustainable growth across Africa.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-chisco-navy mb-6">About Chidi Anyaegbu</h2>

            <p className="text-chisco-steel mb-6">
              Chidi Anyaegbu is a seasoned entrepreneur and business leader with over 30 years of
              experience in the energy sector. As CEO and Chairman of Chisco Energy, he has been
              instrumental in transforming the company into one of Nigeria's leading energy
              distribution companies.
            </p>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">Professional Background</h3>
            <p className="text-chisco-steel mb-6">
              Chidi holds a Master's degree in Business Administration and has extensive experience
              in corporate finance, strategic planning, and business development. His career spans
              multiple industries including energy, telecommunications, and manufacturing.
            </p>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">Leadership Experience</h3>
            <ul className="text-chisco-steel mb-6 space-y-2">
              <li>• CEO and Chairman of Chisco Energy Limited</li>
              <li>• Former Director of various multinational corporations</li>
              <li>• Extensive experience in corporate governance and strategic planning</li>
              <li>• Proven track record in business expansion and market development</li>
            </ul>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">Industry Expertise</h3>
            <p className="text-chisco-steel mb-6">
              With deep knowledge of the African energy market, Chidi has successfully navigated
              complex regulatory environments and market dynamics. His expertise includes:
            </p>
            <ul className="text-chisco-steel mb-6 space-y-2">
              <li>• Energy distribution and retail operations</li>
              <li>• Strategic partnerships and business development</li>
              <li>• Regulatory compliance and government relations</li>
              <li>• Sustainable energy solutions and innovation</li>
            </ul>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">Vision for Chisco Energy</h3>
            <p className="text-chisco-steel mb-6">
              Under Chidi's leadership, Chisco Energy continues to expand its footprint across
              Nigeria, providing reliable energy solutions while contributing to economic
              development and job creation. His commitment to excellence and innovation drives
              the company's mission to be the trusted source for energy solutions.
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