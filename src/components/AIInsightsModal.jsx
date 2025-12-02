import React, { useState, useEffect, useRef } from 'react';
import { generateProductInsights, chatWithAI, isGeminiConfigured } from '../services/gemini';

const AIInsightsModal = ({ product, onClose }) => {
  const [loading, setLoading] = useState(true);
  const [insights, setInsights] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (product) {
      setLoading(true);
      setChatHistory([]); // Reset chat on new product

      const fetchInsights = async () => {
        if (isGeminiConfigured()) {
          try {
            const aiData = await generateProductInsights(product);
            setInsights(aiData);
            setLoading(false);
            return;
          } catch (error) {
            console.error("Falling back to simulation due to API error", error);
          }
        }

        // Fallback Simulation Logic
        setTimeout(() => {
          setInsights(generateSimulatedInsights(product));
          setLoading(false);
        }, 1500);
      };

      fetchInsights();
    }
  }, [product]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory, isTyping]);

  if (!product) return null;

  const generateSimulatedInsights = (product) => {
    const category = product.category;
    const name = product.name.toLowerCase();

    let healthCheck = "Contains standard ingredients.";
    let usageTip = "Versatile product for daily use.";
    let storage = "Store in a cool, dry place.";

    // Simple rule-based generation to simulate AI
    if (category === 'Staples') {
      if (name.includes('sugar')) {
        healthCheck = "High calorie content. Use in moderation.";
        usageTip = "Great for baking and sweetening beverages.";
      } else if (name.includes('salt')) {
        healthCheck = "Essential mineral but high sodium. Use sparingly.";
      } else if (name.includes('oil')) {
        healthCheck = "Rich in fats. Choose heart-healthy options when possible.";
      } else if (name.includes('rice') || name.includes('atta') || name.includes('dal')) {
        healthCheck = "Good source of carbohydrates and energy.";
        usageTip = "Wash thoroughly before cooking.";
      }
    } else if (category === 'Dairy & Bakery') {
      storage = "Keep refrigerated below 4°C.";
      if (name.includes('milk') || name.includes('cheese') || name.includes('paneer')) {
        healthCheck = "Excellent source of Calcium and Protein.";
      } else if (name.includes('bread')) {
        storage = "Store in a cool dry place, or refrigerate to extend shelf life.";
        usageTip = "Best consumed within 3-4 days.";
      }
    } else if (category === 'Snacks') {
      healthCheck = "Processed food. Enjoy as an occasional treat.";
      usageTip = "Perfect for tea-time or movie nights.";
    } else if (category === 'Beverages') {
      if (name.includes('cola') || name.includes('sprite') || name.includes('thums')) {
        healthCheck = "High sugar content. Contains caffeine.";
        usageTip = "Serve chilled for best taste.";
      } else if (name.includes('juice')) {
        healthCheck = "Contains fruit concentrate and added sugars.";
        storage = "Refrigerate after opening.";
      } else if (name.includes('tea') || name.includes('coffee')) {
        healthCheck = "Contains antioxidants and caffeine.";
        storage = "Store in an airtight container.";
      }
    } else if (category === 'Personal Care') {
      healthCheck = "Dermatologically tested (check label).";
      usageTip = "For external use only.";
      storage = "Keep away from direct sunlight.";
    } else if (category === 'Household') {
      healthCheck = "Chemical product. Keep away from children.";
      usageTip = "Follow usage instructions on the label carefully.";
    }

    return { healthCheck, usageTip, storage };
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMsg = { role: 'user', content: inputMessage };
    setChatHistory(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    if (isGeminiConfigured()) {
      try {
        const aiResponse = await chatWithAI(chatHistory, userMsg.content, product);
        setChatHistory(prev => [...prev, { role: 'ai', content: aiResponse }]);
        setIsTyping(false);
        return;
      } catch (error) {
        console.error("Chat API Error, falling back", error);
        // Show error to user for debugging
        setChatHistory(prev => [...prev, { role: 'ai', content: `⚠️ Gemini API Error: ${error.message || "Unknown error"}. Falling back to simulation.` }]);
        // Fall through to simulation so they still get an answer
      }
    }

    // Fallback Simulation Response
    setTimeout(() => {
      let aiResponse = "That's a great question! Based on my analysis, this product is a popular choice in its category.";
      const lowerInput = userMsg.content.toLowerCase();
      const lowerName = product.name.toLowerCase();

      // Helper to check for multiple keywords
      const has = (keywords) => keywords.some(k => lowerInput.includes(k));

      // 1. Check for specific product data first (High Accuracy)
      if (has(['calor', 'nutri', 'fat', 'protein', 'carb', 'sugar', 'energy']) && product.nutrition) {
        aiResponse = `Here is the nutritional info for ${product.name}: ${product.nutrition}`;
      } else if (has(['about', 'what is', 'describe', 'tell me']) && product.description) {
        aiResponse = product.description;
      } else if (has(['tip', 'use', 'cook', 'benefit', 'why']) && product.aiContext) {
        aiResponse = product.aiContext;
      }
      // 2. Fallback to Rule-Based Logic
      else if (has(['price', 'cost', 'much', 'worth'])) {
        aiResponse = `The best price for ${product.name} is currently ₹${Math.min(...product.prices.map(p => p.price))}.`;
      } else if (has(['healthy', 'good for', 'benefit', 'safe'])) {
        aiResponse = insights.healthCheck;
      } else if (has(['store', 'keep', 'preserve', 'expire', 'shelf'])) {
        aiResponse = insights.storage;
      } else if (has(['cook', 'use', 'recipe', 'eat', 'make'])) {
        aiResponse = `You can use ${product.name} in many ways! ${insights.usageTip}`;
      } else if (has(['calor', 'nutri', 'fat', 'protein', 'carb', 'sugar', 'energy'])) {
        // Generic fallback if no specific nutrition data
        if (lowerName.includes('salt') || lowerName.includes('water')) {
          aiResponse = "This product has 0 calories and no significant macronutrients.";
        } else if (lowerName.includes('oil') || lowerName.includes('ghee')) {
          aiResponse = "This is high in calories (approx. 900kcal per 100g) and fats. Use in moderation.";
        } else if (lowerName.includes('sugar')) {
          aiResponse = "High in carbohydrates (approx. 400kcal per 100g). No protein or fats.";
        } else if (lowerName.includes('dal') || lowerName.includes('pulse')) {
          aiResponse = "Rich in protein and fiber. Approx. 340kcal per 100g.";
        } else if (lowerName.includes('rice') || lowerName.includes('atta')) {
          aiResponse = "Mainly carbohydrates. Approx. 350-360kcal per 100g.";
        } else if (lowerName.includes('milk')) {
          aiResponse = "Good source of protein and calcium. Approx. 40-60kcal per 100ml depending on fat content.";
        } else {
          aiResponse = "I don't have the exact nutritional label, but generally, products in this category should be consumed as part of a balanced diet.";
        }
      } else if (has(['brand', 'company', 'manufacturer'])) {
        aiResponse = `This is a ${product.name} product. It's a well-known brand in the market.`;
      } else if (has(['hello', 'hi', 'hey'])) {
        aiResponse = "Hello! I'm your AI shopping assistant. Ask me anything about this product!";
      } else if (has(['thank', 'thanks'])) {
        aiResponse = "You're welcome! Happy shopping!";
      }

      setChatHistory(prev => [...prev, { role: 'ai', content: aiResponse }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content ai-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header ai-header">
          <div className="ai-title">
            <span className="ai-icon">✨</span>
            <h2>AI Product Insights</h2>
            {isGeminiConfigured() ? (
              <span className="ai-badge gemini">⚡ Gemini Pro</span>
            ) : (
              <span className="ai-badge sim">🤖 Simulation</span>
            )}
          </div>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>

        <div className="modal-body">
          <div className="product-summary">
            <img src={product.image} alt={product.name} className="ai-product-img" />
            <h3>{product.name}</h3>
          </div>

          {loading ? (
            <div className="ai-loading">
              <div className="ai-spinner"></div>
              <p>Analyzing nutritional value and usage...</p>
            </div>
          ) : (
            <div className="ai-content-container">
              <div className="ai-results animate-fade-in">
                <div className="insight-card">
                  <div className="insight-icon">❤️</div>
                  <div className="insight-content">
                    <h4>Health Check</h4>
                    <p>{insights.healthCheck}</p>
                  </div>
                </div>

                <div className="insight-card">
                  <div className="insight-icon">💡</div>
                  <div className="insight-content">
                    <h4>Usage Tip</h4>
                    <p>{insights.usageTip}</p>
                  </div>
                </div>

                <div className="insight-card">
                  <div className="insight-icon">📦</div>
                  <div className="insight-content">
                    <h4>Storage</h4>
                    <p>{insights.storage}</p>
                  </div>
                </div>
              </div>

              <div className="ai-chat-section">
                <div className="chat-header">
                  <h4>Ask AI about this product</h4>
                </div>
                <div className="chat-history">
                  {chatHistory.length === 0 && (
                    <div className="chat-placeholder">
                      <p>Ask anything! e.g.,</p>
                      <div className="chip-container">
                        <span className="suggestion-chip" onClick={() => setInputMessage("Is this healthy?")}>Is this healthy?</span>
                        <span className="suggestion-chip" onClick={() => setInputMessage("Calories?")}>Calories?</span>
                        <span className="suggestion-chip" onClick={() => setInputMessage("How to store?")}>How to store?</span>
                      </div>
                    </div>
                  )}
                  {chatHistory.map((msg, idx) => (
                    <div key={idx} className={`chat-message ${msg.role}`}>
                      <div className="message-content">{msg.content}</div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="chat-message ai typing">
                      <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>
                <form className="chat-input-form" onSubmit={handleSendMessage}>
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your question..."
                    className="chat-input"
                  />
                  <button type="submit" className="chat-send-btn" disabled={!inputMessage.trim() || isTyping}>
                    ➤
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          animation: fadeIn 0.2s ease-out;
          backdrop-filter: blur(4px);
        }
        .ai-modal {
          max-width: 480px;
          width: 95%;
          max-height: 85vh;
          background: white;
          border-radius: var(--radius-lg);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .ai-header {
          background: white;
          padding: var(--spacing-md) var(--spacing-lg);
          border-bottom: 1px solid var(--color-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-shrink: 0;
        }
        .ai-title {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          color: var(--color-primary);
        }
        .ai-title h2 {
            font-size: 1.25rem;
            margin: 0;
        }
        .ai-icon {
          font-size: 1.5rem;
          animation: pulse 2s infinite;
        }
        .close-btn {
            font-size: 1.5rem;
            color: var(--color-text-muted);
            background: none;
            border: none;
            cursor: pointer;
            padding: 4px;
            border-radius: 50%;
            transition: background 0.2s;
            line-height: 1;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .close-btn:hover {
            background-color: #f3f4f6;
            color: var(--color-text-main);
        }
        .modal-body {
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          padding: var(--spacing-lg);
        }
        .product-summary {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
          padding-bottom: var(--spacing-md);
          border-bottom: 1px solid var(--color-border);
          flex-shrink: 0;
        }
        .product-summary h3 {
            margin: 0;
            font-size: 1.1rem;
            text-align: left;
        }
        .ai-product-img {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
        }
        .ai-loading {
          text-align: center;
          padding: var(--spacing-xl) 0;
          color: var(--color-text-muted);
        }
        .ai-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid var(--color-border);
          border-top-color: var(--color-primary);
          border-radius: 50%;
          margin: 0 auto var(--spacing-md);
          animation: spin 1s linear infinite;
        }
        .ai-content-container {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }
        .insight-card {
          display: flex;
          gap: var(--spacing-md);
          background: #f0fdf4;
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          margin-bottom: var(--spacing-sm);
          border: 1px solid #dcfce7;
        }
        .insight-icon {
          font-size: 1.2rem;
        }
        .insight-content h4 {
          margin: 0 0 0.2rem 0;
          color: var(--color-primary);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 700;
        }
        .insight-content p {
          font-size: 0.9rem;
          color: var(--color-text-main);
          margin: 0;
          line-height: 1.4;
        }
        
        /* Chat Section Styles */
        .ai-chat-section {
          border-top: 1px solid var(--color-border);
          padding-top: var(--spacing-lg);
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .chat-header h4 {
          font-size: 0.95rem;
          color: var(--color-text-main);
          margin: 0;
          font-weight: 600;
        }
        .chat-history {
          background: #f9fafb;
          border-radius: var(--radius-md);
          padding: var(--spacing-md);
          height: 220px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          border: 1px solid var(--color-border);
        }
        .chat-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          gap: var(--spacing-md);
          color: var(--color-text-muted);
        }
        .chip-container {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            justify-content: center;
        }
        .suggestion-chip {
            background: white;
            border: 1px solid var(--color-border);
            padding: 4px 10px;
            border-radius: 16px;
            font-size: 0.8rem;
            cursor: pointer;
            transition: all 0.2s;
        }
        .suggestion-chip:hover {
            border-color: var(--color-primary);
            color: var(--color-primary);
            background: #f0fdf4;
        }
        .chat-message {
          max-width: 85%;
          padding: 10px 14px;
          border-radius: 16px;
          font-size: 0.9rem;
          line-height: 1.5;
          position: relative;
        }
        .chat-message.user {
          align-self: flex-end;
          background-color: var(--color-primary);
          color: white;
          border-bottom-right-radius: 4px;
        }
        .chat-message.ai {
          align-self: flex-start;
          background-color: white;
          border: 1px solid var(--color-border);
          color: var(--color-text-main);
          border-bottom-left-radius: 4px;
          box-shadow: var(--shadow-sm);
        }
        .chat-input-form {
          display: flex;
          gap: var(--spacing-sm);
          margin-top: var(--spacing-xs);
        }
        .chat-input {
          flex: 1;
          padding: 10px 16px;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          font-size: 0.95rem;
          transition: border-color 0.2s;
        }
        .chat-input:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }
        .chat-send-btn {
          background: var(--color-primary);
          color: white;
          border: none;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          box-shadow: var(--shadow-sm);
        }
        .chat-send-btn:hover:not(:disabled) {
          transform: scale(1.05);
          background-color: var(--color-primary-hover);
        }
        .chat-send-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          background-color: var(--color-text-muted);
        }
        .typing .dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          background-color: #9ca3af;
          border-radius: 50%;
          margin-right: 4px;
          animation: typing 1.4s infinite ease-in-out both;
        }
        .typing .dot:nth-child(1) { animation-delay: -0.32s; }
        .typing .dot:nth-child(2) { animation-delay: -0.16s; }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes typing {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        .ai-badge {
          font-size: 0.7rem;
          padding: 2px 8px;
          border-radius: 12px;
          margin-left: 8px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .ai-badge.gemini {
          background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
          color: white;
        }
        .ai-badge.sim {
          background: #e5e7eb;
          color: #6b7280;
        }
      `}</style>
    </div>
  );
};

export default AIInsightsModal;
