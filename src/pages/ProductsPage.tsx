import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductGrid from "@/components/ProductGrid";
import ProductFilters from "@/components/ProductFilters";
import ProductSort from "@/components/ProductSort";
import { fetchProducts } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function ProductsPage() {
  const [filters, setFilters] = useState({
    category: "",
    priceRange: [0, 1000],
    sortBy: "newest"
  });
  
  const { data: products, isLoading, error } = useQuery({
    queryKey: ["products", filters],
    queryFn: () => fetchProducts(filters)
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">All Products</h1>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <ProductSort value={filters.sortBy} onChange={(sortBy) => setFilters({...filters, sortBy})} />
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="py-4">
                <h3 className="text-lg font-semibold mb-4">Filters</h3>
                <ProductFilters
                  filters={filters}
                  onChange={setFilters}
                />
                <div className="mt-4">
                  <ProductSort value={filters.sortBy} onChange={(sortBy) => setFilters({...filters, sortBy})} />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="hidden md:block w-64 shrink-0">
          <ProductFilters
            filters={filters}
            onChange={setFilters}
          />
        </div>
        
        <div className="flex-1">
          {isLoading ? (
            <div className="text-center py-12">Loading products...</div>
          ) : error ? (
            <div className="text-center py-12 text-red-500">Error loading products. Please try again.</div>
          ) : (
            <ProductGrid products={products || []} />
          )}
        </div>
      </div>
    </div>
  );
}