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
              Chief (Dr) Chidi Anyaegbu (MFR, CON) serves as both the Chairman and Chief Executive of the company, embodying qualities of a transport expert, accomplished business tycoon, philanthropist, and national figure.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-chisco-navy mb-6">About the Chairman</h2>

            <p className="text-chisco-steel mb-6">
              Chief (Dr) Chidi Anyaegbu (MFR, CON) serves as both the Chairman and Chief Executive of Chisco Energy. He is widely recognised as a transport expert, accomplished business tycoon, philanthropist and national figure. Over a distinguished career he has made significant contributions to the transport and energy sectors in Nigeria and beyond.
            </p>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">Honours & Awards</h3>
            <ul className="text-chisco-steel mb-6 space-y-2">
              <li>• Member of the Federal Republic (MFR) — awarded by the Jonathan Administration</li>
              <li>• Commander of the Order of the Niger (CON) — awarded by the Buhari Administration</li>
              <li>• Distinguished Fellow, Chartered Institute of Logistics and Transport (International), London</li>
              <li>• Honorary Fellow, Institute of Internal Auditors of Nigeria</li>
              <li>• Honorary Doctorate (DBA), Penn State University, USA (1996)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">Contributions & Initiatives</h3>
            <p className="text-chisco-steel mb-6">
              Dr. Anyaegbu&apos;s commitment to advancing transport education led to the establishment of the Faculty of Transport and Logistics Studies at Nnamdi Azikiwe University, Awka. His philanthropic and community efforts have earned him accolades from organisations both within Nigeria and internationally.
            </p>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">International Development & Training</h3>
            <p className="text-chisco-steel mb-6">
              He has broadened his expertise through active participation in management and entrepreneurial programmes around the world, including in France, the United States, Brazil, Germany and the United Kingdom. These global experiences have helped shape his strategic vision and approach to business and industrial development.
            </p>

            <h3 className="text-2xl font-semibold text-chisco-navy mb-4">Leadership & Vision</h3>
            <p className="text-chisco-steel mb-6">
              As Chairman and CEO, Dr. Anyaegbu champions strategic growth, strong governance and community impact. His leadership continues to guide Chisco Energy&apos;s mission to deliver reliable energy solutions while supporting socio-economic development across Nigeria.
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