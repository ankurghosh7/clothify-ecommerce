import { CartlistProvider } from "@/services/cart.provider";
import { WishlistProvider } from "@/services/wishlist.provider";
import React from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CartlistProvider>
        <WishlistProvider>{children}</WishlistProvider>
      </CartlistProvider>
    </>
  );
};

export default Provider;
