import { Button } from "@/components/ui/button";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Newsletter from "@/components/Newsletter";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Categories />
      <section className="py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of trending products that combine quality, style, and value.
          </p>
        </div>
        <FeaturedProducts />
        <div className="text-center mt-8">
          <Button onClick={() => navigate("/products")} size="lg">
            View All Products
          </Button>
        </div>
      </section>
      <Newsletter />
    </div>
  );
}