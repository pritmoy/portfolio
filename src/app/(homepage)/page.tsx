import AboutSection from "@/components/HomepageComponents/AboutSection/AboutSection";
import AchievementSection from "@/components/HomepageComponents/AboutSection/AchipmentSection";
import BandsSection from "@/components/HomepageComponents/BandsSection/BandsSection";
import BlogSection from "@/components/HomepageComponents/BlogSection/BlogSection";
import ContactFormSection from "@/components/HomepageComponents/ContactForm/ContactForm";
import HeroSection from "@/components/HomepageComponents/HeroSection/HeroSection";
import ServiceSection from "@/components/HomepageComponents/ServiceSection/ServiceSection";
import Testimonials from "@/components/HomepageComponents/testimonials/Testimonials";
import FooterBanner from "@/components/NavbarAndFooter/FooterBanner";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <BandsSection />
      <Testimonials />
      <AchievementSection />
      <ContactFormSection />
      <BlogSection />
      <FooterBanner />
    </>
  );
};
export default HomePage;
