import { useQuery } from "@tanstack/react-query";
import { fetchFeaturedProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";

export default function FeaturedProducts() {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ["featuredProducts"],
    queryFn: fetchFeaturedProducts
  });
  
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-lg border bg-card animate-pulse">
            <div className="aspect-square bg-gray-200"></div>
            <div className="p-4 space-y-2">
              <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
              <div className="h-6 w-1/3 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  if (error) {
    return <div className="text-center text-red-500">Failed to load featured products.</div>;
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}