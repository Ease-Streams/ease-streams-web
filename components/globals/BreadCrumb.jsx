import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Breadcrumb = () => {
  return (
    <nav className="flex text-xs" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse ">
        <li className="inline-flex items-center">
          <Link
            href={"/"}
            className="inline-flex items-center  gap-1 font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center justify-center">
            <MdOutlineKeyboardArrowRight size={20} color="gray" />
            <Link
              href={"/"}
              className="ms-1 font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
              Projects
            </Link>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <MdOutlineKeyboardArrowRight size={20} color="gray" />
            <span className="ms-1  font-medium text-gray-500 md:ms-2 dark:text-gray-400">
              Flowbite
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
