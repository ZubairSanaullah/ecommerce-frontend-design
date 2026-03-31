import { Link } from 'react-router-dom';
import { ShoppingCart, User, MessageSquare, Package, Menu, X, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const { cartCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shipToOpen, setShipToOpen] = useState(false);

  return (
    <nav className="navbar" id="main-navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" id="navbar-logo">
          <span className="logo-accent">ZUBAYR</span>STORE
        </Link>

        <div className="search-bar">
          <input type="text" placeholder="Search" className="search-input" />
          <div className="search-divider"></div>
          <select className="search-category" aria-label="Category">
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="accessories">Accessories</option>
          </select>
          <button className="search-btn" aria-label="Search">
            Search
          </button>
        </div>

        <div className="navbar-actions">
          <Link to="/profile" className="navbar-action-item" id="profile-btn" aria-label="Profile">
            <User size={20} />
            <span className="navbar-action-label">Profile</span>
          </Link>
          <Link to="/messages" className="navbar-action-item" id="message-btn" aria-label="Messages">
            <MessageSquare size={20} />
            <span className="navbar-action-label">Message</span>
          </Link>
          <Link to="/orders" className="navbar-action-item" id="orders-btn" aria-label="Orders">
            <Package size={20} />
            <span className="navbar-action-label">Order</span>
          </Link>
          <Link to="/cart" className="navbar-action-item cart-btn" id="cart-btn" aria-label="Cart">
            <ShoppingCart size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            <span className="navbar-action-label">My Cart</span>
          </Link>
          <button
            className="navbar-icon-btn mobile-menu-btn"
            id="mobile-menu-btn"
            aria-label="Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Secondary Navbar */}
      <div className="sub-navbar">
        <div className="sub-navbar-inner">
          <div className="sub-nav-left">
            <button className="all-categories-btn">
              <Menu size={18} />
              All category
            </button>
            <div className="sub-nav-links desktop-only">
              <Link to="/offers">Hot offers</Link>
              <Link to="/gifts">Gift boxes</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/menu-item">Menu item</Link>
              <div className="sub-nav-dropdown">
                <button className="sub-nav-dropdown-btn">
                  Help <ChevronDown size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className="sub-nav-right">
            <div className="sub-nav-dropdown">
              <button className="sub-nav-dropdown-btn">
                English, USD <ChevronDown size={14} />
              </button>
            </div>
            <div className="sub-nav-dropdown" onMouseLeave={() => setShipToOpen(false)}>
              <button 
                className="sub-nav-dropdown-btn"
                onClick={() => setShipToOpen(!shipToOpen)}
                onMouseEnter={() => setShipToOpen(true)}
              >
                Ship to <img src="/src/assets/Layout1/Image/flags/DE@2x.png" alt="Germany" className="flag-icon" /> <ChevronDown size={14} />
              </button>
              
              {shipToOpen && (
                <div className="dropdown-menu">
                  <button className="dropdown-item">
                    <img src="/src/assets/Layout1/Image/flags/US@2x.png" alt="USA" className="flag-icon" /> USA
                  </button>
                  <button className="dropdown-item">
                    <img src="/src/assets/Layout1/Image/flags/GB@2x.png" alt="UK" className="flag-icon" /> UK
                  </button>
                  <button className="dropdown-item">
                    <img src="/src/assets/Layout1/Image/flags/FR@2x.png" alt="France" className="flag-icon" /> France
                  </button>
                  <button className="dropdown-item">
                    <img src="/src/assets/Layout1/Image/flags/IT@2x.png" alt="Italy" className="flag-icon" /> Italy
                  </button>
                  <button className="dropdown-item">
                    <img src="/src/assets/Layout1/Image/flags/CN@2x.png" alt="China" className="flag-icon" /> China
                  </button>
                  <button className="dropdown-item">
                    <img src="/src/assets/Layout1/Image/flags/AE@2x.png" alt="UAE" className="flag-icon" /> UAE
                  </button>
                  <button className="dropdown-item">
                    <img src="/src/assets/Layout1/Image/flags/RU@2x.png" alt="Russia" className="flag-icon" /> Russia
                  </button>
                  <button className="dropdown-item">
                    <img src="/src/assets/Layout1/Image/flags/DK@2x.png" alt="Denmark" className="flag-icon" /> Denmark
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
