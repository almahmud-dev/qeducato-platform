import Navbar from "@/components/layout/navber/Navber";
import Footer from "@/components/layout/Footer";
import { inter, playfair } from "@/app/fonts";
import "@/styles/globals.css";

export const metadata = {
  title: { default: "Qeducato University", template: "%s | Qeducato" },
  description:
    "A world-class university empowering students through excellence in education, research, and innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}