import { useQuery } from "@tanstack/react-query";
import { fetchRelatedProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";

interface RelatedProductsProps {
  category: string;
  currentProductId: string;
}

export default function RelatedProducts({ category, currentProductId }: RelatedProductsProps) {
  const { data: products, isLoading } = useQuery({
    queryKey: ["relatedProducts", category, currentProductId],
    queryFn: () => fetchRelatedProducts(category, currentProductId)
  });
  
  if (isLoading || !products || products.length === 0) {
    return null;
  }
  
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}