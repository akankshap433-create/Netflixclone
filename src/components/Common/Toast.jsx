import React from "react";
import { useMovie } from "../../context/MovieContext.jsx";

export function Toast() {
  const { toast } = useMovie();

  if (!toast.visible) return null;

  return (
    <div className={`netflix-toast-notification ${toast.type} animate-slide-up`}>
      <span className="toast-icon">
        {toast.type === "success" ? "✓" : toast.type === "error" ? "⚠" : "ℹ"}
      </span>
      <span className="toast-message">{toast.message}</span>
    </div>
  );
}
