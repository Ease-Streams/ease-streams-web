import SubCategoryCard from "../SubCategory/SubCategoryCard";

const CategoriesSection = ({ data }) => (
  <div className="categories-section flex flex-col gap-4">
    {data?.title && (
      <div className="flex gap-3 items-center">
        <h2 className="text-lg font-bold text-gray-700">{data?.title}</h2>
        <div className="flex-grow bg-gray-300 h-[2px]"></div>
      </div>
    )}
    <div className="flex overflow-auto gap-12 pt-2">
      {(data?.subcategoryRefs || data?.categoryRefs)?.map((subcategory) => (
        <SubCategoryCard key={subcategory.id} category={subcategory} />
      ))}
    </div>
  </div>
);

export default CategoriesSection;
