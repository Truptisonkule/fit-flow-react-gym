
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const FacilitiesSection = () => {
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
    <section className="py-20 bg-gym-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 reveal">
            <h2 className="text-primary font-bold text-sm uppercase tracking-wider mb-3">Our Story</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Dedicated to <span className="gradient-text">Excellence</span> Since 2010
            </h3>
            <p className="text-gray-300 mb-6">
              FLEXGYM was founded with a vision to create a fitness community where everyone feels welcome, motivated, and equipped to achieve their personal fitness goals. What started as a small studio has grown into a premier fitness destination with state-of-the-art equipment and world-class trainers.
            </p>
            <p className="text-gray-300 mb-6">
              Our philosophy centers around balanced fitness: we believe in training that strengthens not just your body, but also your mind and spirit. Every member receives personalized attention and a tailored fitness journey.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                '24/7 Access to All Equipment',
                'Professional Certified Trainers',
                'Luxury Locker Rooms & Showers',
                'Nutritional Guidance & Meal Planning',
                'Recovery Zone with Massage Therapy'
              ].map((item, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <span className="text-primary mr-2">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Explore Our Facilities
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 reveal animate-delay-200">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069" 
                alt="FLEXGYM Facility" 
                className="rounded-xl object-cover w-full h-[500px] relative z-10"
              />
              <div className="absolute -bottom-3 -right-3 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="flex flex-col">
                  <h4 className="text-white font-semibold mb-1">10+ Years Experience</h4>
                  <p className="text-gray-300 text-sm">Transforming Lives Through Fitness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
