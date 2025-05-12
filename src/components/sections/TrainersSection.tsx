
import { useEffect } from 'react';

const TRAINERS = [
  {
    name: "Alex Johnson",
    position: "Strength Coach",
    image: "https://images.unsplash.com/photo-1597347343908-2937e7dcc560?q=80&w=1887",
    expertise: ["Power Lifting", "Bodybuilding", "Nutrition"],
    social: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
    }
  },
  {
    name: "Sarah Williams",
    position: "HIIT Specialist",
    image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=1170",
    expertise: ["HIIT", "Functional Training", "Weight Loss"],
    social: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
    }
  },
  {
    name: "Marcus Chen",
    position: "Yoga Instructor",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974",
    expertise: ["Power Yoga", "Flexibility", "Mindfulness"],
    social: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
    }
  },
  {
    name: "Tanya Rodriguez",
    position: "CrossTraining Coach",
    image: "https://images.unsplash.com/photo-1609899424411-32a2b8e2b570?q=80&w=1974",
    expertise: ["Olympic Lifting", "Metabolic Training", "Sports Performance"],
    social: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
    }
  }
];

const TrainersSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
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
    <section id="trainers" className="py-20 bg-gym-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold text-sm uppercase tracking-wider mb-3 reveal">Expert Team</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 reveal animate-delay-100">
            Meet Our Professional Trainers
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto reveal animate-delay-200">
            Our certified trainers are dedicated to helping you achieve your fitness goals with personalized guidance and motivation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRAINERS.map((trainer, index) => (
            <div 
              key={index} 
              className={`group relative reveal animate-delay-${(index + 3) * 100}`}
            >
              <div className="overflow-hidden rounded-xl relative">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-96 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h4 className="text-white text-xl font-bold mb-1">{trainer.name}</h4>
                  <p className="text-primary font-medium mb-3">{trainer.position}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {trainer.expertise.map((skill, i) => (
                      <span 
                        key={i} 
                        className="text-xs bg-white/10 text-white py-1 px-3 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {Object.entries(trainer.social).map(([platform, url], i) => (
                      <a 
                        key={i}
                        href={url} 
                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors duration-300"
                      >
                        <i className={`fab fa-${platform} text-white`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
