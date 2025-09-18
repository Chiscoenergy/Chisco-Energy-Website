'use client';

import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart, onQuickView }: ProductCardProps) {
  const handleAddToCart = () => {
    onAddToCart?.(product);
  };

  const handleQuickView = () => {
    onQuickView?.(product);
  };

  const isInStock = product.availability !== 'out-of-stock';

  return (
    <article className="bg-white rounded-xl shadow-sm p-4 flex flex-col hover:shadow-md transition-shadow duration-200 group">
      {/* Product Image */}
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        {product.images && product.images[0] ? (
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="text-center text-gray-400">
            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm">No Image</p>
          </div>
        )}

        {/* Availability Badge */}
        {!isInStock && (
          <div className="absolute top-2 right-2 bg-danger text-white text-xs px-2 py-1 rounded-full font-medium">
            Out of Stock
          </div>
        )}

        {product.availability === 'pre-order' && (
          <div className="absolute top-2 right-2 bg-chisco-amber text-chisco-black text-xs px-2 py-1 rounded-full font-medium">
            Pre-order
          </div>
        )}

        {/* Quick View Button */}
        <button
          onClick={handleQuickView}
          className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm text-chisco-ink p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white"
          aria-label="Quick view"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col">
        <h3 className="font-heading text-lg font-semibold text-chisco-ink mb-2 line-clamp-2">
          {product.title}
        </h3>

        {product.excerpt && (
          <p className="text-sm text-chisco-steel mb-3 line-clamp-2 flex-1">
            {product.excerpt}
          </p>
        )}

        {/* Pack Size */}
        {product.packSize && (
          <div className="text-xs text-chisco-steel mb-2">
            Pack Size: {product.packSize}
          </div>
        )}

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-chisco-navy">
              ₦{product.price.toLocaleString()}
            </span>
            {product.packSize && (
              <span className="text-xs text-chisco-steel">
                per {product.packSize}
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!isInStock}
            className="inline-flex items-center px-4 py-2 bg-chisco-amber text-chisco-black font-semibold rounded-lg hover:bg-chisco-amber/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label={`Add ${product.title} to cart`}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add
          </button>
        </div>
      </div>
    </article>
  );
}