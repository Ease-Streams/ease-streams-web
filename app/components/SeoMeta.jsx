import { defaultSeoData } from "../utils/helper";

// components/SEO.js
export default function SEO({ seoData }) {
  console.log(seoData?.metaDescription || defaultSeoData.metaDescription);
  return (
    <head>
      <title>{seoData?.metaTitle || defaultSeoData.metaTitle}</title>
      <meta
        name="description"
        content={seoData?.metaDescription || defaultSeoData.metaDescription}
      />
      <meta
        name="keywords"
        content={seoData?.metaKeyword || defaultSeoData.metaKeywords}
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`${seoData?.canonical}`} />

      {/* OpenGraph & Twitter Metadata */}
      <meta
        property="og:title"
        content={seoData?.metaTitle || defaultSeoData.metaTitle}
      />
      <meta
        property="og:description"
        content={seoData?.metaDescription || defaultSeoData.metaDescription}
      />
      <meta
        property="og:url"
        content={
          `${process.env.EASESTREAMS_SERVER}${seoData?.canonical}` ||
          `${process.env.EASESTREAMS_SERVER}`
        }
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={seoData?.metaTitle || defaultSeoData.metaTitle}
      />
      <meta
        name="twitter:description"
        content={seoData?.metaDescription || defaultSeoData.metaDescription}
      />
    </head>
  );
}
