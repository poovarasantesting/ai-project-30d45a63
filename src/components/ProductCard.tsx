import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Eye, Star } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };
  
  return (
    <Card 
      className="overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-md"
      onClick={() => navigate(`/products/${product.id}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={isHovered && product.images.length > 1 ? product.images[1] : product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-300"
        />
        
        {product.isNew && (
          <Badge className="absolute top-2 left-2 bg-green-500 hover:bg-green-600">
            New
          </Badge>
        )}
        
        {product.discount > 0 && (
          <Badge variant="destructive" className="absolute top-2 right-2">
            -{product.discount}%
          </Badge>
        )}
        
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 transition-opacity duration-200 hover:opacity-100">
          <Button 
            variant="secondary" 
            size="icon" 
            className="rounded-full shadow-sm"
            onClick={(e) => {
              e.stopPropagation();
              // Add to wishlist functionality
              toast({
                title: "Added to wishlist",
                description: `${product.name} has been added to your wishlist`,
              });
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="secondary" 
            size="icon" 
            className="rounded-full shadow-sm"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/products/${product.id}`);
            }}
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="text-sm text-gray-500 mb-1">{product.category}</div>
        <h3 className="font-medium line-clamp-1">{product.name}</h3>
        
        <div className="flex items-center gap-2 mt-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-3 w-3 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviewCount})</span>
        </div>
        
        <div className="flex items-center gap-2 mt-2">
          <div className="font-bold">${product.price.toFixed(2)}</div>
          {product.oldPrice && (
            <div className="text-gray-400 text-sm line-through">
              ${product.oldPrice.toFixed(2)}
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full"
          size="sm"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}