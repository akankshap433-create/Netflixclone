import React, { useState } from "react";
import { useProfile } from "../../context/ProfileContext.jsx";
import { useMovie } from "../../context/MovieContext.jsx";
import { ManageProfilesModal } from "./ManageProfilesModal.jsx";
export function ProfileGate() {
  const {
    profiles,
    switchProfile,
    setIsProfileGateOpen,
    isProfileGateOpen
  } = useProfile();
  const {
    showToast
  } = useMovie();
  const [isManaging, setIsManaging] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const handleSelect = profile => {
    switchProfile(profile.id);
    showToast(`Welcome back, ${profile.name}!`, "success");
    setIsProfileGateOpen(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "profile-gate-overlay animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "profile-gate-container"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "profile-gate-heading"
  }, isManaging ? "Manage Profiles" : "Who's watching?"), /*#__PURE__*/React.createElement("div", {
    className: "profile-cards-grid"
  }, profiles.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "profile-gate-card",
    onClick: () => handleSelect(p)
  }, /*#__PURE__*/React.createElement("div", {
    className: "profile-avatar-frame",
    style: {
      borderColor: p.color || "#E50914"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.avatar,
    alt: p.name,
    className: "profile-gate-avatar-img"
  }), isManaging && /*#__PURE__*/React.createElement("div", {
    className: "profile-edit-badge"
  }, "\u270E"), p.isKids && /*#__PURE__*/React.createElement("span", {
    className: "profile-gate-kids-tag"
  }, "KIDS")), /*#__PURE__*/React.createElement("span", {
    className: "profile-gate-name"
  }, p.name))), /*#__PURE__*/React.createElement("div", {
    className: "profile-gate-card add-profile-card",
    onClick: () => setShowAddModal(true)
  }, /*#__PURE__*/React.createElement("div", {
    className: "profile-avatar-frame add-avatar-frame"
  }, /*#__PURE__*/React.createElement("span", {
    className: "add-plus-icon"
  }, "+")), /*#__PURE__*/React.createElement("span", {
    className: "profile-gate-name"
  }, "Add Profile"))), /*#__PURE__*/React.createElement("div", {
    className: "profile-gate-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "profile-manage-btn",
    onClick: () => setIsManaging(!isManaging)
  }, isManaging ? "Done" : "Manage Profiles"))), showAddModal && /*#__PURE__*/React.createElement(ManageProfilesModal, {
    onClose: () => setShowAddModal(false)
  }));
}