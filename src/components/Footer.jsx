import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section brand-section">
          <div className="brand-logo">
            <span className="logo-icon">🛒</span>
            <h3>SmartPrice</h3>
          </div>
          <p>Your intelligent companion for grocery shopping. Compare prices, get AI insights, and save money on every trip.</p>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Twitter">🐦</a>
            <a href="#" className="social-icon" aria-label="Instagram">📸</a>
            <a href="#" className="social-icon" aria-label="Facebook">📘</a>
            <a href="#" className="social-icon" aria-label="LinkedIn">💼</a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container copyright-content">
          <p>&copy; {new Date().getFullYear()} SmartPrice. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>

      <style>{`
                .footer {
                    background: linear-gradient(to bottom, #1f2937, #111827);
                    color: #f3f4f6;
                    padding-top: var(--spacing-2xl);
                    margin-top: auto;
                    font-size: 0.95rem;
                }
                .footer-content {
                    display: flex;
                    justify-content: center;
                    margin-bottom: var(--spacing-2xl);
                }
                .brand-section {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }
                .brand-section p {
                    color: #9ca3af;
                    margin-bottom: var(--spacing-lg);
                    max-width: 500px;
                }
                .brand-logo {
                    display: flex;
                    align-items: center;
                    gap: var(--spacing-sm);
                    margin-bottom: var(--spacing-md);
                }
                .brand-logo h3 {
                    color: white;
                    font-size: 1.8rem;
                    margin: 0;
                }
                .logo-icon {
                    font-size: 1.8rem;
                }
                .social-links {
                    display: flex;
                    gap: var(--spacing-md);
                    justify-content: center;
                }
                .social-icon {
                    width: 40px;
                    height: 40px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.3rem;
                    transition: all 0.3s ease;
                    text-decoration: none !important;
                }
                .social-icon:hover {
                    background: var(--color-primary);
                    transform: translateY(-3px) !important;
                }
                .copyright {
                    border-top: 1px solid #374151;
                    padding: var(--spacing-lg) 0;
                    background: #111827;
                }
                .copyright-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #6b7280;
                    font-size: 0.9rem;
                }
                .legal-links {
                    display: flex;
                    gap: var(--spacing-lg);
                }
                .legal-links a {
                    color: #6b7280;
                }
                .legal-links a:hover {
                    color: var(--color-primary);
                    transform: none;
                }

                @media (max-width: 768px) {
                    .copyright-content {
                        flex-direction: column;
                        gap: var(--spacing-md);
                        text-align: center;
                    }
                }
            `}</style>
    </footer>
  );
};

export default Footer;
