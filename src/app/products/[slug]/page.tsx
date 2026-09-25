'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '@/components/NavBar';
import CartDrawer from '@/components/CartDrawer';
import { Product } from '@/types/product';
import { useCartStore } from '@/lib/cart';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.slug as string;
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  const { addItem } = useCartStore();

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`/api/products/${encodeURIComponent(productId)}`);
      if (response.ok) {
        const foundProduct = await response.json();
        setProduct(foundProduct);
      } else {
        console.error('Failed to fetch product');
        setProduct(null);
      }
    } catch (error) {
      console.error('Error fetching product:', error);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-chisco-surface flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-chisco-amber mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-chisco-surface flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-semibold text-chisco-ink mb-4">
            Product Not Found
          </h1>
          <p className="text-chisco-steel mb-6">
            The product you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/products"
            className="px-6 py-3 bg-chisco-amber text-chisco-black font-semibold rounded-md hover:brightness-95 transition-colors"
          >
            Browse All Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
    // Could add toast notification here
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 999) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen bg-chisco-surface">
      {/* Navigation */}
      <NavBar onOpenCart={() => setCartOpen(true)} />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-chisco-navy">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-chisco-navy">Products</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={product.images[selectedImage] || '/placeholder-product.jpg'}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 relative rounded-md overflow-hidden border-2 ${selectedImage === index
                      ? 'border-chisco-petrol'
                      : 'border-gray-200'
                      }`}
                    aria-label={`View ${product.title} image ${index + 1}`}
                  >
                    <Image
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-heading font-semibold text-chisco-ink mb-2">
                {product.title}
              </h1>
              {/* Price (optional) */}
              {product.price !== undefined && (
                <div className="text-2xl text-chisco-amber font-semibold mb-2">₦{Number(product.price).toLocaleString()}</div>
              )}
            </div>

            <div className="flex items-center space-x-4">
              {product.packSize && (
                <span className="px-3 py-1 bg-chisco-petrol/10 text-chisco-petrol rounded-md text-sm font-medium">
                  {product.packSize}
                </span>
              )}
            </div>

            {/* Simple purchase controls (quantity + add to cart) */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="quantity" className="block text-sm font-medium text-chisco-ink">
                  Quantity
                </label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                    className="w-10 h-10 rounded-md border-2 border-chisco-navy bg-white text-chisco-navy font-bold text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-chisco-navy hover:text-white transition-colors"
                  >
                    −
                  </button>
                  <input
                    id="quantity"
                    type="number"
                    min="1"
                    max="999"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    className="w-20 text-center rounded-md border-2 border-chisco-navy bg-white text-chisco-navy font-bold text-lg px-3 py-2 focus:ring-2 focus:ring-chisco-petrol focus:border-chisco-petrol"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= 999}
                    aria-label="Increase quantity"
                    className="w-10 h-10 rounded-md border-2 border-chisco-navy bg-white text-chisco-navy font-bold text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-chisco-navy hover:text-white transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full px-6 py-3 bg-chisco-amber text-chisco-black font-semibold rounded-md hover:brightness-95 transition-colors"
              >
                Add to Cart
              </button>

              <Link
                href="/products"
                className="inline-block text-gray-700 hover:text-chisco-navy font-medium"
              >
                 Back to Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </div>
  );
}
