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
import { fetchSuggestions } from "@/app/PortalApi/portalApi";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({
    products: [],
    categories: [],
    subcategories: [],
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
          // Call the fetchSuggestions function with the search term
          const suggestions = await fetchSuggestions(query);

          if (!suggestions.error) {
            // Set the results state with the fetched data
            setResults({
              products: suggestions.products?.docs || [],
              categories: suggestions.categories?.docs || [],
              subcategories: suggestions.subcategories?.docs || [],
            });
          } else {
            console.error("Error fetching suggestions:", suggestions.error);
          }
        } catch (error) {
          console.error("Error in fetchData:", error);
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
          (results.products.length > 0 ||
            results.categories.length > 0 ||
            results.subcategories.length > 0) && (
            <div
              ref={dropdownRef}
              className="absolute w-full top-9 bg-white border border-gray-300 rounded-lg shadow-xl mt-2 p-3 z-10 max-h-[400px] overflow-y-auto text-sm"
            >
              <ul className="space-y-3">
                {/* Products Section */}
                {results.products?.length > 0 && (
                  <li>
                    <div className="bg-blue-50 px-4 py-2 font-semibold text-blue-600 uppercase rounded-md">
                      Products
                    </div>
                    <ul className="mt-2 space-y-1">
                      {results.products.map((product) => (
                        <li
                          key={product.id}
                          className="p-2 py-1 hover:bg-blue-100 cursor-pointer rounded-md transition-all flex items-center gap-3"
                        >
                          <a
                            href={product.slug}
                            className="flex items-center gap-2 w-full"
                          >
                            <span className="font-medium text-gray-800">
                              {product.title}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                )}

                {/* Categories Section */}
                {results.categories?.length > 0 && (
                  <li>
                    <div className="bg-green-50 px-4 py-2 font-semibold text-green-600 uppercase rounded-md">
                      Categories
                    </div>
                    <ul className="mt-2 space-y-1">
                      {results.categories.map((category) => (
                        <li
                          key={category.id}
                          className="p-2 py-1 hover:bg-green-100 cursor-pointer rounded-md transition-all flex items-center gap-3"
                          onClick={() => handleCategoryClick(category.title)}
                        >
                          <a href={category.slug}>
                            <span className="font-medium text-gray-800">
                              {category.title}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                )}

                {/* Subcategories Section */}
                {results.subcategories?.length > 0 && (
                  <li>
                    <div className="bg-purple-50 px-4 py-2 font-semibold text-purple-600 uppercase rounded-md">
                      Subcategories
                    </div>
                    <ul className="mt-2 space-y-1">
                      {results.subcategories.map((subcategory) => (
                        <li
                          key={subcategory.id}
                          className="p-2 py-1 hover:bg-purple-100 cursor-pointer rounded-md transition-all flex items-center gap-3"
                        >
                          <a href={subcategory.slug}>
                            <span className="font-medium text-gray-800">
                              {subcategory.title}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
              </ul>
            </div>
          )}
      </div>
    </>
  );
};

export default SearchBar;
