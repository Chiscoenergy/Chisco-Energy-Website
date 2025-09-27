import { CartItem } from "@/types/product";

export interface WhatsAppOrderData {
  fullName: string;
  address: string;
  dateTime?: string;
  additionalNotes?: string;
  items: CartItem[];
  subtotal: number;
}

export function generateWhatsAppMessage(orderData: WhatsAppOrderData): string {
  const {
    fullName,
    address,
    dateTime,
    additionalNotes,
    items,
    subtotal,
  } = orderData;

  let message = `*🛢️ CHISCO ENERGY - NEW ORDER*

*Customer Details:*
👤 Name: ${fullName}
📍 Delivery Address: ${address}`;

  if (dateTime) {
    message += `
📅 Preferred Delivery: ${dateTime}`;
  }

  message += `

*📦 Order Items:*`;

  items.forEach((item, index) => {
    message += `
${index + 1}. *${item.title}*
   Quantity: ${item.qty}
   Pack Size: ${item.packSize || 'N/A'}`;
  });

  message += `

*� Order Summary:*
Total Items: *${items.length} product(s)*
Total Quantity: *${items.reduce((sum, item) => sum + item.qty, 0)} units*`;

  if (additionalNotes) {
    message += `

*📝 Additional Notes:*
${additionalNotes}`;
  }

  message += `

*⚡ Next Steps:*
• Please confirm the order details
• Provide delivery timeline and pricing
• Arrange payment method
• Confirm delivery address

Thank you for choosing Chisco Energy! 🚛`;

  return message;
}

export function generateWhatsAppUrl(
  message: string,
  phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "234823636570"
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
