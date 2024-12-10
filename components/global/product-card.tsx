"use client";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Product } from "@/lib/types";
import { useCart } from "@/services/cart.provider";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  return (
    <Link
      href={"#"}
      className="shrink-0 w-72 h-[22rem] bg-gray-100 shadow-md rounded-lg overflow-hidden relative group"
    >
      <Image
        alt="product"
        src={product.image}
        width={1000}
        height={1000}
        loading="lazy"
        className="w-full h-3/4 object-cover"
      />
      <div className="flex justify-between w-full h-1/4 p-2">
        <div>
          <h3 className="text-lg font-bold text-foreground text-wrap">
            {product.name}
          </h3>
          <p className="font-bold text-base">${product.price}</p>
        </div>
      </div>
      <div className="group-hover:flex absolute -bottom-full  group-hover:bottom-0 transition-all duration-300 ease-in-out left-0 w-full h-1/4 max-h-24 bg-slate-50/20 backdrop-blur-md flex justify-center items-center gap-6 ">
        <Button variant={"secondary"} onClick={() => addToCart(product)}>
          <ShoppingCart size={24} />
          Add to Cart
        </Button>
        <Button>Buy Now</Button>
      </div>
    </Link>
  );
};

export default ProductCard;
