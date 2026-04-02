import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Minus, Plus, Truck, Shield, RotateCcw, Heart, Share2, MessageSquare, Search, Send, ExternalLink, Globe, CheckCircle2, ChevronRight } from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState('Overview');

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

  // Mock pricing tiers if not present
  const pricingTiers = product.pricingTiers || [
    { quantity: '1-10 pcs', price: product.price },
    { quantity: '11-100 pcs', price: product.price * 0.9 },
  ];

  // You may like products logic
  const youMayLikeProducts = [...products]
    .filter(p => p.id !== product.id)
    .sort(() => 0.4 - Math.random())
    .slice(0, 5);

  // Related products logic
  const relatedProducts = [...products]
    .filter(p => p.id !== product.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  return (
    <div className="product-detail-container" id="product-detail-page">

      {/* Breadcrumbs */}
      <div className="breadcrumb-wrapper">
        <div className="breadcrumb-content">
          <Link to="/">Home</Link> <ChevronRight size={14} />
          <Link to="/products">{product.category}</Link> <ChevronRight size={14} />
          <Link to={`/products?sub=${product.subcategory || 'General'}`}>{product.subcategory || 'General'}</Link> <ChevronRight size={14} />
          <span className="current-crumb">{product.name}</span>
        </div>
      </div>

      <div className="product-main-layout">
        {/* Left: Gallery */}
        <div className="gallery-section">
          <div className="main-image-container">
            <img src={selectedImage || product.image} alt={product.name} className="main-product-image" />
            {product.badge && <span className="p-badge">{product.badge}</span>}
          </div>
          <div className="thumb-gallery">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`thumb-wrapper ${selectedImage === img ? 'active' : ''}`}
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} alt={`thumb ${idx}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Center: Details */}
        <div className="product-info-section">
          <div className="stock-status">
            <span className="status-label in-stock">✓ In Stock</span>
          </div>

          <h1 className="p-title">{product.name}</h1>

          <div className="p-feedback-row">
            <div className="p-stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < Math.round(product.rating || 0) ? '#ff9900' : '#e0e0e0'}
                  stroke="none"
                />
              ))}
              <span className="p-rating-val">{product.rating}</span>
            </div>
            <span className="p-review-count">● ({product.reviews} Reviews)</span>
            <span className="p-sold-count">● 5000+ Sold</span>
          </div>

          <div className="tiered-pricing-box">
            <div className="tier-header">
              {pricingTiers.map((tier, i) => (
                <div key={i} className="tier-col">
                  <span className="tier-price">${tier.price.toFixed(2)}</span>
                  <span className="tier-qty">{tier.quantity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="specs-container">
            <div className='spec-row'>
              <span className="spec-label">Price:</span>
              <span className="spec-value">Negotiable</span>
            </div>
            <hr className='p-divider' />
            <div className="spec-row">
              <span className="spec-label">Type:</span>
              <span className="spec-value">Natural, Organic</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Material:</span>
              <span className="spec-value">{product.material || 'Premium Fabric'}</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Design:</span>
              <span className="spec-value">Modern Minimalist</span>
            </div>
          </div>

          <hr className="p-divider" />

          <div className="services-container">
            <div className="spec-row">
              <span className="spec-label">Customization</span>
              <span className="spec-value">Customized logo (Min. Order: 100 Pieces)</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Protection</span>
              <span className="spec-value">Trade Assurance</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Warranty</span>
              <span className="spec-value">2 Years Manufacturer Warranty</span>
            </div>
          </div>
        </div>

        {/* Right: Supplier Side */}
        <div className="supplier-side-section">
          <div className="s-card">
            <div className="s-header">
              <div className="s-logo-box">
                {product.seller ? product.seller.charAt(0) : 'S'}
              </div>
              <div className="s-name-box">
                <h3>{product.seller || 'Global Traders Inc.'}</h3>
                <div className="s-verified-badge">
                  <CheckCircle2 size={14} /> Verified Seller
                </div>
              </div>
            </div>
            <hr className="s-divider-inner" />


            <div className="s-details">
              <div className="s-detail-item">
                <Globe size={16} />
                <span>Country: {product.country === 'CN' ? '🇨🇳 China' : '🇺🇸 USA'}</span>
              </div>
              <div className="s-detail-item">
                <CheckCircle2 size={16} />
                <span>Verified Seller</span>
              </div>
              <div className="s-detail-item">
                <Truck size={16} />
                <span>Worldwide Shipping</span>
              </div>

            </div>
            <div className="s-actions">
              <button className="send-inquiry-btn">
                <Send size={16} /> Send Inquiry
              </button>
              <button className="seller-profile-btn">
                Seller's Profile
              </button>
            </div>
          </div>
          <div className="s-social-actions">
            <button className="s-icon-btn"><Heart size={16} /> Save for later</button>
          </div>
        </div>
      </div>

      {/* Product Content Section (80/20 Layout) */}
      <div className="product-content-layout">
        {/* Left: Tabs & Description (80%) */}
        <div className="product-details-main">
          <div className="details-tabs">
            <button className={`tab-btn ${activeTab === 'Overview' || activeTab === 'Description' ? 'active' : ''}`} onClick={() => setActiveTab('Description')}>Description</button>
            <button className={`tab-btn ${activeTab === 'Reviews' ? 'active' : ''}`} onClick={() => setActiveTab('Reviews')}>Reviews</button>
            <button className={`tab-btn ${activeTab === 'Shipping' ? 'active' : ''}`} onClick={() => setActiveTab('Shipping')}>Shipping</button>
            <button className={`tab-btn ${activeTab === 'About Seller' ? 'active' : ''}`} onClick={() => setActiveTab('About Seller')}>About Seller</button>
          </div>

          <div className="tab-content">
            <div className="description-rich-text">
              <p>
                Experience premium quality with our latest {product.name}. Designed for the modern consumer who values both style and durability, this product offers an exceptional balance of performance and aesthetics. Whether you're looking for professional utility or everyday comfort, this piece is crafted to exceed your expectations.
              </p>

              <div className="specs-chart-box">
                <table className="specs-table">
                  <tbody>
                    <tr>
                      <td className="spec-th">Model number:</td>
                      <td className="spec-td">#MD-{(product.id * 1234).toString().substring(0, 4)}</td>
                    </tr>
                    <tr>
                      <td className="spec-th">Style:</td>
                      <td className="spec-td">Modern Classic</td>
                    </tr>
                    <tr>
                      <td className="spec-th">Certification:</td>
                      <td className="spec-td">ISO 9001 / CE Certified</td>
                    </tr>
                    <tr>
                      <td className="spec-th">Special feature:</td>
                      <td className="spec-td">Durable, Water-resistant, Eco-friendly</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="features-bullets">
                <ul className="features-list">
                  <li>Premium grade materials used in every component</li>
                  <li>Ergonomically designed for maximum user comfort</li>
                  <li>Smart integration with modern accessories</li>
                  <li>Low maintenance and high durability for long-term use</li>
                  <li>Sustainable manufacturing processes and materials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right: You May Like (20%) */}
        <div className="product-sidebar-recommendations">
          <h3 className="sidebar-title">You may like</h3>
          <div className="sidebar-grid">
            {youMayLikeProducts.map((yp) => (
              <Link to={`/product/${yp.id}`} key={yp.id} className="sidebar-product-card">
                <div className="sidebar-image">
                  <img src={yp.image} alt={yp.name} />
                </div>
                <div className="sidebar-info">
                  <p className="sidebar-p-name">{yp.name}</p>
                  <p className="sidebar-p-price">${yp.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <section className="related-products-section">
        <h2 className="related-title">Related products</h2>
        <div className="related-products-grid">
          {relatedProducts.map((relProduct) => (
            <Link to={`/product/${relProduct.id}`} key={relProduct.id} className="related-product-card">
              <div className="related-image-box">
                <img src={relProduct.image} alt={relProduct.name} />
              </div>
              <div className="related-info">
                <p className="related-p-name">{relProduct.name}</p>
                <p className="related-p-price">${relProduct.price.toFixed(2)} - ${relProduct.originalPrice?.toFixed(2) || (relProduct.price * 1.2).toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Super Discount Banner */}
      <section className="cart-cta-banner">
        <div className="banner-content">
          <h3>Super Discount on your first purchase</h3>
          <p>Free delivery on orders over $50 or use our special coupon code.</p>
        </div>
        <button className="shop-now-banner-btn">Shop now</button>
      </section>
    </div>
  );
}
