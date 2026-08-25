import React, { useRef, useState } from "react";
import { useMovie } from "../../context/MovieContext.jsx";
import { useProfile } from "../../context/ProfileContext.jsx";

export function Top10Row({ title = "Top 10 in Streaming Today", movies = [] }) {
  const { openModal, openPlayer, showToast } = useMovie();
  const { toggleMyList, isInMyList } = useProfile();
  const [scrollPosition, setScrollPosition] = useState(0);
  const rowRef = useRef(null);

  if (!movies || movies.length === 0) return null;

  const handleScroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollAmount = clientWidth * 0.75;
      const newPos = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      rowRef.current.scrollTo({ left: newPos, behavior: "smooth" });
      setScrollPosition(newPos);
    }
  };

  const handleListToggle = (e, movie) => {
    e.stopPropagation();
    const { isAdded } = toggleMyList(movie.id);
    showToast(
      isAdded ? `Added "${movie.title}" to My List` : `Removed "${movie.title}" from My List`,
      isAdded ? "success" : "info"
    );
  };

  return (
    <section className="netflix-movie-row-section top10-row-section">
      <div className="row-header-wrapper">
        <h2 className="row-section-title">{title}</h2>
      </div>

      <div className="row-slider-wrapper">
        <button
          type="button"
          className="slider-arrow-btn left-arrow"
          onClick={() => handleScroll("left")}
          aria-label="Scroll left"
        >
          ‹
        </button>

        <div className="row-cards-container top10-cards-container" ref={rowRef}>
          {movies.slice(0, 10).map((movie, index) => {
            const rank = movie.rank || index + 1;
            const inList = isInMyList(movie.id);

            return (
              <div 
                key={movie.id} 
                className="top10-card-item"
                onClick={() => openModal(movie)}
                title={`#${rank} in Streaming - ${movie.title}`}
              >
                {/* Large Netflix-style Rank Number */}
                <div className="top10-rank-number">
                  <span className="rank-text">{rank}</span>
                </div>

                {/* Poster Card */}
                <div className="top10-poster-wrap">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="top10-poster-img"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = "assets/movie1.jpg";
                    }}
                  />
                  <div className="top10-hover-overlay">
                    <button
                      type="button"
                      className="top10-play-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        openPlayer(movie);
                      }}
                      title="Play"
                    >
                      ▶
                    </button>
                    <button
                      type="button"
                      className={`top10-list-btn ${inList ? "in-list" : ""}`}
                      onClick={(e) => handleListToggle(e, movie)}
                      title={inList ? "Remove from My List" : "Add to My List"}
                    >
                      {inList ? "✓" : "+"}
                    </button>
                    <span className="top10-card-title">{movie.title}</span>
                    <span className="top10-card-match">{movie.match}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          className="slider-arrow-btn right-arrow"
          onClick={() => handleScroll("right")}
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>
    </section>
  );
}
