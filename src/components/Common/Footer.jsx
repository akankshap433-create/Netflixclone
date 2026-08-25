import React, { useState } from "react";

export function Footer() {
  const [language, setLanguage] = useState("English");

  return (
    <footer className="netflix-main-footer">
      <div className="footer-content-container">
        <p className="footer-contact-text">
          Questions? Call <a href="tel:000-800-919-1694" className="footer-phone">000-800-919-1694</a>
        </p>

        <div className="footer-links-grid">
          <ul className="footer-column">
            <li><a href="#faq" onClick={(e) => e.preventDefault()}>FAQ</a></li>
            <li><a href="#investor-relations" onClick={(e) => e.preventDefault()}>Investor Relations</a></li>
            <li><a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy</a></li>
            <li><a href="#speed-test" onClick={(e) => e.preventDefault()}>Speed Test</a></li>
          </ul>

          <ul className="footer-column">
            <li><a href="#help-centre" onClick={(e) => e.preventDefault()}>Help Centre</a></li>
            <li><a href="#jobs" onClick={(e) => e.preventDefault()}>Jobs</a></li>
            <li><a href="#cookie-preferences" onClick={(e) => e.preventDefault()}>Cookie Preferences</a></li>
            <li><a href="#legal-notices" onClick={(e) => e.preventDefault()}>Legal Notices</a></li>
          </ul>

          <ul className="footer-column">
            <li><a href="#account" onClick={(e) => e.preventDefault()}>Account</a></li>
            <li><a href="#ways-to-watch" onClick={(e) => e.preventDefault()}>Ways to Watch</a></li>
            <li><a href="#corporate-information" onClick={(e) => e.preventDefault()}>Corporate Information</a></li>
            <li><a href="#only-on-netflix" onClick={(e) => e.preventDefault()}>Only on Netflix</a></li>
          </ul>

          <ul className="footer-column">
            <li><a href="#media-centre" onClick={(e) => e.preventDefault()}>Media Centre</a></li>
            <li><a href="#terms-of-use" onClick={(e) => e.preventDefault()}>Terms of Use</a></li>
            <li><a href="#contact-us" onClick={(e) => e.preventDefault()}>Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-language-wrapper">
          <div className="footer-lang-select-box">
            <svg className="footer-globe-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              className="footer-lang-select"
              aria-label="Select Language"
            >
              <option value="English">English</option>
              <option value="Hindi">हिन्दी</option>
            </select>
            <span className="footer-caret">▼</span>
          </div>
        </div>

        <p className="footer-copyright">Netflix Clone</p>
      </div>
    </footer>
  );
}
