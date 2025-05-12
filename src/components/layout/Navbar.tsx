
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'header-scroll py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-white font-poppins text-2xl font-bold">
            FLEX<span className="text-primary">GYM</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-8">
                {['Home', 'Classes', 'Trainers', 'Pricing', 'About'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="text-white opacity-80 hover:opacity-100 hover:text-primary transition-colors duration-300 text-sm font-medium"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            <Button 
              className="btn-hover-effect bg-primary hover:bg-primary/90 text-white" 
              size="sm"
            >
              Join Now
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-gym-dark/95 backdrop-blur-sm absolute w-full top-full left-0 transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="container mx-auto px-4 py-5">
          <ul className="space-y-4">
            {['Home', 'Classes', 'Trainers', 'Pricing', 'About'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  onClick={toggleMobileMenu}
                  className="text-white opacity-80 hover:opacity-100 hover:text-primary transition-colors block py-2 text-lg font-medium"
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button 
                className="btn-hover-effect bg-primary hover:bg-primary/90 text-white w-full" 
              >
                Join Now
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
