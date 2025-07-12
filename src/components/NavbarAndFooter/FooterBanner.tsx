import MainContainer from "../shared/Container/MainContainer";
import { Button } from "../ui/button";

const FooterBanner = () => {
  return (
    <div
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: "url(/footerBanner.png)" }}
    >
      <MainContainer>
        <div className="flex flex-col md:flex-row items-center justify-between md:gap-20 gap-6 py-10 md:py-16 text-white">
          <h6 className="text-2xl md:text-4xl font-semibold text-center md:text-left leading-snug">
            Hire me <br /> as a Product designer <br /> with elite skills.
          </h6>

          <div className="text-center md:text-right max-w-md">
            <p className="mb-4 text-base md:text-lg font-medium text-gray-200">
              I am a product designer excited <br className="hidden md:block" />
              about unique ideas and ready to help.
            </p>
            <Button className="bg-white text-black hover:bg-gray-200 font-semibold">
              Download CV
            </Button>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default FooterBanner;
