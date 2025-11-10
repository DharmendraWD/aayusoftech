import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/headers/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aayusoftech",
  description: "Aayusoftech -- is a Leading Nepal IT Company. Providing IT Services all over Nepal. We are providing IT Services like Web Development, Software Development, Mobile App Development, Digital Marketing, SEO, etc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
