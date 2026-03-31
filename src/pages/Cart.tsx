import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Cart.css';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty" id="cart-page">
        <div className="cart-empty-icon">
          <ShoppingBag size={64} strokeWidth={1} />
        </div>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added any products yet.</p>
        <Link to="/products" className="btn btn-primary" id="continue-shopping-btn">
          Continue Shopping <ArrowRight size={18} />
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page" id="cart-page">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <button className="clear-cart-btn" onClick={clearCart} id="clear-cart-btn">
          Clear Cart
        </button>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item" id={`cart-item-${item.id}`}>
              <Link to={`/product/${item.id}`} className="cart-item-image-link">
                <img src={item.image} alt={item.name} className="cart-item-image" />
              </Link>
              <div className="cart-item-info">
                <Link to={`/product/${item.id}`} className="cart-item-name">{item.name}</Link>
                <span className="cart-item-category">{item.category}</span>
                <span className="cart-item-price">${item.price.toFixed(2)}</span>
              </div>
              <div className="cart-item-actions">
                <div className="quantity-control">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease">
                    <Minus size={14} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase">
                    <Plus size={14} />
                  </button>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Remove ${item.name}`}
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="cart-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>{cartTotal >= 50 ? 'Free' : '$4.99'}</span>
          </div>
          <div className="summary-row">
            <span>Tax</span>
            <span>${(cartTotal * 0.08).toFixed(2)}</span>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${(cartTotal + (cartTotal < 50 ? 4.99 : 0) + cartTotal * 0.08).toFixed(2)}</span>
          </div>
          <button className="btn btn-primary checkout-btn" id="checkout-btn">
            Proceed to Checkout
          </button>
          <Link to="/products" className="continue-link">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
}
