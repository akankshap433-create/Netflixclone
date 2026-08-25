import React, { useState, useRef, useEffect } from "react";
import { useProfile } from "../../context/ProfileContext.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import { useMovie } from "../../context/MovieContext.jsx";

export function ProfileDropdown() {
  const { profiles, currentProfile, switchProfile, setIsProfileGateOpen } = useProfile();
  const { logout } = useAuth();
  const { showToast } = useMovie();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSwitch = (profileId, name) => {
    switchProfile(profileId);
    setIsOpen(false);
    showToast(`Switched to profile: ${name}`, "success");
  };

  const handleManage = () => {
    setIsOpen(false);
    setIsProfileGateOpen(true);
  };

  const handleSignOut = () => {
    setIsOpen(false);
    logout();
    showToast("Signed out successfully", "info");
  };

  const otherProfiles = profiles.filter(p => p.id !== (currentProfile?.id));

  return (
    <div className="profile-dropdown-wrapper" ref={dropdownRef}>
      <button 
        type="button"
        className="profile-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Profile menu"
        aria-expanded={isOpen}
      >
        <img 
          src={currentProfile?.avatar} 
          alt={currentProfile?.name || "Profile"} 
          className="profile-avatar-img"
        />
        <span className="profile-name-text">{currentProfile?.name || "User"}</span>
        <span className={`profile-caret ${isOpen ? "open" : ""}`}>▼</span>
      </button>

      {isOpen && (
        <div className="profile-menu-dropdown animate-fade-in">
          <div className="profile-menu-header">
            <span className="profile-menu-title">Switch Profile</span>
          </div>

          <div className="profile-list-section">
            {otherProfiles.map(p => (
              <button 
                key={p.id} 
                type="button"
                className="profile-switch-item"
                onClick={() => handleSwitch(p.id, p.name)}
              >
                <img src={p.avatar} alt={p.name} className="profile-switch-avatar" />
                <span className="profile-switch-name">{p.name}</span>
                {p.isKids && <span className="profile-kids-badge">KIDS</span>}
              </button>
            ))}
          </div>

          <div className="profile-menu-divider"></div>

          {/* Manage Profiles with Clean SVG Icon */}
          <button type="button" className="profile-menu-action" onClick={handleManage}>
            <svg className="action-svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
            <span>Manage Profiles</span>
          </button>

          {/* Switch to Kids Mode with Clean SVG Icon */}
          <button type="button" className="profile-menu-action" onClick={() => handleSwitch("profile-kids", "Kids")}>
            <svg className="action-svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
            <span>Switch to Kids Mode</span>
          </button>

          <div className="profile-menu-divider"></div>

          {/* Sign Out with Clean SVG Icon */}
          <button type="button" className="profile-menu-action sign-out-action" onClick={handleSignOut}>
            <svg className="action-svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            <span>Sign out of Netflix</span>
          </button>
        </div>
      )}
    </div>
  );
}
