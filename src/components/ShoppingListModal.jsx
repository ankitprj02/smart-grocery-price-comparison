import React from 'react';

const ShoppingListModal = ({ isOpen, onClose, items, onRemove, onUpdateQuantity }) => {
  if (!isOpen) return null;

  const totalCost = items.reduce((sum, item) => {
    // Find the best price for the item
    const bestPrice = Math.min(...item.prices.map(p => p.price));
    return sum + (bestPrice * (item.quantity || 1));
  }, 0);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Your Shopping List</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>

        <div className="modal-body">
          {items.length === 0 ? (
            <div className="empty-list">
              <span className="empty-icon">📝</span>
              <p>Your list is empty. Add some products!</p>
            </div>
          ) : (
            <ul className="shopping-list">
              {items.map((item, index) => {
                const bestPrice = Math.min(...item.prices.map(p => p.price));
                const bestStore = item.prices.find(p => p.price === bestPrice).store;
                const quantity = item.quantity || 1;

                return (
                  <li key={`${item.id}-${index}`} className="list-item">
                    <div className="item-info">
                      <span className="item-name">{item.name}</span>
                      <span className="item-store">Best at: {bestStore}</span>
                    </div>
                    <div className="item-actions-container">
                      <div className="quantity-controls">
                        <button
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(item.id, quantity - 1)}
                          disabled={quantity <= 1}
                        >
                          -
                        </button>
                        <span className="qty-value">{quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() => onUpdateQuantity(item.id, quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <div className="item-price-actions">
                        <span className="item-price">₹{bestPrice * quantity}</span>
                        <button
                          className="remove-btn"
                          onClick={() => onRemove(item.id)}
                          aria-label="Remove item"
                        >
                          &times;
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="modal-footer">
          <div className="total-cost">
            <span>Estimated Total:</span>
            <span className="total-amount">₹{totalCost}</span>
          </div>
          <button className="btn btn-primary checkout-btn" onClick={() => alert('Checkout feature coming soon!')}>
            Checkout
          </button>
        </div>
      </div>
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          animation: fadeIn 0.2s ease-out;
        }
        .modal-content {
          background: white;
          width: 90%;
          max-width: 500px;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-xl);
          display: flex;
          flex-direction: column;
          max-height: 80vh;
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .modal-header {
          padding: var(--spacing-lg);
          border-bottom: 1px solid var(--color-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .modal-header h2 {
          margin: 0;
          font-size: 1.5rem;
        }
        .close-btn {
          font-size: 2rem;
          line-height: 1;
          color: var(--color-text-muted);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0 var(--spacing-xs);
        }
        .close-btn:hover {
          color: var(--color-text-main);
        }
        .modal-body {
          padding: var(--spacing-lg);
          overflow-y: auto;
          flex: 1;
        }
        .empty-list {
          text-align: center;
          padding: var(--spacing-2xl) 0;
          color: var(--color-text-muted);
        }
        .empty-icon {
          font-size: 3rem;
          display: block;
          margin-bottom: var(--spacing-md);
          opacity: 0.5;
        }
        .shopping-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .list-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--spacing-md) 0;
          border-bottom: 1px solid var(--color-border);
        }
        .list-item:last-child {
          border-bottom: none;
        }
        .item-info {
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .item-name {
          font-weight: 600;
          color: var(--color-text-main);
        }
        .item-store {
          font-size: 0.85rem;
          color: var(--color-primary);
        }
        .item-actions-container {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
        }
        .quantity-controls {
          display: flex;
          align-items: center;
          background-color: var(--color-background);
          border-radius: var(--radius-md);
          padding: 2px;
        }
        .qty-btn {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: white;
          border-radius: var(--radius-sm);
          font-weight: bold;
          color: var(--color-primary);
          cursor: pointer;
          box-shadow: var(--shadow-sm);
        }
        .qty-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .qty-value {
          padding: 0 var(--spacing-sm);
          font-weight: 600;
          font-size: 0.9rem;
          min-width: 24px;
          text-align: center;
        }
        .item-price-actions {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          min-width: 80px;
          justify-content: flex-end;
        }
        .item-price {
          font-weight: 700;
          color: var(--color-text-main);
        }
        .remove-btn {
          color: var(--color-danger);
          font-size: 1.5rem;
          line-height: 1;
          padding: 0 var(--spacing-xs);
          opacity: 0.7;
          transition: opacity 0.2s;
          background: none;
          border: none;
          cursor: pointer;
        }
        .remove-btn:hover {
          opacity: 1;
        }
        .modal-footer {
          padding: var(--spacing-lg);
          border-top: 1px solid var(--color-border);
          background-color: var(--color-background);
          border-bottom-left-radius: var(--radius-lg);
          border-bottom-right-radius: var(--radius-lg);
        }
        .total-cost {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-md);
          font-size: 1.1rem;
          font-weight: 600;
        }
        .total-amount {
          color: var(--color-primary);
          font-size: 1.25rem;
        }
        .checkout-btn {
          width: 100%;
          padding: 0.75rem;
          font-size: 1.1rem;
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default ShoppingListModal;
