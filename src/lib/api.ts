import { Product } from "@/types";

// Mock data for the e-commerce store
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation technology and extended battery life. Perfect for music lovers who demand exceptional sound quality and comfort.",
    price: 299.99,
    oldPrice: 349.99,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=500&auto=format&fit=crop"
    ],
    category: "electronics",
    rating: 4.8,
    reviewCount: 125,
    isNew: true,
    discount: 14,
    inStock: true,
    sku: "HDPH-001",
    reviews: [
      {
        id: "r1",
        userName: "Alex Johnson",
        userImage: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        date: "2025-03-15",
        comment: "These headphones are amazing! The sound quality is outstanding, and the noise cancellation works perfectly in noisy environments."
      },
      {
        id: "r2",
        userName: "Sarah Miller",
        userImage: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4,
        date: "2025-02-28",
        comment: "Really comfortable to wear, even for long periods. Battery life is impressive too."
      }
    ]
  },
  {
    id: "2",
    name: "Ultra Slim Smartphone",
    description: "The latest smartphone with a stunning display, powerful camera system, and all-day battery life. Experience lightning-fast performance and premium design.",
    price: 899.99,
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=500&auto=format&fit=crop"
    ],
    category: "electronics",
    rating: 4.6,
    reviewCount: 89,
    isNew: true,
    discount: 0,
    inStock: true,
    sku: "PHON-002",
    reviews: [
      {
        id: "r3",
        userName: "Michael Chen",
        userImage: "https://randomuser.me/api/portraits/men/18.jpg",
        rating: 5,
        date: "2025-04-02",
        comment: "This phone exceeds all my expectations. The camera quality is incredible, and the battery easily lasts a full day."
      }
    ]
  },
  {
    id: "3",
    name: "Smart Fitness Watch",
    description: "Track your fitness goals with this advanced smartwatch. Features heart rate monitoring, sleep tracking, and GPS. Water-resistant design for all your activities.",
    price: 199.99,
    oldPrice: 249.99,
    images: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=500&auto=format&fit=crop"
    ],
    category: "electronics",
    rating: 4.4,
    reviewCount: 67,
    isNew: false,
    discount: 20,
    inStock: true,
    sku: "WTCH-003",
    reviews: []
  },
  {
    id: "4",
    name: "Luxury Leather Backpack",
    description: "Stylish, high-quality leather backpack with ample storage and padded laptop compartment. Perfect for work, travel, or everyday use.",
    price: 149.99,
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=500&auto=format&fit=crop"
    ],
    category: "accessories",
    rating: 4.7,
    reviewCount: 42,
    isNew: false,
    discount: 0,
    inStock: true,
    sku: "BKPK-004",
    reviews: []
  },
  {
    id: "5",
    name: "Designer Sunglasses",
    description: "Premium polarized sunglasses with UV protection. Lightweight, durable frame with a timeless design that complements any outfit.",
    price: 129.99,
    oldPrice: 159.99,
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=500&auto=format&fit=crop"
    ],
    category: "accessories",
    rating: 4.3,
    reviewCount: 31,
    isNew: false,
    discount: 19,
    inStock: true,
    sku: "SUNG-005",
    reviews: []
  },
  {
    id: "6",
    name: "Organic Cotton T-Shirt",
    description: "Soft, breathable organic cotton t-shirt. Sustainably made and ethically sourced. Classic fit with attention to detail in stitching and quality.",
    price: 39.99,
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=500&auto=format&fit=crop"
    ],
    category: "clothing",
    rating: 4.5,
    reviewCount: 78,
    isNew: false,
    discount: 0,
    inStock: true,
    sku: "TSRT-006",
    reviews: []
  },
  {
    id: "7",
    name: "Premium Denim Jeans",
    description: "Classic denim jeans with a modern fit. Made from high-quality fabric that offers both comfort and durability. Perfect for everyday wear.",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500&auto=format&fit=crop"
    ],
    category: "clothing",
    rating: 4.6,
    reviewCount: 54,
    isNew: false,
    discount: 0,
    inStock: true,
    sku: "JEAN-007",
    reviews: []
  },
  {
    id: "8",
    name: "Aromatherapy Candle Set",
    description: "Set of 3 handcrafted aromatherapy candles made with natural soy wax and essential oils. Create a calming atmosphere in any room.",
    price: 49.99,
    oldPrice: 59.99,
    images: [
      "https://images.unsplash.com/photo-1603006905393-c279c4e84365?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602178121163-6e48d3c45816?q=80&w=500&auto=format&fit=crop"
    ],
    category: "home-decor",
    rating: 4.8,
    reviewCount: 37,
    isNew: true,
    discount: 17,
    inStock: true,
    sku: "CNDL-008",
    reviews: []
  },
  {
    id: "9",
    name: "Ceramic Plant Pot Set",
    description: "Modern ceramic plant pots in various sizes. Minimalist design with drainage holes and saucers. Perfect for indoor plants and home decor.",
    price: 59.99,
    images: [
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620803366004-119b57f54cd6?q=80&w=500&auto=format&fit=crop"
    ],
    category: "home-decor",
    rating: 4.4,
    reviewCount: 29,
    isNew: false,
    discount: 0,
    inStock: true,
    sku: "PLNT-009",
    reviews: []
  },
  {
    id: "10",
    name: "Natural Skincare Set",
    description: "Complete skincare set with cleanser, toner, and moisturizer. Made with natural ingredients and suitable for all skin types.",
    price: 79.99,
    oldPrice: 99.99,
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601612628452-9e99ced43524?q=80&w=500&auto=format&fit=crop"
    ],
    category: "beauty",
    rating: 4.7,
    reviewCount: 48,
    isNew: true,
    discount: 20,
    inStock: true,
    sku: "SKIN-010",
    reviews: []
  },
  {
    id: "11",
    name: "Premium Yoga Mat",
    description: "Eco-friendly, non-slip yoga mat with optimal cushioning and support. Includes carrying strap for easy transport to the studio.",
    price: 69.99,
    images: [
      "https://images.unsplash.com/photo-1593164842264-854604db2260?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=500&auto=format&fit=crop"
    ],
    category: "sports",
    rating: 4.5,
    reviewCount: 35,
    isNew: false,
    discount: 0,
    inStock: true,
    sku: "YOGA-011",
    reviews: []
  },
  {
    id: "12",
    name: "Stainless Steel Water Bottle",
    description: "Durable, insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours. Leak-proof design with BPA-free materials.",
    price: 34.99,
    oldPrice: 39.99,
    images: [
      "https://images.unsplash.com/photo-1609952542840-df54cfc646c1?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=500&auto=format&fit=crop"
    ],
    category: "accessories",
    rating: 4.6,
    reviewCount: 62,
    isNew: false,
    discount: 13,
    inStock: true,
    sku: "BTTLE-012",
    reviews: []
  }
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// API functions
export const fetchProducts = async (filters: any) => {
  await delay(800);
  
  let filteredProducts = [...mockProducts];
  
  // Apply category filter
  if (filters.category) {
    filteredProducts = filteredProducts.filter(product => 
      product.category === filters.category
    );
  }
  
  // Apply price range filter
  if (filters.priceRange && filters.priceRange.length === 2) {
    filteredProducts = filteredProducts.filter(product => 
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );
  }
  
  // Apply sorting
  if (filters.sortBy) {
    switch (filters.sortBy) {
      case "price-low-high":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      case "popularity":
        filteredProducts.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      // Default is "newest"
      default:
        // In a real app, you'd have a timestamp field to sort by
        filteredProducts.sort((a, b) => (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1);
    }
  }
  
  return filteredProducts;
};

export const fetchProductById = async (id: string) => {
  await delay(500);
  return mockProducts.find(product => product.id === id);
};

export const fetchFeaturedProducts = async () => {
  await delay(600);
  // Return a mix of new products and ones with discounts
  return mockProducts.filter(product => product.isNew || product.discount > 0).slice(0, 4);
};

export const fetchRelatedProducts = async (category: string, currentProductId: string) => {
  await delay(500);
  return mockProducts
    .filter(product => product.category === category && product.id !== currentProductId)
    .slice(0, 4);
};