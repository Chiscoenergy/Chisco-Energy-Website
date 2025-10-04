import { Metadata } from 'next'
import Link from 'next/link'
import NavBar from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'Enuma Okoh - Head of Human Resources | Chisco Energy',
  description: 'Meet Enuma Okoh, Head of Human Resources at Chisco Energy. Learn about her expertise in people management, talent development, and organizational culture.',
}

export default function EnumaOkohPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-chisco-surface via-white to-chisco-surface/50">
      <NavBar />

      {/* Profile Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="text-center mb-12">
            <div className="w-32 h-32 bg-gradient-to-br from-chisco-petrol to-chisco-navy rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl font-bold text-white">EO</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-chisco-navy mb-2">
              Enuma Okoh
            </h1>
            <p className="text-xl text-chisco-petrol font-semibold mb-6">
              Head of Human Resources
            </p>
          </div>

          {/* About Section */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl mb-8">
            <h2 className="text-3xl font-semibold text-chisco-navy mb-6">About Enuma Okoh</h2>
            <div className="space-y-4 text-chisco-steel text-lg leading-relaxed">
              <p>
                Enuma Okoh serves as Head of Human Resources at Chisco Energy,
                bringing extensive expertise in people management, organizational development,
                and strategic human resource planning to the organization.
              </p>
              <p>
                Her leadership ensures that Chisco Energy maintains a skilled, motivated workforce
                aligned with the company&apos;s vision and values, fostering a culture of excellence
                and professional growth across all departments.
              </p>
              <p>
                With a strong background in human resource management, talent acquisition,
                and employee development, Enuma plays a crucial role in building and maintaining
                the human capital that drives Chisco Energy&apos;s success.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4 mt-8">Key Responsibilities</h3>
            <ul className="text-chisco-steel space-y-2">
              <li>• Strategic human resource planning and policy development</li>
              <li>• Talent acquisition and recruitment strategies</li>
              <li>• Employee development and training programs</li>
              <li>• Performance management and career progression</li>
              <li>• Organizational culture and employee engagement initiatives</li>
              <li>• Compensation and benefits administration</li>
            </ul>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4 mt-8">HR Excellence</h3>
            <p className="text-chisco-steel text-lg leading-relaxed mb-4">
              Enuma&apos;s expertise in human resource management includes:
            </p>
            <ul className="text-chisco-steel space-y-2">
              <li>• Workforce planning and organizational design</li>
              <li>• Employee relations and conflict resolution</li>
              <li>• Leadership development and succession planning</li>
              <li>• HR compliance and regulatory adherence</li>
              <li>• Change management and organizational transformation</li>
            </ul>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4 mt-8">Professional Impact</h3>
            <p className="text-chisco-steel text-lg leading-relaxed">
              Under Enuma&apos;s leadership, the Human Resources department has established
              comprehensive talent management systems, enhanced employee satisfaction,
              and created pathways for professional growth within Chisco Energy.
              Her strategic approach to HR management supports the company&apos;s operational
              excellence and long-term sustainability goals.
            </p>

            <p className="text-chisco-steel text-lg leading-relaxed mt-4">
              Enuma&apos;s commitment to fostering an inclusive and high-performance workplace
              culture has been instrumental in attracting and retaining top talent,
              ensuring that Chisco Energy continues to build a workforce capable of
              meeting the evolving challenges of the energy sector.
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