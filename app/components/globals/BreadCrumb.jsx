import { convertToSlug, normaizeString } from "@/app/utils/helper";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Breadcrumb = (props) => {
  const { data } = props;
  return (
    <nav className="flex text-xs" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse ">
        <li className="inline-flex items-center">
          <a
            href={"/"}
            target="_self"
            className="inline-flex items-center  gap-1 font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            Home
          </a>
        </li>
        {data["category"] && (
          <li>
            <div className="flex items-center justify-center">
              <MdOutlineKeyboardArrowRight size={20} color="gray" />
              <a
                href={`/${convertToSlug(data["category"])}`}
                className="ms-1 font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                {normaizeString(data["category"])}
              </a>
            </div>
          </li>
        )}
        {data["sub-category"] && (
          <li aria-current="page">
            <a
              href={`/${convertToSlug(data["category"])}/${convertToSlug(
                data["sub-category"]
              )}`}
              className="flex items-center">
              <MdOutlineKeyboardArrowRight size={20} color="gray" />
              <span className="ms-1  font-medium text-gray-700 md:ms-2 dark:text-gray-400">
                {normaizeString(data["sub-category"])}
              </span>
            </a>
          </li>
        )}
        {data["product"] && (
          <li aria-current="page">
            <a
              href={`/${convertToSlug(data["category"])}/${convertToSlug(
                data["sub-category"]
              )}/${convertToSlug(data["product"])}`}
              className="flex items-center">
              <MdOutlineKeyboardArrowRight size={20} color="gray" />
              <span className="ms-1  font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                {normaizeString(data["product"])}
              </span>
            </a>
          </li>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
