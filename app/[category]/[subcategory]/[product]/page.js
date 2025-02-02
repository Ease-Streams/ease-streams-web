import SEO from "@/app/components/SeoMeta";
import portalApi from "../../../PortalApi/portalApi";
import ProductDetails from "../../../product-details/ProductDetails";
import { extractItemCode } from "../../../utils/helper";

const Page = async ({ params }) => {
  const awaitedParams = await params;
  const { product, subcategory, category } = awaitedParams;
  const productDetails = await portalApi.getProductDetails(product);
  let relatedSubCategories = await portalApi.getSubcategoryByCategory(
    category,
    10
  );
  // relatedProducts["docs"] = relatedProducts?.docs.filter(
  //   (o) => o.itemSlug != product
  // );
  const seoData = {
    metaTitle:
      productDetails.docs[0]?.metaTitle || productDetails.docs[0].title,
    metaDescription: productDetails.docs[0]?.metaDescription || "",
    metaKeyword: productDetails.docs[0]?.metaKeyword || "",
    canonical:
      productDetails.docs[0]?.canonical || `/${productDetails.docs[0]?.slug}`,
  };
  return (
    <>
      <SEO seoData={seoData} />
      <menu>
        <ProductDetails
          data={productDetails.docs[0]}
          breadcrumb={awaitedParams}
          relatedSubCategories={relatedSubCategories}
        />
      </menu>
    </>
  );
};
export default Page;
