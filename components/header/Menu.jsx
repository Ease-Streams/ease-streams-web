"use client";
import { VscSend } from "react-icons/vsc";
import { RiDiscountPercentLine } from "react-icons/ri";
import Link from "next/link";
const Menu = () => {
  return (
    <div className="lg:flex justify-around items-center bg-white py-3 shadow-md text-sm font-medium hidden">
      <div>All Categories</div>
      <div className="flex gap-4 text-green-600">
        <Link href={"/"} className="flex items-center gap-1">
          <RiDiscountPercentLine size={20} /> Deals
        </Link>
        <Link href={"/"} className="flex items-center gap-1">
          <VscSend size={20} />
          RFQ Marketplace
        </Link>
      </div>
    </div>
  );
};

export default Menu;
