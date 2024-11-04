"use client";
import SearchBar from "./SearchBar";
import { FaRegCircleUser } from "react-icons/fa6";
import { BiHeart } from "react-icons/bi";
import Logo from "./Logo";
import { VscSend } from "react-icons/vsc";
import { IoIosSend } from "react-icons/io";

const Header = () => {
  return (
    <div className="w-full flex justify-around items-center bg-[#eee] lg:!px-9 p-2 lg:p-2 gap-2 shadow-md">
      <div className="w-full  justify-around flex min-[1537px]:max-w-[80%] gap-2">
        <div className="flex flex-grow gap-5 lg:gap-16 w-full lg:max-w-[70%]">
          <Logo />
          <SearchBar />
        </div>
        <div className=" hidden lg:flex flex-grow justify-end">
          <button className="border-[2px] lg:p-2 lg:px-3 flex items-center text-green-600 font-medium gap-1 border-none whitespace-nowrap">
            <IoIosSend size={25} />
            <span className="text-md">RFQ</span>
          </button>
          <button className="border-[2px] lg:p-2 lg:px-3 flex items-center gap-2 border-none whitespace-nowrap">
            <FaRegCircleUser className="text-xl" />
            <span className="text-md">Login</span>
          </button>

          <button className="border-[2px] lg:p-2 lg:px-3  items-center gap-2 justify-center border-none  hidden lg:flex">
            <BiHeart size={20} />
            <span className="text-md">Wishlist</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
