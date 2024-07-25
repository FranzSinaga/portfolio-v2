"use client";
import Ripple from "@/components/magicui/ripple";

export default function Index() {
  return (
    <div className="relative flex h-[calc(97vh+10px)] w-full flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-col gap-y-4 text-center text-black dark:text-white">
        <h1 className="text-7xl font-bold">404</h1>
        <h2 className="text-2xl font-bold">{"Page Not Found"}</h2>
      </div>
      <Ripple />
    </div>
  );
}
