import type { Metadata } from "next";
import "./globals.css";
import grid from "../assets/grid.png";
import Navbar from "@/components/main/Navbar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PrimeCraft - Crafting your vision into Reality",
  description:
    "PrimeCraft offers premier web development and design services, creating innovative and customized web solutions to help your business thrive online.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`px-[5%] bg-zinc-900 text-zinc-100`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
