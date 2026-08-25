import React, { useState, useEffect } from "react";
import { useMovie } from "../../context/MovieContext.jsx";
import { useProfile } from "../../context/ProfileContext.jsx";
import { ALL_MOVIES } from "../../services/movieService.js";

export function HeroBanner() {
  const { openModal, openPlayer } = useMovie();
  const { isKids, currentProfile } = useProfile();
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    let candidates = [];
    if (isKids) {
      candidates = ALL_MOVIES.filter(m => m.id === "super-mario-bros" || m.id === "kung-fu-panda-4" || m.id === "spider-man-across-spiderverse");
    } else if (currentProfile?.id === "profile-sarah") {
      candidates = ALL_MOVIES.filter(m => m.id === "queen-of-tears" || m.id === "bridgerton" || m.id === "crash-landing-on-you");
    } else {
      // Alex / Default
      candidates = ALL_MOVIES.filter(m => m.id === "stranger-things" || m.id === "squid-game" || m.id === "the-witcher" || m.id === "money-heist");
    }

    const selected = candidates[0] || ALL_MOVIES[0];
    setFeaturedMovie(selected);
  }, [isKids, currentProfile]);

  if (!featuredMovie) return null;

  return (
    <div className="hero-banner-container">
      {/* Background Backdrop Image */}
      <div 
        className="hero-backdrop-image"
        style={{
          backgroundImage: `linear-gradient(to top, #141414 0%, rgba(20,20,20,0.6) 40%, rgba(20,20,20,0.2) 70%, rgba(20,20,20,0.7) 100%), linear-gradient(to right, #141414 0%, rgba(20,20,20,0.8) 35%, transparent 70%), url("${featuredMovie.backdrop || featuredMovie.poster}")`
        }}
      >
        <div className="hero-gradient-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content-wrapper">
        <div className="hero-badge-row">
          <span className="hero-original-badge">
            <span className="n-badge-red">N</span> {featuredMovie.type === "series" ? "SERIES" : "FILM"}
          </span>
          <span className="hero-top10-badge">🏆 TOP 10 IN STREAMING TODAY</span>
        </div>

        <h1 className="hero-movie-title">{featuredMovie.title}</h1>

        <div className="hero-meta-row">
          <span className="hero-match-score">{featuredMovie.match}</span>
          <span className="hero-maturity-badge">{featuredMovie.maturity}</span>
          <span className="hero-duration">{featuredMovie.duration}</span>
          <span className="hero-quality-badge">{featuredMovie.quality}</span>
          <span className="hero-rating-score">★ {featuredMovie.rating}</span>
        </div>

        <p className="hero-description-text">{featuredMovie.description}</p>

        <div className="hero-genres-row">
          {featuredMovie.genres?.map((g, idx) => (
            <span key={g} className="hero-genre-tag">
              {idx > 0 && <span className="genre-dot">•</span>}
              {g}
            </span>
          ))}
        </div>

        <div className="hero-actions-row">
          <button 
            type="button"
            className="hero-play-btn"
            onClick={() => openPlayer(featuredMovie)}
            title="Play Now"
          >
            <span className="btn-icon">▶</span>
            <span className="btn-text">Play</span>
          </button>

          <button 
            type="button"
            className="hero-info-btn"
            onClick={() => openModal(featuredMovie)}
            title="More Information"
          >
            <span className="btn-icon">ℹ</span>
            <span className="btn-text">More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
