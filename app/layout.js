import Header from "@/components/header/Header";
import "./globals.css";
import Menu from "@/components/header/Menu";
import { Footer } from "@/components/footer/Footer";
import BottomNavigation from "@/components/footer/BottomNavigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      </head>
      <body suppressHydrationWarning={true} className="bg-[#EFEFF4]">
        <div className="sticky top-0 z-30">
          <Header />
          <Menu />
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
