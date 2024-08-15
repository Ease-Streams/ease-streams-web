import "./globals.css";
// import Menu from "@/components/header/Menu";
// import { Footer } from "@/components/footer/Footer";
// import BottomNavigation from "@/components/footer/BottomNavigation";
import BottomNavigation from "../components/footer/BottomNavigation";
import { Footer } from "../components/footer/Footer";
import Menu from "../components/header/Menu";
import Header from "../components/header/Header";

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
      <body suppressHydrationWarning={true} className="bg-white">
        <div className="sticky top-0 z-30">
          <Header />
          {/* <Menu /> */}
        </div>
        <div className="flex flex-col">
          <div className="flex-grow">
            {children}
            <Footer />
          </div>
          <BottomNavigation />
        </div>
      </body>
    </html>
  );
}
