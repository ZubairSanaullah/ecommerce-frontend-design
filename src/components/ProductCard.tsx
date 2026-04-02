import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  hideCart?: boolean;
  variant?: 'default' | 'categories';
}

export default function ProductCard({ product, hideCart = false, variant = 'default' }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className={`product-card ${variant}-variant`} id={`product-card-${product.id}`}>
      <Link to={`/product/${product.id}`} className="product-card-image-link">
        <div className="product-card-image-wrap">
          <img src={product.image} alt={product.name} className="product-card-image" loading="lazy" />
        </div>
      </Link>

      <div className="product-card-body">
        <Link to={`/product/${product.id}`} className="product-card-name">
          {product.name}
        </Link>

        {variant === 'categories' && (
          <div className="product-card-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill={i < Math.floor(product.rating) ? "#ff9017" : "none"}
                  stroke={i < Math.floor(product.rating) ? "#ff9017" : "#BDC4CD"}
                />
              ))}
            </div>
            <span className="rating-val">{product.rating}</span>
          </div>
        )}

        <div className="product-card-footer">
          <div className="product-card-prices">
            <span className="product-card-price">${product.price.toFixed(2)}</span>
            {variant === 'categories' && product.originalPrice && (
              <span className="product-card-original">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          {variant === 'categories' ? (
            <button className="product-card-wishlist-btn" aria-label="Add to wishlist">
              <Heart size={20} />
            </button>
          ) : (
            !hideCart && (
              <button
                className="product-card-cart-btn"
                id={`add-to-cart-${product.id}`}
                onClick={() => addToCart(product)}
                aria-label={`Add ${product.name} to cart`}
              >
                <ShoppingCart size={16} />
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
