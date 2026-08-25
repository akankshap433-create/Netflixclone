import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import { useProfile } from "../../context/ProfileContext.jsx";
import { useMovie } from "../../context/MovieContext.jsx";
import { SUBSCRIPTION_PLANS } from "../../services/storageService.js";
import { NetflixWordmark } from "../Common/BrandLogo.jsx";

export function PlanSelectionPage() {
  const { selectPlan, logout, user } = useAuth();
  const { setIsProfileGateOpen, setIsProfileSelected } = useProfile();
  const { showToast } = useMovie();

  const [activePlanId, setActivePlanId] = useState("premium");

  const handleContinue = () => {
    selectPlan(activePlanId);
    const chosenPlan = SUBSCRIPTION_PLANS.find(p => p.id === activePlanId);
    showToast(`Subscribed to ${chosenPlan?.name} Plan`, "success");
    setIsProfileGateOpen(true);
    setIsProfileSelected(false);
  };

  return (
    <div className="plan-selection-screen animate-fade-in">
      <header className="plan-selection-header">
        <div className="plan-header-inner">
          <NetflixWordmark height={32} />
          <button className="plan-signout-btn" onClick={logout}>
            Sign Out
          </button>
        </div>
      </header>

      <main className="plan-selection-main">
        <div className="plan-selection-container">
          <div className="plan-step-indicator">
            STEP <strong>2</strong> OF <strong>3</strong>
          </div>
          <h1 className="plan-title">Choose the plan that's right for you</h1>

          <div className="plan-benefits-list">
            <div className="benefit-item">
              <span className="benefit-check">✓</span>
              <span>Watch all you want. Ad-free.</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-check">✓</span>
              <span>Recommendations just for you.</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-check">✓</span>
              <span>Change or cancel your plan anytime.</span>
            </div>
          </div>

          {/* Plan Cards Grid */}
          <div className="plans-grid">
            {SUBSCRIPTION_PLANS.map((plan) => {
              const isSelected = activePlanId === plan.id;
              return (
                <div 
                  key={plan.id}
                  className={`plan-card ${isSelected ? "selected" : ""}`}
                  onClick={() => setActivePlanId(plan.id)}
                >
                  <div className="plan-card-header">
                    <div className="plan-name-badge">{plan.name}</div>
                    <div className="plan-price-row">
                      <span className="plan-price">{plan.price}</span>
                      <span className="plan-period">{plan.pricePeriod}</span>
                    </div>
                    {plan.badge && (
                      <span className="plan-highlight-pill">{plan.badge}</span>
                    )}
                  </div>

                  <div className="plan-card-specs">
                    <div className="spec-row">
                      <span className="spec-label">Resolution:</span>
                      <span className="spec-val">{plan.resolution}</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-label">Video Quality:</span>
                      <span className="spec-val">{plan.videoQuality}</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-label">Screens at once:</span>
                      <span className="spec-val">{plan.screens}</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-label">Supported Devices:</span>
                      <span className="spec-val">{plan.devices.join(", ")}</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-label">Downloads:</span>
                      <span className="spec-val">{plan.downloads}</span>
                    </div>
                  </div>

                  <button 
                    type="button" 
                    className={`select-plan-btn ${isSelected ? "active" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePlanId(plan.id);
                    }}
                  >
                    {isSelected ? "✓ Selected" : "Select Plan"}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="plan-actions-footer">
            <button className="plan-continue-btn" onClick={handleContinue}>
              Continue to Profiles →
            </button>
            <p className="plan-disclaimer">
              HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
