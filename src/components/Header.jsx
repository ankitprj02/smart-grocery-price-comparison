import React from 'react';

const Header = ({ listCount = 0, onToggleList }) => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <span className="logo-icon">🛒</span>
          <h1>SmartPrice</h1>
        </div>
        <nav>
          <button className="btn btn-outline list-btn" onClick={onToggleList}>
            <span className="list-icon">📝</span>
            <span className="list-text">My List</span>
            {listCount > 0 && <span className="list-badge">{listCount}</span>}
          </button>
        </nav>
      </div>
      <style>{`
        .header {
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: var(--shadow-sm);
          padding: var(--spacing-md) 0;
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-primary);
          letter-spacing: -0.02em;
        }
        .logo h1 {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .list-btn {
          position: relative;
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          border: 1px solid var(--color-border);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          background: white;
          color: var(--color-text-main);
          font-weight: 600;
        }
        .list-btn:hover {
          background-color: var(--color-background);
          border-color: var(--color-primary);
          color: var(--color-primary);
        }
        .list-badge {
          background-color: var(--color-danger);
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          min-width: 1.25rem;
          height: 1.25rem;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: var(--spacing-xs);
        }
        @media (max-width: 640px) {
          .logo {
            font-size: 1.2rem;
          }
          .logo-icon {
            font-size: 1.4rem;
          }
          .list-text {
            display: none;
          }
          .list-btn {
            padding: 0.4rem;
            min-width: auto;
          }
        }
        @media (max-width: 360px) {
          .logo h1 {
            font-size: 1rem;
          }
          .logo-icon {
            font-size: 1.2rem;
          }
          .btn {
            padding: 0.3rem 0.6rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
