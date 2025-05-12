
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Michael Peterson",
    role: "Member for 2+ years",
    quote: "FLEXGYM completely transformed my approach to fitness. The trainers are knowledgeable and motivating, and the community makes every workout enjoyable. I've lost 30 pounds and gained confidence!",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070",
    rating: 5
  },
  {
    id: 2,
    name: "Emma Rodriguez",
    role: "Member for 1+ year",
    quote: "As someone who was intimidated by gyms, FLEXGYM provided the supportive environment I needed. The classes are challenging but adaptable to all fitness levels, and I've seen amazing results!",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961",
    rating: 5
  },
  {
    id: 3,
    name: "David Thompson",
    role: "Member for 3+ years",
    quote: "The personal training at FLEXGYM is top-notch. My trainer created a program specifically for my goals, and I've made more progress in 6 months than I did in years at other gyms.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974",
    rating: 4
  },
  {
    id: 4,
    name: "Jennifer Lee",
    role: "Member for 8 months",
    quote: "I love the variety of classes at FLEXGYM. From high-intensity workouts to yoga, there's always something that fits my mood and fitness goals. The facilities are clean and modern too!",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070",
    rating: 5
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) { // threshold for swipe
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

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
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold text-sm uppercase tracking-wider mb-3 reveal">Success Stories</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 reveal animate-delay-100">
            What Our Members Say
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto reveal animate-delay-200">
            Hear from our community about how FLEXGYM has helped them transform their fitness journey.
          </p>
        </div>
        
        <div className="relative reveal animate-delay-300">
          <div 
            ref={carouselRef}
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-gym-dark border-gray-800 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-2">
                          <div className="h-full">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="md:col-span-3 p-8 flex flex-col justify-center">
                          <div className="flex mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-5 h-5 ${i < testimonial.rating ? 'text-primary fill-primary' : 'text-gray-600'}`} 
                              />
                            ))}
                          </div>
                          <blockquote className="text-xl text-white italic mb-6">
                            "{testimonial.quote}"
                          </blockquote>
                          <div>
                            <p className="text-white font-bold">{testimonial.name}</p>
                            <p className="text-gray-400">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline"
              size="icon" 
              onClick={goToPrev}
              className="border-gray-700 text-white hover:bg-primary hover:text-white hover:border-primary"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <Button 
              variant="outline"
              size="icon" 
              onClick={goToNext}
              className="border-gray-700 text-white hover:bg-primary hover:text-white hover:border-primary"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
