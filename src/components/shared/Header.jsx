import React from "react";
import { RiSearch2Line } from "react-icons/ri";
const Header = () => {
  return (
    <header>
      {/**title and search */}
      <div className="flex flex-col gap-4 mb-6 md:flex-row justify-between md:items-center">
        <div>
          <h1 className="text-2xl text-gray-300">Jeager resto</h1>
          <p className="text-gray-500">07 octubre 2022</p>
        </div>
        <form action="">
          <div className="w-full relative">
            <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
      {/**taps*/}
      <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
        <a
          href=""
          className=" relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:l-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]"
        >
          Hot Dishes
        </a>
        <a href="" className="py-2 pr-4 ">
          Cold Dishes
        </a>
        <a href="" className="py-2 pr-4">
          soup
        </a>
        <a href="" className=" py-2">
          Grill
        </a>
      </nav>
    </header>
  );
};

export default Header;