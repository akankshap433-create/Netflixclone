import React, { useState } from "react";
import { useProfile } from "../../context/ProfileContext.jsx";
import { useMovie } from "../../context/MovieContext.jsx";
import { AVATAR_OPTIONS } from "../../services/avatarService.js";

export function ManageProfilesModal({ profileToEdit = null, onClose }) {
  const { addProfile, updateProfile, deleteProfile, profiles } = useProfile();
  const { showToast } = useMovie();

  const isEditing = Boolean(profileToEdit);
  const [name, setName] = useState(profileToEdit ? profileToEdit.name : "");
  const [isKids, setIsKids] = useState(profileToEdit ? profileToEdit.isKids : false);
  const [selectedAvatar, setSelectedAvatar] = useState(
    profileToEdit ? profileToEdit.avatar : AVATAR_OPTIONS[0].svg
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    if (isEditing) {
      updateProfile(profileToEdit.id, {
        name: name.trim(),
        isKids: Boolean(isKids),
        avatar: selectedAvatar,
        color: isKids ? "#3A86FF" : "#E50914"
      });
      showToast(`Updated profile "${name.trim()}"`, "success");
    } else {
      addProfile(name.trim(), isKids, selectedAvatar);
      showToast(`Created profile "${name.trim()}"`, "success");
    }
    onClose();
  };

  const handleDelete = () => {
    if (profileToEdit) {
      if (profiles.length <= 1) {
        showToast("You must keep at least one profile", "error");
        return;
      }
      deleteProfile(profileToEdit.id);
      showToast(`Deleted profile "${profileToEdit.name}"`, "info");
      onClose();
    }
  };

  return (
    <div className="modal-backdrop-overlay animate-fade-in" onClick={onClose}>
      <div className="add-profile-dialog animate-scale-up" onClick={(e) => e.stopPropagation()}>
        <h2>{isEditing ? "Edit Profile" : "Add Profile"}</h2>
        <p className="add-profile-subtitle">
          {isEditing 
            ? "Change name, avatar, and maturity settings for this profile." 
            : "Add a profile for another person watching Netflix."}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="add-profile-form-body">
            {/* Active Selected Avatar Preview */}
            <div className="add-profile-avatar-preview">
              <img 
                src={selectedAvatar} 
                alt="Selected Avatar Preview"
                className="add-avatar-img"
              />
            </div>

            <div className="add-profile-inputs">
              <input
                type="text"
                placeholder="Profile Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="add-name-input"
                autoFocus
                required
              />

              <label className="kids-checkbox-label">
                <input
                  type="checkbox"
                  checked={isKids}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setIsKids(checked);
                    if (checked) {
                      setSelectedAvatar(AVATAR_OPTIONS[2].svg);
                    }
                  }}
                />
                <span>Kid? (Show kid-safe titles only)</span>
              </label>
            </div>
          </div>

          {/* Avatar Selection Gallery */}
          <div className="avatar-selection-section">
            <h4 className="avatar-gallery-title">Choose an Avatar Logo:</h4>
            <div className="avatar-options-grid">
              {AVATAR_OPTIONS.map((opt) => {
                const isCurrent = selectedAvatar === opt.svg;
                return (
                  <div
                    key={opt.id}
                    className={`avatar-option-card ${isCurrent ? "selected" : ""}`}
                    onClick={() => setSelectedAvatar(opt.svg)}
                    title={opt.name}
                  >
                    <img src={opt.svg} alt={opt.name} className="avatar-thumbnail-img" />
                    {isCurrent && <div className="avatar-check-badge">✓</div>}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="add-profile-buttons">
            <button type="submit" className="add-save-btn" disabled={!name.trim()}>
              Save
            </button>
            <button type="button" className="add-cancel-btn" onClick={onClose}>
              Cancel
            </button>
            {isEditing && (
              <button 
                type="button" 
                className="add-delete-btn" 
                onClick={handleDelete}
              >
                Delete Profile
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
