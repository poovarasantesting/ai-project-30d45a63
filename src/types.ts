export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  images: string[];
  category: string;
  rating: number;
  reviewCount: number;
  isNew: boolean;
  discount: number;
  inStock: boolean;
  sku: string;
  reviews: Review[];
}

export interface Review {
  id: string;
  userName: string;
  userImage: string;
  rating: number;
  date: string;
  comment: string;
}