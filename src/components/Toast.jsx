import React, { useEffect } from 'react';

const Toast = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="toast animate-slide-up">
            <span className="toast-icon">✅</span>
            <span className="toast-message">{message}</span>
            <style>{`
        .toast {
          position: fixed;
          bottom: var(--spacing-xl);
          left: 50%;
          transform: translateX(-50%);
          background-color: #1f2937; /* Gray 800 */
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          box-shadow: var(--shadow-lg);
          z-index: 1000;
          min-width: 300px;
          justify-content: center;
        }
        .toast-icon {
          font-size: 1.2rem;
        }
        .toast-message {
          font-weight: 500;
          font-size: 0.95rem;
        }
        @keyframes slideUp {
          from { transform: translate(-50%, 100%); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
        </div>
    );
};

export default Toast;
