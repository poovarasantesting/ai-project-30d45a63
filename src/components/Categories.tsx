import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Categories() {
  const navigate = useNavigate();
  
  const categories = [
    {
      name: "Clothing",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=500&auto=format&fit=crop",
      slug: "clothing"
    },
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1593344484962-796055d4a3a4?q=80&w=500&auto=format&fit=crop",
      slug: "electronics"
    },
    {
      name: "Home & Decor",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=500&auto=format&fit=crop",
      slug: "home-decor"
    },
    {
      name: "Beauty",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=500&auto=format&fit=crop",
      slug: "beauty"
    }
  ];
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our wide range of products across different categories to find exactly what you're looking for.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div 
              key={category.slug}
              className="relative rounded-lg overflow-hidden group cursor-pointer"
              onClick={() => navigate(`/products?category=${category.slug}`)}
            >
              <div className="aspect-square">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold mb-3">{category.name}</h3>
                <Button 
                  variant="outline" 
                  className="text-white border-white hover:bg-white/20"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}