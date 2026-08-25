import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import { useProfile } from "../../context/ProfileContext.jsx";
import { useMovie } from "../../context/MovieContext.jsx";
export function LoginPage() {
  const {
    login
  } = useAuth();
  const {
    switchProfile
  } = useProfile();
  const {
    showToast
  } = useMovie();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 4) {
      setError("Your password must contain between 4 and 60 characters.");
      return;
    }
    login(email, password);
    showToast(`Signed in as ${email}`, "success");
  };
  const handleQuickLogin = (profileId, demoEmail, name) => {
    login(demoEmail, "password123");
    switchProfile(profileId);
    showToast(`Welcome back, ${name}!`, "success");
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "login-screen-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "login-bg-overlay"
  }), /*#__PURE__*/React.createElement("header", {
    className: "login-header-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "login-logo-text"
  }, "NETFLIX")), /*#__PURE__*/React.createElement("main", {
    className: "login-card-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "login-form-card animate-scale-up"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "login-heading"
  }, "Sign In"), error && /*#__PURE__*/React.createElement("div", {
    className: "login-error-alert"
  }, error), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "login-main-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "Email address",
    value: email,
    onChange: e => {
      setEmail(e.target.value);
      setError("");
    },
    className: "login-input-field",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("input", {
    type: "password",
    placeholder: "Password",
    value: password,
    onChange: e => {
      setPassword(e.target.value);
      setError("");
    },
    className: "login-input-field",
    required: true
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "login-submit-btn"
  }, "Sign In"), /*#__PURE__*/React.createElement("div", {
    className: "login-helpers-row"
  }, /*#__PURE__*/React.createElement("label", {
    className: "remember-checkbox-label"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: rememberMe,
    onChange: e => setRememberMe(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", null, "Remember me")), /*#__PURE__*/React.createElement("a", {
    href: "#help",
    className: "help-link",
    onClick: e => {
      e.preventDefault();
      showToast("Reset link simulated", "info");
    }
  }, "Need help?"))), /*#__PURE__*/React.createElement("div", {
    className: "demo-quick-login-box"
  }, /*#__PURE__*/React.createElement("p", {
    className: "demo-login-label"
  }, "\u26A1 Instant Test Logins:"), /*#__PURE__*/React.createElement("div", {
    className: "demo-btn-group"
  }, /*#__PURE__*/React.createElement("button", {
    className: "demo-profile-chip alex-chip",
    onClick: () => handleQuickLogin("profile-alex", "alex@netflix.com", "Alex")
  }, "\uD83D\uDC64 Alex (Main)"), /*#__PURE__*/React.createElement("button", {
    className: "demo-profile-chip sarah-chip",
    onClick: () => handleQuickLogin("profile-sarah", "sarah@netflix.com", "Sarah")
  }, "\uD83D\uDC64 Sarah (Other)"), /*#__PURE__*/React.createElement("button", {
    className: "demo-profile-chip kids-chip",
    onClick: () => handleQuickLogin("profile-kids", "kids@netflix.com", "Kids")
  }, "\uD83E\uDDD2 Kids Zone"))), /*#__PURE__*/React.createElement("div", {
    className: "login-signup-prompt"
  }, /*#__PURE__*/React.createElement("span", null, "New to Netflix? "), /*#__PURE__*/React.createElement("button", {
    className: "signup-link-btn",
    onClick: () => handleQuickLogin("profile-alex", "member@netflix.com", "Member")
  }, "Sign up now.")), /*#__PURE__*/React.createElement("p", {
    className: "login-recaptcha-text"
  }, "This page is protected by Google reCAPTCHA to ensure you're not a bot."))));
}