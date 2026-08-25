import React, { useState } from "react";
import { useProfile } from "../../context/ProfileContext.jsx";
import { useMovie } from "../../context/MovieContext.jsx";
import { ManageProfilesModal } from "./ManageProfilesModal.jsx";
import { NetflixWordmark } from "../Common/BrandLogo.jsx";

export function ProfileGate() {
  const { profiles, switchProfile, setIsProfileGateOpen, setIsProfileSelected } = useProfile();
  const { showToast } = useMovie();
  const [isManaging, setIsManaging] = useState(false);
  const [modalTarget, setModalTarget] = useState(null); // null, 'add', or profile object

  const handleCardClick = (profile) => {
    if (isManaging) {
      setModalTarget(profile);
    } else {
      switchProfile(profile.id);
      setIsProfileGateOpen(false);
      setIsProfileSelected(true);
      showToast(`Welcome back, ${profile.name}!`, "success");
    }
  };

  return (
    <div className="profile-gate-overlay animate-fade-in">
      <div className="profile-gate-header">
        <NetflixWordmark height={36} />
      </div>

      <div className="profile-gate-container">
        <h1 className="profile-gate-heading">
          {isManaging ? "Manage Profiles" : "Who's watching?"}
        </h1>

        <div className="profile-cards-grid">
          {profiles.map((p) => (
            <div 
              key={p.id} 
              className="profile-gate-card"
              onClick={() => handleCardClick(p)}
            >
              <div className="profile-avatar-frame" style={{ borderColor: p.color || "#E50914" }}>
                <img src={p.avatar} alt={p.name} className="profile-gate-avatar-img" />
                {isManaging && (
                  <div className="profile-edit-badge" title="Click to edit name & avatar">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </div>
                )}
                {p.isKids && (
                  <span className="profile-gate-kids-tag">KIDS</span>
                )}
              </div>
              <span className="profile-gate-name">{p.name}</span>
            </div>
          ))}

          {/* Add Profile Card */}
          <div 
            className="profile-gate-card add-profile-card"
            onClick={() => setModalTarget("add")}
          >
            <div className="profile-avatar-frame add-avatar-frame">
              <span className="add-plus-icon">+</span>
            </div>
            <span className="profile-gate-name">Add Profile</span>
          </div>
        </div>

        <div className="profile-gate-actions">
          <button 
            type="button"
            className={`profile-manage-btn ${isManaging ? "done-btn" : ""}`}
            onClick={() => setIsManaging(!isManaging)}
          >
            {isManaging ? "Done" : "Manage Profiles"}
          </button>
        </div>
      </div>

      {modalTarget && (
        <ManageProfilesModal 
          profileToEdit={typeof modalTarget === "object" ? modalTarget : null}
          onClose={() => setModalTarget(null)} 
        />
      )}
    </div>
  );
}
