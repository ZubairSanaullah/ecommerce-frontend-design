import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Minus, Plus, Truck, Shield, RotateCcw, MessageCircle, Heart, Share2, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product?.image || '');
  const [selectedSize, setSelectedSize] = useState(product?.size || '');
  const [selectedColor, setSelectedColor] = useState(product?.color || '');

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <Link to="/products" className="btn btn-primary">Back to Shop</Link>
      </div>
    );
  }

  const images = product.galleryImages || [product.image];

  const handleAddToCart = () => {
    // Add product with specific variations
    const productToAdd = { 
      ...product, 
      selectedSize,
      selectedColor
    };
    for (let i = 0; i < quantity; i++) {
      addToCart(productToAdd);
    }
    navigate('/cart');
  };

  return (
    <div className="alibaba-product-detail" id="product-detail-page">
      <div className="breadcrumb">
        <Link to="/"><ArrowLeft size={14} /> Home</Link> &gt; 
        <Link to="/products"> {product.category} </Link> &gt; 
        <span>{product.name}</span>
      </div>

      <div className="alibaba-layout">
        
        {/* Left: Gallery */}
        <div className="alibaba-gallery">
          <div className="main-image-wrapper">
             <img src={selectedImage || product.image} alt={product.name} className="main-image" />
             {product.badge && <span className="product-badge">{product.badge}</span>}
          </div>
          <div className="thumbnail-list">
             {images.map((img, idx) => (
               <img 
                 key={idx} 
                 src={img} 
                 alt={`thumb ${idx}`} 
                 className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
                 onClick={() => setSelectedImage(img)}
               />
             ))}
          </div>
        </div>

        {/* Center: Details & Actions */}
        <div className="alibaba-info">
          
          <h1 className="product-title">{product.name}</h1>
          
          <div className="product-stats">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill={i < Math.round(product.rating || 0) ? '#ff9900' : '#e0e0e0'}
                  stroke="none"
                />
              ))}
            </div>
            <span className="rating-score">{product.rating}</span>
            <span className="reviews-count">{product.reviews?.toLocaleString()} Reviews</span>
            <span className="orders-count">3k+ Orders</span>
          </div>

          <div className="price-block">
             <div className="current-price">${product.price.toFixed(2)}</div>
             {product.originalPrice && (
               <div className="original-price">
                 <span>${product.originalPrice.toFixed(2)}</span>
                 <span className="discount-badge">Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%</span>
               </div>
             )}
             <p className="price-note">1 Piece (Min. Order)</p>
          </div>

          <div className="variations-section">
            {product.color && (
              <div className="variation-item">
                <span className="variation-label">Color:</span>
                <div className="variation-options">
                   <button 
                     className={`var-btn ${selectedColor === product.color ? 'active' : ''}`}
                     onClick={() => setSelectedColor(product.color || '')}
                   >
                     {product.color}
                   </button>
                   {/* Mock distinct color to show selector */}
                   <button 
                     className={`var-btn ${selectedColor === 'Black' ? 'active' : ''}`}
                     onClick={() => setSelectedColor('Black')}
                   >
                     Black
                   </button>
                </div>
              </div>
            )}

            {product.size && (
              <div className="variation-item">
                <span className="variation-label">Size:</span>
                <div className="variation-options">
                   {['Small', 'Medium', 'Large', 'XL'].map(sz => (
                      <button 
                        key={sz}
                        className={`var-btn ${selectedSize === sz ? 'active' : ''}`}
                        onClick={() => setSelectedSize(sz)}
                      >
                        {sz}
                      </button>
                   ))}
                </div>
              </div>
            )}
            
            {(product.material || product.description) && (
              <div className="variation-item align-top">
                <span className="variation-label">Details:</span>
                <div className="product-description-text">
                  {product.material && <p><strong>Material:</strong> {product.material}</p>}
                  <p>{product.description}</p>
                </div>
              </div>
            )}
          </div>

          <div className="purchase-actions-section">
             <div className="quantity-row">
                <span className="variation-label">Quantity:</span>
                <div className="quantity-control-styled">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease">
                    <Minus size={14} />
                  </button>
                  <input type="number" readOnly value={quantity} />
                  <button onClick={() => setQuantity(quantity + 1)} aria-label="Increase">
                    <Plus size={14} />
                  </button>
                </div>
             </div>

             <div className="action-buttons-styled">
                <button className="btn alibaba-buy-btn" onClick={handleAddToCart}>Start Order</button>
                <button className="btn alibaba-cart-btn" onClick={handleAddToCart}>
                  <ShoppingCart size={18} /> Add to Cart
                </button>
             </div>
             
             <div className="perk-list-styled">
               <div className="perk-item"><Truck size={16} color="#0066cc"/> Ships to Global</div>
               <div className="perk-item"><Shield size={16} color="#0066cc"/> Trade Assurance</div>
               <div className="perk-item"><RotateCcw size={16} color="#0066cc"/> Refund Policy</div>
             </div>
          </div>

        </div>

        {/* Right: Seller Sidebar */}
        <div className="alibaba-sidebar">
           <div className="supplier-card">
              <div className="supplier-header">
                 <div className="supplier-logo">
                    {product.seller ? product.seller.substring(0,1) : 'Z'}
                 </div>
                 <div className="supplier-name">
                    <h4>{product.seller || 'Zubayr Official Store'}</h4>
                    <span className="supplier-type border-badge">Verified Supplier</span>
                 </div>
              </div>
              <div className="supplier-stats">
                 <div className="stat-col">
                    <span className="stat-value">4.9/5</span>
                    <span className="stat-label">Store Rating</span>
                 </div>
                 <div className="stat-col">
                    <span className="stat-value">98%</span>
                    <span className="stat-label">On-time delivery</span>
                 </div>
                 <div className="stat-col">
                    <span className="stat-value">120k+</span>
                    <span className="stat-label">Transactions</span>
                 </div>
              </div>
              <div className="supplier-actions">
                 <button className="btn btn-outline-blue w-full">
                   <MessageCircle size={16} /> Contact Supplier
                 </button>
                 <button className="btn btn-outline-blue w-full">
                   <MessageSquare size={16} /> Chat Now
                 </button>
              </div>
           </div>

           <div className="share-save-card">
              <button className="btn-icon-text"><Heart size={16} /> Save</button>
              <button className="btn-icon-text"><Share2 size={16} /> Share</button>
           </div>
        </div>

      </div>
    </div>
  );
}
