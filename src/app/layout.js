import { Inter, Montserrat } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata = {
  title: "Sivasankaran N M | Full Stack Developer",
  description:
    "Portfolio of Sivasankaran N M, a full-stack developer building web applications with Java, Spring Boot, Python and React.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
  {children}
  <CustomCursor />
</body>
    </html>
  );
}
