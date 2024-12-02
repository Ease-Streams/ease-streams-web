import SubCategoryCard from "../SubCategory/SubCategoryCard";

const SubcategoriesSection = ({ data }) => (
  <div className="subcategories-section flex flex-col gap-4">
    {data?.title && (
      <div className="flex gap-3 items-center">
        <h2 className="text-base lg:text-lg font-bold text-gray-700">
          {data?.title}
        </h2>
        <div className="flex-grow bg-gray-300 h-[2px]"></div>
      </div>
    )}
    <div className="flex overflow-auto gap-4 lg:gap-9 pt-2">
      {data?.subcategoryRefs?.map((subcategory) => (
        <SubCategoryCard key={subcategory.id} category={subcategory} />
      ))}
    </div>
  </div>
);

export default SubcategoriesSection;
