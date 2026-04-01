import { useState } from 'react';

import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Categories.css';

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="categories-page" id="categories-page">
       <div className="categories-header">
         <h1>Shop by Category</h1>
         <p>Discover our wide range of products tailored for your needs.</p>
       </div>
       
       <div className="categories-layout">
          {/* Sidebar */}
          <aside className="categories-sidebar">
             <h3>Categories</h3>
             <ul className="categories-list-ui">
               {categories.map(cat => (
                 <li key={cat}>
                   <button 
                     className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                     onClick={() => setActiveCategory(cat)}
                   >
                     {cat}
                   </button>
                 </li>
               ))}
             </ul>
          </aside>
          
          {/* Product Grid */}
          <div className="categories-main">
             <div className="categories-results-bar">
                <span>Showing {filteredProducts.length} results for <strong>{activeCategory}</strong></span>
                <select className="sort-dropdown">
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
             </div>
             
             {filteredProducts.length > 0 ? (
               <div className="product-grid">
                 {filteredProducts.map(product => (
                   <ProductCard key={product.id} product={product} />
                 ))}
               </div>
             ) : (
               <div className="no-products-found">
                 <h3>No products found in this category.</h3>
               </div>
             )}
          </div>
       </div>
    </div>
  );
}
