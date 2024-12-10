import React from "react";
import ProductCard from "../product-card";
import { Product } from "@/lib/types";

const RecommendSection = () => {
  const products: Product[] = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1524322465551-49be486e68f0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: " Premium Wireless Headphones",

      price: 249.99,
      category: "headphones",
      description:
        "Premium wireless headphones for an immersive sound experience. Features noise cancellation and long battery life.",
    },
  ];
  return (
    <div className="flex overflow-x-scroll ">
      <ProductCard product={products[0]} />
    </div>
  );
};

export default RecommendSection;
