import { FaInstagram, FaFacebookSquare, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4 lg:space-y-6 min-w-0">
            <h3 className="text-lg lg:text-xl font-heading font-bold">Chisco Energy</h3>
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
              Leading indigenous fuel & energy supplier specializing in Automotive Gas Oil (AGO)
              and industrial fuel supply across Lagos and other states.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4 lg:space-y-6 min-w-0">
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
          <div className="space-y-4 lg:space-y-6 min-w-0">
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
          <div className="space-y-4 lg:space-y-6 min-w-0">
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
              <div className="flex items-center space-x-6">
                <a
                  href="https://instagram.com/Chisco_Energy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-chisco-amber"
                  aria-label="Follow us on Instagram"
                  title="Instagram: @Chisco_Energy"
                >
                  <FaInstagram size={22} aria-hidden="true" />
                </a>

                <a
                  href="https://www.tiktok.com/@Chisco.Energy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-chisco-amber"
                  aria-label="Follow us on TikTok"
                  title="TikTok: @Chisco.Energy"
                >
                  <SiTiktok size={22} aria-hidden="true" />
                </a>

                <a
                  href="https://www.facebook.com/ChiscoEnergyNigeriaLimited"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-chisco-amber"
                  aria-label="Follow us on Facebook"
                >
                  <FaFacebookSquare size={22} style={{ width: 22, height: 22 }} aria-hidden="true" />
                </a>

                <a
                  href="https://linkedin.com/in/Chisco-energy-nigeria-limited-002754145"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-chisco-amber"
                  aria-label="Follow us on LinkedIn"
                >
                  <FaLinkedinIn size={22} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Our Clients section removed per request */}

            <a
              href="https://wa.me/2342013303370?text=Hello%20Chisco%20Energy%2C%20I%27d%20like%20to%20inquire%20about%20your%20fuel%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center w-full px-4 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl justify-center mt-4"
            >
              <FaWhatsapp className="mr-2" size={16} aria-hidden="true" />
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