"use client";
import React from "react";

import { useCart } from "@/services/cart.provider";
import CheckoutItemDetailsCard from "./_components/CheckoutItemDetailsCard";
import DelivaryDetails from "./_components/DelivaryDetails";
import PaymentDetails from "./_components/PaymentDetails";
import ReviewItemsAndDelivary from "./_components/ReviewItems";

const CheckoutSection = () => {
  const { cart: items } = useCart();
  // const [showPreview, setShowPreview] = React.useState(false);

  return (
    <main className="lg:px-20 xl:px-28 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-2">
          <DelivaryDetails />
          <PaymentDetails />
          <ReviewItemsAndDelivary />
        </div>
        <div className="">
          <CheckoutItemDetailsCard items={items} />
        </div>
      </div>
    </main>
  );
};

export default CheckoutSection;
