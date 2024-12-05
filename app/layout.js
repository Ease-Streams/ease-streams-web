import BottomNavigation from "./components/footer/BottomNavigation";
import { Footer } from "./components/footer/Footer";
import Header from "./components/header/Header";
import Menu from "./components/header/Menu";
import "./globals.css";
// import Menu from "@/components/header/Menu";
// import { Footer } from "@/components/footer/Footer";
// import BottomNavigation from "@/components/footer/BottomNavigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
          <Menu />
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
