"use client";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { FaRegCircleUser } from "react-icons/fa6";
import { BiHeart } from "react-icons/bi";

const Header = () => {
  return (
    <div className="w-full flex justify-around items-center bg-[#eee] p-2 gap-2">
      <div>
        <Image src="/images/ease-logo.svg" height={200} width={200}></Image>
      </div>
      <SearchBar />
      <div className="flex">
        <button className="border-[2px] lg:p-2 lg:px-3 items-center gap-3 border-none flex">
          <FaRegCircleUser size={20} />
          <span className="text-md hidden lg:flex">Login</span>
        </button>
        <button className="border-[2px] lg:p-2 lg:px-3  items-center gap-3 justify-center border-none  hidden lg:flex">
          <BiHeart size={20} />
          <span className="text-md">Wishlist</span>
        </button>
      </div>
    </div>
  );
};

export default Header;