import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { StorageService } from "../services/storageService.js";
import { PROFILES_CONFIG } from "../services/movieService.js";
import { AVATAR_OPTIONS } from "../services/avatarService.js";

const ProfileContext = createContext(null);

export function ProfileProvider({ children }) {
  const [profiles, setProfiles] = useState(() => StorageService.getProfiles());
  const [currentProfileId, setCurrentProfileId] = useState(() => StorageService.getActiveProfileId());
  const [isProfileGateOpen, setIsProfileGateOpen] = useState(false);
  const [isProfileSelected, setIsProfileSelected] = useState(false);

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

  const switchProfile = useCallback((profileId) => {
    StorageService.setActiveProfileId(profileId);
    setCurrentProfileId(profileId);
    setIsProfileGateOpen(false);
    setIsProfileSelected(true);

    const targetMyList = StorageService.getMyList(profileId);
    const targetCW = StorageService.getContinueWatching(profileId);
    setMyList(targetMyList);
    setContinueWatching(targetCW);
  }, []);

  const updateProfile = useCallback((profileId, updates) => {
    const updated = StorageService.updateProfile(profileId, updates);
    setProfiles(updated);
  }, []);

  const deleteProfile = useCallback((profileId) => {
    const updated = StorageService.deleteProfile(profileId);
    setProfiles(updated);
    if (currentProfileId === profileId) {
      switchProfile(updated[0]?.id || "profile-alex");
    }
  }, [currentProfileId, switchProfile]);

  const toggleMyList = useCallback((movieId) => {
    if (!currentProfile) return { isAdded: false, updatedList: [] };
    const result = StorageService.toggleMyList(currentProfile.id, movieId);
    setMyList(result.updatedList);
    return result;
  }, [currentProfile]);

  const isInMyList = useCallback((movieId) => {
    return myList.includes(movieId);
  }, [myList]);

  const updateProgress = useCallback((movieId, progressPercent, durationMinutes, watchedMinutes, episodeTitle) => {
    if (!currentProfile) return;
    const updatedCW = StorageService.updateWatchProgress(
      currentProfile.id,
      movieId,
      progressPercent,
      durationMinutes,
      watchedMinutes,
      episodeTitle
    );
    setContinueWatching(updatedCW);
  }, [currentProfile]);

  const removeFromContinueWatching = useCallback((movieId) => {
    if (!currentProfile) return;
    const updatedCW = StorageService.removeFromContinueWatching(currentProfile.id, movieId);
    setContinueWatching(updatedCW);
  }, [currentProfile]);

  const addProfile = useCallback((name, isKids = false, avatarSvg = null) => {
    const chosenAvatar = avatarSvg || (isKids ? AVATAR_OPTIONS[2].svg : AVATAR_OPTIONS[Math.floor(Math.random() * AVATAR_OPTIONS.length)].svg);
    const newProfile = {
      id: `profile-${Date.now()}`,
      name: name.trim(),
      avatar: chosenAvatar,
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

  return (
    <ProfileContext.Provider
      value={{
        profiles,
        currentProfile,
        currentProfileId,
        isKids: currentProfile ? currentProfile.isKids : false,
        myList,
        continueWatching,
        switchProfile,
        updateProfile,
        deleteProfile,
        toggleMyList,
        isInMyList,
        updateProgress,
        removeFromContinueWatching,
        addProfile,
        isProfileGateOpen,
        setIsProfileGateOpen,
        isProfileSelected,
        setIsProfileSelected
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
}
