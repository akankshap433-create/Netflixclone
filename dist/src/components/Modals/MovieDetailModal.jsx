import React, { useEffect } from "react";
import { useMovie } from "../../context/MovieContext.jsx";
import { useProfile } from "../../context/ProfileContext.jsx";
import { ALL_MOVIES, getMoviesForProfile } from "../../services/movieService.js";
export function MovieDetailModal() {
  const {
    selectedMovie,
    closeModal,
    openPlayer,
    showToast
  } = useMovie();
  const {
    toggleMyList,
    isInMyList,
    currentProfile
  } = useProfile();
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === "Escape") closeModal();
    };
    if (selectedMovie) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMovie, closeModal]);
  if (!selectedMovie) return null;
  const inList = isInMyList(selectedMovie.id);
  const handleListToggle = () => {
    const {
      isAdded
    } = toggleMyList(selectedMovie.id);
    showToast(isAdded ? `Added "${selectedMovie.title}" to My List` : `Removed "${selectedMovie.title}" from My List`, isAdded ? "success" : "info");
  };
  const handlePlay = () => {
    openPlayer(selectedMovie);
  };

  // Find similar movies (share same genre, not same movie, respecting profile filters)
  const availableMovies = getMoviesForProfile(currentProfile);
  const similarMovies = availableMovies.filter(m => m.id !== selectedMovie.id && m.genres.some(g => selectedMovie.genres?.includes(g))).slice(0, 6);
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop-overlay animate-fade-in",
    onClick: closeModal
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-dialog-container animate-scale-up",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "modal-close-btn",
    onClick: closeModal,
    "aria-label": "Close modal"
  }, "\u2715"), /*#__PURE__*/React.createElement("div", {
    className: "modal-hero-banner",
    style: {
      backgroundImage: `linear-gradient(to top, #181818 0%, rgba(24,24,24,0.6) 50%, rgba(0,0,0,0.3) 100%), url("${selectedMovie.backdrop || selectedMovie.poster}")`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-hero-content"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "modal-title"
  }, selectedMovie.title), /*#__PURE__*/React.createElement("div", {
    className: "modal-action-buttons"
  }, /*#__PURE__*/React.createElement("button", {
    className: "modal-play-btn",
    onClick: handlePlay
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn-icon"
  }, "\u25B6"), /*#__PURE__*/React.createElement("span", {
    className: "btn-text"
  }, "Play")), /*#__PURE__*/React.createElement("button", {
    className: `modal-mylist-btn ${inList ? "active" : ""}`,
    onClick: handleListToggle
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn-icon"
  }, inList ? "✓" : "+"), /*#__PURE__*/React.createElement("span", {
    className: "btn-text"
  }, inList ? "In My List" : "Add to My List"))))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-grid-layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-left-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-meta-pills"
  }, /*#__PURE__*/React.createElement("span", {
    className: "meta-match"
  }, selectedMovie.match), /*#__PURE__*/React.createElement("span", {
    className: "meta-year"
  }, selectedMovie.year), /*#__PURE__*/React.createElement("span", {
    className: "meta-maturity"
  }, selectedMovie.maturity), /*#__PURE__*/React.createElement("span", {
    className: "meta-duration"
  }, selectedMovie.duration), /*#__PURE__*/React.createElement("span", {
    className: "meta-quality"
  }, selectedMovie.quality || "HD"), /*#__PURE__*/React.createElement("span", {
    className: "meta-rating"
  }, "\u2605 ", selectedMovie.rating)), /*#__PURE__*/React.createElement("p", {
    className: "modal-synopsis"
  }, selectedMovie.description)), /*#__PURE__*/React.createElement("div", {
    className: "modal-right-col"
  }, selectedMovie.cast && /*#__PURE__*/React.createElement("div", {
    className: "modal-info-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "info-label"
  }, "Cast: "), /*#__PURE__*/React.createElement("span", {
    className: "info-value"
  }, selectedMovie.cast.join(", "))), selectedMovie.creator && /*#__PURE__*/React.createElement("div", {
    className: "modal-info-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "info-label"
  }, "Creator / Director: "), /*#__PURE__*/React.createElement("span", {
    className: "info-value"
  }, selectedMovie.creator)), selectedMovie.genres && /*#__PURE__*/React.createElement("div", {
    className: "modal-info-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "info-label"
  }, "Genres: "), /*#__PURE__*/React.createElement("span", {
    className: "info-value"
  }, selectedMovie.genres.join(", "))), selectedMovie.tags && /*#__PURE__*/React.createElement("div", {
    className: "modal-info-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "info-label"
  }, "Tags: "), /*#__PURE__*/React.createElement("span", {
    className: "info-value"
  }, selectedMovie.tags.join(", "))))), similarMovies.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "modal-similar-section"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "similar-section-title"
  }, "More Like This"), /*#__PURE__*/React.createElement("div", {
    className: "similar-cards-grid"
  }, similarMovies.map(sim => /*#__PURE__*/React.createElement("div", {
    key: sim.id,
    className: "similar-movie-card",
    onClick: () => {
      // Switch modal to this movie
      const found = ALL_MOVIES.find(m => m.id === sim.id);
      if (found) {
        // Scroll to top of modal
        const modalBody = document.querySelector(".modal-dialog-container");
        if (modalBody) modalBody.scrollTop = 0;
      }
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: sim.poster,
    alt: sim.title,
    className: "similar-poster-img"
  }), /*#__PURE__*/React.createElement("div", {
    className: "similar-card-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "similar-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sim-match"
  }, sim.match), /*#__PURE__*/React.createElement("span", {
    className: "sim-year"
  }, sim.year)), /*#__PURE__*/React.createElement("h4", {
    className: "sim-title"
  }, sim.title), /*#__PURE__*/React.createElement("p", {
    className: "sim-desc"
  }, sim.description.slice(0, 85), "...")))))))));
}