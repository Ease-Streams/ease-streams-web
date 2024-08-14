import portalApi from "../../PortalApi/portalApi";
import ProductList from "./ProductList";

export default async function page(props) {
  const { params, searchParams } = props;
  const { page } = searchParams;
  const breadcrumb = params;
  const data = await portalApi.getSubCategoryData(
    breadcrumb["sub-category"],
    page
  );
  return (
    <ProductList
      data={data?.docs}
      page={data?.page}
      totalPages={data?.totalPages}
      nextPage={data?.nextPage}
      prevPage={data?.prevPage}
      breadcrumb={breadcrumb}
      title={breadcrumb["sub-category"]}
    />
  );
}
