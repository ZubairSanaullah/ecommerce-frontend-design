import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Bookmark, ShieldCheck, Headphones, Truck, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import './Cart.css';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  // Mock saved for later items
  const savedItems = products.slice(5, 9); // just slicing to get 4 random products

  const discount = 15.00;
  const tax = cartTotal * 0.08;
  const finalTotal = cartTotal > 0 ? (cartTotal - discount + tax + (cartTotal >= 50 ? 0 : 4.99)) : 0;

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty" id="cart-page">
        <div className="cart-empty-icon">
          <ShoppingBag size={64} strokeWidth={1} />
        </div>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added any products yet.</p>
        <Link to="/products" className="btn btn-primary" id="continue-shopping-btn">
          Continue Shopping <ArrowLeft size={18} />
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page" id="cart-page">
      <h1 className="cart-page-title">My cart ({cartItems.length})</h1>
      
      <div className="cart-layout">
        {/* Left Section */}
        <div className="cart-main">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item" id={`cart-item-${item.id}`}>
                <div className="cart-item-image-wrapper">
                  <Link to={`/product/${item.id}`}>
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                  </Link>
                </div>
                
                <div className="cart-item-details">
                  <div className="cart-item-header-row">
                    <div className="cart-item-info-col">
                      <Link to={`/product/${item.id}`} className="cart-item-name">{item.name}</Link>
                      <div className="cart-item-attributes">
                        {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                        {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                        {item.material && <span>Material: {item.material}</span>}
                      </div>
                      <div className="cart-item-seller">Seller: {item.seller || 'Zubayr Store'}</div>
                    </div>
                    
                    <div className="cart-item-price-col">
                      <div className="cart-item-price">${item.price.toFixed(2)}</div>
                      <div className="quantity-control">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease">
                          <Minus size={14} />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase">
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="cart-item-actions">
                    <button className="action-btn remove-btn" onClick={() => removeFromCart(item.id)}>
                      <Trash2 size={16} /> Remove
                    </button>
                    <button className="action-btn save-btn">
                      <Bookmark size={16} /> Save for later
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-footer-actions">
            <Link to="/products" className="btn btn-outline back-to-shop-btn">
              <ArrowLeft size={16} /> Back to shop
            </Link>
            <button className="btn btn-outline remove-all-btn" onClick={clearCart}>
              Remove all
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="cart-sidebar">
          <div className="coupon-card">
            <h3>Have a coupon?</h3>
            <div className="coupon-input-group">
              <input type="text" placeholder="Add coupon" />
              <button className="btn btn-outline">Apply</button>
            </div>
          </div>
          
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row discount">
              <span>Discount</span>
              <span>- ${discount.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="summary-row">
               <span>Shipping</span>
               <span>{cartTotal >= 50 ? 'Free' : '$4.99'}</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>
            
            <button className="btn btn-primary checkout-btn" id="checkout-btn">
              Proceed to Checkout
            </button>
            
            <div className="payment-methods">
              <div className="visa-cards">
                 <span>VISA</span> <span>MasterCard</span> <span>AMEX</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Props */}
      <div className="cart-value-props">
         <div className="value-prop-card">
            <div className="vp-icon"><ShieldCheck size={24} /></div>
            <div className="vp-text">
               <h4>Secure payment</h4>
               <p>Have you ever finally just</p>
            </div>
         </div>
         <div className="value-prop-card">
            <div className="vp-icon"><Headphones size={24} /></div>
            <div className="vp-text">
               <h4>Customer support</h4>
               <p>Have you ever finally just</p>
            </div>
         </div>
         <div className="value-prop-card">
            <div className="vp-icon"><Truck size={24} /></div>
            <div className="vp-text">
               <h4>Free delivery</h4>
               <p>Have you ever finally just</p>
            </div>
         </div>
      </div>

      {/* Saved for Later */}
      <section className="saved-for-later-section">
        <h2>Saved for later</h2>
        <div className="saved-grid">
           {savedItems.map(item => (
             <div key={item.id} className="saved-item-card">
                <img src={item.image} alt={item.name} />
                <div className="saved-item-price">${item.price.toFixed(2)}</div>
                <div className="saved-item-name">{item.name}</div>
                <button className="btn btn-outline add-to-cart-small"><ShoppingCart size={14}/> Move to cart</button>
             </div>
           ))}
        </div>
      </section>

      {/* Discount Banner */}
      <section className="super-discount-banner">
         <div className="banner-content">
            <h2>Super discount on more than 100 USD</h2>
            <p>Have you ever finally just write dummy info</p>
         </div>
         <button className="btn shop-now-btn">Shop now</button>
      </section>
    </div>
  );
}
