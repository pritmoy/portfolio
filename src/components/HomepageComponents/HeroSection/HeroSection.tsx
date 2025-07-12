import MainContainer from "@/components/shared/Container/MainContainer";
import { Button } from "@/components/ui/button";
import { Images } from "@/lib/store/images";
import Image from "next/image";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="w-full px-3">
      <MainContainer>
        <div className="grid grid-cols-2 items-center py-8">
          <div>
            <p className="font-semibold text-[32px]">
              <span>Hey, I am</span>
              <br />
              <span> Pritmoy Sen</span> <br />
              <span> Marketing Technologist</span>
            </p>
            <p className="my-2">
              Agency work with top rated talented people provides quality
              services.
            </p>
            <Button>Download CV</Button>
            <div className="relative mt-5">
              <span className="absolute animate-ping-custom w-12 h-12 border rounded-full" />
              <div className="size-12 border flex justify-center items-center rounded-full relative z-10">
                <Play />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image src={Images.banner} alt="img" className="size-[400px]" />
          </div>
        </div>
      </MainContainer>
    </div>
  );
};
export default HeroSection;
