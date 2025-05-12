
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { X, Menu, ShoppingCart, Dumbbell, Users, Home, InfoIcon } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'About', path: '/about', icon: <InfoIcon size={18} /> },
    { name: 'Classes', path: '/classes', icon: <Dumbbell size={18} /> },
    { name: 'Team', path: '/team', icon: <Users size={18} /> },
    { name: 'Shop', path: '/shop', icon: <ShoppingCart size={18} /> },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'header-scroll py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white font-poppins text-2xl font-bold">
            FLEX<span className="text-primary">GYM</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.path}
                      className={`flex items-center text-white hover:text-primary transition-colors duration-300 text-sm font-medium ${isActive(item.path) ? 'text-primary' : 'opacity-80'}`}
                    >
                      <span className="mr-2">{item.icon}</span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            <Button 
              className="btn-hover-effect bg-primary hover:bg-primary/90 text-white" 
              size="sm"
              asChild
            >
              <Link to="/contact">Join Now</Link>
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
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path}
                  onClick={toggleMobileMenu}
                  className={`flex items-center text-white hover:text-primary transition-colors block py-2 text-lg font-medium ${isActive(item.path) ? 'text-primary' : 'opacity-80'}`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button 
                className="btn-hover-effect bg-primary hover:bg-primary/90 text-white w-full" 
                asChild
              >
                <Link to="/contact" onClick={toggleMobileMenu}>Join Now</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
