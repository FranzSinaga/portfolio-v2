"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuList } from "@/components/menu";
import { Button } from "@/components/ui/button";

export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [selectedTheme, setSelectedTheme] = useLocalStorage("theme", "");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!selectedTheme) {
      setSelectedTheme("dark");
      var body = document.body;
      body.classList.add("dark", "bg-background", "transition-colors");
      setIsLoading(false);
    }
    if (selectedTheme) setIsLoading(false);
  }, [selectedTheme, setSelectedTheme]);

  if (isLoading) return <p>Loading</p>;

  return (
    <div>
      <div className="flex h-full w-full">
        <aside className="hidden w-[18vw] bg-background px-5 py-5 text-white transition-colors lg:block ">
          <MenuList
            selectedTheme={selectedTheme ?? "dark"}
            setSelectedTheme={setSelectedTheme}
          />
        </aside>

        <main className="mt-5 w-full rounded-t-[30px] bg-white transition-colors dark:bg-[#161616] lg:mx-5">
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
          <div className="w-full overflow-auto overflow-x-hidden px-8 md:h-[calc(95dvh+15px)]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
