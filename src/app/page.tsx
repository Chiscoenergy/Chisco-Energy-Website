'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Partners from '@/components/Partners';
import Newsletter from '@/components/Newsletter';
import AnimatedSection from '@/components/AnimatedSection';
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
    window.open(`https://wa.me/2348123456789?text=${message}`, '_blank');
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

      {/* Partners Section */}
      <AnimatedSection delay={1.0}>
        <Partners />
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
                  href="https://wa.me/2348123456789?text=Hello%20Chisco%20Energy%2C%20I%27d%20like%20to%20inquire%20about%20your%20fuel%20services."
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

      {/* Stats Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 bg-chisco-navy relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-4 lg:mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Decades of reliable service and proven results
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="group text-center p-4 lg:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-2 lg:mb-3 group-hover:text-chisco-amber transition-colors">
                15+
              </div>
              <div className="text-white/80 font-medium text-sm lg:text-base">Years Experience</div>
              <div className="w-8 lg:w-12 h-1 bg-chisco-amber rounded-full mx-auto mt-3 lg:mt-4 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="group text-center p-4 lg:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-2 lg:mb-3 group-hover:text-chisco-amber transition-colors">
                24/7
              </div>
              <div className="text-white/80 font-medium text-sm lg:text-base">Customer Support</div>
              <div className="w-8 lg:w-12 h-1 bg-chisco-amber rounded-full mx-auto mt-3 lg:mt-4 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="group text-center p-4 lg:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-2 lg:mb-3 group-hover:text-chisco-amber transition-colors">
                500+
              </div>
              <div className="text-white/80 font-medium text-sm lg:text-base">Happy Clients</div>
              <div className="w-8 lg:w-12 h-1 bg-chisco-amber rounded-full mx-auto mt-3 lg:mt-4 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="group text-center p-4 lg:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-2 lg:mb-3 group-hover:text-chisco-amber transition-colors">
                99%
              </div>
              <div className="text-white/80 font-medium text-sm lg:text-base">On-Time Delivery</div>
              <div className="w-8 lg:w-12 h-1 bg-chisco-amber rounded-full mx-auto mt-3 lg:mt-4 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 px-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-chisco-navy/10 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-chisco-navy mb-4 lg:mb-6">
              Who We Are
            </h2>
            <p className="text-lg md:text-xl text-chisco-steel max-w-3xl mx-auto leading-relaxed">
              Your trusted source for energy solutions in Nigeria
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-chisco-navy mb-4">
                  Leading Indigenous Fuel Supplier
                </h3>
                <p className="text-chisco-steel text-lg leading-relaxed mb-6">
                  Chisco Energy is a leading indigenous fuel and energy supplier specializing in Automotive Gas Oil (AGO) and industrial fuel supply across Lagos and other states in Nigeria.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-chisco-petrol/10 to-chisco-navy/10 rounded-2xl p-4 border border-chisco-petrol/20">
                    <div className="text-2xl font-bold text-chisco-petrol mb-1">15+</div>
                    <div className="text-sm text-chisco-navy font-medium">Years of Excellence</div>
                  </div>
                  <div className="bg-gradient-to-br from-chisco-amber/10 to-yellow-400/10 rounded-2xl p-4 border border-chisco-amber/20">
                    <div className="text-2xl font-bold text-chisco-amber mb-1">500+</div>
                    <div className="text-sm text-chisco-navy font-medium">Satisfied Clients</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-chisco-navy mb-4">
                  Our Mission
                </h3>
                <p className="text-chisco-steel leading-relaxed">
                  To provide reliable, high-quality fuel solutions that power Nigeria&apos;s industrial and commercial sectors, ensuring consistent supply and exceptional service to all our clients.
                </p>
              </div>
            </div>

            <div className="space-y-6 lg:space-y-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-chisco-navy mb-6">
                  Why Choose Chisco Energy?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-chisco-petrol to-chisco-navy rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-chisco-navy mb-1">Reliable Supply Chain</h4>
                      <p className="text-sm text-chisco-steel">Consistent quality and timely deliveries you can count on</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-chisco-petrol to-chisco-navy rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-chisco-navy mb-1">24/7 Support</h4>
                      <p className="text-sm text-chisco-steel">Round-the-clock customer service and technical assistance</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-chisco-petrol to-chisco-navy rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-chisco-navy mb-1">Quality Assurance</h4>
                      <p className="text-sm text-chisco-steel">Premium fuel products meeting industry standards</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-chisco-navy to-chisco-petrol rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-4">
                  Ready to Partner With Us?
                </h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  Join hundreds of satisfied clients who trust Chisco Energy for their energy needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/get-quote"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-white text-chisco-navy font-semibold rounded-2xl hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                  >
                    Get Quote
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <a
                    href="https://wa.me/2348123456789?text=Hello%20Chisco%20Energy%2C%20I%27d%20like%20to%20inquire%20about%20your%20fuel%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-2xl hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16 relative">
          <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="md:col-span-2 space-y-4 lg:space-y-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-3 lg:mb-4 bg-gradient-to-r from-white to-chisco-amber bg-clip-text text-transparent">
                  Chisco Energy
                </h3>
                <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                  Leading indigenous fuel & energy supplier specializing in Automotive Gas Oil (AGO) and industrial fuel supply across Lagos and other states.
                </p>
              </div>

              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-chisco-petrol/20 rounded-lg flex items-center justify-center">
                    <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-sm lg:text-base">Lagos, Nigeria</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-chisco-petrol/20 rounded-lg flex items-center justify-center">
                    <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-sm lg:text-base">+234 812 345 6789</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-chisco-petrol/20 rounded-lg flex items-center justify-center">
                    <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm lg:text-base">info@chiscoenergy.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 lg:space-y-6">
              <h4 className="text-lg lg:text-xl font-heading font-bold text-white">Quick Links</h4>
              <div className="space-y-3">
                <Link href="/products" className="block text-gray-300 hover:text-chisco-amber transition-colors hover:translate-x-1 transform duration-200 text-sm lg:text-base">
                  Products
                </Link>
                <Link href="#about" className="block text-gray-300 hover:text-chisco-amber transition-colors hover:translate-x-1 transform duration-200 text-sm lg:text-base">
                  About Us
                </Link>
                <Link href="/management" className="block text-gray-300 hover:text-chisco-amber transition-colors hover:translate-x-1 transform duration-200 text-sm lg:text-base">
                  Management
                </Link>
                <Link href="/careers" className="block text-gray-300 hover:text-chisco-amber transition-colors hover:translate-x-1 transform duration-200 text-sm lg:text-base">
                  Careers
                </Link>
                <Link href="/get-quote" className="block text-gray-300 hover:text-chisco-amber transition-colors hover:translate-x-1 transform duration-200 text-sm lg:text-base">
                  Get Quote
                </Link>
                <Link href="#faq" className="block text-gray-300 hover:text-chisco-amber transition-colors hover:translate-x-1 transform duration-200 text-sm lg:text-base">
                  FAQ
                </Link>
                <Link href="/admin" className="block text-gray-300 hover:text-chisco-amber transition-colors hover:translate-x-1 transform duration-200 text-sm lg:text-base">
                  Admin
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4 lg:space-y-6">
              <h4 className="text-lg lg:text-xl font-heading font-bold text-white">Contact Information</h4>
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
                className="group inline-flex items-center px-4 lg:px-6 py-3 lg:py-4 bg-green-600 text-white font-semibold rounded-2xl hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl w-full justify-center"
              >
                <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                WhatsApp Us
              </a>
              <p className="text-xs lg:text-sm text-gray-400 text-center">
                Get instant quotes and support
              </p>
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

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </div>
  );
}
