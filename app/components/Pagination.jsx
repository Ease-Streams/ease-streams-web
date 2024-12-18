const Pagination = ({
  totalDocs,
  limit,
  page,
  totalPages,
  hasNextPage,
  hasPrevPage,
  nextPage,
  prevPage,
}) => {
  const handlePageChange = (newPage) => {
    location.href = `?page=${newPage}`;
  };
  const generatePageLinks = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`px-4 py-2 border rounded ${
            i === page
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-blue-100"
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    console.log(pages);
    return pages;
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      {/* Previous Button */}
      <button
        className={`px-4 py-2 border rounded ${
          hasPrevPage
            ? "bg-gray-100 text-gray-700 hover:bg-blue-100"
            : "bg-gray-300 text-gray-400 cursor-not-allowed"
        }`}
        onClick={() => hasPrevPage && handlePageChange(prevPage)}
        disabled={!hasPrevPage}
      >
        Previous
      </button>

      {/* Page Links */}
      {generatePageLinks()}

      {/* Next Button */}
      <button
        className={`px-4 py-2 border rounded ${
          hasNextPage
            ? "bg-gray-100 text-gray-700 hover:bg-blue-100"
            : "bg-gray-300 text-gray-400 cursor-not-allowed"
        }`}
        onClick={() => hasNextPage && handlePageChange(nextPage)}
        disabled={!hasNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
