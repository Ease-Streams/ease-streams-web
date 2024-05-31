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
