import React, { useRef, useState, useEffect } from "react";
import { MovieCard } from "./MovieCard.jsx";

export function MovieRow({ title, movies = [], isLarge = false }) {
  const rowRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkArrows = () => {
    if (!rowRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
    setShowLeftArrow(scrollLeft > 20);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
  };

  useEffect(() => {
    checkArrows();
    const current = rowRef.current;
    if (current) {
      current.addEventListener("scroll", checkArrows);
      window.addEventListener("resize", checkArrows);
    }
    return () => {
      if (current) current.removeEventListener("scroll", checkArrows);
      window.removeEventListener("resize", checkArrows);
    };
  }, [movies]);

  const handleScroll = (direction) => {
    if (!rowRef.current) return;
    const { clientWidth } = rowRef.current;
    const scrollAmount = direction === "left" ? -clientWidth * 0.75 : clientWidth * 0.75;
    rowRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  if (!movies || movies.length === 0) return null;

  return (
    <section className="netflix-movie-row-section">
      <h2 className="row-section-title">{title}</h2>

      <div className="row-slider-wrapper">
        {showLeftArrow && (
          <button 
            className="row-nav-arrow left-arrow" 
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
          >
            ‹
          </button>
        )}

        <div className="row-cards-container" ref={rowRef}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} isLarge={isLarge} />
          ))}
        </div>

        {showRightArrow && (
          <button 
            className="row-nav-arrow right-arrow" 
            onClick={() => handleScroll("right")}
            aria-label="Scroll right"
          >
            ›
          </button>
        )}
      </div>
    </section>
  );
}
