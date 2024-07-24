"use client";
import { useEffect, useState } from "react";
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
import { Moon, SunDim } from "lucide-react";
import useLocalStorage from "@/hooks/useLocalStorage";

const FiraCode = Fira_Code({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

type ThemeType = "dark" | "light";
interface Props {
  selectedTheme: string;
  setSelectedTheme: (value: string) => void;
}

export const MenuList: React.FC<Props> = ({
  selectedTheme,
  setSelectedTheme,
}) => {
  return (
    <div className="flex h-[94vh] flex-col justify-between">
      <div
        className={cn(
          FiraCode.className,
          "mt-5 text-sm font-extrabold text-black dark:text-white",
        )}
      >
        _franz
      </div>
      <div
        className={
          (cn(inter.className), "font-bold text-black dark:text-white")
        }
      >
        <ul className="flex flex-col gap-y-7">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About Me</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
      <div>
        {selectedTheme && (
          <Select
            value={selectedTheme}
            onValueChange={(e: ThemeType) => {
              setSelectedTheme(e);
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Theme</SelectLabel>
                <SelectItem value="dark">
                  <span className="flex items-center">
                    <Moon /> <span className="pl-2">Dark</span>
                  </span>
                </SelectItem>
                <SelectItem value="light">
                  <span className="flex items-center">
                    <SunDim /> <span className="pl-2">Light</span>
                  </span>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      </div>
    </div>
  );
};
