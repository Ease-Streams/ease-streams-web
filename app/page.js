// Import Components
import portalApi from "./PortalApi/portalApi";
import HomePage from "./Home";
import Script from "next/script";
import SEO from "./components/SeoMeta";

export default async function Home() {
  const [data, seoData, homeBanner] = await Promise.all([
    portalApi.getHomePageData(),
    portalApi.getHomePageSeoMetaData(),
    portalApi.getHomeBanners(),
  ]);

  return (
    <>
      <SEO seoData={seoData} /> {/* ✅ Reusable Metadata Component */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: seoData?.metaTitle || "Default Title",
            description: seoData?.metaDescription || "Default Description",
            url: seoData?.canonical || "/",
          }),
        }}
      />
      <HomePage data={data?.docs} homeBanner={homeBanner} />
    </>
  );
}
