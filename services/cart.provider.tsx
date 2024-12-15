"use client";
import { CartItem, Product } from "@/types";
import React, { createContext, useState, useEffect, ReactNode } from "react";

type CartlistContextType = {
  cart: CartItem[];
  addToCart: (item: Product) => void;
  removeFromCart: (itemId: string) => void;
  updateCartItem: (itemId: string, quantity: number) => void;
  clearCart: () => void;
};

// Create context
const CartlistContext = createContext<CartlistContextType | null>(null);
//  Create provider type
type CartlistProviderProps = {
  children: ReactNode;
};

export const CartlistProvider: React.FC<CartlistProviderProps> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const isLoggedIn = false;

  const addToCart = (item: Product) => {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const updateCartItem = (itemId: string, quantity: number) => {
    setCart((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setCart([]);

  // Load data from local storage on mount
  useEffect(() => {
    if (!isLoggedIn) {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) setCart(JSON.parse(storedCart));
    }
  }, [isLoggedIn]);

  // Sync local storage when cart or wishlist changes
  useEffect(() => {
    if (!isLoggedIn) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isLoggedIn]);
  return (
    <CartlistContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartItem,
        clearCart,
      }}
    >
      {children}
    </CartlistContext.Provider>
  );
};

export const useCart = () => {
  const context = React.useContext(CartlistContext);
  if (!context) {
    throw new Error("useCart must be used within a CartlistProvider");
  }
  return context;
};
