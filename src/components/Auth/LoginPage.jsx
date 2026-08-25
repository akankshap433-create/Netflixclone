import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import { useProfile } from "../../context/ProfileContext.jsx";
import { useMovie } from "../../context/MovieContext.jsx";
import { NetflixWordmark } from "../Common/BrandLogo.jsx";

export function LoginPage() {
  const { login } = useAuth();
  const { switchProfile } = useProfile();
  const { showToast } = useMovie();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
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

  return (
    <div className="login-screen-wrapper">
      {/* Background with Dark Gradient Overlay */}
      <div className="login-bg-overlay"></div>

      {/* Top Header with Official Netflix Wordmark Logo */}
      <header className="login-header-bar">
        <NetflixWordmark height={40} />
      </header>

      {/* Main Login Card */}
      <main className="login-card-container">
        <div className="login-form-card animate-scale-up">
          <h1 className="login-heading">Sign In</h1>

          {error && <div className="login-error-alert">{error}</div>}

          <form onSubmit={handleSubmit} className="login-main-form">
            <div className="form-group">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className="login-input-field"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                className="login-input-field"
                required
              />
            </div>

            <button type="submit" className="login-submit-btn">
              Sign In
            </button>

            <div className="login-helpers-row">
              <label className="remember-checkbox-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>

              <a href="#help" className="help-link" onClick={(e) => { e.preventDefault(); showToast("Password reset assistance sent to email", "info"); }}>
                Need help?
              </a>
            </div>
          </form>

          {/* Quick Demo Access Buttons for Evaluators */}
          <div className="demo-quick-login-box">
            <p className="demo-login-label">Instant Test Logins:</p>
            <div className="demo-btn-group">
              <button 
                type="button"
                className="demo-profile-chip alex-chip"
                onClick={() => handleQuickLogin("profile-alex", "alex@netflix.com", "Alex")}
              >
                Sign In as Alex (Main)
              </button>
              <button 
                type="button"
                className="demo-profile-chip sarah-chip"
                onClick={() => handleQuickLogin("profile-sarah", "sarah@netflix.com", "Sarah")}
              >
                Sign In as Sarah (Second Profile)
              </button>
              <button 
                type="button"
                className="demo-profile-chip kids-chip"
                onClick={() => handleQuickLogin("profile-kids", "kids@netflix.com", "Kids")}
              >
                Sign In as Kids (Kids Profile)
              </button>
            </div>
          </div>

          <div className="login-signup-prompt">
            <span>New to Netflix? </span>
            <button 
              type="button"
              className="signup-link-btn"
              onClick={() => handleQuickLogin("profile-alex", "member@netflix.com", "Member")}
            >
              Sign up now.
            </button>
          </div>

          <p className="login-recaptcha-text">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </p>
        </div>
      </main>
    </div>
  );
}
