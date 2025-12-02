import React from 'react';

const categories = ["All", "Staples", "Dairy & Bakery", "Snacks", "Beverages", "Personal Care", "Household"];

const CategoryFilter = ({ activeCategory, onSelectCategory }) => {
  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-chip ${activeCategory === category ? 'active' : ''}`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
      <style>{`
        .category-filter {
          display: flex;
          gap: var(--spacing-sm);
          overflow-x: auto;
          padding: var(--spacing-sm) var(--spacing-md);
          margin-bottom: var(--spacing-xl);
          justify-content: center;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none; /* Firefox */
        }
        .category-filter::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }
        .category-chip {
          padding: 0.5rem 1.25rem;
          border-radius: var(--radius-full);
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          color: var(--color-text-muted);
          font-weight: 500;
          font-size: 0.95rem;
          white-space: nowrap;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .category-chip:hover {
          background-color: #f3f4f6;
          transform: translateY(-1px);
        }
        .category-chip.active {
          background-color: var(--color-primary);
          color: white;
          border-color: var(--color-primary);
          box-shadow: var(--shadow-md);
        }
        @media (max-width: 640px) {
          .category-filter {
            justify-content: flex-start;
            padding-left: var(--spacing-md);
            padding-right: var(--spacing-md);
          }
        }
      `}</style>
    </div>
  );
};

export default CategoryFilter;
