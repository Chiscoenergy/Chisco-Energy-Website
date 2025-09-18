export type Product = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  description?: string;
  price: number; // integer Naira
  images: string[]; // urls
  sku?: string;
  packSize?: string; // e.g., "20L", "210L"
  availability?: "in-stock" | "out-of-stock" | "pre-order";
  tags?: string[];
  createdAt?: string;
};

export type CartItem = {
  productId: string;
  title: string;
  price: number;
  qty: number;
  lineTotal: number; // price * qty
};
