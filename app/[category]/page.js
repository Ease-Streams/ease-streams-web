import portalApi from "../PortalApi/portalApi";
import SubCategories from "./SubCategories";
import ProductList from "./[sub-category]/ProductList";

const page = async (props) => {
  const { params, searchParams } = props;
  const { page } = searchParams;
  const breadcrumb = params;
  const data = await portalApi.getCategoryData(breadcrumb["category"]);
  const subCategoryData = await portalApi.getSubCategoryData(
    data?.docs[0]?.title,
    page
  );
  return (
    <SubCategories
      data={data.docs}
      subCategoryData={subCategoryData.docs}
      page={subCategoryData.page}
      totalPages={subCategoryData.totalPages}
      nextPage={subCategoryData.nextPage}
      prevPage={subCategoryData.prevPage}
      breadcrumb={breadcrumb}
      title={breadcrumb["category"]}
    />
  );
};

export default page;
