import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GlobalNavigation } from "@/components/navigation/GlobalNavigation";
import { StudioFooter } from "@/components/footer/StudioFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "36T Studios // Independent Design & Technology Studio",
  description: "36T Studios designs and engineers modern digital platforms, visual systems, and original narrative media. Product Architecture. Digital Craft.",
  keywords: ["36T Studios", "Design Studio", "Technology Studio", "Product Architecture", "Whisppr", "jOS", "JStream", "I've Got It Film"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#08080A] text-[#F4F4F6] selection:bg-[#F59247] selection:text-[#08080A] overflow-x-hidden font-sans">
        <GlobalNavigation />
        <main className="flex-1 pt-20 flex flex-col">
          {children}
        </main>
        <StudioFooter />
      </body>
    </html>
  );
}
