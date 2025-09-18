import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Joseph Kalu - Head of Trade & Business Strategy | Chisco Energy',
  description: 'Meet Joseph Kalu, Head of Trade & Business Strategy at Chisco Energy. Learn about his expertise in strategic planning and business development.',
}

export default function JosephKaluPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-chisco-surface via-white to-chisco-surface/50">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-chisco-navy/5 via-transparent to-chisco-petrol/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-chisco-navy mb-4">
              Joseph Kalu
            </h1>
            <p className="text-xl md:text-2xl text-chisco-petrol mb-8">
              Head of Trade & Business Strategy
            </p>
            <p className="text-lg text-chisco-steel max-w-3xl mx-auto">
              Strategic thinker driving business growth and market expansion
              through innovative trade solutions and strategic partnerships.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-chisco-navy mb-6">About Joseph Kalu</h2>

            <p className="text-chisco-steel mb-6">
              Joseph Kalu serves as Head of Trade & Business Strategy at Chisco Energy, bringing
              extensive experience in strategic planning, business development, and market analysis.
              His expertise in economics and business administration enables him to drive innovative
              strategies that enhance Chisco Energy&apos;s competitive position in the energy market.
            </p>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">Professional Background</h3>
            <p className="text-chisco-steel mb-6">
              Joseph holds a degree in Economics and Business Administration, complemented by
              advanced training in strategic management and business development. His career
              has focused on developing comprehensive business strategies, identifying market
              opportunities, and building strategic partnerships that drive sustainable growth.
            </p>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">Strategic Leadership</h3>
            <ul className="text-chisco-steel mb-6 space-y-2">
              <li>• Developing and implementing business strategies for market expansion</li>
              <li>• Leading trade operations and partnership development</li>
              <li>• Conducting market analysis and competitive intelligence</li>
              <li>• Managing strategic initiatives and business development projects</li>
              <li>• Optimizing trade relationships and supplier networks</li>
            </ul>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">Key Achievements</h3>
            <p className="text-chisco-steel mb-6">
              Joseph&apos;s strategic initiatives have contributed significantly to Chisco Energy&apos;s
              growth and market presence. His work in trade strategy and business development
              has helped establish new market channels, strengthen supplier relationships, and
              create competitive advantages in the energy distribution sector.
            </p>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">Industry Expertise</h3>
            <p className="text-chisco-steel mb-6">
              With deep knowledge of the energy trade landscape, Joseph excels in:
            </p>
            <ul className="text-chisco-steel mb-6 space-y-2">
              <li>• Strategic planning and business development</li>
              <li>• Trade operations and supply chain management</li>
              <li>• Market analysis and competitive strategy</li>
              <li>• Partnership development and relationship management</li>
              <li>• Risk assessment and mitigation strategies</li>
            </ul>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">Vision for Growth</h3>
            <p className="text-chisco-steel mb-6">
              Joseph is committed to positioning Chisco Energy as a strategic leader in the
              energy sector through innovative trade solutions, strategic partnerships, and
              market-driven initiatives that create long-term value for stakeholders.
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
