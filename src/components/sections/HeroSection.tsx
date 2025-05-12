
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Dumbbell } from "lucide-react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          element.classList.add('active');
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
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gym-dark/90 to-black/70"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070')] bg-cover bg-center"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 reveal">
              <Dumbbell className="text-primary h-4 w-4" />
              <span className="text-white text-sm font-medium">Redefine Your Fitness Journey</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 reveal animate-delay-100">
              <span className="block">Transform Your Body,</span>
              <span className="gradient-text">Elevate Your Life</span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8 max-w-lg reveal animate-delay-200">
              Join FLEXGYM today and experience world-class facilities, expert trainers, and a supportive community dedicated to helping you achieve your fitness goals.
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 reveal animate-delay-300">
              <Button className="btn-hover-effect bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <a href="#classes" className="flex items-center text-white hover:text-primary transition-colors duration-300 font-medium">
                <span className="mr-2">Explore Classes</span>
                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-primary">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-5 reveal animate-delay-400">
              {[
                { number: '10+', label: 'Years Experience' },
                { number: '150+', label: 'Expert Trainers' },
                { number: '15K+', label: 'Happy Members' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-soft"></div>
              <img 
                src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?q=80&w=2070" 
                alt="Fitness Trainer" 
                className="relative z-10 w-full h-[600px] object-cover object-center rounded-2xl reveal animate-scale-up"
              />
              <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl reveal animate-delay-500">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Dumbbell className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Professional Coaches</h4>
                    <p className="text-gray-300 text-sm">Certified & Experienced</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/10 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute top-32 right-20 w-6 h-6 bg-primary rounded-full animate-bounce-gentle hidden lg:block"></div>
    </section>
  );
};

export default HeroSection;
