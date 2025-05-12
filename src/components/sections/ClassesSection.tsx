
import { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dumbbell, HeartPulse, Activity, BicepsFlexed } from "lucide-react";

const CLASS_TYPES = [
  {
    id: "strength",
    name: "Strength",
    icon: <BicepsFlexed className="h-5 w-5" />,
    classes: [
      {
        title: "Power Lifting",
        description: "Build raw strength with compound movements",
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069",
        duration: "60 min",
        intensity: "Advanced"
      },
      {
        title: "Core Crusher",
        description: "Strengthen your core for better stability",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070",
        duration: "45 min",
        intensity: "Intermediate"
      },
      {
        title: "Body Sculpt",
        description: "Tone and define muscles with targeted exercises",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070",
        duration: "50 min",
        intensity: "All Levels"
      },
    ]
  },
  {
    id: "cardio",
    name: "Cardio",
    icon: <HeartPulse className="h-5 w-5" />,
    classes: [
      {
        title: "HIIT Rush",
        description: "High intensity interval training for maximum calorie burn",
        image: "https://images.unsplash.com/photo-1517130038641-a774d04afb3c?q=80&w=2070",
        duration: "45 min",
        intensity: "Advanced"
      },
      {
        title: "Spin Class",
        description: "Indoor cycling with rhythm-based choreography",
        image: "https://images.unsplash.com/photo-1589579234096-652d4486f362?q=80&w=2070",
        duration: "50 min",
        intensity: "All Levels"
      },
      {
        title: "Cardio Boxing",
        description: "High-energy boxing moves with cardio intervals",
        image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2074",
        duration: "60 min",
        intensity: "Intermediate"
      },
    ]
  },
  {
    id: "flexibility",
    name: "Flexibility",
    icon: <Activity className="h-5 w-5" />,
    classes: [
      {
        title: "Power Yoga",
        description: "Strength-focused yoga practice with challenging poses",
        image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=2070",
        duration: "60 min",
        intensity: "Intermediate"
      },
      {
        title: "Mobility Flow",
        description: "Dynamic stretching to improve range of motion",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070",
        duration: "45 min",
        intensity: "All Levels"
      },
      {
        title: "Pilates",
        description: "Core-strengthening exercises with focus on form",
        image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070",
        duration: "50 min",
        intensity: "All Levels"
      },
    ]
  },
  {
    id: "functional",
    name: "Functional",
    icon: <Dumbbell className="h-5 w-5" />,
    classes: [
      {
        title: "CrossTraining",
        description: "Varied functional movements performed at high intensity",
        image: "https://images.unsplash.com/photo-1533560777802-046814bc297c?q=80&w=2070",
        duration: "60 min",
        intensity: "Advanced"
      },
      {
        title: "Circuit Rush",
        description: "Station-based training for full body workout",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069",
        duration: "45 min",
        intensity: "Intermediate"
      },
      {
        title: "Kettlebell Flow",
        description: "Dynamic kettlebell exercises for strength and cardio",
        image: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?q=80&w=2071",
        duration: "50 min",
        intensity: "All Levels"
      },
    ]
  },
];

const ClassesSection = () => {
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
    <section id="classes" className="py-20 bg-gradient-to-b from-gym-dark to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold text-sm uppercase tracking-wider mb-3 reveal">Our Fitness Programs</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 reveal animate-delay-100">
            Find The Perfect Class For You
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto reveal animate-delay-200">
            Our diverse range of classes are designed to challenge and inspire you, no matter your fitness level or goals.
          </p>
        </div>
        
        <Tabs defaultValue="strength" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-gym-dark/50 p-1 reveal animate-delay-300">
            {CLASS_TYPES.map((type) => (
              <TabsTrigger 
                key={type.id}
                value={type.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <div className="flex items-center">
                  {type.icon}
                  <span className="ml-2">{type.name}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {CLASS_TYPES.map((type) => (
            <TabsContent key={type.id} value={type.id} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {type.classes.map((classItem, index) => (
                  <Card key={index} className="bg-gym-dark border-gray-800 overflow-hidden hover:border-primary/50 transition-all duration-300 group">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={classItem.image} 
                        alt={classItem.title}
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="text-lg font-bold text-white">{classItem.title}</h4>
                        <span className="text-xs font-medium bg-primary/20 text-primary py-1 px-3 rounded-full">
                          {classItem.intensity}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">{classItem.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {classItem.duration}
                        </span>
                        <a href="#" className="text-primary font-medium text-sm hover:underline">
                          View Schedule
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ClassesSection;
