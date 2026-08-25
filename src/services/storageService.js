// ==========================================
// MULTI-PROFILE NAMESPACED STORAGE SERVICE
// Provides genuine data isolation & plan persistence
// ==========================================

import { PROFILES_CONFIG } from "./movieService.js";

const PREFIX = "netflix_clone_v2";

export const SUBSCRIPTION_PLANS = [
  {
    id: "mobile",
    name: "Mobile",
    price: "₹149",
    pricePeriod: "/month",
    resolution: "480p (SD)",
    videoQuality: "Fair",
    devices: ["Phone", "Tablet"],
    screens: 1,
    downloads: "1 device",
    badge: ""
  },
  {
    id: "basic",
    name: "Basic",
    price: "₹199",
    pricePeriod: "/month",
    resolution: "720p (HD)",
    videoQuality: "Good",
    devices: ["Phone", "Tablet", "Computer", "TV"],
    screens: 1,
    downloads: "1 device",
    badge: ""
  },
  {
    id: "standard",
    name: "Standard",
    price: "₹499",
    pricePeriod: "/month",
    resolution: "1080p (Full HD)",
    videoQuality: "Great",
    devices: ["Phone", "Tablet", "Computer", "TV"],
    screens: 2,
    downloads: "2 devices",
    badge: "Popular"
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹649",
    pricePeriod: "/month",
    resolution: "4K (Ultra HD) + HDR",
    videoQuality: "Best",
    devices: ["Phone", "Tablet", "Computer", "TV"],
    screens: 4,
    downloads: "6 devices",
    badge: "Ultra HD + Spatial Audio"
  }
];

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

  updateProfile(profileId, updates) {
    const profiles = this.getProfiles();
    const index = profiles.findIndex(p => p.id === profileId);
    if (index >= 0) {
      profiles[index] = { ...profiles[index], ...updates };
      this.saveProfiles(profiles);
    }
    return profiles;
  },

  deleteProfile(profileId) {
    const profiles = this.getProfiles();
    const filtered = profiles.filter(p => p.id !== profileId);
    this.saveProfiles(filtered);
    return filtered;
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

  // --- Subscription Plan Persistence ---
  getSelectedPlan() {
    try {
      return localStorage.getItem(`${PREFIX}_selected_plan`) || null;
    } catch (e) {
      return null;
    }
  },

  setSelectedPlan(planId) {
    try {
      localStorage.setItem(`${PREFIX}_selected_plan`, planId);
    } catch (e) {
      console.error("Failed to save plan:", e);
    }
  },

  clearSelectedPlan() {
    try {
      localStorage.removeItem(`${PREFIX}_selected_plan`);
    } catch (e) {}
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
      const profile = this.getProfiles().find(p => p.id === profileId);
      const initial = (profile && profile.initialMyList) || [];
      this.saveMyList(profileId, initial);
      return initial;
    } catch (e) {
      return [];
    }
  },

  saveMyList(profileId, list) {
    if (!profileId) return;
    try {
      localStorage.setItem(`${PREFIX}_${profileId}_mylist`, JSON.stringify(list));
    } catch (e) {}
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
    return { updatedList: updated, isAdded };
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
      const profile = this.getProfiles().find(p => p.id === profileId);
      const initial = (profile && profile.initialContinueWatching) || [];
      this.saveContinueWatching(profileId, initial);
      return initial;
    } catch (e) {
      return [];
    }
  },

  saveContinueWatching(profileId, items) {
    if (!profileId) return;
    try {
      localStorage.setItem(`${PREFIX}_${profileId}_continue_watching`, JSON.stringify(items));
    } catch (e) {}
  },

  updateWatchProgress(profileId, movieId, progressPercent, durationMinutes = 60, watchedMinutes = null, episodeTitle = null) {
    if (!profileId || !movieId) return [];
    const items = this.getContinueWatching(profileId);
    const existingIndex = items.findIndex(item => item.movieId === movieId);
    
    const calculatedWatched = watchedMinutes !== null 
      ? watchedMinutes 
      : Math.round((progressPercent / 100) * durationMinutes);

    const newItem = {
      movieId,
      progressPercent: Math.min(100, Math.max(1, Math.round(progressPercent))),
      durationMinutes,
      watchedMinutes: calculatedWatched,
      episodeTitle: episodeTitle || null,
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
      return user ? JSON.parse(user) : null;
    } catch (e) {
      return null;
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
