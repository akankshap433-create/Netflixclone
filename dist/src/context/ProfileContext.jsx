import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { StorageService } from "../services/storageService.js";
import { PROFILES_CONFIG } from "../services/movieService.js";
const ProfileContext = /*#__PURE__*/createContext(null);
export function ProfileProvider({
  children
}) {
  const [profiles, setProfiles] = useState(() => StorageService.getProfiles());
  const [currentProfileId, setCurrentProfileId] = useState(() => StorageService.getActiveProfileId());
  const [isProfileGateOpen, setIsProfileGateOpen] = useState(false);

  // Profile-specific reactive state
  const [myList, setMyList] = useState([]);
  const [continueWatching, setContinueWatching] = useState([]);

  // Find active profile object
  const currentProfile = profiles.find(p => p.id === currentProfileId) || profiles[0] || PROFILES_CONFIG[0];

  // Refresh profile-specific data whenever currentProfileId changes
  useEffect(() => {
    if (currentProfile) {
      const storedMyList = StorageService.getMyList(currentProfile.id);
      const storedCW = StorageService.getContinueWatching(currentProfile.id);
      setMyList(storedMyList);
      setContinueWatching(storedCW);
    }
  }, [currentProfileId, currentProfile]);
  const switchProfile = useCallback(profileId => {
    StorageService.setActiveProfileId(profileId);
    setCurrentProfileId(profileId);
    setIsProfileGateOpen(false);

    // Immediately load the target profile's data
    const targetMyList = StorageService.getMyList(profileId);
    const targetCW = StorageService.getContinueWatching(profileId);
    setMyList(targetMyList);
    setContinueWatching(targetCW);
  }, []);
  const toggleMyList = useCallback(movieId => {
    if (!currentProfile) return {
      isAdded: false,
      updatedList: []
    };
    const result = StorageService.toggleMyList(currentProfile.id, movieId);
    setMyList(result.updatedList);
    return result;
  }, [currentProfile]);
  const isInMyList = useCallback(movieId => {
    return myList.includes(movieId);
  }, [myList]);
  const updateProgress = useCallback((movieId, progressPercent, durationMinutes, watchedMinutes) => {
    if (!currentProfile) return;
    const updatedCW = StorageService.updateWatchProgress(currentProfile.id, movieId, progressPercent, durationMinutes, watchedMinutes);
    setContinueWatching(updatedCW);
  }, [currentProfile]);
  const removeFromContinueWatching = useCallback(movieId => {
    if (!currentProfile) return;
    const updatedCW = StorageService.removeFromContinueWatching(currentProfile.id, movieId);
    setContinueWatching(updatedCW);
  }, [currentProfile]);
  const addProfile = useCallback((name, isKids = false) => {
    const avatars = ["https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png", "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfn36qZ30e1r_bM9d98r8qN96e00.png?r=88c", "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABe0o_vE2b8sEw8x2w17g20800.png?r=fcd", "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABdYLC8K_f139jQ_tD3-B.png?r=54d"];
    const newProfile = {
      id: `profile-${Date.now()}`,
      name: name.trim(),
      avatar: avatars[Math.floor(Math.random() * avatars.length)],
      color: isKids ? "#3A86FF" : "#E50914",
      isKids: Boolean(isKids),
      preferredGenres: isKids ? ["Animation", "Family"] : ["Action", "Drama", "Comedy"],
      bio: `${name}'s Profile`,
      initialContinueWatching: [],
      initialMyList: []
    };
    const updated = [...profiles, newProfile];
    StorageService.saveProfiles(updated);
    setProfiles(updated);
    switchProfile(newProfile.id);
  }, [profiles, switchProfile]);
  return /*#__PURE__*/React.createElement(ProfileContext.Provider, {
    value: {
      profiles,
      currentProfile,
      currentProfileId,
      isKids: currentProfile ? currentProfile.isKids : false,
      myList,
      continueWatching,
      switchProfile,
      toggleMyList,
      isInMyList,
      updateProgress,
      removeFromContinueWatching,
      addProfile,
      isProfileGateOpen,
      setIsProfileGateOpen
    }
  }, children);
}
export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
}