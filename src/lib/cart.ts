import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem, Product } from "@/types/product";

interface CartState {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product: Product, quantity = 1) => {
        const { items } = get();
        const existingItem = items.find(
          (item) => item.productId === product.id
        );

        if (existingItem) {
          // Update quantity of existing item
          set({
            items: items.map((item) =>
              item.productId === product.id
                ? {
                    ...item,
                    qty: item.qty + quantity,
                    lineTotal: (item.qty + quantity) * item.price,
                  }
                : item
            ),
          });
        } else {
          // Add new item
          const newItem: CartItem = {
            productId: product.id,
            title: product.title,
            price: product.price,
            qty: quantity,
            lineTotal: product.price * quantity,
          };
          set({ items: [...items, newItem] });
        }
      },

      removeItem: (productId: string) => {
        set({
          items: get().items.filter((item) => item.productId !== productId),
        });
      },

      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }

        set({
          items: get().items.map((item) =>
            item.productId === productId
              ? {
                  ...item,
                  qty: quantity,
                  lineTotal: quantity * item.price,
                }
              : item
          ),
        });
      },

      clearCart: () => {
        set({ items: [] });
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.qty, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.lineTotal, 0);
      },
    }),
    {
      name: "chisco-cart-storage",
      // Only persist in browser environment
      skipHydration: true,
    }
  )
);
