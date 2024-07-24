"use client";
import { useEffect, useState } from "react";
// import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";

import { cn } from "@/lib/utils";

import { ScreenIndicator } from "@/components/SignalIndicator";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import "./globals.css";
import { MenuList } from "@/components/menu";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "usehooks-ts";

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
  const [selectedTheme, setSelectedTheme] = useLocalStorage("theme", "");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!selectedTheme) {
      setSelectedTheme("dark");
      setIsLoading(false);
    }
    if (selectedTheme) setIsLoading(false);
  }, [selectedTheme, setSelectedTheme]);

  if (isLoading) return <p>Loading</p>;
  return (
    <html lang="en">
      <body
        className={cn(
          selectedTheme === "dark" ? "dark" : "",
          inter.className,
          "bg-background transition-colors",
        )}
      >
        <div className="flex h-full w-full">
          <aside className="hidden w-[20vw] bg-background px-5 py-5 text-white transition-colors lg:block ">
            <MenuList
              selectedTheme={selectedTheme ?? "dark"}
              setSelectedTheme={setSelectedTheme}
            />
          </aside>

          <main className="mx-5 mt-5 w-full rounded-t-[30px] bg-white transition-colors dark:bg-[#161616]">
            <div className="m-5 block lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant={"ghost"}>
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side={"left"}
                  className="bg-gray-200 dark:bg-[#1c1c1c]"
                >
                  <MenuList
                    selectedTheme={selectedTheme ?? "dark"}
                    setSelectedTheme={setSelectedTheme}
                  />
                </SheetContent>
              </Sheet>
            </div>
            <div className="overflow-auto px-8 py-5">{children}</div>
          </main>
          {process.env.NODE_ENV !== "production" && <ScreenIndicator />}
        </div>
      </body>
    </html>
  );
}
