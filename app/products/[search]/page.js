export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  keywords: "create next app",
};

import portalApi from "@/app/PortalApi/portalApi";
import ProductList from "@/components/ProductList";

export default async function Home(props) {
  const { search } = props.params;
  const { page } = props.searchParams;
  const breadcrumb = {
    category: "",
    "sub-category": "",
    product: search,
  };
  const data = await portalApi.getProductSearchList(search, page);
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
