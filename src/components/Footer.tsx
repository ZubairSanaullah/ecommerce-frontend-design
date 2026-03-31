import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa6';
import './Footer.css';

export default function Footer() {
  const [shipToOpen, setShipToOpen] = useState(false);
  return (
    <footer className="footer" id="main-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-accent">ZUBAYR</span>STORE
          </Link>
          <p className="footer-tagline">Premium products, curated for you.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><FaFacebookF size={18} /></a>
            <a href="#" aria-label="Twitter/X"><FaXTwitter size={18} /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn size={18} /></a>
            <a href="#" aria-label="Instagram"><FaInstagram size={18} /></a>
            <a href="#" aria-label="YouTube"><FaYoutube size={18} /></a>
          </div>
        </div>

        <div className="footer-columns">
          {/* <div className="footer-col">
            <h4>Shop</h4>
            <Link to="/products">All Products</Link>
            <Link to="/products?category=Electronics">Electronics</Link>
            <Link to="/products?category=Clothing">Clothing</Link>
            <Link to="/products?category=Accessories">Accessories</Link>
          </div> */}
          <div className="footer-col">
            <h4>About</h4>
            <a href="#">About Us</a>
            <a href="#">Find a Store</a>
            <a href="#">Categories</a>
            <a href="#">Blogs</a>
          </div>
          <div className="footer-col">
            <h4>Partnership</h4>
            <a href="#">About Us</a>
            <a href="#">Sell on Zubayr</a>
            <a href="#">Categories</a>
            <a href="#">Blogs</a>
          </div>
          <div className="footer-col">
            <h4>Information</h4>
            <a href="#">Help Center</a>
            <a href="#">Money Refund</a>
            <a href="#">Shipping</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="footer-col">
            <h4>For Users</h4>
            <a href="#">Login</a>
            <a href="#">Register</a>
            <a href="#">Settings</a>
            <a href="#">My Orders</a>
          </div>
          <div className='get-app'>
            <h4>Get the App</h4>
            <img src="/src/assets/Layout/Misc/market-button.png" alt="App Store" />
            <img src="/src/assets/Layout/Misc/Group.png" alt="Google Play" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ZUBAYRSTORE. All rights reserved.</p>
        <div className="footer-dropdown" onMouseLeave={() => setShipToOpen(false)}>
          <button 
            className="footer-dropdown-btn"
            onClick={() => setShipToOpen(!shipToOpen)}
            onMouseEnter={() => setShipToOpen(true)}
          >
            <img src="/src/assets/Layout1/Image/flags/US@2x.png" alt="US" className="footer-flag-icon" />
            <span>English</span> 
            <ChevronDown size={14} />
          </button>
          
          {shipToOpen && (
            <div className="footer-dropdown-menu">
              <button className="footer-dropdown-item">
                <img src="/src/assets/Layout1/Image/flags/US@2x.png" alt="USA" className="footer-flag-icon" /> USA
              </button>
              <button className="footer-dropdown-item">
                <img src="/src/assets/Layout1/Image/flags/GB@2x.png" alt="UK" className="footer-flag-icon" /> UK
              </button>
              <button className="footer-dropdown-item">
                <img src="/src/assets/Layout1/Image/flags/FR@2x.png" alt="France" className="footer-flag-icon" /> France
              </button>
              <button className="footer-dropdown-item">
                <img src="/src/assets/Layout1/Image/flags/IT@2x.png" alt="Italy" className="footer-flag-icon" /> Italy
              </button>
              <button className="footer-dropdown-item">
                <img src="/src/assets/Layout1/Image/flags/CN@2x.png" alt="China" className="footer-flag-icon" /> China
              </button>
              <button className="footer-dropdown-item">
                <img src="/src/assets/Layout1/Image/flags/AE@2x.png" alt="UAE" className="footer-flag-icon" /> UAE
              </button>
              <button className="footer-dropdown-item">
                <img src="/src/assets/Layout1/Image/flags/RU@2x.png" alt="Russia" className="footer-flag-icon" /> Russia
              </button>
              <button className="footer-dropdown-item">
                <img src="/src/assets/Layout1/Image/flags/DK@2x.png" alt="Denmark" className="footer-flag-icon" /> Denmark
              </button>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
