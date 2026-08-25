import React, { useRef, useState } from "react";
import { useProfile } from "../../context/ProfileContext.jsx";
import { useMovie } from "../../context/MovieContext.jsx";
import { ALL_MOVIES } from "../../services/movieService.js";
export function ContinueWatchingRow() {
  const {
    continueWatching,
    removeFromContinueWatching,
    currentProfile
  } = useProfile();
  const {
    openPlayer,
    openModal,
    showToast
  } = useMovie();
  const rowRef = useRef(null);
  if (!continueWatching || continueWatching.length === 0) {
    return null;
  }

  // Hydrate continue watching with full movie metadata
  const items = continueWatching.map(item => {
    const movie = ALL_MOVIES.find(m => m.id === item.movieId);
    if (!movie) return null;
    return {
      ...item,
      movie
    };
  }).filter(Boolean);
  if (items.length === 0) return null;
  const handleRemove = (e, movieId, title) => {
    e.stopPropagation();
    removeFromContinueWatching(movieId);
    showToast(`Removed "${title}" from Continue Watching`, "info");
  };
  const handlePlay = (movie, watchedMinutes) => {
    openPlayer(movie);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "netflix-movie-row-section continue-watching-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "continue-watching-header"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "row-section-title"
  }, "Continue Watching for ", currentProfile?.name || "You"), /*#__PURE__*/React.createElement("span", {
    className: "profile-indicator-tag"
  }, "\uD83D\uDC64 ", currentProfile?.name)), /*#__PURE__*/React.createElement("div", {
    className: "row-slider-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-cards-container cw-cards-container",
    ref: rowRef
  }, items.map(({
    movie,
    progressPercent,
    durationMinutes,
    watchedMinutes
  }) => {
    const remainingMins = Math.max(1, (durationMinutes || 60) - (watchedMinutes || 0));
    return /*#__PURE__*/React.createElement("div", {
      key: movie.id,
      className: "cw-card",
      onClick: () => openModal(movie)
    }, /*#__PURE__*/React.createElement("div", {
      className: "cw-image-wrapper"
    }, /*#__PURE__*/React.createElement("img", {
      src: movie.backdrop || movie.poster,
      alt: movie.title,
      className: "cw-poster-img"
    }), /*#__PURE__*/React.createElement("div", {
      className: "cw-play-overlay",
      onClick: e => {
        e.stopPropagation();
        handlePlay(movie, watchedMinutes);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "cw-play-btn-circle"
    }, "\u25B6")), /*#__PURE__*/React.createElement("button", {
      className: "cw-remove-btn",
      onClick: e => handleRemove(e, movie.id, movie.title),
      title: "Remove from Continue Watching"
    }, "\u2715")), /*#__PURE__*/React.createElement("div", {
      className: "cw-progress-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "cw-progress-bar-fill",
      style: {
        width: `${Math.min(100, Math.max(5, progressPercent))}%`
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "cw-info-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "cw-movie-title"
    }, movie.title), /*#__PURE__*/React.createElement("span", {
      className: "cw-time-remaining"
    }, remainingMins, "m left (", progressPercent, "%)")));
  }))));
}