import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function LubeOilPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-chisco-surface via-white to-chisco-surface/50">
      <NavBar />

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-chisco-petrol/80 to-chisco-navy/80 text-chisco-surface overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            Lube Oil Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Premium lubricants formulated for optimal engine performance and protection
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Overview */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-chisco-navy mb-6">
                Excellence in Lubrication
              </h2>
              <p className="text-lg text-chisco-ink leading-relaxed mb-6">
                Chisco Lube stands out as a testament to our dedication to excellence. Formulated and blended with precision,
                our lube incorporates quality recipes that not only maintain the optimal functioning of your engine but also serve as a robust
                defense against engine wear. We understand the importance of a well-lubricated system, and our products are crafted to provide the protection your machinery deserves.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-chisco-petrol mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-chisco-ink font-semibold">Top-Quality Formulation</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-chisco-petrol mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-chisco-ink font-semibold">Engine Wear Prevention</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-chisco-petrol mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-chisco-ink font-semibold">Superior Performance</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">
                <Image
                  src="/lube-oil.png"
                  alt="Chisco Energy Lube Oil Products"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-white/50">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-chisco-navy mb-8 text-center">
              Why Choose Chisco Lube?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-chisco-petrol to-chisco-navy rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-chisco-navy mb-3">Precision Formulation</h3>
                <p className="text-chisco-steel">Carefully blended with premium ingredients for maximum engine protection and performance.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-chisco-petrol to-chisco-navy rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-chisco-navy mb-3">Engine Protection</h3>
                <p className="text-chisco-steel">Advanced protection against wear, corrosion, and extreme operating conditions.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-chisco-petrol to-chisco-navy rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-chisco-navy mb-3">Performance Optimization</h3>
                <p className="text-chisco-steel">Enhances engine efficiency, reduces friction, and improves overall vehicle performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Guidance Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-chisco-petrol/10 to-chisco-navy/10 rounded-2xl p-8 border border-chisco-petrol/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-chisco-navy mb-4">
                Need Guidance? We&apos;re Here to Help!
              </h2>
              <p className="text-lg text-chisco-steel max-w-2xl mx-auto">
                Choosing the right lubricant for your vehicle, fleet, or machinery is crucial for optimal performance and longevity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-heading font-bold text-chisco-navy mb-4">Expert Consultation</h3>
                <p className="text-chisco-ink leading-relaxed mb-4">
                  If you have any questions or require assistance in determining the product specifications suitable for your specific needs,
                  do not hesitate to give us a call. Our knowledgeable and friendly team is ready to provide expert advice.
                </p>
                <div className="flex items-center text-chisco-petrol">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-semibold">Call for Expert Advice</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-heading font-bold text-chisco-navy mb-4">Product Range</h3>
                <p className="text-chisco-ink leading-relaxed mb-4">
                  We offer a comprehensive range of lubricants suitable for various applications including passenger vehicles,
                  commercial fleets, industrial machinery, and specialized equipment.
                </p>
                <div className="flex items-center text-chisco-petrol">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span className="font-semibold">Wide Selection Available</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-chisco-navy mb-4">
              Applications & Industries
            </h2>
            <p className="text-lg text-chisco-steel max-w-3xl mx-auto">
              Our lubricants are designed for diverse applications across multiple industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-white/50 text-center hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-chisco-petrol rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-chisco-navy mb-2">Automotive</h3>
              <p className="text-sm text-chisco-steel">Passenger vehicles and light commercial transport</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-white/50 text-center hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-chisco-petrol rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-chisco-navy mb-2">Industrial</h3>
              <p className="text-sm text-chisco-steel">Manufacturing equipment and heavy machinery</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-white/50 text-center hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-chisco-petrol rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-chisco-navy mb-2">Marine</h3>
              <p className="text-sm text-chisco-steel">Marine engines and offshore equipment</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-white/50 text-center hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-chisco-petrol rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-chisco-navy mb-2">Aviation</h3>
              <p className="text-sm text-chisco-steel">Aircraft engines and ground support equipment</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-chisco-navy to-chisco-petrol text-white rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Find the Perfect Lubricant
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact our experts to get recommendations for your specific needs and applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-chisco-amber text-chisco-black font-semibold rounded-xl shadow-lg hover:bg-chisco-amber/90 transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              Get Expert Advice
            </a>
            <a
              href="mailto:info@chiscoenergy.com"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-chisco-navy transition-all duration-200"
            >
              Email Inquiry
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
