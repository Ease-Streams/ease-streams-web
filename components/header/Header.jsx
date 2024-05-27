"use client";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="w-full flex justify-around items-center bg-[#eee] p-2 gap-2">
      <div>
        <Image src="/images/ease-logo.svg" height={200} width={200}></Image>
      </div>
      <SearchBar />
      <button className="border-[2px] p-2 px-3 font-semibold items-center gap-3  border-none flex">
        <FaRegCircleUser />
        Login
      </button>
    </div>
  );
};

export default Header;
