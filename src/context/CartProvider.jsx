import { useState, useMemo, useEffect } from "react";
import { CartContext } from "./CartContext";

const STORAGE_KEY = "cartly-items";

function loadStoredItems() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadStoredItems);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // localStorage unavailable (e.g. private browsing) - cart just won't persist
    }
  }, [items]);

  const value = useMemo(() => {
    const addItem = (product) => {
      setItems((current) => {
        const existing = current.find((item) => item.id === product.id);
        if (existing) {
          return current.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        return [
          ...current,
          {
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            quantity: 1,
          },
        ];
      });
    };

    const removeItem = (id) => {
      setItems((current) => current.filter((item) => item.id !== id));
    };

    const updateQuantity = (id, quantity) => {
      setItems((current) =>
        quantity <= 0
          ? current.filter((item) => item.id !== id)
          : current.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    };

    const count = items.reduce((sum, item) => sum + item.quantity, 0);

    return { items, count, addItem, removeItem, updateQuantity };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
