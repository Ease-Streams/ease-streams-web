import React from "react";

const Pagination = ({ page, totalPages, prevPage, nextPage, onPageChange }) => {
  return (
    <form aria-label="Page navigation example" className="flex justify-center">
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <button
            name="page"
            value={prevPage ? prevPage : 1}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Previous
          </button>
        </li>

        {totalPages > 1 && (
          <>
            <li>
              <button
                name="page"
                value={1}
                className={`${
                  page === 1
                    ? "bg-[#03A7E8] text-white cursor-none"
                    : "bg-white text-gray-500 hover:bg-gray-100"
                } flex items-center justify-center px-3 h-8 leading-tight border border-gray-300`}>
                1
              </button>
            </li>

            {page > 4 && (
              <li className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500">
                ...
              </li>
            )}

            {Array.from({ length: totalPages }, (_, index) => index + 2)
              .filter(
                (pageNumber) =>
                  pageNumber === page ||
                  pageNumber === page - 1 ||
                  pageNumber === page + 1
              )
              .map((pageNumber) => (
                <li key={pageNumber}>
                  <button
                    name="page"
                    value={pageNumber}
                    className={`${
                      pageNumber === page
                        ? "bg-[#03A7E8] text-white cursor-none"
                        : "bg-white text-gray-500 hover:bg-gray-100"
                    } flex items-center justify-center px-3 h-8 leading-tight border border-gray-300`}>
                    {pageNumber}
                  </button>
                </li>
              ))}

            {page < totalPages - 3 && (
              <li className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500">
                ...
              </li>
            )}

            <li>
              <button
                name="page"
                value={totalPages}
                className={`${
                  page === totalPages
                    ? "bg-[#03A7E8] text-white cursor-none"
                    : "bg-white text-gray-500 hover:bg-gray-100"
                } flex items-center justify-center px-3 h-8 leading-tight border border-gray-300`}>
                {totalPages}
              </button>
            </li>
          </>
        )}

        <li>
          <button
            name="page"
            value={nextPage ? nextPage : totalPages}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Next
          </button>
        </li>
      </ul>
    </form>
  );
};

export default Pagination;
