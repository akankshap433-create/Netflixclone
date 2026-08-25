import React, { useState, useEffect } from "react";
import { useMovie } from "../../context/MovieContext.jsx";
import { useProfile } from "../../context/ProfileContext.jsx";
import { SearchBar } from "./SearchBar.jsx";
import { ProfileDropdown } from "./ProfileDropdown.jsx";
export function Navbar() {
  const {
    activeTab,
    setActiveTab,
    setSearchQuery
  } = useMovie();
  const {
    isKids,
    switchProfile,
    currentProfile
  } = useProfile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavClick = tab => {
    setActiveTab(tab);
    setSearchQuery("");
    setMobileMenuOpen(false);
    if (tab === "kids") {
      switchProfile("profile-kids");
    } else if (isKids && tab !== "kids") {
      // Switching from kids to standard tab
      switchProfile("profile-alex");
    }
  };
  const handleExitKids = () => {
    switchProfile("profile-alex");
    setActiveTab("home");
  };
  return /*#__PURE__*/React.createElement("header", {
    className: `netflix-navbar-header ${isScrolled ? "scrolled" : ""} ${isKids ? "kids-mode" : ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "navbar-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "navbar-left"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mobile-hamburger-btn",
    onClick: () => setMobileMenuOpen(!mobileMenuOpen),
    "aria-label": "Toggle menu"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bar"
  }), /*#__PURE__*/React.createElement("span", {
    className: "bar"
  }), /*#__PURE__*/React.createElement("span", {
    className: "bar"
  })), /*#__PURE__*/React.createElement("div", {
    className: "brand-logo",
    onClick: () => handleNavClick("home"),
    title: "Netflix Home"
  }, /*#__PURE__*/React.createElement("span", {
    className: "logo-text"
  }, "NETFLIX"), isKids && /*#__PURE__*/React.createElement("span", {
    className: "kids-logo-tag"
  }, "KIDS")), /*#__PURE__*/React.createElement("nav", {
    className: "desktop-nav-links"
  }, /*#__PURE__*/React.createElement("button", {
    className: `nav-link-btn ${activeTab === "home" ? "active" : ""}`,
    onClick: () => handleNavClick("home")
  }, "Home"), /*#__PURE__*/React.createElement("button", {
    className: `nav-link-btn ${activeTab === "tv" ? "active" : ""}`,
    onClick: () => handleNavClick("tv")
  }, "TV Shows"), /*#__PURE__*/React.createElement("button", {
    className: `nav-link-btn ${activeTab === "movies" ? "active" : ""}`,
    onClick: () => handleNavClick("movies")
  }, "Movies"), /*#__PURE__*/React.createElement("button", {
    className: `nav-link-btn ${activeTab === "mylist" ? "active" : ""}`,
    onClick: () => handleNavClick("mylist")
  }, "My List"), /*#__PURE__*/React.createElement("button", {
    className: `nav-link-btn kids-nav-btn ${activeTab === "kids" || isKids ? "active" : ""}`,
    onClick: () => handleNavClick("kids")
  }, "Kids"))), /*#__PURE__*/React.createElement("div", {
    className: "navbar-right"
  }, /*#__PURE__*/React.createElement(SearchBar, null), isKids && /*#__PURE__*/React.createElement("button", {
    className: "exit-kids-btn",
    onClick: handleExitKids
  }, "Exit Kids"), /*#__PURE__*/React.createElement(ProfileDropdown, null))), mobileMenuOpen && /*#__PURE__*/React.createElement("div", {
    className: "mobile-nav-drawer animate-slide-down"
  }, /*#__PURE__*/React.createElement("button", {
    className: `mobile-nav-item ${activeTab === "home" ? "active" : ""}`,
    onClick: () => handleNavClick("home")
  }, "\uD83C\uDFE0 Home"), /*#__PURE__*/React.createElement("button", {
    className: `mobile-nav-item ${activeTab === "tv" ? "active" : ""}`,
    onClick: () => handleNavClick("tv")
  }, "\uD83D\uDCFA TV Shows"), /*#__PURE__*/React.createElement("button", {
    className: `mobile-nav-item ${activeTab === "movies" ? "active" : ""}`,
    onClick: () => handleNavClick("movies")
  }, "\uD83C\uDFAC Movies"), /*#__PURE__*/React.createElement("button", {
    className: `mobile-nav-item ${activeTab === "mylist" ? "active" : ""}`,
    onClick: () => handleNavClick("mylist")
  }, "\u2795 My List"), /*#__PURE__*/React.createElement("button", {
    className: `mobile-nav-item ${activeTab === "kids" || isKids ? "active" : ""}`,
    onClick: () => handleNavClick("kids")
  }, "\uD83E\uDDD2 Kids Zone")));
}