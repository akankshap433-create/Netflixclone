import React, { useState, useEffect, useRef } from "react";
import { useMovie } from "../../context/MovieContext.jsx";
import { useProfile } from "../../context/ProfileContext.jsx";
import { SearchBar } from "./SearchBar.jsx";
import { ProfileDropdown } from "./ProfileDropdown.jsx";
import { NetflixWordmark } from "../Common/BrandLogo.jsx";

export function Navbar() {
  const { activeTab, setActiveTab, setSearchQuery, showToast } = useMovie();
  const { isKids, switchProfile } = useProfile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const notifRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotificationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    setSearchQuery("");
    setMobileMenuOpen(false);

    if (tab === "kids") {
      switchProfile("profile-kids");
    } else if (isKids && tab !== "kids") {
      switchProfile("profile-alex");
    }
  };

  const handleExitKids = () => {
    switchProfile("profile-alex");
    setActiveTab("home");
  };

  return (
    <header className={`netflix-navbar-header ${isScrolled ? "scrolled" : ""} ${isKids ? "kids-mode" : ""}`}>
      <div className="navbar-container">
        {/* Left: Mobile Toggle & Official Netflix Wordmark Logo */}
        <div className="navbar-left">
          <button 
            type="button"
            className="mobile-hamburger-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <div 
            className="brand-logo" 
            onClick={() => handleNavClick("home")}
            title="Netflix Home"
          >
            <NetflixWordmark height={26} />
            {isKids && <span className="kids-logo-tag">KIDS</span>}
          </div>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav-links">
            <button 
              type="button"
              className={`nav-link-btn ${activeTab === "home" ? "active" : ""}`}
              onClick={() => handleNavClick("home")}
            >
              Home
            </button>
            <button 
              type="button"
              className={`nav-link-btn ${activeTab === "tv" ? "active" : ""}`}
              onClick={() => handleNavClick("tv")}
            >
              TV Shows
            </button>
            <button 
              type="button"
              className={`nav-link-btn ${activeTab === "movies" ? "active" : ""}`}
              onClick={() => handleNavClick("movies")}
            >
              Movies
            </button>
            <button 
              type="button"
              className={`nav-link-btn ${activeTab === "new_popular" ? "active" : ""}`}
              onClick={() => handleNavClick("new_popular")}
            >
              New & Popular
            </button>
            <button 
              type="button"
              className={`nav-link-btn ${activeTab === "mylist" ? "active" : ""}`}
              onClick={() => handleNavClick("mylist")}
            >
              My List
            </button>
            <button 
              type="button"
              className={`nav-link-btn kids-nav-btn ${activeTab === "kids" || isKids ? "active" : ""}`}
              onClick={() => handleNavClick("kids")}
            >
              Kids
            </button>
          </nav>
        </div>

        {/* Right: Search, Notifications & Profile */}
        <div className="navbar-right">
          <SearchBar />

          {/* Notifications Bell Icon */}
          <div className="notifications-wrapper" ref={notifRef}>
            <button 
              type="button"
              className="navbar-icon-btn notif-bell-btn"
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              title="Notifications"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <span className="notif-badge-dot">3</span>
            </button>

            {notificationsOpen && (
              <div className="notifications-dropdown-menu animate-fade-in">
                <div className="notif-header">
                  <span>Recent Notifications</span>
                </div>
                <div className="notif-item" onClick={() => { setNotificationsOpen(false); showToast("New Season of Squid Game is now streaming!", "info"); }}>
                  <img src="assets/movie4.jpg" alt="Squid Game" className="notif-thumb" />
                  <div className="notif-text">
                    <strong>Squid Game Season 2</strong>
                    <p>New episodes now available</p>
                    <span className="notif-time">2 days ago</span>
                  </div>
                </div>
                <div className="notif-item" onClick={() => { setNotificationsOpen(false); showToast("Stranger Things season finale ready", "info"); }}>
                  <img src="assets/movie3.jpg" alt="Stranger Things" className="notif-thumb" />
                  <div className="notif-text">
                    <strong>Stranger Things</strong>
                    <p>Top 10 in Streaming Today</p>
                    <span className="notif-time">1 week ago</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {isKids && (
            <button type="button" className="exit-kids-btn" onClick={handleExitKids}>
              Exit Kids
            </button>
          )}

          <ProfileDropdown />
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer animate-slide-down">
          <button 
            type="button"
            className={`mobile-nav-item ${activeTab === "home" ? "active" : ""}`}
            onClick={() => handleNavClick("home")}
          >
            Home
          </button>
          <button 
            type="button"
            className={`mobile-nav-item ${activeTab === "tv" ? "active" : ""}`}
            onClick={() => handleNavClick("tv")}
          >
            TV Shows
          </button>
          <button 
            type="button"
            className={`mobile-nav-item ${activeTab === "movies" ? "active" : ""}`}
            onClick={() => handleNavClick("movies")}
          >
            Movies
          </button>
          <button 
            type="button"
            className={`mobile-nav-item ${activeTab === "new_popular" ? "active" : ""}`}
            onClick={() => handleNavClick("new_popular")}
          >
            New & Popular
          </button>
          <button 
            type="button"
            className={`mobile-nav-item ${activeTab === "mylist" ? "active" : ""}`}
            onClick={() => handleNavClick("mylist")}
          >
            My List
          </button>
          <button 
            type="button"
            className={`mobile-nav-item ${activeTab === "kids" || isKids ? "active" : ""}`}
            onClick={() => handleNavClick("kids")}
          >
            Kids Zone
          </button>
        </div>
      )}
    </header>
  );
}
