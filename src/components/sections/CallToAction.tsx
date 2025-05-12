
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-16 bg-gym-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584466977773-e625c37cdd50?q=80&w=2942')] bg-cover bg-center bg-no-repeat"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 reveal">
            Start Your Fitness Journey Today
          </h2>
          <p className="text-gray-300 mb-8 text-lg reveal animate-delay-200">
            Join FLEXGYM with zero enrollment fee for a limited time. Our expert trainers and supportive community are ready to help you achieve your fitness goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 reveal animate-delay-300">
            <Button className="btn-hover-effect bg-primary hover:bg-primary/90 text-white text-base px-8 py-6">
              Join Now and Save
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base px-8 py-6">
              Book a Free Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
