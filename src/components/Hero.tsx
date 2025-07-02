import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const navigate = useNavigate();
  
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gray-900/20 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url(https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070&auto=format&fit=crop)",
          backgroundSize: "cover" 
        }}
      />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Summer Collection 2025
          </h1>
          <p className="text-lg text-white/90 mb-8">
            Discover the latest trends and styles for the summer season. Shop now and get up to 40% off on selected items.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={() => navigate("/products")}
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate("/products?collection=summer")}
              className="text-white border-white hover:bg-white/10"
            >
              View Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}