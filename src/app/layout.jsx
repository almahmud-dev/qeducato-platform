import Navbar from "@/components/layout/navber/Navber";
import "./globals.css";

import Footer from "@/components/layout/Footer";

export const metadata = {
  title: { default: "Qeducato University", template: "%s | Qeducato" },
  description: "A world-class university empowering students through excellence in education, research, and innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
