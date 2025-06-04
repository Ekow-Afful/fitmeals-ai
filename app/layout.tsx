import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "@/providers/ConvexClerkProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitMeals AI",
  description: "AI powered workout and meal planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />

          {/* GRID BACKGROUND */}
          <div className="fixed inset-9 -z-10 grid grid-cols-4 grid-rows-3 gap-4 p-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="bg-background border border-[#4bcae716] rounded-lg animate-glow-cycle"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
          <main className="pt-12 flex-grow ">{children}</main>

          <Footer />
        </body>
      </html>
    </ConvexClerkProvider>
  );
}
