"use client";
import SearchBar from "./SearchBar";
import { FaRegCircleUser } from "react-icons/fa6";
import { BiHeart } from "react-icons/bi";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="w-full flex justify-around items-center bg-[#eee] lg:!px-9 p-2 lg:p-2 gap-2">
      <div className="w-full  justify-around flex min-[1537px]:max-w-[80%] gap-2">
        <div className="flex flex-grow gap-5 lg:gap-16">
          <Logo />
          <SearchBar />
        </div>
        <div className=" hidden lg:flex flex-grow justify-end">
          <button className="border-[2px] lg:p-2 lg:px-3 flex items-center gap-3 border-none whitespace-nowrap">
            <FaRegCircleUser className="text-2xl" />
            <span className="text-md">Login</span>
          </button>
          <button className="border-[2px] lg:p-2 lg:px-3  items-center gap-3 justify-center border-none  hidden lg:flex">
            <BiHeart size={20} />
            <span className="text-md">Wishlist</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
