import CheckoutSection from "@/components/global/sections/checkout";
import { auth } from "@clerk/nextjs/server";

import { LockKeyhole } from "lucide-react";

export default async function CheckoutPage() {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) {
    redirectToSignIn({
      returnBackUrl: "/checkout",
    });
    return;
  }

  return (
    <div>
      <header className="px-20 py-4 w-full flex justify-between items-center">
        <h1 className="text-2xl font-bold">Logo</h1>
        <p className="text-xl font-bold text-gray-500">Checkout</p>
        <LockKeyhole className="size-5 text-gray-500" />
      </header>
      <CheckoutSection />
      {/* CAPTCHA Widget */}
      <div id="clerk-captcha"></div>
      <footer></footer>
    </div>
  );
}
