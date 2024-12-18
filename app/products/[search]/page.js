export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  keywords: "create next app",
};

import portalApi from "@/app/PortalApi/portalApi";
import ProductList from "@/app/components/ProductList";

export default async function Home({ params, searchParams }) {
  const awaitedParams = await params;
  const awaitedSearchParams = await searchParams;
  const { search } = awaitedParams;
  const { page } = awaitedSearchParams;
  const breadcrumb = {
    category: "",
    "sub-category": "",
    product: search,
  };
  const data = await portalApi.getProductSearchList(search, page);
  return <ProductList data={data} breadcrumb={breadcrumb} title={search} />;
}
