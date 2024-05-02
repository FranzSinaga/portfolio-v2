"use client";
import { useState } from "react";
import { Fira_Code, Inter } from "next/font/google";
import { cn } from "@/lib/utils";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FiraCode = Fira_Code({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const MenuList = () => {
  const [selectedTheme, setSelectedTheme] = useState("light");
  return (
    <div className="flex h-[94vh] flex-col justify-between  ">
      <div
        className={cn(
          FiraCode.className,
          "mt-5 text-[18px] font-extrabold text-black",
        )}
      >
        _franz
      </div>
      <div className={(cn(inter.className), "font-bold text-black")}>
        <ul className="flex flex-col gap-y-7">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About Me</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
      <div>
        <Select
          value={selectedTheme}
          onValueChange={(e) => setSelectedTheme(e)}
        >
          <SelectTrigger className="w-full font-semibold text-black">
            <SelectValue placeholder="Select Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select Theme</SelectLabel>
              <SelectItem value="dark">
                🌙 <span className="pl-2">Dark</span>
              </SelectItem>
              <SelectItem value="light">
                🌞 <span className="pl-2">Light</span>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
