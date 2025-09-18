'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import { Product } from '@/types/product';
import { useCartStore } from '@/lib/cart';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartStore();

  const product = products.find((p: Product) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-chisco-surface flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-semibold text-chisco-ink mb-4">
            Product Not Found
          </h1>
          <p className="text-chisco-steel mb-6">
            The product you're looking for doesn't exist.
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
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-chisco-steel">
            <Link href="/" className="hover:text-chisco-navy">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-chisco-navy">Products</Link>
            <span>/</span>
            <span className="text-chisco-ink">{product.title}</span>
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
              {product.sku && (
                <p className="text-sm text-chisco-steel">SKU: {product.sku}</p>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-chisco-navy">
                ₦{product.price.toLocaleString()}
              </span>
              {product.packSize && (
                <span className="px-3 py-1 bg-chisco-petrol/10 text-chisco-petrol rounded-md text-sm font-medium">
                  {product.packSize}
                </span>
              )}
            </div>

            {/* Availability */}
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${product.availability === 'in-stock'
                  ? 'bg-green-500'
                  : product.availability === 'out-of-stock'
                    ? 'bg-red-500'
                    : 'bg-yellow-500'
                }`} />
              <span className="text-sm font-medium capitalize">
                {product.availability?.replace('-', ' ') || 'In Stock'}
              </span>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2">
              <label htmlFor="quantity" className="block text-sm font-medium text-chisco-ink">
                Quantity
              </label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                  className="w-10 h-10 rounded-md border border-chisco-steel flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  -
                </button>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  max="999"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                  className="w-20 text-center rounded-md border border-chisco-steel px-3 py-2 focus:ring-2 focus:ring-chisco-petrol focus:border-transparent"
                />
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= 999}
                  aria-label="Increase quantity"
                  className="w-10 h-10 rounded-md border border-chisco-steel flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={product.availability === 'out-of-stock'}
              className="w-full px-6 py-3 bg-chisco-amber text-chisco-black font-semibold rounded-md hover:brightness-95 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {product.availability === 'out-of-stock' ? 'Out of Stock' : 'Add to Cart'}
            </button>

            {/* Back to Products */}
            <Link
              href="/products"
              className="inline-block text-chisco-navy hover:text-chisco-petrol font-medium"
            >
              ← Back to Products
            </Link>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12 border-t pt-8">
          <div className="space-y-6">
            {/* Description */}
            {product.description && (
              <div>
                <h2 className="text-xl font-heading font-semibold text-chisco-ink mb-4">
                  Description
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-chisco-steel leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            )}

            {/* Specifications */}
            <div>
              <h2 className="text-xl font-heading font-semibold text-chisco-ink mb-4">
                Specifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-chisco-ink">Pack Size</span>
                    <span className="text-chisco-steel">{product.packSize || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-chisco-ink">SKU</span>
                    <span className="text-chisco-steel">{product.sku || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-chisco-ink">Availability</span>
                    <span className="text-chisco-steel capitalize">
                      {product.availability?.replace('-', ' ') || 'In Stock'}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-chisco-ink">Price per Unit</span>
                    <span className="text-chisco-steel">₦{product.price.toLocaleString()}</span>
                  </div>
                  {product.tags && product.tags.length > 0 && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-chisco-ink">Categories</span>
                      <span className="text-chisco-steel">
                        {product.tags.map(tag => tag.charAt(0).toUpperCase() + tag.slice(1)).join(', ')}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Delivery Info */}
            <div>
              <h2 className="text-xl font-heading font-semibold text-chisco-ink mb-4">
                Delivery Information
              </h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <ul className="space-y-2 text-chisco-steel">
                  <li>• Delivery times vary by location and product availability</li>
                  <li>• Bulk orders may require special arrangements</li>
                  <li>• All deliveries are arranged via WhatsApp after order confirmation</li>
                  <li>• Please specify preferred delivery date and time during checkout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}