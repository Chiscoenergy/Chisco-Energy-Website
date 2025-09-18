import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chidi Anyaegbu Jr. - Managing Director | Chisco Energy',
  description: 'Meet Chidi Anyaegbu Jr., Managing Director of Chisco Energy. Learn about his leadership in operations and business development.',
}

export default function ChidiAnyaegbuJrPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-chisco-surface via-white to-chisco-surface/50">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-chisco-navy/5 via-transparent to-chisco-petrol/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-chisco-navy mb-4">
              Chidi Anyaegbu Jr.
            </h1>
            <p className="text-xl md:text-2xl text-chisco-petrol mb-8">
              Managing Director
            </p>
            <p className="text-lg text-chisco-steel max-w-3xl mx-auto">
              Driving operational excellence and strategic growth initiatives
              to position Chisco Energy as a market leader.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-chisco-navy mb-6">About Chidi Anyaegbu Jr.</h2>

            <p className="text-chisco-steel mb-6">
              Chidi Anyaegbu Jr. serves as the Managing Director of Chisco Energy, bringing
              dynamic leadership and strategic vision to the company&apos;s operations. With a
              strong background in business administration and operational management, he
              plays a pivotal role in driving the company&apos;s growth and market expansion.
            </p>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">Professional Background</h3>
            <p className="text-chisco-steel mb-6">
              Chidi Jr. holds a degree in Business Administration and has developed extensive
              expertise in operational management, strategic planning, and business development.
              His leadership focuses on optimizing processes, enhancing customer service, and
              driving sustainable growth across all business segments.
            </p>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">Key Responsibilities</h3>
            <ul className="text-chisco-steel mb-6 space-y-2">
              <li>• Overseeing day-to-day operations and strategic initiatives</li>
              <li>• Managing business development and market expansion efforts</li>
              <li>• Leading operational efficiency and process optimization</li>
              <li>• Driving customer satisfaction and service excellence</li>
              <li>• Coordinating cross-functional teams and departments</li>
            </ul>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">Leadership Approach</h3>
            <p className="text-chisco-steel mb-6">
              Chidi Jr. is known for his hands-on approach to management and commitment to
              fostering a culture of innovation and continuous improvement. He believes in
              empowering teams, building strong relationships with stakeholders, and maintaining
              the highest standards of operational excellence.
            </p>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">Industry Contributions</h3>
            <p className="text-chisco-steel mb-6">
              Under his leadership, Chisco Energy has strengthened its position in the energy
              market through strategic partnerships, operational improvements, and commitment
              to delivering reliable energy solutions. His focus on operational efficiency and
              customer-centric approaches continues to drive the company&apos;s success and growth.
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