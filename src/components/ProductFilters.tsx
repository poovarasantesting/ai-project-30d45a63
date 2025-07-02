import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface ProductFiltersProps {
  filters: {
    category: string;
    priceRange: number[];
    sortBy: string;
  };
  onChange: (filters: any) => void;
}

export default function ProductFilters({ filters, onChange }: ProductFiltersProps) {
  const [localPriceRange, setLocalPriceRange] = useState(filters.priceRange);
  const [searchTerm, setSearchTerm] = useState("");
  
  const categories = [
    { id: "clothing", label: "Clothing" },
    { id: "electronics", label: "Electronics" },
    { id: "home-decor", label: "Home & Decor" },
    { id: "beauty", label: "Beauty" },
    { id: "accessories", label: "Accessories" },
    { id: "footwear", label: "Footwear" },
    { id: "sports", label: "Sports & Outdoors" },
  ];

  const handlePriceChange = (value: number[]) => {
    setLocalPriceRange(value);
  };

  const applyPriceFilter = () => {
    onChange({ ...filters, priceRange: localPriceRange });
  };

  const handleCategoryChange = (categoryId: string) => {
    onChange({ ...filters, category: categoryId === filters.category ? "" : categoryId });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", searchTerm);
  };

  const resetFilters = () => {
    onChange({
      category: "",
      priceRange: [0, 1000],
      sortBy: "newest"
    });
    setLocalPriceRange([0, 1000]);
    setSearchTerm("");
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSearch} className="relative">
        <Input
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pr-10"
        />
        <Button 
          type="submit" 
          variant="ghost" 
          size="icon" 
          className="absolute right-0 top-0"
        >
          <Search className="h-4 w-4" />
        </Button>
      </form>
      
      <Accordion type="multiple" defaultValue={["categories", "price"]}>
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={category.id}
                    checked={filters.category === category.id}
                    onCheckedChange={() => handleCategoryChange(category.id)}
                  />
                  <Label htmlFor={category.id}>{category.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                value={localPriceRange}
                min={0}
                max={1000}
                step={10}
                onValueChange={handlePriceChange}
              />
              <div className="flex items-center justify-between">
                <span className="text-sm">${localPriceRange[0]}</span>
                <span className="text-sm">${localPriceRange[1]}</span>
              </div>
              <Button size="sm" onClick={applyPriceFilter} className="w-full">
                Apply
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="rating">
          <AccordionTrigger>Customer Rating</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox id={`rating-${rating}`} />
                  <Label htmlFor={`rating-${rating}`}>
                    {rating} Star{rating !== 1 && "s"} & Above
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Button variant="outline" size="sm" onClick={resetFilters} className="w-full">
        Reset Filters
      </Button>
    </div>
  );
}