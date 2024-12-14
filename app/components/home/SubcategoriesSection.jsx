'use client';
import { useRef, useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import SubCategoryCard from '../SubCategory/SubCategoryCard';

const CategoriesSection = ({ data }) => {
  const scrollContainerRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // Check the scroll position to enable/disable buttons
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, offsetWidth } = scrollContainerRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + offsetWidth >= scrollWidth);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200, // Adjust scroll amount as needed
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200, // Adjust scroll amount as needed
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    checkScrollPosition(); // Check initial scroll position
  }, []);

  return (
    <div className="categories-section flex flex-col gap-4 relative">
      {data?.title && (
        <div className="flex gap-3 items-center">
          <h2 className="text-base lg:text-lg font-bold text-gray-700">
            {data?.title}
          </h2>
          <div className="flex-grow bg-gray-300 h-[2px]"></div>
        </div>
      )}
      <div className="relative">
        {/* Left Scroll Button */}
        <button
          disabled={isAtStart}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-300 z-20 ${isAtStart ? 'cursor-not-allowed' : ''}`}
          onClick={scrollLeft}
        >
          <FaArrowLeft />
        </button>

        {/* Scrollable Subcategory List */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-5 lg:gap-9 pt-2 scrollbar-hide"
          onScroll={checkScrollPosition} // Check scroll position on scroll
        >
          {(data?.subcategoryRefs || data?.categoryRefs)?.map((subcategory) => (
            <SubCategoryCard key={subcategory.id} category={subcategory} />
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          disabled={isAtEnd}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-300 z-20 ${isAtEnd ? 'cursor-not-allowed' : ''}`}
          onClick={scrollRight}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CategoriesSection;
