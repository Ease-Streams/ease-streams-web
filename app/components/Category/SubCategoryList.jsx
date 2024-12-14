'use client';

import { useRef, useState, useEffect } from 'react';
import ScrollButton from "../ScrollButton"; // Import the ScrollButton
import SubCategoryCard from "../SubCategory/SubCategoryCard"; // Import SubCategoryCard

const SubCategoryList = ({ item, index }) => {
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

  useEffect(() => {
    checkScrollPosition(); // Check initial scroll position when the component mounts
  }, []);

  return (
    <div className="flex flex-col gap-5 py-3 border-t-2 border-dashed border-gray-300" key={index}>
      <h2 className="text-md lg:text-2xl font-semibold">{item?.title}</h2>
      <p className="hidden">{item.content}</p>

      {/* Scrollable Subcategory List */}
      <div className="relative flex overflow-x-auto gap-5 lg:gap-9" id={`sub-category-${index}`}>
        {/* Client-side Scroll Buttons */}
        <ScrollButton
          direction="left"
          scrollContainerRef={scrollContainerRef}
          isAtStart={isAtStart}
          isAtEnd={isAtEnd}
        />
        <div
          ref={scrollContainerRef}
          className="flex overflow-auto gap-5 lg:gap-9"
          onScroll={checkScrollPosition}>
          {item.subCategories &&
            item?.subCategories?.map((subCategory, innerIndex) => (
              <div key={innerIndex}>
                <SubCategoryCard category={subCategory} />
              </div>
            ))}
        </div>
        <ScrollButton
          direction="right"
          scrollContainerRef={scrollContainerRef}
          isAtStart={isAtStart}
          isAtEnd={isAtEnd}
        />
      </div>
    </div>
  );
};

export default SubCategoryList;
