import React, { useRef, useState } from "react";
import { useProfile } from "../../context/ProfileContext.jsx";
import { useMovie } from "../../context/MovieContext.jsx";
import { ALL_MOVIES } from "../../services/movieService.js";

export function ContinueWatchingRow() {
  const { continueWatching, removeFromContinueWatching, currentProfile } = useProfile();
  const { openPlayer, openModal, showToast } = useMovie();
  const rowRef = useRef(null);

  if (!continueWatching || continueWatching.length === 0) {
    return null;
  }

  // Hydrate continue watching with full movie metadata
  const items = continueWatching
    .map(item => {
      const movie = ALL_MOVIES.find(m => m.id === item.movieId);
      if (!movie) return null;
      return {
        ...item,
        movie
      };
    })
    .filter(Boolean);

  if (items.length === 0) return null;

  const handleRemove = (e, movieId, title) => {
    e.stopPropagation();
    removeFromContinueWatching(movieId);
    showToast(`Removed "${title}" from Continue Watching`, "info");
  };

  const handlePlay = (movie, watchedMinutes, episodeTitle) => {
    openPlayer(movie, episodeTitle ? { title: episodeTitle } : null);
  };

  return (
    <section className="netflix-movie-row-section continue-watching-section">
      <div className="continue-watching-header">
        <h2 className="row-section-title">
          Continue Watching for {currentProfile?.name || "You"}
        </h2>
        <span className="profile-indicator-tag">
          {currentProfile?.name}
        </span>
      </div>

      <div className="row-slider-wrapper">
        <div className="row-cards-container cw-cards-container" ref={rowRef}>
          {items.map(({ movie, progressPercent, durationMinutes, watchedMinutes, episodeTitle }) => {
            const remainingMins = Math.max(1, (durationMinutes || 60) - (watchedMinutes || 0));

            return (
              <div 
                key={movie.id} 
                className="cw-card"
                onClick={() => openModal(movie)}
              >
                <div className="cw-image-wrapper">
                  <img 
                    src={movie.backdrop || movie.poster} 
                    alt={movie.title} 
                    className="cw-poster-img"
                  />
                  <div className="cw-play-overlay" onClick={(e) => { e.stopPropagation(); handlePlay(movie, watchedMinutes, episodeTitle); }}>
                    <div className="cw-play-btn-circle">▶</div>
                  </div>
                  <button 
                    className="cw-remove-btn" 
                    onClick={(e) => handleRemove(e, movie.id, movie.title)}
                    title="Remove from Continue Watching"
                  >
                    ✕
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="cw-progress-container">
                  <div 
                    className="cw-progress-bar-fill" 
                    style={{ width: `${Math.min(100, Math.max(5, progressPercent))}%` }}
                  ></div>
                </div>

                {/* Card Info & Meta */}
                <div className="cw-info-row">
                  <div className="cw-title-wrap">
                    <span className="cw-movie-title">{movie.title}</span>
                    {episodeTitle && <span className="cw-episode-subtitle">{episodeTitle}</span>}
                  </div>
                  <span className="cw-time-remaining">{remainingMins}m left ({progressPercent}%)</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
