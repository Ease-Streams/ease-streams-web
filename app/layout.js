import Header from "@/components/header/Header";
import "./globals.css";
import Menu from "@/components/header/Menu";
import { Footer } from "@/components/footer/Footer";
import BottomNavigation from "@/components/footer/BottomNavigation";
import { AdBanner } from "@/components/home/AdBanner";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/ease-logo-short.svg"
          type="image/x-icon"
          sizes="16x16"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      </head>
      <body suppressHydrationWarning={true} className="bg-[#EFEFF4]">
        <div className="sticky top-0 z-30">
          <Header />
          <Menu />
        </div>
        <div className="flex flex-col">
          <div className="flex-grow">
            <div className="justify-center flex">
              <div className=" hidden lg:flex  p-2 flex-start">
                <div className="flex flex-col gap-2  px-2">
                  <AdBanner />
                  <AdBanner />
                </div>
              </div>
              <menu className="w-full lg:min-w-[75%] flex flex-col gap-6 p-2">
                {children}
              </menu>
              <div className=" hidden lg:flex  p-2 flex-start">
                <div className="flex flex-col gap-2 px-2">
                  <AdBanner />
                  <AdBanner />
                </div>
              </div>
            </div>
            <Footer />
          </div>
          <BottomNavigation />
        </div>
      </body>
    </html>
  );
}
