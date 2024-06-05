import { Inter as FontSans } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

import { cn } from "@/lib/utils";
import { auth } from "@/auth";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ecommerce App",
  description:
    "This is an ecommerce store having products to sell to their clients",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const user = await auth()
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
