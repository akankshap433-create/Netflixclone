import React, { useState } from "react";
import { useProfile } from "../../context/ProfileContext.jsx";
import { useMovie } from "../../context/MovieContext.jsx";
export function ManageProfilesModal({
  onClose
}) {
  const {
    addProfile
  } = useProfile();
  const {
    showToast
  } = useMovie();
  const [name, setName] = useState("");
  const [isKids, setIsKids] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim()) return;
    addProfile(name.trim(), isKids);
    showToast(`Created profile "${name.trim()}"`, "success");
    onClose();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop-overlay animate-fade-in",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "add-profile-dialog animate-scale-up",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("h2", null, "Add Profile"), /*#__PURE__*/React.createElement("p", {
    className: "add-profile-subtitle"
  }, "Add a profile for another person watching Netflix."), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "add-profile-form-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "add-profile-avatar-preview"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
    alt: "Avatar",
    className: "add-avatar-img"
  })), /*#__PURE__*/React.createElement("div", {
    className: "add-profile-inputs"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Name",
    value: name,
    onChange: e => setName(e.target.value),
    className: "add-name-input",
    autoFocus: true,
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    className: "kids-checkbox-label"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: isKids,
    onChange: e => setIsKids(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", null, "Kid? (Show kid-safe titles only)")))), /*#__PURE__*/React.createElement("div", {
    className: "add-profile-buttons"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "add-save-btn",
    disabled: !name.trim()
  }, "Continue"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "add-cancel-btn",
    onClick: onClose
  }, "Cancel")))));
}