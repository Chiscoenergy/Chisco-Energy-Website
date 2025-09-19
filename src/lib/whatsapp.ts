import { CartItem } from "@/types/product";

export interface WhatsAppOrderData {
  fullName: string;
  phone?: string;
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

  let message = `*🛢️ CHISCO ENERGY - NEW ORDER*

*Customer Details:*
👤 Name: ${fullName}
📱 ${phone ? `Phone: ${phone}` : "Phone: (will provide via WhatsApp)"}
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
   Unit Price: ₦${item.price.toLocaleString()}
   Line Total: ₦${item.lineTotal.toLocaleString()}`;
  });

  message += `

*💰 Order Summary:*
Total Amount: *₦${subtotal.toLocaleString()}*`;

  if (additionalNotes) {
    message += `

*📝 Additional Notes:*
${additionalNotes}`;
  }

  message += `

*⚡ Next Steps:*
• Please confirm the order details
• Provide delivery timeline
• Confirm total payment amount
• Arrange payment method

Thank you for choosing Chisco Energy! 🚛`;

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
