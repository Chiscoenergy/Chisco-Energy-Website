export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-lg lg:text-xl font-heading font-bold">Chisco Energy</h3>
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
              Leading indigenous fuel & energy supplier specializing in Automotive Gas Oil (AGO)
              and industrial fuel supply across Lagos and other states.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4 lg:space-y-6">
            <h4 className="text-lg lg:text-xl font-heading font-bold">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="/services/retail" className="text-gray-300 hover:text-chisco-amber transition-colors hover:translate-x-1 transform duration-200 text-sm lg:text-base">
                  Retail
                </a>
              </li>
              <li>
                <a href="/services/bulk-storage" className="text-gray-300 hover:text-chisco-amber transition-colors hover:translate-x-1 transform duration-200 text-sm lg:text-base">
                  Bulk Storage
                </a>
              </li>
              <li>
                <a href="/services/haulage" className="text-gray-300 hover:text-chisco-amber transition-colors hover:translate-x-1 transform duration-200 text-sm lg:text-base">
                  Haulage
                </a>
              </li>
              <li>
                <a href="/services/gas" className="text-gray-300 hover:text-chisco-amber transition-colors hover:translate-x-1 transform duration-200 text-sm lg:text-base">
                  Gas
                </a>
              </li>
              <li>
                <a href="/services/lube-oil" className="text-gray-300 hover:text-chisco-amber transition-colors hover:translate-x-1 transform duration-200 text-sm lg:text-base">
                  Lube Oil
                </a>
              </li>
            </ul>
          </div>

          {/* Quicklinks */}
          <div className="space-y-4 lg:space-y-6">
            <h4 className="text-lg lg:text-xl font-heading font-bold">Quicklinks</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-chisco-amber transition-colors hover:translate-x-1 transform duration-200 text-sm lg:text-base">
                  About Us
                </a>
              </li>
              <li>
                <a href="/management" className="text-gray-300 hover:text-chisco-amber transition-colors hover:translate-x-1 transform duration-200 text-sm lg:text-base">
                  Management
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-chisco-amber transition-colors hover:translate-x-1 transform duration-200 text-sm lg:text-base">
                  Contact
                </a>
              </li>
              <li>
                <a href="/distributors" className="text-gray-300 hover:text-chisco-amber transition-colors hover:translate-x-1 transform duration-200 text-sm lg:text-base">
                  Become A Distributor
                </a>
              </li>
              <li>
                <a href="/get-quote" className="text-gray-300 hover:text-chisco-amber transition-colors hover:translate-x-1 transform duration-200 text-sm lg:text-base">
                  Get Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 lg:space-y-6">
            <h4 className="text-lg lg:text-xl font-heading font-bold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-chisco-amber mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-gray-300 text-sm lg:text-base font-medium">Head Office</p>
                  <p className="text-gray-400 text-xs lg:text-sm leading-relaxed">
                    104, Funsho Williams Avenue,<br />
                    Iponri, Surulere, Lagos-Nigeria
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-chisco-amber mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-gray-300 text-sm lg:text-base font-medium">Email</p>
                  <a href="mailto:info@chiscoenergy.com" className="text-gray-400 hover:text-chisco-amber transition-colors text-xs lg:text-sm">
                    info@chiscoenergy.com
                  </a>
                  <br />
                  <a href="mailto:chiscoenergy@chiscogroupng.com" className="text-gray-400 hover:text-chisco-amber transition-colors text-xs lg:text-sm">
                    chiscoenergy@chiscogroupng.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4 border-t border-gray-700/50">
              <h5 className="text-sm lg:text-base font-semibold text-white mb-3">Connect With Us</h5>
              <div className="flex space-x-4">
                <a
                  href="https://en-gb.facebook.com/people/Chisco-Energy/100016923426526"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/Chisco-energy-nigeria-limited-002754145"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/2348123456789?text=Hello%20Chisco%20Energy%2C%20I%27d%20like%20to%20inquire%20about%20your%20fuel%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center w-full px-4 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl justify-center"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-8 lg:mt-12 pt-6 lg:pt-8 text-center">
          <p className="text-gray-400 text-sm lg:text-base">
            © 2023 Chisco Energy
          </p>
          <p className="text-xs lg:text-sm text-gray-500 mt-2">
            Leading indigenous fuel & energy supplier
          </p>
        </div>
      </div>
    </footer>
  );
}