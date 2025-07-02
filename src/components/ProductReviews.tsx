import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Review } from "@/types";

interface ProductReviewsProps {
  productId: string;
  reviews: Review[];
}

export default function ProductReviews({ productId, reviews }: ProductReviewsProps) {
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / (reviews.length || 1);
  
  const ratingCounts = [0, 0, 0, 0, 0];
  reviews.forEach(review => {
    ratingCounts[review.rating - 1]++;
  });
  
  const submitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast({
        title: "Rating required",
        description: "Please select a rating before submitting your review",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would normally submit the review to your backend
    console.log("Submitting review:", { productId, rating, comment });
    
    toast({
      title: "Review submitted",
      description: "Thank you for your feedback!",
    });
    
    // Reset form
    setRating(0);
    setComment("");
  };
  
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-5xl font-bold mb-2">{averageRating.toFixed(1)}</div>
          <div className="flex mb-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-5 w-5 ${i < Math.round(averageRating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
              />
            ))}
          </div>
          <div className="text-sm text-gray-500">
            Based on {reviews.length} review{reviews.length !== 1 && "s"}
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-2">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center gap-4">
              <div className="whitespace-nowrap text-sm w-12">{star} Stars</div>
              <Progress 
                value={(ratingCounts[star - 1] / reviews.length) * 100 || 0} 
                className="h-2"
              />
              <div className="text-sm text-gray-500 w-12">
                {ratingCounts[star - 1]} ({Math.round((ratingCounts[star - 1] / reviews.length) * 100) || 0}%)
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Separator className="my-8" />
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
        
        <form onSubmit={submitReview} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">Your Rating</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-1"
                >
                  <Star 
                    className={`h-6 w-6 ${
                      star <= (hoverRating || rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`} 
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label htmlFor="comment" className="block mb-2 font-medium">Your Review</label>
            <Textarea
              id="comment"
              placeholder="Share your thoughts about this product..."
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          
          <Button type="submit">Submit Review</Button>
        </form>
      </div>
      
      <Separator className="my-8" />
      
      <div>
        <h3 className="text-xl font-semibold mb-6">Customer Feedback</h3>
        
        {reviews.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No reviews yet. Be the first to share your thoughts!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="pb-6 border-b last:border-0">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={review.userImage} />
                      <AvatarFallback>{review.userName.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{review.userName}</div>
                      <div className="text-sm text-gray-500">{review.date}</div>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}