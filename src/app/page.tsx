import { cn } from "@/lib/utils";
import { Fira_Code } from "next/font/google";

const FiraCode = Fira_Code({ subsets: ["latin"] });

export default function Index() {
  return (
    <div className="flex h-[90vh] flex-col justify-center px-6 leading-tight">
      <p className="text-[20px]">
        Hello There <span>👋</span>, I am
      </p>
      <h1 className="text-[50px] font-bold">Franz Sinaga</h1>
      <h2 className={cn(FiraCode.className, "text-[48px] font-bold")}>
        {"<Frontend Developer />"}
      </h2>
    </div>
  );
}
