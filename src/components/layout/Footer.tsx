
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="text-white font-poppins text-2xl font-bold inline-block mb-4">
              FLEX<span className="text-primary">GYM</span>
            </a>
            <p className="text-gray-400 mb-6">
              Transform your body, elevate your mind, and join a supportive community on your fitness journey.
            </p>
            <div className="flex space-x-3">
              {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-bold text-xl mb-4">Quick Links</h5>
            <ul className="space-y-3">
              {['Home', 'Classes', 'Schedule', 'Pricing', 'Contact', 'Careers'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-primary transition-colors duration-300 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-bold text-xl mb-4">Opening Hours</h5>
            <ul className="space-y-3">
              <li className="flex justify-between text-gray-400">
                <span>Monday - Friday:</span>
                <span>6:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Saturday:</span>
                <span>7:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Sunday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="mt-4 text-primary">
                <span>Holiday hours may vary</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-bold text-xl mb-4">Newsletter</h5>
            <p className="text-gray-400 mb-4">
              Subscribe for updates on new classes, promotions, and fitness tips.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border-gray-800 focus:border-primary text-white placeholder:text-gray-500"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} FLEXGYM. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
