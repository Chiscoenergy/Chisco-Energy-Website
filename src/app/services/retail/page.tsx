import NavBar from '@/components/NavBar';
import Footer from '../../../components/Footer';
import Image from 'next/image';

export default function RetailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-chisco-surface via-white to-chisco-surface/50">
      <NavBar />

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-chisco-petrol/80 to-chisco-navy/80 text-chisco-surface overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            Retail Service
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Convenient access to top-notch fuels across Nigeria through our extensive network of filling stations
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Our Filling Stations */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-chisco-navy mb-4">
              Our Filling Stations
            </h2>
            <p className="text-lg text-chisco-steel max-w-3xl mx-auto">
              Experience the Chisco Energy difference when you fuel up at any of our filling stations.
              We guarantee the dispensation of quality fuels at the official pump price, ensuring that you receive value for every drop.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-white/50">
            <p className="text-chisco-ink leading-relaxed mb-6">
              Our commitment to excellence extends to maintaining clean, safe, and customer-friendly environments at all our stations.
              With a strong presence in key cities such as Lagos, Abuja, Awka, Amichi, Asaba, Benin, Owerri, and other parts of the country,
              we are committed to providing you with convenient access to top-notch fuels that meet and exceed the standards set by the Department of Petroleum Resources (DPR).
            </p>

            <div className="bg-chisco-surface/50 rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-chisco-navy mb-4">Some of our stations are located at:</h3>
              <ul className="space-y-2 text-chisco-ink">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-chisco-petrol mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Enugu: 9th mile corner, Ngwo</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-chisco-petrol mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Anambra: Okwigwe Road, Nnewi</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-chisco-petrol mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Abuja: 11 Ekukinam Street, Utako</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Beyond the Pump */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-chisco-navy mb-6">
                Beyond the Pump
              </h2>
              <p className="text-lg text-chisco-ink leading-relaxed mb-6">
                Chisco Energy goes beyond just serving individual motorists; we also cater to the energy needs of companies and corporate organizations.
                Whether you require small quantities of fuel to efficiently run your daily operations or seek a reliable partner for bulk supply,
                Chisco Energy is here to meet your energy demands.
              </p>

              <div className="bg-gradient-to-r from-chisco-petrol to-chisco-navy text-white p-6 rounded-xl">
                <h3 className="text-xl font-heading font-bold mb-3">For more information on our retail services</h3>
                <p className="mb-4">Please contact us at <a href="mailto:info@chiscoenergy.com" className="underline hover:text-chisco-amber">info@chiscoenergy.com</a></p>
                <p>Or visit one of our conveniently located filling stations nationwide.</p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">
                <Image
                  src="/retail.png"
                  alt="Chisco Energy Retail Filling Stations"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-chisco-navy to-chisco-petrol text-white rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Experience Quality Fuel Service?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Visit one of our filling stations or contact us for bulk supply needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-chisco-amber text-chisco-black font-semibold rounded-xl shadow-lg hover:bg-chisco-amber/90 transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              Contact Us
            </a>
            <a
              href="https://wa.me/2348123456789?text=Hello%20Chisco%20Energy%2C%20I%27d%20like%20to%20inquire%20about%20your%20retail%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-chisco-navy transition-all duration-200"
            >
              WhatsApp Us
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}