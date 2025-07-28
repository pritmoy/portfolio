"use client";

import MainContainer from "@/components/shared/Container/MainContainer";
import { Button } from "@/components/ui/button";
import { Images } from "@/lib/store/images";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  // Prevent scrolling when video is shown
  useEffect(() => {
    if (showVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showVideo]);

  return (
    <div className="w-full px-3 relative">
      <MainContainer>
        <div className="grid grid-cols-2 items-center py-8">
          <div>
            <p className="font-semibold text-[32px]">
              <span>Hey, I am</span>
              <br />
              <span> Pritmoy Sen</span> <br />
              <span className=""> Marketing Technologist</span>
            </p>
            <p className="my-2">
              Agency work with top rated talented people provides quality
              services.
            </p>
            <Button>Download CV</Button>

            {/* Play Button */}
            <div
              className="relative mt-5 cursor-pointer"
              onClick={() => setShowVideo(true)}
            >
              <span className="absolute animate-ping-custom w-12 h-12 border-2 border-red-500 rounded-full" />
              <div className="size-12 border border-red-500 flex justify-center items-center rounded-full relative z-10">
                <Play />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <Image src={Images.banner2} alt="img" className="size-[400px]" />
          </div>
        </div>
      </MainContainer>

      {/* Fullscreen Video Overlay */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-center items-center">
          <div className="relative w-[80vw] h-[80vh] rounded-2xl overflow-hidden shadow-2xl bg-black">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-3 right-3 z-10 text-white bg-black/60 hover:bg-black/80 p-1 rounded-full cursor-pointer"
            >
              <X size={28} />
            </button>
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/ZKPKpEoFxwk?autoplay=1&rel=0"
              title="YouTube video player"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
