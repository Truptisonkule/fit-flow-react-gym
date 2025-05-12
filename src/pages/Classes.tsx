
import { useEffect } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ClassesHero from "@/components/sections/ClassesHero";
import ClassSchedule from "@/components/sections/ClassSchedule";
import ClassCategories from "@/components/sections/ClassCategories";
import CallToAction from "@/components/sections/CallToAction";

const Classes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gym-dark">
      <Navbar />
      <ClassesHero />
      <ClassCategories />
      <ClassSchedule />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Classes;
