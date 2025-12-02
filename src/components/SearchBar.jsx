import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`search-bar ${isFocused ? 'focused' : ''}`}
    >
      <div className="search-icon">🔍</div>
      <input
        type="text"
        placeholder="Search for groceries (e.g., Milk, Bread)..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="search-input"
      />
      <button type="submit" className="btn btn-primary search-btn">
        Search
      </button>
      <style>{`
        .search-bar {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          max-width: 600px;
          margin: 0 auto var(--spacing-xl);
          background: var(--color-surface);
          border: 2px solid transparent;
          border-radius: var(--radius-full);
          padding: 0.5rem;
          box-shadow: var(--shadow-lg);
          transition: all 0.3s ease;
        }
        .search-bar.focused {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1);
          transform: scale(1.02);
        }
        .search-icon {
          margin-left: var(--spacing-md);
          font-size: 1.2rem;
          opacity: 0.5;
        }
        .search-input {
          flex: 1;
          padding: var(--spacing-sm);
          border: none;
          outline: none;
          font-size: 1.1rem;
          background: transparent;
          color: var(--color-text-main);
        }
        .search-input::placeholder {
          color: var(--color-text-muted);
        }
        .search-btn {
          border-radius: var(--radius-full);
          padding: 0.75rem 2rem;
          font-size: 1rem;
          font-weight: 600;
        }
        @media (max-width: 640px) {
          .search-bar {
            padding: 0.25rem;
            width: 100%;
            box-sizing: border-box;
          }
          .search-icon {
            margin-left: var(--spacing-sm);
            font-size: 1rem;
          }
          .search-input {
            font-size: 0.95rem;
            min-width: 0; /* Allow input to shrink */
          }
          .search-btn {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
            white-space: nowrap;
          }
        }
      `}</style>
    </form>
  );
};

export default SearchBar;
