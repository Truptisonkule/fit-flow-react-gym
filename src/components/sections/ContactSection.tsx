
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
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
    <section id="about" className="py-20 bg-gym-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-primary font-bold text-sm uppercase tracking-wider mb-3 reveal">Contact Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 reveal animate-delay-100">
              Ready to Start Your<br />
              <span className="gradient-text">Fitness Journey?</span>
            </h3>
            <p className="text-gray-400 mb-8 reveal animate-delay-200">
              Have questions about our programs, memberships, or facilities? Our team is here to help you get started on your fitness journey. Fill out the form and we'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-6 reveal animate-delay-300">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Phone className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Give us a call</h4>
                  <p className="text-gray-400">(123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Mail className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email us</h4>
                  <p className="text-gray-400">info@flexgym.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <MapPin className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Visit us</h4>
                  <p className="text-gray-400">123 Fitness Avenue<br />New York, NY 10001</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex space-x-4 reveal animate-delay-400">
              {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="reveal animate-delay-500">
            <form className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
              <h4 className="text-xl font-bold text-white mb-6">Send us a Message</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400">
                    Full Name
                  </label>
                  <Input 
                    id="name"
                    type="text" 
                    placeholder="Your name" 
                    className="bg-white/5 border-gray-800 focus:border-primary text-white placeholder:text-gray-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-400">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-white/5 border-gray-800 focus:border-primary text-white placeholder:text-gray-500"
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <label htmlFor="subject" className="text-sm text-gray-400">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  type="text" 
                  placeholder="How can we help you?" 
                  className="bg-white/5 border-gray-800 focus:border-primary text-white placeholder:text-gray-500"
                />
              </div>
              
              <div className="space-y-2 mb-6">
                <label htmlFor="message" className="text-sm text-gray-400">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  rows={5}
                  className="bg-white/5 border-gray-800 focus:border-primary text-white placeholder:text-gray-500 resize-none"
                />
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90 text-white btn-hover-effect">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
