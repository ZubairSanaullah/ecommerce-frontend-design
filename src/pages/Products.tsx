import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import './Products.css';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'All';
  const [sortBy, setSortBy] = useState('featured');

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  const sorted = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc': return a.price - b.price;
      case 'price-desc': return b.price - a.price;
      // case 'rating': return b.rating - a.rating;
      default: return 0;
    }
  });

  return (
    <div className="products-page" id="products-page">
      <div className="products-header">
        <div>
          <h1>Shop All Products</h1>
          <p className="products-count">{sorted.length} products found</p>
        </div>
      </div>

      <div className="products-toolbar">
        <div className="category-tabs" id="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => {
                if (cat === 'All') {
                  setSearchParams({});
                } else {
                  setSearchParams({ category: cat });
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="sort-wrap">
          <SlidersHorizontal size={16} />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
            id="sort-select"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      <div className="product-grid">
        {sorted.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {sorted.length === 0 && (
        <div className="no-products">
          <p>No products found in this category.</p>
        </div>
      )}
    </div>
  );
}
