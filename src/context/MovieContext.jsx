import React, { createContext, useContext, useState, useCallback } from "react";
import { ALL_MOVIES } from "../services/movieService.js";

const MovieContext = createContext(null);

export function MovieProvider({ children }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [playingMovie, setPlayingMovie] = useState(null);
  const [playingEpisode, setPlayingEpisode] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("home");
  const [toast, setToast] = useState({ visible: false, message: "", type: "info" });

  const showToast = useCallback((message, type = "info") => {
    setToast({ visible: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 3000);
  }, []);

  const openModal = useCallback((movieOrId) => {
    if (typeof movieOrId === "string") {
      const found = ALL_MOVIES.find(m => m.id === movieOrId || m.title.toLowerCase() === movieOrId.toLowerCase());
      setSelectedMovie(found || null);
    } else {
      setSelectedMovie(movieOrId);
    }
  }, []);

  const closeModal = useCallback(() => {
    setSelectedMovie(null);
  }, []);

  const openPlayer = useCallback((movieOrId, episode = null) => {
    if (typeof movieOrId === "string") {
      const found = ALL_MOVIES.find(m => m.id === movieOrId || m.title.toLowerCase() === movieOrId.toLowerCase());
      setPlayingMovie(found || null);
    } else {
      setPlayingMovie(movieOrId);
    }
    setPlayingEpisode(episode);
  }, []);

  const closePlayer = useCallback(() => {
    setPlayingMovie(null);
    setPlayingEpisode(null);
  }, []);

  return (
    <MovieContext.Provider
      value={{
        selectedMovie,
        openModal,
        closeModal,
        playingMovie,
        playingEpisode,
        openPlayer,
        closePlayer,
        searchQuery,
        setSearchQuery,
        activeTab,
        setActiveTab,
        toast,
        showToast
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMovie() {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovie must be used within a MovieProvider");
  }
  return context;
}
