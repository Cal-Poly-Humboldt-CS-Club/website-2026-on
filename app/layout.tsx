import type { Metadata } from "next";
import { Almarai, Black_Han_Sans } from 'next/font/google';
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const almarai = Almarai({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
  variable: '--font-almarai',
});

const blackHanSans = Black_Han_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-black-han-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://statuesque-naiad-4bf05f.netlify.app/'),
  title: "CS Club Humboldt",
  description: "Making a welcoming community of fun and support, while supercharging our education at Cal Poly Humboldt!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${almarai.variable} ${blackHanSans.variable}`}>
        <Navbar/>
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}