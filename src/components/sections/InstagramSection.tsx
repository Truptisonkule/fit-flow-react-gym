
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Instagram } from 'lucide-react';

const InstagramSection = () => {
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

  const instagramPosts = [
    { image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070", likes: 287 },
    { image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070", likes: 432 },
    { image: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?q=80&w=2071", likes: 156 },
    { image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=2025", likes: 398 },
    { image: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?q=80&w=2942", likes: 275 },
    { image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070", likes: 321 },
    { image: "https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=2070", likes: 189 },
    { image: "https://images.unsplash.com/photo-1598971639058-aac435b10b8d?q=80&w=1976", likes: 243 }
  ];

  return (
    <section className="py-20 bg-gym-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-primary font-bold text-sm uppercase tracking-wider mb-3 reveal">Get Inspired</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 reveal animate-delay-100">
              Follow Us on <span className="gradient-text">Instagram</span>
            </h3>
            <p className="text-gray-300 max-w-lg reveal animate-delay-200">
              Join our community of fitness enthusiasts and stay updated with our latest classes, events, and success stories.
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2 reveal animate-delay-300">
            <Instagram className="h-5 w-5" />
            @flexgym
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post, index) => (
            <div key={index} className={`relative overflow-hidden group reveal animate-delay-${(index + 2) * 100}`}>
              <img 
                src={post.image} 
                alt={`Instagram post ${index + 1}`} 
                className="w-full aspect-square object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-white flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span>{post.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center reveal animate-delay-700">
          <p className="text-gray-300 mb-6">
            Use hashtag <span className="text-primary font-medium">#FLEXGYM</span> for a chance to be featured
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
