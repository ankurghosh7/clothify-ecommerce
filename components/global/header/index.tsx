import { Button } from "@/components/ui/button";
import React from "react";
import { Heart, Menu } from "lucide-react";
import MenuList from "../nav/menu-list";
import CartDropdown from "./cart-dropdown";
import AuthBtn from "./auth-btn";
import SearchBox from "./search-box";

const Header = () => {
  return (
    <header className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-4 flex items-center justify-between lg:grid lg:grid-cols-[200px_1fr_200px]">
      <h1 className="text-2xl font-bold"> CLOTHIFY</h1>
      <SearchBox />
      <div className="flex gap-4 justify-end items-center ">
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
