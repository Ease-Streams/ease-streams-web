'use client';

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const ScrollButton = ({ direction, scrollContainerRef, isAtStart, isAtEnd }) => {
  const scrollAmount = direction === 'left' ? -200 : 200;

  const handleScroll = () => {
    if (scrollContainerRef?.current) {
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const isDisabled = direction === 'left' ? isAtStart : isAtEnd;

  return (
    <button
      onClick={handleScroll}
      disabled={isDisabled}
      className={`absolute ${direction === 'left' ? 'left-0' : 'right-0'} top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-300 z-20 ${isDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
    >
      {direction === 'left' ? <FaArrowLeft /> : <FaArrowRight />}
    </button>
  );
};

export default ScrollButton;
