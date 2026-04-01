import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { ArrowRight, ShieldCheck, Headset, Truck, ShoppingCart } from 'lucide-react';
=======
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Bookmark, ShieldCheck, Headphones, Truck, ShoppingCart } from 'lucide-react';
>>>>>>> 127d30669e86865626dbd061bf8095ae4e34e2c9
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import './Cart.css';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
<<<<<<< HEAD
  const savedForLaterProducts = products.slice(0, 4);

  return (
    <div className="cart-page" id="cart-page">
      <div className="cart-header">
        <h1>My cart ({cartItems.length})</h1>
      </div>

      <div className="cart-layout">
        <div className="cart-main-content">
          <div className="cart-items-container">
            {cartItems.map((item, index) => (
              <div key={item.id}>
                <div className="cart-item" id={`cart-item-${item.id}`}>
                  <Link to={`/product/${item.id}`} className="cart-item-image-link">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                  </Link>
                  <div className="cart-item-info">
                    <Link to={`/product/${item.id}`} className="cart-item-name">{item.name}</Link>
                    <div className="cart-item-details">
                      <p>Size: Medium, Color: Blue, Material: Plastic</p>
                      <p>Seller: Artel Market</p>
                    </div>
                    <div className="cart-item-actions-row">
                      <button 
                        className="item-action-btn remove-text-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                      <button className="item-action-btn save-later-btn">
                        Save for later
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-right">
                    <span className="cart-item-price">${item.price.toFixed(2)}</span>
                    <div className="quantity-dropdown-wrap">
                      <label htmlFor={`qty-${item.id}`}>Qty:</label>
                      <select 
                        id={`qty-${item.id}`} 
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="qty-select"
                      >
                        {[...Array(10)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                {index < cartItems.length - 1 && <div className="item-divider"></div>}
              </div>
            ))}
            
            <div className="cart-container-footer">
              <Link to="/products" className="btn-back-shop">
                <ArrowRight size={18} style={{ transform: 'rotate(180deg)' }} /> Back to shop
              </Link>
              <button className="btn-remove-all" onClick={clearCart}>
                Remove all
              </button>
            </div>
          </div>

          <div className="trust-features">
            <div className="trust-item">
              <div className="trust-icon-wrap"><ShieldCheck size={20} /></div>
              <div className="trust-text">
                <h4>Secure Payment</h4>
                <p>Have you ever heard of?</p>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon-wrap"><Headset size={20} /></div>
              <div className="trust-text">
                <h4>Customer Support</h4>
                <p>Have you ever heard of?</p>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon-wrap"><Truck size={20} /></div>
              <div className="trust-text">
                <h4>Free Delivery</h4>
                <p>Have you ever heard of?</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cart-summary">
          <div className='coupon-section'>
            <h3>Have a coupon?</h3>
            <div className='coupon-input'>
              <input type="text" placeholder="Add coupon" />
              <button>Apply</button>
            </div>
          </div>
          
          <div className='summary-section'>
            <div className="summary-row">
              <span>Subtotal</span>
              <span className='summary-row-price'>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Discount</span>
              <span className='summary-discount-price'>- {cartTotal >= 50 ? 'Free' : '$4.99'}</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span className='summary-tax-price'>+ ${(cartTotal * 0.08).toFixed(2)}</span>
            </div>
            <hr className="summary-divider" />
            <div className="summary-row total">
              <span>Total</span>
              <span>${(cartTotal + (cartTotal < 50 ? 4.99 : 0) + cartTotal * 0.08).toFixed(2)}</span>
            </div>
            <button className="checkout-btn" id="checkout-btn">
              Checkout
            </button>
            <div className="payment-methods">
               <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
               <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" />
               <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="Paypal" />
               <img src="https://img.icons8.com/color/48/000000/google-pay.png" alt="Google Pay" />
               <img src="https://img.icons8.com/color/48/000000/apple-pay.png" alt="Apple Pay" />
            </div>
          </div>
        </div>
      </div>

      <section className="saved-for-later-section">
        <h3>Saved for later</h3>
        <div className="saved-products-grid">
          {savedForLaterProducts.map((product) => (
            <div key={product.id} className="saved-product-card">
              <div className="saved-product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="saved-product-info">
                <p className="saved-product-price">${product.price.toFixed(2)}</p>
                <p className="saved-product-name">{product.name}</p>
                <button className="move-to-cart-btn">
                  <ShoppingCart size={16} /> Move to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cart-cta-banner">
        <div className="banner-content">
          <h3>Super Discount on your first purchase</h3>
          <p>Free delivery on orders over $50 or use our special coupon code.</p>
        </div>
        <button className="shop-now-banner-btn">Shop now</button>
=======

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
>>>>>>> 127d30669e86865626dbd061bf8095ae4e34e2c9
      </section>
    </div>
  );
}
