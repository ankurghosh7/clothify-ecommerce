"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button, buttonVariants } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useCart } from "@/services/cart.provider";

const CartPopup = () => {
  const {
    // addToCart,
    cart: items,
    // clearCart,
    removeFromCart,
    updateCartItem,
  } = useCart();
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} size={"icon"} className="relative">
          <ShoppingCart className="size-5" />
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {items.length}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full sm:max-w-lg">
        <DropdownMenuLabel>Shopping Cart</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="mt-8 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <div className="relative w-20 h-20">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-muted-foreground">
                  ${item.price.toFixed(2)}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      updateCartItem(item.id, Math.max(0, item.quantity - 1))
                    }
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateCartItem(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {items.length > 0 ? (
          <div className="mt-8">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Link
              href={"/checkout"}
              className={cn(buttonVariants(), "w-full mt-4")}
            >
              Checkout
            </Link>
          </div>
        ) : (
          <p className="text-center text-muted-foreground mt-8">
            Your cart is empty
          </p>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CartPopup;
