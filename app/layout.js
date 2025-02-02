import Script from "next/script";
import BottomNavigation from "./components/footer/BottomNavigation";
import { Footer } from "./components/footer/Footer";
import Header from "./components/header/Header";
import Menu from "./components/header/Menu";
import "./globals.css";
import portalapi from "./PortalApi/portalApi";
// import Menu from "@/components/header/Menu";
// import { Footer } from "@/components/footer/Footer";
// import BottomNavigation from "@/components/footer/BottomNavigation";

export default async function RootLayout({ children }) {
  const allCategories = await portalapi.getAllCategories();
  const googleTagId = "G-L0T46TR8YZ";
  return (
    <html lang="en">
      {/* Google Tag Manager */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleTagId}');
          `,
        }}
      />

      <head>
        <link
          rel="icon"
          href="/images/ease-logo-short.webp"
          type="image/x-icon"
          sizes="16x16"
        />
        <script
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      </head>
      <body
        suppressHydrationWarning={true}
        className="bg-gray-100 text-gray-800">
        <div className="sticky top-0 z-30">
          <Header />
          <Menu
            allCategories={allCategories?.docs}
            PAYLOAD_CMS_IMG_SERVER={process.env.PAYLOAD_CMS_IMG_SERVER}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex-grow ">
            <div className="my-2">{children}</div>
            <Footer />
          </div>
          <BottomNavigation />
        </div>
      </body>
    </html>
  );
}
