'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCartStore } from '@/lib/cart';
import { generateWhatsAppMessage, openWhatsApp } from '@/lib/whatsapp';

interface CheckoutDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

interface CheckoutFormData {
  fullName: string;
  address: string;
  dateTime?: string;
  additionalNotes?: string;
}

export default function CheckoutDialog({ isOpen, onClose, onSuccess }: CheckoutDialogProps) {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<CheckoutFormData>();

  const subtotal = getTotalPrice();

  const onSubmit = async (data: CheckoutFormData) => {
    setIsSubmitting(true);

    try {
      const orderData = {
        ...data,
        items,
        subtotal
      };

      const message = generateWhatsAppMessage(orderData);
      openWhatsApp(message);

      // Clear cart and close dialogs
      clearCart();
      reset();
      onClose();
      onSuccess?.();

      // Show success toast (you could implement a toast system here)
      console.log('Order sent to WhatsApp successfully!');
    } catch (error) {
      console.error('Error sending WhatsApp message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-heading font-semibold text-chisco-ink">
              Complete Your Order
            </h2>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close dialog"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Order Summary */}
          <div className="p-6 border-b bg-gray-50">
            <h3 className="font-medium text-chisco-ink mb-3">Order Summary</h3>
            <div className="space-y-2">
              {items.map((item) => (
                <div key={item.productId} className="flex justify-between text-sm">
                  <span className="text-chisco-steel">
                    {item.title} × {item.qty}
                  </span>
                  <span className="font-medium">₦{item.lineTotal.toLocaleString()}</span>
                </div>
              ))}
              <div className="flex justify-between text-base font-semibold border-t pt-2 mt-3">
                <span>Total:</span>
                <span>₦{subtotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-chisco-ink mb-1">
                Full Name *
              </label>
              <input
                {...register('fullName', { required: 'Full name is required' })}
                type="text"
                id="fullName"
                className="w-full rounded-lg border border-chisco-steel px-3 py-2 focus:ring-2 focus:ring-chisco-petrol focus:border-transparent"
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="text-danger text-sm mt-1">{errors.fullName.message}</p>
              )}
            </div>



            {/* Delivery Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-chisco-ink mb-1">
                Delivery Address *
              </label>
              <textarea
                {...register('address', { required: 'Delivery address is required' })}
                id="address"
                rows={3}
                className="w-full rounded-lg border border-chisco-steel px-3 py-2 focus:ring-2 focus:ring-chisco-petrol focus:border-transparent resize-none"
                placeholder="Enter your delivery address"
              />
              {errors.address && (
                <p className="text-danger text-sm mt-1">{errors.address.message}</p>
              )}
            </div>

            {/* Preferred Delivery Date/Time */}
            <div>
              <label htmlFor="dateTime" className="block text-sm font-medium text-chisco-ink mb-1">
                Preferred Delivery Date/Time
              </label>
              <input
                {...register('dateTime')}
                type="datetime-local"
                id="dateTime"
                className="w-full rounded-lg border border-chisco-steel px-3 py-2 focus:ring-2 focus:ring-chisco-petrol focus:border-transparent"
              />
              <p className="text-xs text-chisco-steel mt-1">Optional - we&apos;ll contact you to confirm availability</p>
            </div>

            {/* Additional Notes */}
            <div>
              <label htmlFor="additionalNotes" className="block text-sm font-medium text-chisco-ink mb-1">
                Additional Notes
              </label>
              <textarea
                {...register('additionalNotes')}
                id="additionalNotes"
                rows={2}
                className="w-full rounded-lg border border-chisco-steel px-3 py-2 focus:ring-2 focus:ring-chisco-petrol focus:border-transparent resize-none"
                placeholder="Any special instructions or requirements..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-chisco-amber text-chisco-black font-semibold rounded-xl hover:bg-chisco-amber/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-chisco-black" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  Proceed to WhatsApp
                </>
              )}
            </button>

            <p className="text-xs text-chisco-steel text-center">
              Opening WhatsApp with your order details — you can edit the message before sending.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}