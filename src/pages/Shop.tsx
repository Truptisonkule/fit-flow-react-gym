
import { useEffect } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ShopHero from "@/components/sections/ShopHero";
import ProductGrid from "@/components/sections/ProductGrid";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import InstagramSection from "@/components/sections/InstagramSection";
import CallToAction from "@/components/sections/CallToAction";

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gym-dark">
      <Navbar />
      <ShopHero />
      <FeaturedProducts />
      <ProductGrid />
      <InstagramSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Shop;
