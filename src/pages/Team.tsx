
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TeamHero from "@/components/sections/TeamHero";
import TrainerProfiles from "@/components/sections/TrainerProfiles";
import JoinTeamSection from "@/components/sections/JoinTeamSection";
import CallToAction from "@/components/sections/CallToAction";

const Team = () => {
  return (
    <div className="min-h-screen bg-gym-dark">
      <Navbar />
      <TeamHero />
      <TrainerProfiles />
      <JoinTeamSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Team;
