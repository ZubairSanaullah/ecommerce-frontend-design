import { Link } from 'react-router-dom';
import type { Product } from '../types';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {


  return (
    <div className="product-card" id={`product-card-${product.id}`}>
      <Link to={`/product/${product.id}`} className="product-card-image-link">
        <div className="product-card-image-wrap">
          <img src={product.image} alt={product.name} className="product-card-image" loading="lazy" />
        </div>
      </Link>

      <div className="product-card-body">
        <span className="product-card-category">{product.category}</span>
        <Link to={`/product/${product.id}`} className="product-card-name">
          {product.name}
        </Link>
        <p className="product-card-description">{product.description}</p>

        <div className="product-card-footer">
          <div className="product-card-prices">
            <span className="product-card-price">${product.price.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
