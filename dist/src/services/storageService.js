// ==========================================
// MULTI-PROFILE NAMESPACED STORAGE SERVICE
// Provides genuine data isolation between profiles
// ==========================================

import { PROFILES_CONFIG } from "./movieService.js";
const PREFIX = "netflix_clone_v2";
export const StorageService = {
  // --- Profiles Management ---
  getProfiles() {
    try {
      const stored = localStorage.getItem(`${PREFIX}_profiles`);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error("Failed to read profiles from localStorage:", e);
    }
    // Initialize default profiles
    this.saveProfiles(PROFILES_CONFIG);
    return PROFILES_CONFIG;
  },
  saveProfiles(profiles) {
    try {
      localStorage.setItem(`${PREFIX}_profiles`, JSON.stringify(profiles));
    } catch (e) {
      console.error("Failed to save profiles:", e);
    }
  },
  getActiveProfileId() {
    try {
      return localStorage.getItem(`${PREFIX}_active_profile`) || "profile-alex";
    } catch (e) {
      return "profile-alex";
    }
  },
  setActiveProfileId(profileId) {
    try {
      localStorage.setItem(`${PREFIX}_active_profile`, profileId);
    } catch (e) {
      console.error("Failed to set active profile:", e);
    }
  },
  // --- Profile-Isolated My List ---
  getMyList(profileId) {
    if (!profileId) return [];
    try {
      const key = `${PREFIX}_${profileId}_mylist`;
      const stored = localStorage.getItem(key);
      if (stored !== null) {
        return JSON.parse(stored);
      }
      // Initialize with default profile data
      const profile = this.getProfiles().find(p => p.id === profileId);
      const initial = profile && profile.initialMyList || [];
      this.saveMyList(profileId, initial);
      return initial;
    } catch (e) {
      console.error(`Error reading My List for ${profileId}:`, e);
      return [];
    }
  },
  saveMyList(profileId, list) {
    if (!profileId) return;
    try {
      localStorage.setItem(`${PREFIX}_${profileId}_mylist`, JSON.stringify(list));
    } catch (e) {
      console.error(`Error saving My List for ${profileId}:`, e);
    }
  },
  toggleMyList(profileId, movieId) {
    const list = this.getMyList(profileId);
    const index = list.indexOf(movieId);
    let updated;
    let isAdded = false;
    if (index >= 0) {
      updated = list.filter(id => id !== movieId);
      isAdded = false;
    } else {
      updated = [movieId, ...list];
      isAdded = true;
    }
    this.saveMyList(profileId, updated);
    return {
      updatedList: updated,
      isAdded
    };
  },
  isInMyList(profileId, movieId) {
    const list = this.getMyList(profileId);
    return list.includes(movieId);
  },
  // --- Profile-Isolated Continue Watching ---
  getContinueWatching(profileId) {
    if (!profileId) return [];
    try {
      const key = `${PREFIX}_${profileId}_continue_watching`;
      const stored = localStorage.getItem(key);
      if (stored !== null) {
        return JSON.parse(stored);
      }
      // Initialize default continue watching for this profile
      const profile = this.getProfiles().find(p => p.id === profileId);
      const initial = profile && profile.initialContinueWatching || [];
      this.saveContinueWatching(profileId, initial);
      return initial;
    } catch (e) {
      console.error(`Error reading Continue Watching for ${profileId}:`, e);
      return [];
    }
  },
  saveContinueWatching(profileId, items) {
    if (!profileId) return;
    try {
      localStorage.setItem(`${PREFIX}_${profileId}_continue_watching`, JSON.stringify(items));
    } catch (e) {
      console.error(`Error saving Continue Watching for ${profileId}:`, e);
    }
  },
  updateWatchProgress(profileId, movieId, progressPercent, durationMinutes = 60, watchedMinutes = null) {
    if (!profileId || !movieId) return [];
    const items = this.getContinueWatching(profileId);
    const existingIndex = items.findIndex(item => item.movieId === movieId);
    const calculatedWatched = watchedMinutes !== null ? watchedMinutes : Math.round(progressPercent / 100 * durationMinutes);
    const newItem = {
      movieId,
      progressPercent: Math.min(100, Math.max(1, Math.round(progressPercent))),
      durationMinutes,
      watchedMinutes: calculatedWatched,
      lastWatched: Date.now()
    };
    let updated;
    if (existingIndex >= 0) {
      updated = [...items];
      updated[existingIndex] = newItem;
    } else {
      updated = [newItem, ...items];
    }
    this.saveContinueWatching(profileId, updated);
    return updated;
  },
  removeFromContinueWatching(profileId, movieId) {
    if (!profileId || !movieId) return [];
    const items = this.getContinueWatching(profileId);
    const updated = items.filter(item => item.movieId !== movieId);
    this.saveContinueWatching(profileId, updated);
    return updated;
  },
  // --- Auth Storage ---
  getAuthUser() {
    try {
      const user = localStorage.getItem(`${PREFIX}_auth_user`);
      return user ? JSON.parse(user) : {
        email: "alex@netflix.com",
        name: "Alex"
      };
    } catch (e) {
      return {
        email: "alex@netflix.com",
        name: "Alex"
      };
    }
  },
  setAuthUser(user) {
    try {
      localStorage.setItem(`${PREFIX}_auth_user`, JSON.stringify(user));
    } catch (e) {}
  },
  clearAuthUser() {
    try {
      localStorage.removeItem(`${PREFIX}_auth_user`);
    } catch (e) {}
  }
};