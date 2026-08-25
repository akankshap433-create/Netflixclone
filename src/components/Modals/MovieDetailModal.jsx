import React, { useState, useEffect, useRef } from "react";
import { useMovie } from "../../context/MovieContext.jsx";
import { useProfile } from "../../context/ProfileContext.jsx";
import { ALL_MOVIES, getSimilarMovies } from "../../services/movieService.js";

export function MovieDetailModal() {
  const { selectedMovie, openModal, closeModal, openPlayer, showToast } = useMovie();
  const { toggleMyList, isInMyList, currentProfile } = useProfile();
  const [selectedSeasonNum, setSelectedSeasonNum] = useState(1);
  const modalContainerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (selectedMovie) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setSelectedSeasonNum(1);
      if (modalContainerRef.current) {
        modalContainerRef.current.scrollTop = 0;
      }
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMovie, closeModal]);

  if (!selectedMovie) return null;

  const inList = isInMyList(selectedMovie.id);

  const handleListToggle = (movieId, title) => {
    const { isAdded } = toggleMyList(movieId);
    showToast(
      isAdded ? `Added "${title}" to My List` : `Removed "${title}" from My List`,
      isAdded ? "success" : "info"
    );
  };

  const handlePlay = (movie = selectedMovie) => {
    openPlayer(movie);
  };

  const handlePlayEpisode = (ep) => {
    openPlayer(selectedMovie, ep);
  };

  const handleSelectSimilar = (movie) => {
    openModal(movie);
    setSelectedSeasonNum(1);
    const backdrop = document.querySelector(".modal-backdrop-overlay");
    if (backdrop) backdrop.scrollTo({ top: 0, behavior: "smooth" });
    if (modalContainerRef.current) modalContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Dynamically ranked similar movies
  const similarMovies = getSimilarMovies(selectedMovie, currentProfile);

  const seasonsList = selectedMovie.seasons || [];
  const currentSeason = seasonsList.find(s => s.seasonNumber === selectedSeasonNum) || seasonsList[0];

  return (
    <div className="modal-backdrop-overlay animate-fade-in" onClick={closeModal}>
      <div 
        className="modal-dialog-container animate-scale-up" 
        ref={modalContainerRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prominent High-Contrast Close Button */}
        <button 
          type="button"
          className="modal-close-btn" 
          onClick={closeModal} 
          aria-label="Close modal"
          title="Close (Esc)"
        >
          ✕
        </button>

        {/* Modal Hero Banner */}
        <div 
          className="modal-hero-banner"
          style={{
            backgroundImage: `linear-gradient(to top, #181818 0%, rgba(24,24,24,0.6) 50%, rgba(0,0,0,0.3) 100%), url("${selectedMovie.backdrop || selectedMovie.poster}")`
          }}
        >
          <div className="modal-hero-content">
            <h1 className="modal-title">{selectedMovie.title}</h1>

            <div className="modal-action-buttons">
              <button type="button" className="modal-play-btn" onClick={() => handlePlay(selectedMovie)}>
                <span className="btn-icon">▶</span>
                <span className="btn-text">Play</span>
              </button>

              <button 
                type="button"
                className={`modal-mylist-btn ${inList ? "active" : ""}`} 
                onClick={() => handleListToggle(selectedMovie.id, selectedMovie.title)}
              >
                <span className="btn-icon">{inList ? "✓" : "+"}</span>
                <span className="btn-text">{inList ? "In My List" : "Add to My List"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Body & Metadata */}
        <div className="modal-body-content">
          <div className="modal-grid-layout">
            {/* Left Column: Metadata & Overview */}
            <div className="modal-left-col">
              <div className="modal-meta-pills">
                <span className="meta-match">{selectedMovie.match}</span>
                <span className="meta-year">{selectedMovie.year}</span>
                <span className="meta-maturity">{selectedMovie.maturity}</span>
                <span className="meta-duration">{selectedMovie.duration}</span>
                <span className="meta-quality">{selectedMovie.quality || "HD"}</span>
                <span className="meta-rating">★ {selectedMovie.rating}</span>
              </div>

              <p className="modal-synopsis">{selectedMovie.description}</p>
            </div>

            {/* Right Column: Cast, Creator, Genres */}
            <div className="modal-right-col">
              {selectedMovie.cast && (
                <div className="modal-info-row">
                  <span className="info-label">Cast: </span>
                  <span className="info-value">{selectedMovie.cast.join(", ")}</span>
                </div>
              )}

              {selectedMovie.creator && (
                <div className="modal-info-row">
                  <span className="info-label">Creator / Director: </span>
                  <span className="info-value">{selectedMovie.creator}</span>
                </div>
              )}

              {selectedMovie.genres && (
                <div className="modal-info-row">
                  <span className="info-label">Genres: </span>
                  <span className="info-value">{selectedMovie.genres.join(", ")}</span>
                </div>
              )}

              {selectedMovie.tags && (
                <div className="modal-info-row">
                  <span className="info-label">Tags: </span>
                  <span className="info-value">{selectedMovie.tags.join(", ")}</span>
                </div>
              )}
            </div>
          </div>

          {/* TV SERIES SEASONS & EPISODES SECTION */}
          {seasonsList.length > 0 && (
            <div className="modal-episodes-section">
              <div className="episodes-header-row">
                <h3 className="episodes-heading">Episodes</h3>

                {seasonsList.length > 1 && (
                  <div className="season-select-wrapper">
                    <select 
                      value={selectedSeasonNum} 
                      onChange={(e) => setSelectedSeasonNum(Number(e.target.value))}
                      className="season-dropdown-select"
                    >
                      {seasonsList.map(s => (
                        <option key={s.seasonNumber} value={s.seasonNumber}>
                          {s.seasonTitle} ({s.episodes.length} Episodes)
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              <div className="episodes-list">
                {currentSeason?.episodes.map((ep) => (
                  <div 
                    key={ep.episodeNumber} 
                    className="episode-item-card"
                    onClick={() => handlePlayEpisode(ep)}
                  >
                    <span className="episode-num-badge">{ep.episodeNumber}</span>
                    <div className="episode-thumb-wrap">
                      <img src={ep.thumbnail || selectedMovie.backdrop} alt={ep.title} className="episode-thumb-img" />
                      <div className="episode-play-icon">▶</div>
                    </div>
                    <div className="episode-details">
                      <div className="episode-title-row">
                        <span className="episode-title">{ep.title}</span>
                        <span className="episode-duration">{ep.duration}</span>
                      </div>
                      <p className="episode-synopsis">{ep.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* More Like This Section */}
          {similarMovies.length > 0 && (
            <div className="modal-similar-section">
              <h3 className="similar-section-title">More Like This</h3>
              <div className="similar-cards-grid">
                {similarMovies.map((sim) => {
                  const isSimInList = isInMyList(sim.id);
                  return (
                    <div 
                      key={sim.id} 
                      className="similar-movie-card"
                      onClick={() => handleSelectSimilar(sim)}
                      title={`View details for ${sim.title}`}
                    >
                      <div className="similar-card-media">
                        <img 
                          src={sim.backdrop || sim.poster} 
                          alt={sim.title} 
                          className="similar-poster-img"
                          loading="lazy" 
                        />
                        <div className="similar-play-badge">▶</div>
                      </div>

                      <div className="similar-card-info">
                        <div className="similar-meta-top">
                          <span className="sim-match">{sim.match}</span>
                          <span className="sim-maturity">{sim.maturity}</span>
                          <span className="sim-duration">{sim.duration}</span>
                          <button
                            type="button"
                            className={`similar-add-btn ${isSimInList ? "in-list" : ""}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleListToggle(sim.id, sim.title);
                            }}
                            title={isSimInList ? "Remove from My List" : "Add to My List"}
                          >
                            {isSimInList ? "✓" : "+"}
                          </button>
                        </div>

                        <h4 className="sim-title">{sim.title}</h4>
                        <p className="sim-desc">{sim.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
