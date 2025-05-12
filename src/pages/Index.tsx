
import { useToast } from "@/hooks/use-toast";
import { useEffect } from 'react';
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ClassesSection from "@/components/sections/ClassesSection";
import TrainersSection from "@/components/sections/TrainersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";
import CallToAction from "@/components/sections/CallToAction";
import InstagramSection from "@/components/sections/InstagramSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
    
    // Welcome toast
    setTimeout(() => {
      toast({
        title: "Welcome to FLEXGYM!",
        description: "Discover our classes and membership options.",
        duration: 5000,
      });
    }, 1500);
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [toast]);

  return (
    <div className="min-h-screen bg-gym-dark">
      <Navbar />
      <HeroSection />
      <ClassesSection />
      <TrainersSection />
      <TestimonialsSection />
      <PricingSection />
      <InstagramSection />
      <CallToAction />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
