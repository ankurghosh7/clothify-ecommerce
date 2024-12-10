import CheckoutSection from "@/components/global/sections/checkout";
// import { useAuth } from "@/hooks/useAuth";

import { LockKeyhole } from "lucide-react";

export default function CheckoutPage() {
  return (
    <div>
      <header className="px-20 py-4 w-full flex justify-between items-center">
        <h1 className="text-2xl font-bold">Logo</h1>
        <p className="text-xl font-bold text-gray-500">Checkout</p>
        <LockKeyhole className="size-5 text-gray-500" />
      </header>
      <CheckoutSection />
      <footer></footer>
    </div>
  );
}
