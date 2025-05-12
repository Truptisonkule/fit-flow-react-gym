
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const PRICING_PLANS = [
  {
    name: "Basic",
    price: 29.99,
    period: "monthly",
    description: "Essential access for individuals new to fitness",
    features: [
      "Full gym access (6am - 10pm)",
      "2 group classes per week",
      "Fitness assessment",
      "Locker room access",
      "Nutrition guide"
    ],
    popular: false,
    buttonText: "Choose Basic"
  },
  {
    name: "Premium",
    price: 59.99,
    period: "monthly",
    description: "Perfect for fitness enthusiasts seeking variety",
    features: [
      "24/7 gym access",
      "Unlimited group classes",
      "2 personal training sessions/month",
      "Nutritional consultation",
      "Body composition analysis",
      "Mobile app with workout plans",
      "Access to premium equipment"
    ],
    popular: true,
    buttonText: "Choose Premium"
  },
  {
    name: "Elite",
    price: 99.99,
    period: "monthly",
    description: "Comprehensive package with personalized coaching",
    features: [
      "24/7 gym access",
      "Unlimited group classes",
      "Weekly personal training sessions",
      "Personalized nutrition plan",
      "Monthly progress review",
      "Recovery services access",
      "Guest passes (2 per month)",
      "Premium app features"
    ],
    popular: false,
    buttonText: "Choose Elite"
  }
];

const PricingSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
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
    <section id="pricing" className="py-20 bg-gradient-to-b from-black to-gym-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold text-sm uppercase tracking-wider mb-3 reveal">Membership Plans</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 reveal animate-delay-100">
            Choose Your Ideal Plan
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto reveal animate-delay-200">
            Flexible membership options designed to fit your lifestyle and fitness goals, with no long-term contracts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <Card 
              key={index}
              className={`border ${plan.popular ? 'border-primary shadow-lg shadow-primary/20' : 'border-gray-800'} bg-gym-dark/50 backdrop-blur-sm overflow-hidden relative reveal animate-delay-${(index + 3) * 100}`}
            >
              {plan.popular && (
                <div className="absolute top-5 right-5 bg-primary text-white text-xs font-bold py-1 px-3 rounded-full animate-pulse-soft">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400 ml-2">/{plan.period}</span>
                </div>
                <p className="text-gray-400 mt-4">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="text-primary mr-2 h-5 w-5 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90 text-white' 
                      : 'bg-transparent border border-primary text-primary hover:bg-primary/10'
                  } btn-hover-effect`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center reveal animate-delay-700">
          <p className="text-gray-400 mb-4">All memberships include a 7-day money-back guarantee</p>
          <a href="#" className="text-primary hover:underline">View full membership details</a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
