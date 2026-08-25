import React, { useState, useRef, useEffect } from "react";
import { useProfile } from "../../context/ProfileContext.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import { useMovie } from "../../context/MovieContext.jsx";
export function ProfileDropdown() {
  const {
    profiles,
    currentProfile,
    switchProfile,
    setIsProfileGateOpen
  } = useProfile();
  const {
    logout
  } = useAuth();
  const {
    showToast
  } = useMovie();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = e => {
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
  const otherProfiles = profiles.filter(p => p.id !== currentProfile?.id);
  return /*#__PURE__*/React.createElement("div", {
    className: "profile-dropdown-wrapper",
    ref: dropdownRef
  }, /*#__PURE__*/React.createElement("button", {
    className: "profile-btn",
    onClick: () => setIsOpen(!isOpen),
    "aria-label": "Profile menu",
    "aria-expanded": isOpen
  }, /*#__PURE__*/React.createElement("img", {
    src: currentProfile?.avatar || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
    alt: currentProfile?.name || "Profile",
    className: "profile-avatar-img"
  }), /*#__PURE__*/React.createElement("span", {
    className: "profile-name-text"
  }, currentProfile?.name || "User"), /*#__PURE__*/React.createElement("span", {
    className: `profile-caret ${isOpen ? "open" : ""}`
  }, "\u25BC")), isOpen && /*#__PURE__*/React.createElement("div", {
    className: "profile-menu-dropdown animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "profile-menu-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "profile-menu-title"
  }, "Switch Profile")), /*#__PURE__*/React.createElement("div", {
    className: "profile-list-section"
  }, otherProfiles.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    className: "profile-switch-item",
    onClick: () => handleSwitch(p.id, p.name)
  }, /*#__PURE__*/React.createElement("img", {
    src: p.avatar,
    alt: p.name,
    className: "profile-switch-avatar"
  }), /*#__PURE__*/React.createElement("span", {
    className: "profile-switch-name"
  }, p.name), p.isKids && /*#__PURE__*/React.createElement("span", {
    className: "profile-kids-badge"
  }, "KIDS")))), /*#__PURE__*/React.createElement("div", {
    className: "profile-menu-divider"
  }), /*#__PURE__*/React.createElement("button", {
    className: "profile-menu-action",
    onClick: handleManage
  }, /*#__PURE__*/React.createElement("span", {
    className: "action-icon"
  }, "\uD83D\uDC65"), /*#__PURE__*/React.createElement("span", null, "Manage Profiles")), /*#__PURE__*/React.createElement("button", {
    className: "profile-menu-action",
    onClick: () => handleSwitch("profile-kids", "Kids")
  }, /*#__PURE__*/React.createElement("span", {
    className: "action-icon"
  }, "\uD83E\uDDD2"), /*#__PURE__*/React.createElement("span", null, "Switch to Kids Mode")), /*#__PURE__*/React.createElement("div", {
    className: "profile-menu-divider"
  }), /*#__PURE__*/React.createElement("button", {
    className: "profile-menu-action sign-out-action",
    onClick: handleSignOut
  }, /*#__PURE__*/React.createElement("span", {
    className: "action-icon"
  }, "\uD83D\uDEAA"), /*#__PURE__*/React.createElement("span", null, "Sign out of Netflix"))));
}