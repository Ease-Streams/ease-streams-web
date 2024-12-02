import { ProductCard } from "../ProductCard";

const ProductsSection = ({ data }) => (
  <div className="products-section flex flex-col gap-4">
    {data?.title && (
      <div className="flex gap-3 items-center">
        <h2 className="text-base lg:text-lg font-bold text-gray-700">
          {data?.title}
        </h2>
        <div className="flex-grow bg-gray-300 h-[2px]"></div>
      </div>
    )}
    <div className="flex overflow-x-auto gap-4">
      {data.productRefs.map((product) => (
        <ProductCard data={product} key={product.id} />
      ))}
    </div>
  </div>
);

export default ProductsSection;
