import RetroGrid from "@/components/magicui/retro-grid";
import Ripple from "@/components/magicui/ripple";
import { cn } from "@/lib/utils";
import { Fira_Code } from "next/font/google";

const FiraCode = Fira_Code({ subsets: ["latin"] });

export default function Index() {
  return (
    <div className="relative flex flex-col justify-center gap-y-2 md:h-[calc(97vh)]">
      <div className="h- flex flex-col gap-y-3 text-center">
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
