import React from "react";
import { useMovie } from "../../context/MovieContext.jsx";
export function Toast() {
  const {
    toast
  } = useMovie();
  if (!toast.visible) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: `netflix-toast-notification ${toast.type} animate-slide-up`
  }, /*#__PURE__*/React.createElement("span", {
    className: "toast-icon"
  }, toast.type === "success" ? "✓" : toast.type === "error" ? "⚠" : "ℹ"), /*#__PURE__*/React.createElement("span", {
    className: "toast-message"
  }, toast.message));
}