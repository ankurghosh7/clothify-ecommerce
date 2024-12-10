"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";

type WishlistItem = {
  id: string;
  name: string;
  price: number;
};

type WishlistContextType = {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (itemId: string) => void;
  clearWishlist: () => void;
};

// Create context
const WishlistContext = createContext<WishlistContextType | null>(null);

type WishlistProviderProps = {
  children: ReactNode;
};

export const WishlistProvider: React.FC<WishlistProviderProps> = ({
  children,
}) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const isLoggedIn = false;
  // Load data from local storage on mount
  useEffect(() => {
    if (!isLoggedIn) {
      const storedWishlist = localStorage.getItem("wishlist");
      if (storedWishlist) setWishlist(JSON.parse(storedWishlist));
    }
  }, [isLoggedIn]);

  // Sync local storage when cart or wishlist changes
  useEffect(() => {
    if (!isLoggedIn) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist, isLoggedIn]);

  const addToWishlist = (item: WishlistItem) => {
    setWishlist((prev) => {
      if (prev.find((wishlistItem) => wishlistItem.id === item.id)) {
        return prev;
      }
      return [...prev, item];
    });
  };

  const removeFromWishlist = (itemId: string) => {
    setWishlist((prev) => prev.filter((item) => item.id !== itemId));
  };

  const clearWishlist = () => setWishlist([]);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = React.useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
