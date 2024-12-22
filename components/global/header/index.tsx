import { Button } from "@/components/ui/button";
import React from "react";
import { Heart, Menu } from "lucide-react";
import MenuList from "./menu-list";
import CartDropdown from "./cart-dropdown";
import AuthBtn from "./auth-btn";

const Header = () => {
  return (
    <header className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-4 flex justify-between lg:grid lg:grid-cols-[200px_1fr_200px]">
      <h1>LOGO</h1>
      <MenuList />
      <div className="flex gap-2 justify-end items-center ">
        <CartDropdown />
        <AuthBtn />
        <Button className="lg:hidden lg:opacity-0 lg:invisible" size={"icon"}>
          <Menu className="size-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
