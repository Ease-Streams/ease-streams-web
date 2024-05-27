"use client";
import { CgSearch } from "react-icons/cg";
const SearchBar = () => {
  return (
    <>
      <div className="w-full lg:max-w-[60%]  flex items-center">
        <input
          type="search"
          placeholder="Search for category / company / product"
          minLength={3}
          className="w-full outline-none focus:border-0  border-none py-2 h-[40px] px-5 bg-white  rounded-l-md"
        />
        <button className=" bg-[#03A7E8] h-[40px] p-2 rounded-r-md">
          <CgSearch size={25} color="white" />
        </button>
      </div>
      <div></div>
    </>
  );
};

export default SearchBar;
