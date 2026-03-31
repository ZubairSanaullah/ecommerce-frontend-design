import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Minus, Plus, Truck, Shield, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <Link to="/products" className="btn btn-primary">Back to Shop</Link>
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="product-detail" id="product-detail-page">
      <Link to="/products" className="back-link">
        <ArrowLeft size={18} /> Back to Shop
      </Link>

      <div className="detail-grid">
        <div className="detail-image-wrap">
          <img src={product.image} alt={product.name} className="detail-image" />
          {product.badge && <span className="detail-badge">{product.badge}</span>}
        </div>

        <div className="detail-info">
          <span className="detail-category">{product.category}</span>
          <h1 className="detail-name">{product.name}</h1>

          <div className="detail-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill={i < Math.round(product.rating) ? '#f59e0b' : 'none'}
                  stroke="#f59e0b"
                />
              ))}
            </div>
            <span className="rating-text">
              {product.rating} ({product.reviews.toLocaleString()} reviews)
            </span>
          </div>

          <div className="detail-prices">
            <span className="detail-price">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <>
                <span className="detail-original">${product.originalPrice.toFixed(2)}</span>
                <span className="detail-discount-tag">Save {discount}%</span>
              </>
            )}
          </div>

          <p className="detail-description">{product.description}</p>

          <div className="detail-actions">
            <div className="quantity-control" id="quantity-control">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity">
                <Minus size={16} />
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity">
                <Plus size={16} />
              </button>
            </div>
            <button className="btn btn-primary add-btn" id="add-to-cart-detail" onClick={handleAddToCart}>
              <ShoppingCart size={18} /> Add to Cart
            </button>
          </div>

          <div className="detail-perks">
            <div className="perk"><Truck size={18} /> Free shipping over $50</div>
            <div className="perk"><Shield size={18} /> 2-year warranty</div>
            <div className="perk"><RotateCcw size={18} /> 30-day returns</div>
          </div>
        </div>
      </div>
    </div>
  );
}
