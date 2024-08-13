"use client";
import Breadcrumb from "@/components/globals/BreadCrumb";
import { Listing } from "../../../components/Listing";
import SmallBanner from "@/components/home/SmallBanner";

export const SearchList = (props) => {
  return (
    <menu className="justify-center flex">
      <div className="w-full  flex flex-col gap-6 p-2 xl:max-w-[90%] min-[1537px]:max-w-[70%]">
        <div className="p-2 pb-4 flex flex-col gap-6 w-full flex-grow ">
          <div className="lg:pl-5 flex-col flex gap-2">
            <Breadcrumb />
            <SmallBanner />
          </div>
          <Listing />
        </div>
      </div>
    </menu>
  );
};
