'use client';

import { useState } from 'react';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import CartDrawer from '@/components/CartDrawer';
import CheckoutDialog from '@/components/CheckoutDialog';

export default function CartPage() {
  const [isCartOpen, setIsCartOpen] = useState(true);
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <div className="min-h-screen bg-chisco-surface">
      {/* Navigation */}
      <NavBar />

      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-chisco-navy hover:text-chisco-petrol font-medium"
              >
                ← Back to Home
              </Link>
              <span className="text-chisco-steel">|</span>
              <Link
                href="/products"
                className="text-chisco-navy hover:text-chisco-petrol font-medium"
              >
                Continue Shopping
              </Link>
            </div>
            <h1 className="text-2xl font-heading font-semibold text-chisco-ink">
              Shopping Cart
            </h1>
          </div>
        </div>
      </div>

      {/* Cart Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />
      </div>

      {/* Checkout Dialog */}
      <CheckoutDialog
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
      />
    </div>
  );
}