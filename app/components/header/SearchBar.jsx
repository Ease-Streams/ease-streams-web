"use client";
import {
  normalizeSearchTermwithHyphen,
  payloadServer,
} from "@/app/utils/helper";
import { useState, useEffect, useRef } from "react";
import { CgSearch } from "react-icons/cg";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({
    searchtags: [],
    products: [],
    brands: [],
  });
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  // Retrieve query from local storage on mount
  useEffect(() => {
    const storedQuery = localStorage.getItem("searchQuery");
    if (storedQuery) {
      setDropdownVisible(false);
      setQuery(storedQuery);
      localStorage.removeItem("searchQuery");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (query.length >= 2) {
        try {
          const [searchtagsResponse, productsResponse, brandsResponse] =
            await Promise.all([
              fetch(
                `${payloadServer}/api/searchtags?where[title][like]=${query}&limit=5`
              ),
              fetch(
                `${payloadServer}/api/products?where[title][like]=${query}&limit=5`
              ),
              fetch(
                `${payloadServer}/api/brands?where[title][like]=${query}&limit=5`
              ),
            ]);

          const searchtagsData = await searchtagsResponse.json();
          const productsData = await productsResponse.json();
          const brandsData = await brandsResponse.json();

          setResults({
            searchtags: searchtagsData.docs || [],
            products: productsData.docs || [],
            brands: brandsData.docs || [],
          });
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      } else {
        setDropdownVisible(false);
      }
    };

    fetchData();
  }, [query]);

  const handleInputChange = (e) => {
    setDropdownVisible(true);
    setQuery(e.target.value);
  };

  const handleResultClick = (result) => {
    const selectedQuery = result.title;
    setQuery(selectedQuery);
    localStorage.setItem("searchQuery", selectedQuery); // Store query in local storage
    setDropdownVisible(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (query.trim()) {
        localStorage.setItem("searchQuery", query.trim()); // Store query in local storage
        location.href = `/products/${normalizeSearchTermwithHyphen(
          query.trim()
        )}`; // Redirect to products page
      }
    }
  };

  const handleSuggestionClick = (query) => {
    if (query.trim()) {
      localStorage.setItem("searchQuery", query.trim()); // Store query in local storage
      location.href = `/products/${normalizeSearchTermwithHyphen(
        query.trim()
      )}`; // Redirect to products page
    }
  };
  const handleBrandClick = (query) => {
    if (query.trim()) {
      localStorage.setItem("searchQuery", query.trim()); // Store query in local storage
      location.href = `/brand/${normalizeSearchTermwithHyphen(query.trim())}`; // Redirect to products page
    }
  };

  // Close dropdown on clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document?.addEventListener("mousedown", handleClickOutside);
    return () => {
      document?.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <>
      <div className="w-full  flex flex-col items-center relative">
        <div className="flex w-full ">
          {/* <button className="bg-[#ddd] px-2 rounded-l-md font-semibold text-gray-500 text-sm">
            <span className="flex whitespace-nowrap justify-center items-center gap-1">
              <span className="hidden md:block">All Categories</span>{" "}
              <span className="block md:hidden">
                <BiCategory />
              </span>{" "}
              <FaAngleDown className="relative top-[2px]" />
            </span>
          </button> */}
          <input
            type="search"
            placeholder="Search category, product, brand..."
            minLength={3}
            className="w-full outline-none focus:border-0 border-none py-2 h-[40px] px-5 bg-white rounded-l-md"
            value={query}
            onChange={handleInputChange}
            onFocus={() => setDropdownVisible(true)}
            onKeyDown={handleKeyDown} // Add onKeyDown event
          />
          <button className="bg-[#03A7E8] h-[40px] p-2 rounded-r-md">
            <CgSearch size={25} color="white" />
          </button>
        </div>
        {isDropdownVisible &&
          (results.searchtags.length > 0 ||
            results.products.length > 0 ||
            results.brands.length > 0) && (
            <div
              ref={dropdownRef}
              className="absolute w-full text-sm bg-white border rounded-md shadow-lg p-2 mt-2 top-[34px] z-10 max-h-[400px] overflow-y-auto">
              <ul>
                {results.searchtags?.length > 0 && (
                  <>
                    <li className="bg-gray-100 p-2 font-semibold text-gray-500">
                      Suggestions
                    </li>
                    {results.searchtags?.map((result) => (
                      <>
                        <li
                          key={result.id}
                          className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleSuggestionClick(result.title)}>
                          {result.title}
                        </li>
                        <hr className="mx-3" />
                      </>
                    ))}
                  </>
                )}
                {results.products.length > 0 && (
                  <>
                    <li className="bg-gray-100 p-2 font-semibold text-gray-500">
                      Products
                    </li>
                    {results.products?.map((result) => (
                      <>
                        <li
                          key={result.id}
                          className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleResultClick(result)}>
                          <a href={result.slug}>{result.title}</a>
                        </li>
                        <hr className="mx-3" />
                      </>
                    ))}
                  </>
                )}
                {results.brands.length > 0 && (
                  <>
                    <li className="bg-gray-100 p-2 font-semibold text-gray-500">
                      Brands
                    </li>
                    {results.brands.map((result) => (
                      <>
                        <li
                          key={result.id}
                          className="flex flex-wrap items-center py-2 px-4 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleBrandClick(result.title)}>
                          <Image
                            unoptimized={true}
                            height={32}
                            width={32}
                            src={result.image.url}
                            alt={result.image.alt}
                            className="w-8 h-8 mr-2 rounded-full"
                          />
                          {result.title}
                        </li>
                        <hr className="mx-3" />
                      </>
                    ))}
                  </>
                )}
              </ul>
            </div>
          )}
      </div>
    </>
  );
};

export default SearchBar;
