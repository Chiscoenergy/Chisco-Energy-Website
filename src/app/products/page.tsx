'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import NavBar from '@/components/NavBar';
import CartDrawer from '@/components/CartDrawer';
import { Product } from '@/types/product';
import { useCartStore } from '@/lib/cart';

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  const { addItem } = useCartStore();
  const router = useRouter();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      // Fetch a very large limit to ensure we get all products
      const response = await fetch('/api/products?limit=10000');
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products || []);
      } else {
        console.error('Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  // Get unique categories from products
  const categories = useMemo(() => {
    const cats = new Set(products.flatMap((product: Product) => product.tags || []));
    return ['all', ...Array.from(cats)];
  }, [products]);

  // Get autocomplete suggestions
  const suggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const searchLower = searchQuery.toLowerCase();
    return products
      .filter((product: Product) =>
        product.title.toLowerCase().includes(searchLower)
      )
      .slice(0, 8)
      .map((product: Product) => product.title);
  }, [products, searchQuery]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    // Temporarily bypass filtering to debug
    let filtered = [...products]; // Start with all products

    // Apply search filter
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      // Only search by product title (name)
      filtered = filtered.filter((product: Product) =>
        product.title.toLowerCase().includes(searchLower)
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((product: Product) =>
        product.tags?.includes(selectedCategory)
      );
    }

    // Sort products - reverse order (newest first, then reverse alphabetical)
    filtered.sort((a: Product, b: Product) => {
      switch (sortBy) {
        // price sorting removed — fallback to reverse name order
        case 'price-low':
        case 'price-high':
          return b.title.localeCompare(a.title);
        case 'name':
        default:
          return b.title.localeCompare(a.title);
      }
    });

    return filtered;
  }, [products, searchQuery, selectedCategory, sortBy]);

  const handleAddToCart = (product: Product) => {
    addItem(product);
    // Could add toast notification here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-chisco-surface via-chisco-surface/80 to-chisco-navy/20">
      {/* Navigation */}
      <NavBar onOpenCart={() => setCartOpen(true)} />

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-chisco-surface/30 to-chisco-navy/10 backdrop-blur-xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-chisco-navy mb-2">
                Our Products
              </h1>
              <p className="text-lg text-chisco-steel">
                Premium fuel products for industrial and commercial applications
              </p>
            </div>
            <Link
              href="/cart"
              className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-chisco-navy to-chisco-petrol text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-chisco-petrol/25 transition-all duration-300 transform hover:-translate-y-1 self-start lg:self-auto shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              View Cart ({useCartStore.getState().getTotalItems()})
            </Link>
          </div>

          {/* Filters and Search */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <label htmlFor="search-input" className="block text-sm font-semibold text-chisco-navy mb-2">
                  Search Products
                </label>
                <div className="relative">
                  <input
                    id="search-input"
                    type="text"
                    placeholder="Search by name or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/30 bg-white text-chisco-navy backdrop-blur-sm focus:ring-2 focus:ring-chisco-petrol focus:border-transparent transition-all duration-300 shadow-lg placeholder:text-chisco-steel"
                  />
                  <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-chisco-navy/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>

                  {/* Autocomplete suggestions dropdown */}
                  {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-chisco-navy/20 rounded-xl shadow-lg z-50">
                      {suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSearchQuery(suggestion);
                            setShowSuggestions(false);
                          }}
                          className="w-full text-left px-4 py-3 text-chisco-navy hover:bg-chisco-navy/5 transition-colors border-b border-chisco-navy/10 last:border-b-0 text-sm"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Close suggestions when clicking outside */}
                  {showSuggestions && (
                    <div
                      onClick={() => setShowSuggestions(false)}
                      className="fixed inset-0 z-40"
                      style={{ pointerEvents: suggestions.length > 0 ? 'auto' : 'none' }}
                    />
                  )}
                </div>
              </div>

              {/* Category Filter */}
              <div className="lg:w-64">
                <label htmlFor="category-select" className="block text-sm font-semibold text-chisco-navy mb-2">
                  Category
                </label>
                <select
                  id="category-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-4 rounded-2xl border border-white/30 bg-white/20 backdrop-blur-sm focus:ring-2 focus:ring-chisco-petrol focus:border-transparent transition-all duration-300 appearance-none shadow-lg text-chisco-navy"
                >
                  {categories.map((category: string) => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="lg:w-64">
                <label htmlFor="sort-select" className="block text-sm font-semibold text-chisco-navy mb-2">
                  Sort by
                </label>
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-4 rounded-2xl border border-white/30 bg-white/20 backdrop-blur-sm focus:ring-2 focus:ring-chisco-petrol focus:border-transparent transition-all duration-300 appearance-none shadow-lg text-chisco-navy"
                >
                  <option value="name">Name (A-Z)</option>
                  {/* Price sorting removed — keep only name sort */}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-4 animate-pulse">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="flex justify-between items-center">
                  <div className="h-6 bg-gray-200 rounded w-20"></div>
                  <div className="h-8 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl border border-white/20">
              <svg className="w-12 h-12 text-chisco-petrol" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-heading font-bold text-chisco-navy mb-4">
              No products found
            </h3>
            <p className="text-lg text-chisco-steel mb-8 max-w-md mx-auto">
              Try adjusting your search terms or browse different categories to find what you&apos;re looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSortBy('name');
              }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-chisco-navy to-chisco-petrol text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-chisco-petrol/25 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <span className="text-lg font-semibold text-chisco-navy">
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                </span>
                {searchQuery && (
                  <span className="text-sm text-chisco-steel bg-chisco-surface px-3 py-1 rounded-full">
                    Search: &quot;{searchQuery}&quot;
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product: Product) => (
                <article
                  key={product.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => router.push(`/products/${product.slug}`)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') router.push(`/products/${product.slug}`); }}
                  className="group cursor-pointer bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl hover:shadow-chisco-petrol/20 transition-all duration-500 transform hover:-translate-y-3 border border-white/20 overflow-hidden relative"
                >
                  {/* Glass effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                  {/* Product Image */}
                  <div className="aspect-square relative bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden rounded-t-3xl">
                    <Image
                      src={product.images[0] || '/placeholder-product.jpg'}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, (min-width:1200px) 20vw"
                    />
                    {product.availability === 'out-of-stock' && (
                      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center rounded-t-3xl">
                        <span className="bg-red-500 text-white px-4 py-2 rounded-2xl text-sm font-semibold shadow-lg">
                          Out of Stock
                        </span>
                      </div>
                    )}
                    {product.packSize && (
                      <div className="absolute top-4 right-4 bg-chisco-amber text-chisco-black px-3 py-1 rounded-2xl text-xs font-semibold shadow-lg">
                        {product.packSize}
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6 lg:p-4 xl:p-5 relative z-10">
                    <div className="mb-4">
                      <h3 className="font-heading text-xl lg:text-lg font-bold text-chisco-navy mb-2 line-clamp-2 group-hover:text-chisco-petrol transition-colors duration-300">
                        {product.title}
                      </h3>
                      {/* description/excerpt removed from product model */}
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl lg:text-lg font-bold font-heading text-chisco-navy">
                        {product.packSize ?? ""}
                      </span>
                      {product.price !== undefined && (
                        <div className="text-2xl lg:text-lg text-chisco-amber font-semibold">₦{Number(product.price).toLocaleString()}</div>
                      )}
                      {product.company && (
                        <div className="flex gap-1">
                          <span className="text-xs bg-chisco-petrol/10 text-chisco-petrol px-2 py-0.5 lg:px-2 lg:py-0.5 rounded-2xl border border-chisco-petrol/20">
                            {product.company}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Actions - only Add to Cart. stopPropagation so clicking the button doesn't trigger card navigation */}
                    <div className="flex gap-3">
                      <button
                        onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}
                        disabled={product.availability === 'out-of-stock'}
                        className="flex-1 inline-flex items-center justify-center px-4 py-3 lg:px-3 lg:py-2 bg-gradient-to-r from-chisco-amber to-yellow-400 text-chisco-black font-semibold rounded-2xl hover:shadow-lg hover:shadow-chisco-amber/25 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </div>
  );
}