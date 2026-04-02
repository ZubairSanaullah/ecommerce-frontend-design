import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  ChevronUp, 
  LayoutGrid, 
  List, 
  Star, 
  ChevronRight, 
} from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import './Categories.css';

export default function Categories() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeCategory] = useState('Mobile accessory');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  
  // Expanded/Collapsed state for filter sections
  const [expanded, setExpanded] = useState({
    category: true,
    brands: true,
    features: true,
    price: true,
    condition: true,
    ratings: true
  });

  const toggleSection = (section: keyof typeof expanded) => {
    setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const filteredProducts = products.filter(p => {
    if (viewMode === 'grid') {
      return p.category === 'Smartphone';
    }
    return activeCategory === 'All' || p.category === activeCategory || activeCategory === 'Mobile accessory';
  });

  return (
    <div className="categories-page-v2" id="categories-page">
      {/* Breadcrumbs */}
      <div className="breadcrumb-nav">
        <div className="breadcrumb-container">
          <Link to="/">Home</Link> <ChevronRight size={14} />
          <span>Category</span> <ChevronRight size={14} />
          <span className="current">Subcategory</span>
        </div>
      </div>

      <div className="categories-content-wrapper">
        {/* Sidebar (30%) */}
        <aside className="filters-sidebar">
          
          {/* Category List */}

          <div className="filter-divider"></div>
          <div className="filter-section">
            <div className="filter-header" onClick={() => toggleSection('category')}>
              <h3>Category</h3>
              {expanded.category ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            {expanded.category && (
              <ul className="filter-list">
                <li className="active">Mobile accessory</li>
                <li>Electronics</li>
                <li>Smartphone</li>
                <li>Modern tech</li>
                <li className="see-all">See all</li>
              </ul>
            )}
          </div>

          <div className="filter-divider"></div>

          {/* Brands */}
          <div className="filter-section">
            <div className="filter-header" onClick={() => toggleSection('brands')}>
              <h3>Brands</h3>
              {expanded.brands ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            {expanded.brands && (
              <div className="filter-options">
                {['Samsung', 'Apple', 'Huawei', 'Poco', 'Lenovo'].map(brand => (
                  <label key={brand} className="checkbox-item">
                    <input type="checkbox" />
                    <span>{brand}</span>
                  </label>
                ))}
                <span className="see-all">See all</span>
              </div>
            )}
          </div>

          <div className="filter-divider"></div>

          {/* Features */}
          <div className="filter-section">
            <div className="filter-header" onClick={() => toggleSection('features')}>
              <h3>Features</h3>
              {expanded.features ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            {expanded.features && (
              <div className="filter-options">
                {['Metallic', 'Plastic cover', '8GB RAM', 'Super power', 'Large memory'].map(feat => (
                  <label key={feat} className="checkbox-item">
                    <input type="checkbox" />
                    <span>{feat}</span>
                  </label>
                ))}
                <span className="see-all">See all</span>
              </div>
            )}
          </div>

          <div className="filter-divider"></div>

          {/* Price Range */}
          <div className="filter-section">
            <div className="filter-header" onClick={() => toggleSection('price')}>
              <h3>Price range</h3>
              {expanded.price ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            {expanded.price && (
              <div className="price-filter-content">
                <div className="range-slider-mock">
                  <div className="slider-track"></div>
                  <div className="slider-thumb-ui left-thumb"></div>
                  <div className="slider-thumb-ui right-thumb"></div>
                </div>
                <div className="price-inputs">
                  <div className="input-group">
                    <label>Min</label>
                    <input type="number" placeholder="0" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
                  </div>
                  <div className="input-group">
                    <label>Max</label>
                    <input type="number" placeholder="999999" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
                  </div>
                </div>
                <button className="apply-btn">Apply</button>
              </div>
            )}
          </div>

          <div className="filter-divider"></div>

          {/* Condition */}
          <div className="filter-section">
            <div className="filter-header" onClick={() => toggleSection('condition')}>
              <h3>Condition</h3>
              {expanded.condition ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            {expanded.condition && (
              <div className="filter-options">
                {['Any', 'Refurbished', 'Brand new', 'Old items'].map((cond, idx) => (
                  <label key={cond} className="radio-item">
                    <input type="radio" name="condition" defaultChecked={idx === 0} />
                    <span className="radio-label">{cond}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="filter-divider"></div>

          {/* Ratings */}
          <div className="filter-section">
            <div className="filter-header" onClick={() => toggleSection('ratings')}>
              <h3>Ratings</h3>
              {expanded.ratings ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            {expanded.ratings && (
              <div className="filter-options">
                {[5, 4, 3, 2].map(star => (
                   <label key={star} className="checkbox-item rating-checkbox">
                     <input type="checkbox" />
                     <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill={i < star ? "#ff9017" : "none"} stroke={i < star ? "#ff9017" : "#BDC4CD"} />
                        ))}
                     </div>
                   </label>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* Main Content (70%) */}
        <main className="results-main">
          
          {/* Results Header */}
          <div className="results-header-bar">
             <div className="results-info">
                <span className="item-count">12,911 items in <strong>Mobile accessory</strong></span>
             </div>
             
             <div className="results-controls">
                <label className="verified-checkbox">
                   <input type="checkbox"/>
                   <span>Verified only</span>
                </label>
                <select className="featured-dropdown">
                   <option>Featured</option>
                   <option>Newest</option>
                   <option>Price: Low to High</option>
                </select>
                <div className="view-toggles">
                   <button 
                     className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                     onClick={() => setViewMode('grid')}
                   >
                     <LayoutGrid size={20} />
                   </button>
                   <button 
                     className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                     onClick={() => setViewMode('list')}
                   >
                     <List size={20} />
                   </button>
                </div>
             </div>
          </div>

          {/* Active Filters / Chips */}
          {viewMode === 'grid' && (
            <div className="active-filters-chips">
               <span className="filter-chip">Samsung <span className="close">×</span></span>
               <span className="filter-chip">Apple <span className="close">×</span></span>
               <span className="filter-chip">Poco <span className="close">×</span></span>
               <span className="filter-chip">Metallic <span className="close">×</span></span>
               <span className="filter-chip">4 star <span className="close">×</span></span>
               <span className="filter-chip">3 star <span className="close">×</span></span>
               <span className="clear-all">Clear all filters</span>
            </div>
          )}

          {/* Product Listing */}
          <div className={`products-container ${viewMode}-view`}>
             {viewMode === 'grid' ? (
                <div className="product-grid-view">
                   {filteredProducts.map(p => <ProductCard key={p.id} product={p} variant="categories" />)}
                </div>
             ) : (
                <div className="product-list-view">
                   {filteredProducts.map(p => (
                      <div key={p.id} className="list-item-card">
                         <div className="list-item-image">
                            <img src={p.image} alt={p.name} />
                         </div>
                         <div className="list-item-details">
                            <Link to={`/product/${p.id}`} className="p-name">{p.name}</Link>
                            <div className="p-price-row">
                               <span className="curr-price">${p.price.toFixed(2)}</span>
                               <span className="orig-price">${(p.price * 1.25).toFixed(2)}</span>
                            </div>
                            <div className="p-rating-row">
                               <div className="stars">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} fill={i < Math.floor(p.rating) ? "#ff9017" : "none"} stroke={i < Math.floor(p.rating) ? "#ff9017" : "#BDC4CD"} />
                                  ))}
                                  <span className="rating-val">{p.rating}</span>
                               </div>
                               <span className="orders-val">● 154 orders</span>
                               <span className="shipping-val">● Free Shipping</span>
                            </div>
                            <p className="p-description">
                               {p.description.substring(0, 150)}...
                            </p>
                            <Link to={`/product/${p.id}`} className="view-detail-link">View details</Link>
                         </div>
                         <button className="favorite-btn"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z" stroke="#0D6EFD" strokeWidth="2"/></svg></button>
                      </div>
                   ))}
                </div>
             )}
          </div>

          {/* Pagination Footer */}
          <div className="results-pagination-footer">
             <div className="page-options">
                <select className="show-count-dropdown">
                   <option>Show 10</option>
                   <option>Show 20</option>
                   <option>Show 50</option>
                </select>
             </div>
             <div className="pagination-controls">
                <button className="page-nav">&lt;</button>
                <div className="page-numbers">
                  <button className="page-num active">1</button>
                  <button className="page-num">2</button>
                  <button className="page-num">3</button>
                </div>
                <button className="page-nav">&gt;</button>
             </div>
          </div>
        </main>
      </div>

      {/* Footer Newsletter */}
      <Newsletter />
    </div>
  );
}
