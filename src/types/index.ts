export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  badge?: string;
  size?: string;
  color?: string;
  material?: string;
  seller?: string;
  galleryImages?: string[];
  subcategory?: string;
  country?: string;
  verified?: boolean;
  moq?: number; // Minimum Order Quantity
  pricingTiers?: { quantity: string; price: number }[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}
