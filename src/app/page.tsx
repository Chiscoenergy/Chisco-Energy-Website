'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Newsletter from '@/components/Newsletter';
import AnimatedSection from '@/components/AnimatedSection';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import CartDrawer from '@/components/CartDrawer';
import { useCartStore } from '@/lib/cart';
import { Product } from '@/types/product';

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [productsLoading, setProductsLoading] = useState(true);
  const { addItem } = useCartStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products?limit=6');
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products || []);
      } else {
        console.error('Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setProductsLoading(false);
    }
  };

  const handleAddToCart = (product: Product) => {
    addItem(product);
    // Could show a toast notification here
  };

  const handleShopProducts = () => {
    // Scroll to products section or navigate to products page
    document.getElementById('products-preview')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactWhatsApp = () => {
    const message = encodeURIComponent('Hello Chisco Energy, I\'d like to inquire about your fuel services.');
    window.open(`https://wa.me/2348166319502?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-chisco-surface via-white to-chisco-surface/50">
      {/* Navigation */}
      <NavBar
        onOpenCart={() => setCartOpen(true)}
        cartCount={useCartStore.getState().getTotalItems()}
      />

      {/* Hero Section */}
      <AnimatedSection>
        <Hero
          ctaPrimary={handleShopProducts}
          ctaSecondary={handleContactWhatsApp}
        />
      </AnimatedSection>

      {/* Statistics Section */}
      <AnimatedSection delay={0.2}>
        <Statistics />
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection delay={0.4}>
        <Services />
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection delay={0.6}>
        <Testimonials />
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection delay={0.8}>
        <CTASection />
      </AnimatedSection>


      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 px-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-chisco-navy/10 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-chisco-navy mb-4 lg:mb-6 leading-tight">
                  About Chisco Energy
                </h2>
                <div className="w-16 lg:w-20 h-1 bg-gradient-to-r from-chisco-petrol to-chisco-amber rounded-full"></div>
              </div>

              <div className="space-y-4 lg:space-y-6 text-base sm:text-lg text-chisco-ink leading-relaxed">
                <p>
                  Chisco Energy Nigeria Limited is an indigenous energy supplier with decades of experience serving industrial and commercial customers across Lagos and neighbouring states.
                </p>
                <p>
                  We specialize in Automotive Gas Oil (AGO), diesel and bulk fuel supply  delivering high-quality product, on-time and with the safety standards businesses demand.
                </p>
                <p>
                  Our solutions are tailored for manufacturing plants, logistics companies, construction sites and commercial fleets who require predictable supply and reliable logistics.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/products"
                  className="group inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-chisco-navy to-chisco-petrol text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-chisco-petrol/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Browse Products
                  <svg className="w-4 lg:w-5 h-4 lg:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a
                  href="https://wa.me/2348166319502?text=Hello%20Chisco%20Energy%2C%20I%27d%20like%20to%20inquire%20about%20your%20fuel%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 border-2 border-chisco-petrol text-chisco-petrol font-semibold rounded-2xl hover:bg-chisco-petrol hover:text-white transition-all duration-300 hover:shadow-lg"
                >
                  <svg className="w-4 lg:w-5 h-4 lg:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  Contact on WhatsApp
                </a>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-white to-chisco-surface/50 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/20">
                <h3 className="text-xl lg:text-2xl font-heading font-bold text-chisco-navy mb-4 lg:mb-6 flex items-center">
                  <div className="w-3 h-3 bg-chisco-amber rounded-full mr-3"></div>
                  Why Choose Chisco?
                </h3>
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex items-start gap-3 lg:gap-4 p-3 lg:p-4 bg-white/60 rounded-xl backdrop-blur-sm border border-white/40">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-chisco-petrol to-chisco-navy rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-chisco-navy mb-1 text-sm lg:text-base">Reliable Supply Chain</h4>
                      <p className="text-xs lg:text-sm text-chisco-steel">Consistent quality and timely deliveries you can count on.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 lg:gap-4 p-3 lg:p-4 bg-white/60 rounded-xl backdrop-blur-sm border border-white/40">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-chisco-petrol to-chisco-navy rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-chisco-navy mb-1 text-sm lg:text-base">24/7 Support</h4>
                      <p className="text-xs lg:text-sm text-chisco-steel">Round-the-clock customer service and technical assistance.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 lg:gap-4 p-3 lg:p-4 bg-white/60 rounded-xl backdrop-blur-sm border border-white/40">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-chisco-petrol to-chisco-navy rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-chisco-navy mb-1 text-sm lg:text-base">Bulk Discounts</h4>
                      <p className="text-xs lg:text-sm text-chisco-steel">Competitive pricing for large volume orders.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 bg-gradient-to-br from-white via-chisco-surface/30 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-chisco-petrol/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-chisco-navy mb-4 lg:mb-6">
              How It Works
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-chisco-steel max-w-3xl mx-auto leading-relaxed">
              Simple, transparent process from selection to delivery  no online payments required
            </p>
            <div className="w-24 lg:w-32 h-1 bg-gradient-to-r from-chisco-petrol to-chisco-amber rounded-full mx-auto mt-6 lg:mt-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="group text-center">
              <div className="relative mb-6 lg:mb-8">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-chisco-petrol to-chisco-navy rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <span className="text-2xl lg:text-3xl font-bold text-white">1</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-chisco-amber rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-chisco-navy mb-3 lg:mb-4 group-hover:text-chisco-petrol transition-colors">
                Browse Our Catalog
              </h3>
              <p className="text-sm sm:text-base text-chisco-steel leading-relaxed">
                Choose from our range of premium fuels and lubricants. Select quantity and specifications that match your needs.
              </p>
            </div>

            <div className="group text-center">
              <div className="relative mb-6 lg:mb-8">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-chisco-petrol to-chisco-navy rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <span className="text-2xl lg:text-3xl font-bold text-white">2</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-chisco-amber rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-chisco-navy mb-3 lg:mb-4 group-hover:text-chisco-petrol transition-colors">
                Add to Cart & Enter Details
              </h3>
              <p className="text-sm sm:text-base text-chisco-steel leading-relaxed">
                Add products to your cart and provide your delivery information. We&apos;ll prepare everything for confirmation.
              </p>
            </div>

            <div className="group text-center">
              <div className="relative mb-6 lg:mb-8">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-chisco-petrol to-chisco-navy rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <span className="text-2xl lg:text-3xl font-bold text-white">3</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-chisco-amber rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-chisco-navy mb-3 lg:mb-4 group-hover:text-chisco-petrol transition-colors">
                Confirm on WhatsApp
              </h3>
              <p className="text-sm sm:text-base text-chisco-steel leading-relaxed">
                Receive instant confirmation and delivery scheduling through WhatsApp. No online payments required.
              </p>
            </div>
          </div>

          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center">
              <div className="w-1/3 h-0.5 bg-gradient-to-r from-transparent to-chisco-petrol/30"></div>
              <div className="w-1/3 h-0.5 bg-gradient-to-r from-chisco-petrol/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section id="products-preview" className="py-16 sm:py-20 lg:py-24 px-6 bg-chisco-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-chisco-navy mb-4 lg:mb-6">
              Featured Products
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-chisco-steel max-w-3xl mx-auto leading-relaxed mb-6 lg:mb-8">
              Premium fuel products for industrial and commercial applications  reliable quality you can trust
            </p>
            <Link
              href="/products"
              className="group inline-flex items-center px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-chisco-navy to-chisco-petrol text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-chisco-petrol/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              View All Products
              <svg className="w-4 lg:w-5 h-4 lg:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <ProductGrid
            products={products}
            loading={productsLoading}
            onAddToCart={handleAddToCart}
          />
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Stats Section removed per request */}

      {/* Use shared Footer component so site footers remain consistent */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </div>
  );
}
