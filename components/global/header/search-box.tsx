import { Button } from "@/components/ui/button";
import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBox = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-start items-center lg:w-[28rem] relative h-11 rounded-full p-1 border focus-within:outline focus-within:bg-gray-100 transition-all duration-100 ease-in-out select-text">
        <input
          type="text"
          className="min-w-0 flex-1 h-full py-0 text-base px-2 text-gray-900 placeholder-gray-500 bg-transparent border-none focus:outline-none select-text"
          placeholder="Search for products..."
        />
        <Button
          className="rounded-full bg-[linear-gradient(118deg,rgba(117,250,255)_11.2%,rgba(241,185,108)_42%,rgba(250,106,253,0.71)_71.5%,rgba(123,183,253,1)_100.2%)] shadow-md"
          size={"icon"}
        >
          <FiSearch className="size-6" />
        </Button>
      </div>
    </div>
  );
};

export default SearchBox;
// background-image:  linear-gradient(118deg, rgb(177 250 255) 11.2%, rgb(241 185 108) 42%, rgb(250 106 253 / 71%) 71.5%, rgba(123, 183, 253, 1) 100.2%);
