export type Product = {
  id: string;
  slug: string;
  title: string;
  price?: number;
  images: string[]; // urls
  packSize?: string; // e.g., "20L", "210L"
  availability?: "in-stock" | "out-of-stock" | "pre-order";
  tags?: string[];
  createdAt?: string;
};

export type CartItem = {
  productId: string;
  title: string;
  packSize?: string;
  price?: number;
  qty: number;
};
