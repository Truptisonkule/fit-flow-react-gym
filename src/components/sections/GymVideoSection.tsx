
import { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Play, Pause } from 'lucide-react';

const GymVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
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

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold text-sm uppercase tracking-wider mb-3 reveal">Experience FLEXGYM</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 reveal animate-delay-100">
            Discover What Makes Our <span className="gradient-text">Gym Different</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto reveal animate-delay-200">
            Take a virtual tour of our state-of-the-art facility and see the FLEXGYM difference for yourself.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto reveal animate-delay-300">
          <div className="relative rounded-xl overflow-hidden">
            <video 
              ref={videoRef}
              className="w-full h-auto" 
              poster="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070"
              onEnded={() => setIsPlaying(false)}
            >
              <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <div className={`absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
              <Button 
                onClick={togglePlay} 
                size="icon"
                className="bg-primary hover:bg-primary/90 text-white rounded-full h-16 w-16 flex items-center justify-center"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
              </Button>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-gym-dark rounded-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070" 
                  alt="Strength Training" 
                  className="w-full h-48 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="text-white h-12 w-12" />
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-white font-medium mb-1">Strength Training</h4>
                <p className="text-gray-400 text-sm">Expert techniques for maximum results</p>
              </div>
            </div>
            <div className="bg-gym-dark rounded-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070" 
                  alt="Group Classes" 
                  className="w-full h-48 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="text-white h-12 w-12" />
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-white font-medium mb-1">Group Classes</h4>
                <p className="text-gray-400 text-sm">Energy-packed sessions led by pros</p>
              </div>
            </div>
            <div className="bg-gym-dark rounded-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070" 
                  alt="Personalized Training" 
                  className="w-full h-48 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="text-white h-12 w-12" />
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-white font-medium mb-1">Personalized Training</h4>
                <p className="text-gray-400 text-sm">One-on-one coaching for your goals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymVideoSection;
