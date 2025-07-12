import Footer from "@/components/NavbarAndFooter/Footer";
import Navbar from "@/components/NavbarAndFooter/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default HomeLayout;
