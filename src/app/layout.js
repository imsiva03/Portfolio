import { Inter, Montserrat } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata = {
  title: "Sivasankaran N M | Programmer & Analyst",
  description:
    "Portfolio of Sivasankaran N M, a Programmer and Analyst building thoughtful applications with Java, Python, Spring Boot and React.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
