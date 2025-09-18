import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kingsley Uzoaru - Head of Human Resources | Chisco Energy',
  description: 'Meet Kingsley Uzoaru, Head of Human Resources at Chisco Energy. Learn about his expertise in talent management and organizational development.',
}

export default function KingsleyUzoaruPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-chisco-surface via-white to-chisco-surface/50">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-chisco-navy/5 via-transparent to-chisco-petrol/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-chisco-navy mb-4">
              Kingsley Uzoaru
            </h1>
            <p className="text-xl md:text-2xl text-chisco-petrol mb-8">
              Head of Human Resources
            </p>
            <p className="text-lg text-chisco-steel max-w-3xl mx-auto">
              Building a culture of excellence and developing talent to drive
              organizational success and employee satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-chisco-navy mb-6">About Kingsley Uzoaru</h2>

            <p className="text-chisco-steel mb-6">
              Kingsley Uzoaru serves as Head of Human Resources at Chisco Energy, bringing
              comprehensive expertise in human resources management, talent development, and
              organizational culture. His strategic approach to HR ensures that Chisco Energy
              attracts, develops, and retains top talent while fostering a positive work environment
              that drives business success.
            </p>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">Professional Background</h3>
            <p className="text-chisco-steel mb-6">
              Kingsley holds specialized qualifications in human resources management and has
              extensive experience in talent acquisition, employee development, and organizational
              development. His career has focused on creating HR strategies that align with business
              objectives and support sustainable growth.
            </p>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">HR Leadership</h3>
            <ul className="text-chisco-steel mb-6 space-y-2">
              <li>• Leading talent acquisition and recruitment strategies</li>
              <li>• Developing employee training and development programs</li>
              <li>• Managing performance management and employee relations</li>
              <li>• Overseeing compensation and benefits administration</li>
              <li>• Fostering organizational culture and employee engagement</li>
            </ul>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">Key Initiatives</h3>
            <p className="text-chisco-steel mb-6">
              Kingsley's initiatives have transformed Chisco Energy's HR practices:
            </p>
            <ul className="text-chisco-steel mb-6 space-y-2">
              <li>• Implementing comprehensive talent management programs</li>
              <li>• Developing leadership training and succession planning</li>
              <li>• Creating employee engagement and retention strategies</li>
              <li>• Establishing performance management systems</li>
              <li>• Building diversity and inclusion initiatives</li>
            </ul>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">Employee Development Focus</h3>
            <p className="text-chisco-steel mb-6">
              Kingsley believes in investing in employee growth and development. His programs
              focus on skill development, career progression, and creating opportunities for
              professional advancement. He works to ensure that employees have the resources
              and support they need to excel in their roles and contribute to the company's success.
            </p>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">Culture and Values</h3>
            <p className="text-chisco-steel mb-6">
              Under Kingsley's leadership, Chisco Energy has strengthened its organizational
              culture by promoting core values of integrity, excellence, innovation, and teamwork.
              His efforts in building a positive work environment have contributed to higher
              employee satisfaction and organizational performance.
            </p>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">Strategic HR Vision</h3>
            <p className="text-chisco-steel mb-6">
              Kingsley is committed to positioning HR as a strategic partner in Chisco Energy's
              growth. His forward-thinking approach ensures that human capital strategies align
              with business objectives, supporting the company's mission to be a leading energy
              solutions provider.
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