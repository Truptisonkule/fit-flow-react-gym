
import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  discountPrice: number | null;
  category: string;
  isBestseller: boolean;
  isNew: boolean;
}

const products: Product[] = [
  // Supplements
  {
    id: 1,
    name: "Performance Whey Protein",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=2070",
    price: 49.99,
    discountPrice: 39.99,
    category: "Supplements",
    isBestseller: true,
    isNew: false
  },
  {
    id: 2,
    name: "Pre-Workout Energy Formula",
    image: "https://images.unsplash.com/photo-1606103836293-0a063ee20566?q=80&w=2036",
    price: 34.99,
    discountPrice: null,
    category: "Supplements",
    isBestseller: false,
    isNew: true
  },
  {
    id: 3,
    name: "BCAA Recovery Complex",
    image: "https://images.unsplash.com/photo-1596685741723-83f6417ec95d?q=80&w=387",
    price: 29.99,
    discountPrice: null,
    category: "Supplements",
    isBestseller: false,
    isNew: false
  },
  {
    id: 4,
    name: "Vegan Protein Blend",
    image: "https://images.unsplash.com/photo-1622047358422-4bf5ae45188e?q=80&w=387",
    price: 54.99,
    discountPrice: 49.99,
    category: "Supplements",
    isBestseller: false,
    isNew: true
  },
  
  // Accessories
  {
    id: 5,
    name: "FlexGym Premium Shaker",
    image: "https://images.unsplash.com/photo-1594735591620-e146c1b929d3?q=80&w=774",
    price: 24.99,
    discountPrice: null,
    category: "Accessories",
    isBestseller: false,
    isNew: false
  },
  {
    id: 6,
    name: "Gym Training Gloves",
    image: "https://images.unsplash.com/photo-1517138651447-cbebe0a3a4c2?q=80&w=387",
    price: 19.99,
    discountPrice: 15.99,
    category: "Accessories",
    isBestseller: true,
    isNew: false
  },
  {
    id: 7,
    name: "Premium Fitness Tracker",
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=387",
    price: 89.99,
    discountPrice: null,
    category: "Accessories",
    isBestseller: true,
    isNew: false
  },
  {
    id: 8,
    name: "Resistance Bands Set",
    image: "https://images.unsplash.com/photo-1609899424139-10a2b3884530?q=80&w=774",
    price: 29.99,
    discountPrice: 24.99,
    category: "Accessories",
    isBestseller: false,
    isNew: true
  },
  
  // Apparel - Men
  {
    id: 9,
    name: "Men's Training T-Shirt",
    image: "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?q=80&w=774",
    price: 34.99,
    discountPrice: 29.99,
    category: "Men",
    isBestseller: true,
    isNew: false
  },
  {
    id: 10,
    name: "Men's Performance Shorts",
    image: "https://images.unsplash.com/photo-1515775538093-d5d4bf448ccf?q=80&w=387",
    price: 39.99,
    discountPrice: null,
    category: "Men",
    isBestseller: false,
    isNew: false
  },
  {
    id: 11,
    name: "Men's Compression Base Layer",
    image: "https://images.unsplash.com/photo-1532187643603-5145f02ccc6b?q=80&w=387",
    price: 44.99,
    discountPrice: 34.99,
    category: "Men",
    isBestseller: false,
    isNew: true
  },
  {
    id: 12,
    name: "Men's Training Hoodie",
    image: "https://images.unsplash.com/photo-1505739818568-8d48e92beb51?q=80&w=387",
    price: 59.99,
    discountPrice: null,
    category: "Men",
    isBestseller: true,
    isNew: false
  },
  
  // Apparel - Women
  {
    id: 13,
    name: "Women's Flex Leggings",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=774",
    price: 54.99,
    discountPrice: null,
    category: "Women",
    isBestseller: true,
    isNew: false
  },
  {
    id: 14,
    name: "Women's Sport Bra",
    image: "https://images.unsplash.com/photo-1541099338470-71633066728e?q=80&w=387",
    price: 34.99,
    discountPrice: 29.99,
    category: "Women",
    isBestseller: false,
    isNew: false
  },
  {
    id: 15,
    name: "Women's Training Top",
    image: "https://images.unsplash.com/photo-1527634311077-9943f7df34e1?q=80&w=774",
    price: 32.99,
    discountPrice: null,
    category: "Women",
    isBestseller: false,
    isNew: true
  },
  {
    id: 16,
    name: "Women's Running Shorts",
    image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=387",
    price: 39.99,
    discountPrice: 34.99,
    category: "Women",
    isBestseller: true,
    isNew: false
  }
];

const ProductGrid = () => {
  const [category, setCategory] = useState<string>('All');
  
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

  const filteredProducts = category === 'All' 
    ? products 
    : products.filter(product => product.category === category);

  return (
    <section className="py-20 bg-gym-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-primary font-bold text-sm uppercase tracking-wider mb-3 reveal">Shop Products</h2>
            <h3 className="text-3xl font-bold text-white mb-4 reveal animate-delay-100">
              All Products
            </h3>
          </div>
          <div className="mt-4 md:mt-0 reveal animate-delay-200">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent border-gray-700 text-white">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="All" value={category} onValueChange={setCategory} className="reveal animate-delay-300">
          <TabsList className="bg-black/30 p-1 mb-8 overflow-x-auto flex flex-nowrap max-w-full w-auto">
            {['All', 'Supplements', 'Accessories', 'Men', 'Women'].map((cat) => (
              <TabsTrigger 
                key={cat}
                value={cat}
                className="whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        
          <TabsContent value={category}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredProducts.map((product, index) => (
                <Card key={product.id} className="bg-gym-dark border-gray-800 overflow-hidden group reveal animate-delay-400">
                  <div className="relative h-48 sm:h-64 overflow-hidden">
                    <div className="absolute top-3 left-3 z-10 flex space-x-2">
                      {product.isBestseller && (
                        <div className="bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
                          Best Seller
                        </div>
                      )}
                      {product.isNew && (
                        <div className="bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                          New
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
                      <button className="bg-primary hover:bg-primary/90 text-white rounded-full px-3 py-1.5 flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <ShoppingCart className="h-4 w-4" />
                        <span className="hidden sm:inline">Add to Cart</span>
                      </button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="text-white font-medium text-sm sm:text-base line-clamp-1">{product.name}</h4>
                    <div className="flex items-center mt-1">
                      {product.discountPrice ? (
                        <>
                          <span className="text-primary font-bold text-sm sm:text-base mr-2">${product.discountPrice}</span>
                          <span className="text-gray-400 text-xs sm:text-sm line-through">${product.price}</span>
                        </>
                      ) : (
                        <span className="text-white font-bold text-sm sm:text-base">${product.price}</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center reveal animate-delay-500">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Load More Products
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductGrid;
