
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/AboutHero";
import FacilitiesSection from "@/components/sections/FacilitiesSection";
import ValuesSection from "@/components/sections/ValuesSection";
import GymVideoSection from "@/components/sections/GymVideoSection";
import CallToAction from "@/components/sections/CallToAction";

const About = () => {
  return (
    <div className="min-h-screen bg-gym-dark">
      <Navbar />
      <AboutHero />
      <FacilitiesSection />
      <ValuesSection />
      <GymVideoSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default About;
