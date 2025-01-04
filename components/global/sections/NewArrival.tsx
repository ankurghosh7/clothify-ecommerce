import Link from "next/link";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const NewArrival = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-center md:text-2xl lg:text-4xl font-semibold">
          New collection
        </h2>
        <div className="flex justify-end items-center gap-4">
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-gray-200 ">
              <IoIosArrowBack />
            </button>
            <button className="p-2 rounded-full bg-gray-100 ">
              <IoIosArrowForward />
            </button>
          </div>
          <Link
            href={"/"}
            className="px-4 py-2 rounded-full text-sm bg-gray-100"
          >
            View all
          </Link>
        </div>
      </div>
      <div className="flex gap-4 items-center overflow-x-scroll">
        <div className="shrink-0 w-[30rem] h-[20rem] bg-orange-100 rounded-3xl relative">
          <span className="block bg-white text-sm absolute top-5 right-5 bg-whi te py-2 px-6 rounded-full shadow-lg">
            Women
          </span>
          <div className="absolute bottom-5 left-5 rounded-xl bg-white p-3 flex justify-between items-center w-64 shadow-lg">
            <div className="space-y-2">
              <h4 className="font-bold text-base">Suede-effect jacket</h4>
              <div className="text-base font-bold space-x-4">
                <span className="text-black">$119.99</span>
                <span className="text-gray-400">$136.99</span>
              </div>
            </div>
            <button className="p-2 rounded-full bg-gray-100 ">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="shrink-0 w-[22rem] h-[20rem] bg-green-100 rounded-3xl relative">
          <span className="block bg-white text-sm absolute top-5 right-5 bg-whi te py-2 px-6 rounded-full shadow-lg">
            Women
          </span>
          <div className="absolute bottom-5 left-5 rounded-xl bg-white p-3 flex justify-between items-center w-64 shadow-lg">
            <div className="space-y-2">
              <h4 className="font-bold text-base">Suede-effect jacket</h4>
              <div className="text-base font-bold space-x-4">
                <span className="text-black">$119.99</span>
                <span className="text-gray-400">$136.99</span>
              </div>
            </div>
            <button className="p-2 rounded-full bg-gray-100 ">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="shrink-0 w-[22rem] h-[20rem] bg-amber-100 rounded-3xl relative">
          <span className="block bg-white text-sm absolute top-5 right-5 bg-whi te py-2 px-6 rounded-full shadow-lg">
            Women
          </span>
          <div className="absolute bottom-5 left-5 rounded-xl bg-white p-3 flex justify-between items-center w-64 shadow-lg">
            <div className="space-y-2">
              <h4 className="font-bold text-base">Suede-effect jacket</h4>
              <div className="text-base font-bold space-x-4">
                <span className="text-black">$119.99</span>
                <span className="text-gray-400">$136.99</span>
              </div>
            </div>
            <button className="p-2 rounded-full bg-gray-100 ">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="shrink-0 w-[30rem] h-[20rem] bg-cyan-100 rounded-3xl relative">
          <span className="block bg-white text-sm absolute top-5 right-5 bg-whi te py-2 px-6 rounded-full shadow-lg">
            Women
          </span>
          <div className="absolute bottom-5 left-5 rounded-xl bg-white p-3 flex justify-between items-center w-64 shadow-lg">
            <div className="space-y-2">
              <h4 className="font-bold text-base">Suede-effect jacket</h4>
              <div className="text-base font-bold space-x-4">
                <span className="text-black">$119.99</span>
                <span className="text-gray-400">$136.99</span>
              </div>
            </div>
            <button className="p-2 rounded-full bg-gray-100 ">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
