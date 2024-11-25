"use client";
import { useState, useRef, useEffect } from "react";

const CategoryContent = ({ categoryData, PAYLOAD_IMG_SERVER }) => {
  const [expandedContent, setExpandedContent] = useState(
    Array(categoryData?.pageContent?.length).fill(false) // Track expanded state for each content block
  );
  const [isContentOverflowing, setIsContentOverflowing] = useState(
    Array(categoryData?.pageContent?.length).fill(false) // Track if content exceeds 400px
  );

  const contentRefs = useRef([]); // Reference array to track content blocks

  const toggleContent = (index) => {
    setExpandedContent((prev) => {
      const newExpandedContent = [...prev];
      newExpandedContent[index] = !newExpandedContent[index]; // Toggle the state
      return newExpandedContent;
    });
  };

  useEffect(() => {
    // Check if content overflows (height exceeds 400px)
    const checkOverflow = () => {
      const updatedOverflowState = categoryData?.pageContent?.map(
        (_, index) => {
          return contentRefs.current[index]?.scrollHeight > 400; // Check if the content height exceeds 400px
        }
      );
      setIsContentOverflowing(updatedOverflowState);
    };

    // Run the overflow check on component mount
    checkOverflow();

    // Optionally, handle window resize to recalculate overflow state
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, [categoryData]);

  return (
    <div className="w-full">
      <div className="flex flex-col gap-5 category-content mb-3">
        {categoryData?.pageContent?.length > 0 ? (
          categoryData?.pageContent?.map((content, index) => (
            <div
              className="flex flex-col lg:flex-row gap-9 border-gray-200 p-2"
              key={index}>
              {content?.pageContent?.map((category, innerindex) => (
                <div key={index}>
                  {category?.blockType.includes("contentBlock") ? (
                    <div className="relative flex flex-col" key={innerindex}>
                      <div
                        ref={(el) => (contentRefs.current[index] = el)} // Assign ref to track content height
                        className={`content-container max-h-[400px] overflow-hidden transition-all duration-300 ${
                          expandedContent[index] ? "max-h-none" : ""
                        }`}
                        style={{ display: "flex", flexDirection: "column" }}>
                        <div className="reset-tw">
                          {category?.content && (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: category?.content,
                              }}></div>
                          )}
                        </div>
                      </div>

                      {/* Show Read More / Less Button */}

                      <div className="flex gap-3 mt-3">
                        {index === 0 && (
                          <a
                            href=""
                            className="px-6 py-3 bg-[#66d7ff] text-white rounded-full cursor-pointer font-bold">
                            {"Contact Us"}
                          </a>
                        )}
                        {isContentOverflowing[index] && (
                          <button
                            onClick={() => toggleContent(index)}
                            className="text-blue-600 underline font-medium cursor-pointer">
                            {expandedContent[index] ? "Show Less" : "Read More"}
                          </button>
                        )}
                      </div>
                    </div>
                  ) : category?.image?.url ? (
                    <img
                      key={innerindex}
                      height={400}
                      width={400}
                      className="lg:max-w-[400px] max-h-[400px] h-auto object-contain p-2 m-auto"
                      src={`${PAYLOAD_IMG_SERVER}${category?.image?.url}`}
                      alt={category?.image?.alt}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </div>
          ))
        ) : (
          <></>
        )}
        {categoryData?.tableContent && (
          <div
            className="table-heading"
            dangerouslySetInnerHTML={{
              __html: categoryData?.tableContent || "<p>Loading...</p>",
            }}></div>
        )}
      </div>
    </div>
  );
};

export default CategoryContent;
