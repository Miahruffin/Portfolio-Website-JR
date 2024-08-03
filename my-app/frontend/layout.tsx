import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./src/app/components/navbar/navbar"; // Import your Navbar component
import Footer from "./src/app/components/footer/footer" // Import your Footer component
import 'bootstrap/dist/css/bootstrap.min.css';
import ".styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeremiah Ruffin",
  description: "Welcome to my portfolio - Jeremiah Ruffin.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
