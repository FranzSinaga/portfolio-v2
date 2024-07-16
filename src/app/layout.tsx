"use client";
import { useState } from "react";
// import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";

import { cn } from "@/lib/utils";

import { ScreenIndicator } from "@/components/SignalIndicator";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import "./globals.css";
import { MenuList } from "@/components/menu";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import useLocalStorage from "@/hooks/useLocalStorage";

const FiraCode = Fira_Code({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Franz",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [selectedTheme, setSelectedTheme] = useLocalStorage("theme");

  return (
    <html lang="en">
      <body
        className={cn(selectedTheme === "dark" ? "dark" : "", inter.className)}
      >
        <div className="flex bg-gray-200 dark:bg-black">
          <aside className="hidden w-[20vw]  bg-gray-200 px-5 py-5 text-white dark:bg-black lg:block">
            <MenuList />
          </aside>

          <main className="mx-5 mt-5 w-full rounded-t-[30px] bg-white dark:bg-[#171717]">
            <div className="m-5 block lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant={"ghost"}>
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent side={"left"} className="">
                  <MenuList />
                </SheetContent>
              </Sheet>
            </div>
            <div className="overflow-auto">{children}</div>
          </main>
          {process.env.NODE_ENV !== "production" && <ScreenIndicator />}
        </div>
      </body>
    </html>
  );
}
