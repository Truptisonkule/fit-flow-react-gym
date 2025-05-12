
import { useEffect } from 'react';
import { Activity, Target, Heart, Award } from 'lucide-react';

const ValuesSection = () => {
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

  const values = [
    {
      icon: <Activity className="h-10 w-10 text-primary" />,
      title: "Continuous Progress",
      description: "We believe in sustainable, consistent improvement rather than quick fixes. Your fitness journey is a marathon, not a sprint."
    },
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Goal-Oriented Training",
      description: "Every workout has a purpose. We help you set meaningful goals and create actionable plans to achieve them."
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Inclusive Community",
      description: "FLEXGYM welcomes everyone, regardless of fitness level or experience. Our supportive community helps you stay motivated."
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Excellence in Service",
      description: "From our trainers to our facilities, we maintain the highest standards to ensure you have the best fitness experience possible."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold text-sm uppercase tracking-wider mb-3 reveal">Our Core Values</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 reveal animate-delay-100">
            The Principles That <span className="gradient-text">Guide Us</span>
          </h3>
          <p className="text-gray-300 reveal animate-delay-200">
            At FLEXGYM, everything we do is driven by our commitment to these four core values. They shape our approach to fitness, community building, and personal growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className={`bg-gym-dark p-8 rounded-xl border border-gray-800 hover:border-primary/30 transition-all duration-300 reveal animate-delay-${(index + 2) * 100}`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="bg-primary/10 rounded-xl p-4 flex items-center justify-center">
                  {value.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
