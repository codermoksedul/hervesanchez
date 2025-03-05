import Layout from "@/components/Layout";
import Loading from "@/components/Loading";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hervé SANCHEZ",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable}  flex flex-col justify-start items-center min-h-screen sm:p-5 sm:bg-slate-300`}
      >
        <Loading />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
