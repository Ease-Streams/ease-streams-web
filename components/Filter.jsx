import { CgSearch } from "react-icons/cg";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export const Filter = () => {
  return (
    <div className="flex flex-col w-full lg:max-w-[220px]">
      <h2 className="lg:hidden text-xl font-semibold">Filter</h2>
      <div
        id="accordion-color"
        data-accordion="collapse"
        data-active-classes="bg-w-100 dark:bg-gray-800 text-gray-900 dark:text-white">
        <div id="accordion-color-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium  text-gray-500  gap-3"
            data-accordion-target="#accordion-color-body-1"
            aria-expanded="true"
            aria-controls="accordion-color-body-1">
            <span>What is Flowbite?</span>
            <MdOutlineKeyboardArrowUp
              size={20}
              className="rotate-180 shrink-0"
            />
          </button>
          <div
            id="accordion-color-body-1"
            className="hidden"
            aria-labelledby="accordion-color-heading-1">
            <div className="p-5 pt-0">
              <div className="max-w-md mx-auto">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <CgSearch size={15} />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                    required
                  />
                </div>
              </div>

              {Array.from({ length: 6 }).map((_, index) => (
                <div className="flex items-center mb-4 mt-2 w-full" key={index}>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-sm  text-gray-900 dark:text-gray-300">
                    Default checkbox
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
