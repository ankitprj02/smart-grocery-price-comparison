import React from 'react';

const ProductCard = ({ product, onAddToList, onOpenAI }) => {
  // Find the lowest price
  const bestPrice = Math.min(...product.prices.map(p => p.price));
  const bestStore = product.prices.find(p => p.price === bestPrice).store;

  return (
    <div className="card product-card">
      <div className="product-image-container">
        {product.image ? (
          <img src={product.image} alt={product.name} className="product-image" />
        ) : (
          <div className="product-image-placeholder">No Image</div>
        )}
        <span className="category-badge">{product.category}</span>
        <button className="ai-btn" onClick={() => onOpenAI(product)} title="Get AI Insights">
          ✨ AI Info
        </button>
        <button
          className="add-btn"
          onClick={() => onAddToList(product)}
          aria-label="Add to list"
        >
          +
        </button>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="price-list">
          {product.prices.map((storePrice, index) => {
            const isBestPrice = storePrice.price === bestPrice;
            return (
              <div
                key={index}
                className={`price-item ${isBestPrice ? 'best-price' : ''}`}
              >
                <span className="store-name">{storePrice.store}</span>
                <div className="price-container">
                  <span className="price">₹{storePrice.price}</span>
                  {isBestPrice && <span className="best-badge">BEST</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        .product-card {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid transparent;
          overflow: hidden;
          background: var(--color-surface);
        }
        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
          border-color: var(--color-primary);
        }
        .product-image-container {
          height: 200px;
          background-color: #f3f4f6;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          overflow: hidden;
          position: relative;
          color: var(--color-text-muted);
          width: 100%;
        }
        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
          display: block;
        }
        .product-card:hover .product-image {
          transform: scale(1.05);
        }
        .category-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background-color: rgba(255, 255, 255, 0.9);
          padding: 4px 8px;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-text-muted);
          z-index: 1;
        }
        .ai-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: rgba(255, 255, 255, 0.95);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-secondary);
          z-index: 1;
          border: 1px solid var(--color-secondary);
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .ai-btn:hover {
          background-color: var(--color-secondary);
          color: white;
          transform: scale(1.05);
        }
        .add-btn {
          position: absolute;
          bottom: var(--spacing-sm);
          right: var(--spacing-sm);
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          background-color: var(--color-primary);
          color: white;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          box-shadow: var(--shadow-md);
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
        }
        .product-card:hover .add-btn {
          opacity: 1;
          transform: translateY(0);
        }
        .add-btn:hover {
          background-color: var(--color-primary-hover);
          transform: scale(1.1) !important;
        }
        .product-info h3 {
          margin-bottom: var(--spacing-md);
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.4;
        }
        .price-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .price-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--spacing-sm);
          border-radius: var(--radius-md);
          font-size: 0.95rem;
          background-color: #f9fafb;
          border: 1px solid transparent;
          transition: all 0.2s;
        }
        .price-item:hover {
          background-color: #f3f4f6;
        }
        .best-price {
          background-color: #ecfdf5;
          color: #065f46;
          border-color: #10b981;
          box-shadow: 0 0 0 1px #10b981;
        }
        .store-name {
          font-weight: 500;
        }
        .price-container {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
        }
        .price {
          font-weight: 600;
        }
        .best-badge {
          background-color: #10b981;
          color: white;
          font-size: 0.7rem;
          padding: 0.1rem 0.4rem;
          border-radius: var(--radius-sm);
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        @media (max-width: 640px) {
          .product-card {
            flex-direction: row;
            align-items: center;
          }
          .product-image {
            width: 100px;
            height: 100px;
            flex-shrink: 0;
          }
          .add-btn {
            opacity: 1;
            transform: translateY(0);
            width: 2rem;
            height: 2rem;
            font-size: 1.2rem;
            bottom: 4px;
            right: 4px;
          }
          .product-info {
            flex: 1;
            padding: var(--spacing-sm);
          }
          .product-info h3 {
            font-size: 1rem;
            margin-bottom: var(--spacing-xs);
          }
          .price-list {
            gap: 2px;
          }
          .price-item {
            padding: 2px 4px;
            font-size: 0.8rem;
          }
          .category-badge {
            top: 4px;
            right: 4px;
            padding: 2px 6px;
            font-size: 0.6rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
