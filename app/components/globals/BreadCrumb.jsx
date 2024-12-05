import { convertToSlug, normaizeString } from "@/app/utils/helper";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Breadcrumb = async ({ data }) => {
  let breadcrumbData = await data;
  // Generate breadcrumb items dynamically
  const breadcrumbItems = Object.keys(breadcrumbData).map((key, index) => {
    const pathSegments = Object.keys(breadcrumbData)
      .slice(0, index + 1)
      .map((k) => convertToSlug(breadcrumbData[k]))
      .join("/");

    const isLast = index === Object.keys(breadcrumbData).length - 1;

    return (
      <li key={key} aria-current={isLast ? "page" : undefined}>
        <div className="flex items-center">
          <MdOutlineKeyboardArrowRight size={20} color="gray" />
          <a
            href={`/${pathSegments}`}
            className={`ms-1 font-medium ${
              isLast ? "text-gray-500" : "text-gray-700 hover:text-blue-600"
            } md:ms-2 dark:text-gray-400 ${
              isLast ? "" : "dark:hover:text-white"
            }`}>
            {normaizeString(breadcrumbData[key])}
          </a>
        </div>
      </li>
    );
  });

  return (
    <nav className="flex text-xs" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <a
            href="/"
            target="_self"
            className="inline-flex items-center gap-1 font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            Home
          </a>
        </li>
        {breadcrumbItems}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
