"use client";

import { LiaHomeSolid } from "react-icons/lia";
import { BiHeart } from "react-icons/bi";
import { TbListSearch } from "react-icons/tb";
import { IoIosSend } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";

const BottomNavigation = () => {
  return (
    <div className="sticky bottom-0 h-[60px] bg-white  lg:hidden">
      <div className="flex justify-around items-center pt-1 text-gray-600">
        <button className="mt-1 flex flex-col items-center text-[#03A7E8]">
          <LiaHomeSolid size={25} />
          <span className="text-xs">Home</span>
        </button>
        <button className="mt-1 flex flex-col items-center">
          <TbListSearch size={25} />
          <span className="text-xs">Categories</span>
        </button>
        <button className="mt-1 flex flex-col items-center">
          <IoIosSend size={25} />
          <span className="text-xs">RFQ</span>
        </button>
        <button className="mt-1 flex flex-col items-center">
          <BiHeart size={25} />
          <span className="text-xs">Wishlist</span>
        </button>
        <button className="mt-1 flex flex-col items-center">
          <FaRegCircleUser size={25} />
          <span className="text-xs">Login</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;
