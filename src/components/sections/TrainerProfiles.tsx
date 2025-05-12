
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface Trainer {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
  experience: string;
  certifications: string[];
  socialMedia: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const trainers: Trainer[] = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Head Coach & Strength Specialist",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974",
    bio: "Alex has been transforming lives through fitness for over 10 years. With expertise in strength training and functional movement, he specializes in helping clients build lean muscle and improve overall athletic performance.",
    specialties: ["Strength Training", "Powerlifting", "Sports Conditioning"],
    experience: "12 Years",
    certifications: ["NASM Certified Personal Trainer", "Certified Strength & Conditioning Specialist", "TRX Suspension Training"],
    socialMedia: {
      instagram: "alexmorgan_fitness",
      twitter: "alexmorganfitness",
      linkedin: "alexmorgan"
    }
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Fitness Nutrition Specialist",
    image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=2070",
    bio: "Sarah combines her expertise in nutrition and fitness to create comprehensive programs that address both exercise and diet. Her holistic approach ensures clients see sustainable, long-term results.",
    specialties: ["Nutrition Planning", "Weight Management", "Women's Fitness"],
    experience: "8 Years",
    certifications: ["Precision Nutrition Level 2", "ACE Certified Personal Trainer", "Yoga Alliance 200-Hour"],
    socialMedia: {
      instagram: "sarahj_nutrition",
      twitter: "sarahj_fit",
      linkedin: "sarahjohnson"
    }
  },
  {
    id: 3,
    name: "Marcus Williams",
    role: "HIIT & Functional Training Expert",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e6bc4?q=80&w=1974",
    bio: "Marcus specializes in high-intensity interval training and functional movement patterns that build real-world strength and endurance. His energetic approach and creative workouts keep clients engaged and continuously challenged.",
    specialties: ["HIIT", "Functional Fitness", "Group Training"],
    experience: "7 Years",
    certifications: ["ACSM Certified Personal Trainer", "CrossFit Level 2", "Kettlebell Specialist"],
    socialMedia: {
      instagram: "marcusmoves",
      twitter: "marcus_williams",
      linkedin: "marcuswilliamsfitness"
    }
  },
  {
    id: 4,
    name: "Leila Chen",
    role: "Mind-Body Wellness Coach",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070",
    bio: "Leila brings harmony to fitness through her specialized mind-body approach. Blending traditional training with mindfulness practices, she helps clients reduce stress while improving physical fitness.",
    specialties: ["Pilates", "Yoga", "Mindfulness Training"],
    experience: "9 Years",
    certifications: ["STOTT Pilates Certified", "Yoga Alliance 500-Hour", "ACE Health Coach"],
    socialMedia: {
      instagram: "leila_wellness",
      twitter: "leilachenwellness",
      linkedin: "leilachen"
    }
  }
];

const TrainerProfiles = () => {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);
  const [open, setOpen] = useState(false);

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

  const openTrainerDialog = (trainer: Trainer) => {
    setSelectedTrainer(trainer);
    setOpen(true);
  };

  return (
    <section className="py-20 bg-gym-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold text-sm uppercase tracking-wider mb-3 reveal">Professional Trainers</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 reveal animate-delay-100">
            Expert Guidance For Your <span className="gradient-text">Fitness Journey</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto reveal animate-delay-200">
            Our team of certified fitness professionals is passionate about helping you achieve your goals. Each trainer brings unique expertise to create personalized fitness experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div 
              key={trainer.id}
              className={`group cursor-pointer reveal animate-delay-${(index + 2) * 100}`}
              onClick={() => openTrainerDialog(trainer)}
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-80 z-10 transition-all duration-300"></div>
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-[400px] object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h4 className="text-white text-xl font-bold">{trainer.name}</h4>
                  <p className="text-gray-300">{trainer.role}</p>
                </div>
                <div className="absolute top-0 left-0 right-0 p-6 z-20 flex justify-end">
                  <div className="bg-primary text-white px-3 py-1 text-xs rounded-full font-medium">
                    {trainer.experience} Experience
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                    View Profile
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {trainer.specialties.slice(0, 2).map((specialty, i) => (
                  <Badge key={i} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {specialty}
                  </Badge>
                ))}
                {trainer.specialties.length > 2 && (
                  <Badge variant="outline" className="bg-gray-800/50 text-gray-300 border-gray-700">
                    +{trainer.specialties.length - 2}
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trainer Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-gym-dark border-gray-800 text-white max-w-3xl">
          {selectedTrainer && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-white">{selectedTrainer.name}</DialogTitle>
                <DialogDescription className="text-gray-300">{selectedTrainer.role}</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <img 
                    src={selectedTrainer.image} 
                    alt={selectedTrainer.name} 
                    className="w-full h-auto rounded-xl object-cover"
                  />
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedTrainer.specialties.map((specialty, i) => (
                      <Badge key={i} className="bg-primary/10 text-primary border-primary/20">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex space-x-4">
                    {Object.entries(selectedTrainer.socialMedia).map(([platform, handle]) => (
                      <a 
                        key={platform}
                        href="#" 
                        className="text-gray-400 hover:text-primary transition-colors"
                      >
                        <i className={`fab fa-${platform.toLowerCase()}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">About</h4>
                  <p className="text-gray-300 mb-4">{selectedTrainer.bio}</p>
                  
                  <h4 className="text-lg font-semibold mb-2 text-white">Experience</h4>
                  <p className="text-gray-300 mb-4">{selectedTrainer.experience}</p>
                  
                  <h4 className="text-lg font-semibold mb-2 text-white">Certifications</h4>
                  <ul className="list-disc list-inside text-gray-300 mb-4">
                    {selectedTrainer.certifications.map((cert, i) => (
                      <li key={i}>{cert}</li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 bg-black/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">Schedule a Session</h4>
                    <p className="text-gray-400 text-sm mb-2">
                      Available for personal training and group classes
                    </p>
                    <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg w-full">
                      Book with {selectedTrainer.name.split(' ')[0]}
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TrainerProfiles;
