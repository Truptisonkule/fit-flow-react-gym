
import { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from 'lucide-react';

const FeaturedProducts = () => {
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

  const featuredProducts = [
    {
      name: "Performance Whey Protein",
      image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=2070",
      price: 49.99,
      discountPrice: 39.99,
      category: "Supplements",
      isBestseller: true
    },
    {
      name: "FlexGym Premium Shaker",
      image: "https://images.unsplash.com/photo-1594735591620-e146c1b929d3?q=80&w=774",
      price: 24.99,
      discountPrice: null,
      category: "Accessories",
      isBestseller: false
    },
    {
      name: "Men's Training T-Shirt",
      image: "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?q=80&w=774",
      price: 34.99,
      discountPrice: 29.99,
      category: "Apparel",
      isBestseller: true
    },
    {
      name: "Women's Flex Leggings",
      image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=774",
      price: 54.99,
      discountPrice: null,
      category: "Apparel",
      isBestseller: true
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold text-sm uppercase tracking-wider mb-3 reveal">Top Picks</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 reveal animate-delay-100">
            Featured <span className="gradient-text">Products</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto reveal animate-delay-200">
            Discover our top-rated fitness essentials, from performance supplements to premium workout gear.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <Card key={index} className={`bg-gym-dark border-gray-800 overflow-hidden group reveal animate-delay-${(index + 2) * 100}`}>
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-3 left-3 z-10 flex space-x-2">
                  {product.isBestseller && (
                    <div className="bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
                      Best Seller
                    </div>
                  )}
                  {product.discountPrice && (
                    <div className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                      Sale
                    </div>
                  )}
                </div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-primary hover:bg-primary/90 text-white rounded-full px-4 py-2 flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-white font-medium line-clamp-1">{product.name}</h4>
                  <div className="text-xs font-medium bg-primary/10 text-primary py-1 px-2 rounded">
                    {product.category}
                  </div>
                </div>
                <div className="flex items-center">
                  {product.discountPrice ? (
                    <>
                      <span className="text-primary font-bold mr-2">${product.discountPrice}</span>
                      <span className="text-gray-400 text-sm line-through">${product.price}</span>
                    </>
                  ) : (
                    <span className="text-white font-bold">${product.price}</span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
