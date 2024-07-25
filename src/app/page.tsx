import RetroGrid from "@/components/magicui/retro-grid";
import { cn } from "@/lib/utils";

export default function Index() {
  return (
    <div className="relative -mx-10 flex h-full flex-col justify-center gap-y-2 ">
      <div className="flex w-full flex-col gap-y-3 text-center text-black dark:text-white">
        <p className="text-lg">
          Hello There <span>👋</span>, I am
        </p>
        <h1 className="text-7xl font-bold">Franz Sinaga</h1>
        <h2 className={cn("text-4xl font-bold")}>{"Frontend Developer"}</h2>
      </div>
      <RetroGrid />
    </div>
  );
}
