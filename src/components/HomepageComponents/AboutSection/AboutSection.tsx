import MainContainer from "@/components/shared/Container/MainContainer";
import { Images } from "@/lib/store/images";
import Image from "next/image";

const progressItem = [
  {
    title: "Meta & Google Ads Optimize",
    percentage: 92,
  },
  {
    title: "Creative Content Writing",
    percentage: 90,
  },
  {
    title: "Web Analytics",
    percentage: 85,
  },
  {
    title: "E-commerce SEO",
    percentage: 88,
  },
];

const AboutSection = () => {
  return (
    <div className="w-full px-3 py-10">
      <MainContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Image */}
          <div className="flex justify-center">
            <Image
              src={Images.banner}
              alt="img"
              width={500}
              height={500}
              className="max-w-[400px] w-full h-auto object-contain"
            />
          </div>

          {/* Right Content */}
          <div>
            <h6 className="font-semibold text-2xl md:text-[32px] leading-snug">
              World leading Creative digital marketer
            </h6>

            <div className="text-sm md:text-base mt-5 text-white space-y-3">
              <p>
                Hello there! My name is Pritmoy Sen. I work with businesses that
                want to understand what’s working in their marketing and turn
                that insight into better performance.
              </p>
              <p>
                With a background in tracking, analytics, and paid media. I help
                brands set up clean, accurate tracking systems using tools like
                GA4, Google Ads Conversion Tracking, Facebook CAPI and more.
                Once your data is reliable, I help fine-tune your ad campaigns
                so you can get more results without wasting your budget.
              </p>
            </div>

            {/* Skills Progress */}
            <ul className="mt-6 space-y-4 w-3/5">
              {progressItem.map((item, index) => (
                <li key={index}>
                  <div className="flex justify-between text-sm font-medium mb-1">
                    <span>{item.title}</span>
                    <span className="text-blue-600">{item.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default AboutSection;
