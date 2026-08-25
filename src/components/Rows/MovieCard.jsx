import React, { useState } from "react";
import { useMovie } from "../../context/MovieContext.jsx";
import { useProfile } from "../../context/ProfileContext.jsx";

export function MovieCard({ movie, isLarge = false }) {
  const { openModal, openPlayer, showToast } = useMovie();
  const { toggleMyList, isInMyList } = useProfile();
  const [isHovered, setIsHovered] = useState(false);
  const [liked, setLiked] = useState(false);

  const inList = isInMyList(movie.id);

  const handleListToggle = (e) => {
    e.stopPropagation();
    const { isAdded } = toggleMyList(movie.id);
    showToast(
      isAdded ? `Added "${movie.title}" to My List` : `Removed "${movie.title}" from My List`,
      isAdded ? "success" : "info"
    );
  };

  const handleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
    showToast(liked ? "Rating removed" : `Liked "${movie.title}"`, "info");
  };

  const handlePlay = (e) => {
    e.stopPropagation();
    openPlayer(movie);
  };

  const handleOpenInfo = (e) => {
    e.stopPropagation();
    openModal(movie);
  };

  return (
    <div 
      className={`netflix-movie-card ${isLarge ? "large-card" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleOpenInfo}
      title={movie.title}
    >
      <div className="card-image-container">
        <img 
          src={movie.poster} 
          alt={movie.title} 
          className="card-poster-img" 
          loading="lazy" 
          onError={(e) => {
            e.target.src = "assets/movie1.jpg";
          }}
        />
        <div className="card-top-badges">
          {movie.quality && <span className="quality-pill">{movie.quality}</span>}
        </div>
      </div>

      {/* Hover Information Overlay Card */}
      <div className={`card-hover-overlay ${isHovered ? "active" : ""}`}>
        <div className="hover-backdrop">
          <img 
            src={movie.backdrop || movie.poster} 
            alt={movie.title} 
            className="hover-backdrop-img"
          />
          <div className="hover-gradient"></div>
        </div>

        <div className="hover-content">
          <div className="hover-actions-bar">
            <button 
              className="hover-action-btn play-circle-btn" 
              onClick={handlePlay}
              title="Play"
            >
              ▶
            </button>

            <button 
              className={`hover-action-btn ${inList ? "in-list" : ""}`} 
              onClick={handleListToggle}
              title={inList ? "Remove from My List" : "Add to My List"}
            >
              {inList ? "✓" : "+"}
            </button>

            <button 
              className={`hover-action-btn ${liked ? "liked" : ""}`} 
              onClick={handleLike}
              title="I like this"
            >
              👍
            </button>

            <button 
              className="hover-action-btn info-btn" 
              onClick={handleOpenInfo}
              title="Episode details & more"
            >
              ⌄
            </button>
          </div>

          <h4 className="hover-title">{movie.title}</h4>

          <div className="hover-meta">
            <span className="hover-match">{movie.match}</span>
            <span className="hover-maturity">{movie.maturity}</span>
            <span className="hover-duration">{movie.duration}</span>
            <span className="hover-rating">★ {movie.rating}</span>
          </div>

          <div className="hover-genres">
            {movie.genres?.slice(0, 3).map((g, i) => (
              <span key={g} className="hover-genre-pill">
                {i > 0 && " • "}
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
