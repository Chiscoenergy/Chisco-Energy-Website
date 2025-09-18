import { CartItem } from "@/types/product";

export interface WhatsAppOrderData {
  fullName: string;
  phone: string;
  address: string;
  dateTime?: string;
  additionalNotes?: string;
  items: CartItem[];
  subtotal: number;
}

export function generateWhatsAppMessage(orderData: WhatsAppOrderData): string {
  const {
    fullName,
    phone,
    address,
    dateTime,
    additionalNotes,
    items,
    subtotal,
  } = orderData;

  let message = `Order from Chisco Website

Customer:
Name: ${fullName}
Phone: ${phone}
Delivery address: ${address}`;

  if (dateTime) {
    message += `
Preferred delivery date/time: ${dateTime}`;
  }

  message += `

Items:`;

  items.forEach((item, index) => {
    message += `
${index + 1}) ${item.title} — Qty: ${
      item.qty
    } — Unit Price: ₦${item.price.toLocaleString()} — Line total: ₦${item.lineTotal.toLocaleString()}`;
  });

  message += `

Subtotal: ₦${subtotal.toLocaleString()}`;

  if (additionalNotes) {
    message += `
Notes: ${additionalNotes}`;
  }

  message += `

Please confirm total amount and delivery lead time. Thank you.`;

  return message;
}

export function generateWhatsAppUrl(
  message: string,
  phoneNumber = "2348123456789"
): string {
  // Remove + and leading zeros from phone number for wa.me format
  const cleanPhone = phoneNumber.replace(/^\+?0*/, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

export function openWhatsApp(message: string, phoneNumber?: string): void {
  const url = generateWhatsAppUrl(message, phoneNumber);
  window.open(url, "_blank");
}
