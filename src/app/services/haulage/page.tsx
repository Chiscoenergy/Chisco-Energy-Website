import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function HaulagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-chisco-surface via-white to-chisco-surface/50">
      <NavBar />

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-chisco-petrol/80 to-chisco-navy/80 text-chisco-surface overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            Haulage Service
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional transportation services with over 40 years of expertise in petroleum logistics
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Legacy Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-chisco-navy mb-4">
              Over 40 Years of Transportation Prowess
            </h2>
            <p className="text-lg text-chisco-steel max-w-3xl mx-auto">
              With a rich legacy spanning over 40 years in the transportation industry and 15 years dedicated to logistics and haulage services,
              Chisco Energy Limited stands as a beacon of excellence in the dynamic landscape of energy transportation.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-white/50">
            <p className="text-chisco-ink leading-relaxed mb-6">
              As a proud subsidiary of Chisco Transportation Limited, we have established ourselves as a leading force,
              equipped with the expertise and resources to meet the ever-evolving needs of our clients.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-chisco-petrol mb-2">40+</div>
                <div className="text-lg font-semibold text-chisco-navy">Years in Transportation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-chisco-petrol mb-2">15+</div>
                <div className="text-lg font-semibold text-chisco-navy">Years in Haulage</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-chisco-petrol mb-2">50+</div>
                <div className="text-lg font-semibold text-chisco-navy">Tanker Trucks</div>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-chisco-navy mb-6">
                State-of-the-Art Fleet
              </h2>
              <p className="text-lg text-chisco-ink leading-relaxed mb-6">
                Our fleet is the backbone of our commitment to efficient and timely petroleum delivery to every corner of the country.
                These state-of-the-art vehicles are meticulously maintained to ensure reliability, safety, and optimal performance,
                guaranteeing the swift and secure transportation of petroleum products.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-chisco-petrol mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-chisco-ink">Nationwide delivery coverage</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-chisco-petrol mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-chisco-ink">Safety and reliability guaranteed</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-chisco-petrol mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-chisco-ink">Timely and secure deliveries</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">
                <Image
                  src="/haulage.png"
                  alt="Chisco Energy Haulage Transportation Services"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Storage Facilities Note */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-chisco-petrol/10 to-chisco-navy/10 rounded-2xl p-8 border border-chisco-petrol/20">
            <div className="flex items-start space-x-4">
              <svg className="w-8 h-8 text-chisco-petrol mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-xl font-heading font-bold text-chisco-navy mb-2">Integrated Storage Solutions</h3>
                <p className="text-chisco-ink leading-relaxed">
                  Our haulage services are complemented by our state-of-the-art storage facilities in Apapa and Surulere,
                  equipped to store 40 million liters of premium energy products, guaranteeing a reliable and consistent supply
                  for our extensive network of retail stations and industrial customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-chisco-navy to-chisco-petrol text-white rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Need Transportation Services?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us for professional haulage and transportation solutions across Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-chisco-amber text-chisco-black font-semibold rounded-xl shadow-lg hover:bg-chisco-amber/90 transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              Contact Us
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