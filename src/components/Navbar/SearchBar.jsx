import React, { useState, useRef, useEffect } from "react";
import { useMovie } from "../../context/MovieContext.jsx";

export function SearchBar() {
  const { searchQuery, setSearchQuery } = useMovie();
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef(null);

  const handleToggle = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      setTimeout(() => inputRef.current?.focus(), 150);
    } else if (!searchQuery) {
      setIsExpanded(false);
    }
  };

  const handleClear = () => {
    setSearchQuery("");
    inputRef.current?.focus();
  };

  // Close search on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSearchQuery("");
        setIsExpanded(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setSearchQuery]);

  return (
    <div className={`search-box-wrapper ${isExpanded || searchQuery ? "expanded" : ""}`}>
      <button 
        className="search-icon-btn" 
        onClick={handleToggle} 
        aria-label="Search"
        title="Search titles, genres, people"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16" y2="16" />
        </svg>
      </button>

      <input
        ref={inputRef}
        type="text"
        className="search-input-field"
        placeholder="Titles, people, genres..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onBlur={() => {
          if (!searchQuery) setIsExpanded(false);
        }}
      />

      {searchQuery && (
        <button className="search-clear-btn" onClick={handleClear} aria-label="Clear search">
          ✕
        </button>
      )}
    </div>
  );
}
