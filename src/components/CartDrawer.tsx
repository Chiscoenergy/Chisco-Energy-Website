'use client';

import { useState } from 'react';
import { useCartStore } from '@/lib/cart';
import CheckoutDialog from './CheckoutDialog';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, updateQuantity, removeItem, clearCart } = useCartStore();
  const [showCheckout, setShowCheckout] = useState(false);

  const shippingEstimate = 'Shipping to be arranged via WhatsApp';

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-heading font-semibold text-chisco-ink">
              Your Cart ({items.length})
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close cart"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13l-1.1 5M7 13h10m0 0v8a2 2 0 01-2 2H9a2 2 0 01-2-2v-8" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-chisco-ink mb-2">Your cart is empty</h3>
                <p className="text-chisco-steel text-sm">Add products to start an order.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.productId} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    {/* Placeholder for product image */}
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0"></div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-chisco-ink truncate">{item.title}</h3>
                      {item.packSize && <p className="text-sm text-chisco-steel">{item.packSize}</p>}
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item.productId, item.qty - 1)}
                        className="w-8 h-8 flex items-center justify-center bg-chisco-amber text-chisco-black rounded hover:bg-chisco-amber/90"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-medium">{item.qty}</span>
                      <button
                        onClick={() => handleQuantityChange(item.productId, item.qty + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-chisco-amber text-chisco-black rounded hover:bg-chisco-amber/90"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right">
                      <button
                        onClick={() => removeItem(item.productId)}
                        className="text-xs text-danger hover:text-danger/80"
                        aria-label="Remove item"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-6 space-y-4">
              {/* Cart Summary */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-chisco-steel">Shipping:</span>
                  <span className="font-medium">{shippingEstimate}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleCheckout}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-chisco-amber text-chisco-black font-semibold rounded-xl hover:bg-chisco-amber/90 transition-colors"
                >
                  Proceed to WhatsApp
                </button>
                <button
                  onClick={clearCart}
                  className="w-full text-sm text-chisco-steel hover:text-danger transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Checkout Dialog */}
      <CheckoutDialog
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        onSuccess={onClose}
      />
    </>
  );
}