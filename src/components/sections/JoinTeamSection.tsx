
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const JoinTeamSection = () => {
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
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-gym-dark to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-primary font-bold text-sm uppercase tracking-wider mb-3 reveal">Join Our Team</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 reveal animate-delay-100">
            Become Part of the <span className="gradient-text">FLEXGYM Family</span>
          </h3>
          <p className="text-gray-300 mb-8 reveal animate-delay-200">
            We're always looking for passionate, certified fitness professionals to join our growing team. If you're dedicated to changing lives through fitness, we want to hear from you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 reveal animate-delay-300">
            {[
              {
                title: "Competitive Pay",
                description: "Industry-leading compensation with bonus incentives based on client results"
              },
              {
                title: "Growth Opportunities",
                description: "Continuous professional development with paid certifications and workshops"
              },
              {
                title: "Supportive Culture",
                description: "Work with like-minded professionals in a collaborative environment"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gym-dark p-6 rounded-xl border border-gray-800">
                <h4 className="text-white font-bold mb-2">{benefit.title}</h4>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <Button className="btn-hover-effect bg-primary hover:bg-primary/90 text-white text-base px-8 py-6 reveal animate-delay-400">
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinTeamSection;
