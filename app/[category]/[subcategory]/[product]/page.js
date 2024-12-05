import portalApi from "../../../PortalApi/portalApi";
import ProductDetails from "../../../product-details/ProductDetails";
import { extractItemCode } from "../../../utils/helper";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  keywords: "create next app",
};

const Page = async ({ params }) => {
  const awaitedParams = await params;
  const { product, subcategory, category } = awaitedParams;
  const productDetails = await portalApi.getProductDetails(product);
  return (
    <menu>
      <ProductDetails
        data={productDetails.docs[0]}
        breadcrumb={awaitedParams}
      />
    </menu>
  );
};
export default Page;