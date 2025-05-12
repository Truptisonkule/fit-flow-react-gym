
import { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BicepsFlexed, HeartPulse, Activity, Dumbbell } from 'lucide-react';

const ClassCategories = () => {
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

  const categories = [
    {
      icon: <BicepsFlexed size={48} className="text-primary mb-4" />,
      title: "Strength Training",
      description: "Build muscle, increase bone density, and boost your metabolism with our strength-focused classes.",
      classes: ["Power Lifting", "Body Sculpt", "Core Crusher", "Full Body Strength"]
    },
    {
      icon: <HeartPulse size={48} className="text-primary mb-4" />,
      title: "Cardio & HIIT",
      description: "Maximize calorie burn and improve cardiovascular health with high-energy workouts.",
      classes: ["HIIT Rush", "Spin Class", "Cardio Boxing", "Circuit Training"]
    },
    {
      icon: <Activity size={48} className="text-primary mb-4" />,
      title: "Mind & Body",
      description: "Enhance flexibility, balance, and mental well-being through mindful movement practices.",
      classes: ["Yoga Flow", "Pilates", "Mobility Flow", "Meditation"]
    },
    {
      icon: <Dumbbell size={48} className="text-primary mb-4" />,
      title: "Functional Fitness",
      description: "Improve everyday movement patterns and build practical strength for daily activities.",
      classes: ["CrossTraining", "Kettlebell Flow", "Circuit Rush", "Bodyweight Basics"]
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold text-sm uppercase tracking-wider mb-3 reveal">Class Categories</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 reveal animate-delay-100">
            Diverse Workouts for <span className="gradient-text">Every Goal</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto reveal animate-delay-200">
            Our comprehensive range of class categories ensures you'll find the perfect workout to match your fitness level and goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className={`bg-gym-dark border-gray-800 hover:border-primary/50 transition-all duration-300 reveal animate-delay-${(index + 2) * 100}`}>
              <CardContent className="p-8 text-center">
                <div className="flex justify-center">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{category.title}</h4>
                <p className="text-gray-300 text-sm mb-6">{category.description}</p>
                
                <div className="space-y-2">
                  <h5 className="text-sm font-medium text-white mb-2">Popular Classes:</h5>
                  <ul className="space-y-1">
                    {category.classes.map((className, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-center">
                        <span className="text-primary mr-2">•</span> {className}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassCategories;
