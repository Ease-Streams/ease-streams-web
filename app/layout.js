import Header from "@/components/header/Header";
import "./globals.css";
import Menu from "@/components/header/Menu";
import { Footer } from "@/components/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      </head>
      <body suppressHydrationWarning={true}>
        <Header />
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
