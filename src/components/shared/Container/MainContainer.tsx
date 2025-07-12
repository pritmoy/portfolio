import { cn } from "@/lib/utils";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={cn("max-w-[1280px] w-full mx-auto")}>{children}</div>;
};
export default MainContainer;
