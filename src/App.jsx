import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';
import CategoryFilter from './components/CategoryFilter';
import Footer from './components/Footer';
import Toast from './components/Toast';
import ShoppingListModal from './components/ShoppingListModal';
import AIInsightsModal from './components/AIInsightsModal';
import { products } from './data/mockData';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [toastMessage, setToastMessage] = useState(null);

  const [visibleCount, setVisibleCount] = useState(9);

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // Shuffle products on mount to show different order on refresh
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    setAllProducts(shuffled);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = allProducts;

    // Filter by category
    if (activeCategory !== 'All') {
      result = result.filter(product => product.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery) {
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return result;
  }, [searchQuery, activeCategory, allProducts]);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(9);
  }, [searchQuery, activeCategory]);

  const [shoppingList, setShoppingList] = useState([]);
  const [isListOpen, setIsListOpen] = useState(false);

  const handleAddToList = (product) => {
    setShoppingList(prev => {
      // Check if item already exists
      const existingItem = prev.find(item => item.id === product.id);

      if (existingItem) {
        setToastMessage(`Updated quantity for ${product.name}!`);
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }

      setToastMessage(`Added ${product.name} to your list!`);
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromList = (productId) => {
    setShoppingList(prev => prev.filter(item => item.id !== productId));
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setShoppingList(prev => prev.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const [aiModalProduct, setAiModalProduct] = useState(null);

  const handleOpenAI = (product) => {
    setAiModalProduct(product);
  };

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 9);
  };

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="app-container">
      <Header
        listCount={shoppingList.length}
        onToggleList={() => setIsListOpen(true)}
      />

      <ShoppingListModal
        isOpen={isListOpen}
        onClose={() => setIsListOpen(false)}
        items={shoppingList}
        onRemove={handleRemoveFromList}
        onUpdateQuantity={handleUpdateQuantity}
      />

      <AIInsightsModal
        product={aiModalProduct}
        onClose={() => setAiModalProduct(null)}
      />

      <main>
        <div className="hero-section">
          <div className="hero-content">
            <h2 className="hero-title">Find the Best Prices</h2>
            <p className="hero-subtitle">Compare prices across Blinkit, Zepto, and BigBasket instantly.</p>
            <SearchBar onSearch={setSearchQuery} />
          </div>
        </div>

        <div className="results-section container">
          <CategoryFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />

          {visibleProducts.length > 0 ? (
            <>
              <div className="product-grid animate-fade-in">
                {visibleProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToList={handleAddToList}
                    onOpenAI={handleOpenAI}
                  />
                ))}
              </div>
              {visibleCount < filteredProducts.length && (
                <div className="pagination-container">
                  <button className="btn btn-primary show-more-btn" onClick={handleShowMore}>
                    Show More
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="no-results animate-fade-in">
              <div className="no-results-icon">🔍</div>
              <h3>No products found</h3>
              <p>Try adjusting your search or category filter</p>
              <button
                className="btn btn-outline"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
              >
                Clear Search & Filters
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}

      <style>{`
        .hero-section {
          text-align: center;
          margin-bottom: var(--spacing-2xl);
          padding: 6rem 1rem;
          background: linear-gradient(135deg, #ecfdf5 0%, #eff6ff 100%);
          position: relative;
          overflow: hidden;
        }
        .hero-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%);
          animation: spin 60s linear infinite;
        }
        @keyframes spin { 
          from { transform: rotate(0deg); } 
          to { transform: rotate(360deg); } 
        }
        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
        }
        .hero-section h2 {
          font-size: 3.5rem;
          margin-bottom: var(--spacing-md);
          color: var(--color-text-main);
          letter-spacing: -0.03em;
          line-height: 1.1;
        }
        .highlight {
          color: var(--color-primary);
          position: relative;
          display: inline-block;
        }
        .highlight::after {
          content: '';
          position: absolute;
          bottom: 0.1em;
          left: 0;
          width: 100%;
          height: 0.3em;
          background-color: rgba(16, 185, 129, 0.2);
          z-index: -1;
          border-radius: var(--radius-sm);
        }
        .hero-section p {
          color: var(--color-text-muted);
          margin-bottom: var(--spacing-xl);
          font-size: 1.25rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .pagination-container {
          display: flex;
          justify-content: center;
          margin-top: var(--spacing-2xl);
          padding-bottom: var(--spacing-2xl);
        }
        .show-more-btn {
          min-width: 200px;
          background-color: var(--color-primary);
          color: white;
          border: none;
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          border-radius: var(--radius-full);
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .show-more-btn:hover {
          background-color: var(--color-primary-hover);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
        }
        .show-more-btn:active {
          transform: translateY(1px);
        }
        .results-section {
          padding-bottom: var(--spacing-2xl);
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: var(--spacing-xl);
        }
        .no-results {
          text-align: center;
          padding: var(--spacing-2xl);
          color: var(--color-text-muted);
          background: var(--color-surface);
          border-radius: var(--radius-lg);
          border: 1px dashed var(--color-border);
          max-width: 500px;
          margin: 0 auto;
        }
        .no-results-icon {
          font-size: 3rem;
          margin-bottom: var(--spacing-md);
          opacity: 0.5;
        }
        .no-results h3 {
          color: var(--color-text-main);
          margin-bottom: var(--spacing-sm);
        }
        .no-results p {
          margin-bottom: var(--spacing-lg);
        }
        @media (max-width: 768px) {
          .hero-section {
            padding: 4rem 1rem;
          }
          .hero-section h2 {
            font-size: 2.25rem;
          }
          .hero-section p {
            font-size: 1rem;
            margin-bottom: var(--spacing-lg);
          }
        }
        @media (max-width: 480px) {
          .hero-section h2 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
