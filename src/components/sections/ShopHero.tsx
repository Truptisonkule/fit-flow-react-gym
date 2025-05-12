
import { useEffect } from 'react';

const ShopHero = () => {
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
    <section className="relative min-h-[50vh] flex items-center pt-32 pb-16 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gym-dark/90 to-black/70"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069')] bg-cover bg-center"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 reveal">
            FLEXGYM <span className="gradient-text">Shop</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 reveal animate-delay-200">
            High-quality fitness gear, supplements, and apparel to enhance your workout experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShopHero;
