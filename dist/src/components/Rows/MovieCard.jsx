import React, { useState } from "react";
import { useMovie } from "../../context/MovieContext.jsx";
import { useProfile } from "../../context/ProfileContext.jsx";
export function MovieCard({
  movie,
  isLarge = false
}) {
  const {
    openModal,
    openPlayer,
    showToast
  } = useMovie();
  const {
    toggleMyList,
    isInMyList
  } = useProfile();
  const [isHovered, setIsHovered] = useState(false);
  const [liked, setLiked] = useState(false);
  const inList = isInMyList(movie.id);
  const handleListToggle = e => {
    e.stopPropagation();
    const {
      isAdded
    } = toggleMyList(movie.id);
    showToast(isAdded ? `Added "${movie.title}" to My List` : `Removed "${movie.title}" from My List`, isAdded ? "success" : "info");
  };
  const handleLike = e => {
    e.stopPropagation();
    setLiked(!liked);
    showToast(liked ? "Rating removed" : `Liked "${movie.title}"`, "info");
  };
  const handlePlay = e => {
    e.stopPropagation();
    openPlayer(movie);
  };
  const handleOpenInfo = e => {
    e.stopPropagation();
    openModal(movie);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `netflix-movie-card ${isLarge ? "large-card" : ""}`,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onClick: handleOpenInfo,
    title: movie.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-image-container"
  }, /*#__PURE__*/React.createElement("img", {
    src: movie.poster,
    alt: movie.title,
    className: "card-poster-img",
    loading: "lazy",
    onError: e => {
      e.target.src = "assets/movie1.jpg";
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "card-top-badges"
  }, movie.quality && /*#__PURE__*/React.createElement("span", {
    className: "quality-pill"
  }, movie.quality))), /*#__PURE__*/React.createElement("div", {
    className: `card-hover-overlay ${isHovered ? "active" : ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "hover-backdrop"
  }, /*#__PURE__*/React.createElement("img", {
    src: movie.backdrop || movie.poster,
    alt: movie.title,
    className: "hover-backdrop-img"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hover-gradient"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hover-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hover-actions-bar"
  }, /*#__PURE__*/React.createElement("button", {
    className: "hover-action-btn play-circle-btn",
    onClick: handlePlay,
    title: "Play"
  }, "\u25B6"), /*#__PURE__*/React.createElement("button", {
    className: `hover-action-btn ${inList ? "in-list" : ""}`,
    onClick: handleListToggle,
    title: inList ? "Remove from My List" : "Add to My List"
  }, inList ? "✓" : "+"), /*#__PURE__*/React.createElement("button", {
    className: `hover-action-btn ${liked ? "liked" : ""}`,
    onClick: handleLike,
    title: "I like this"
  }, "\uD83D\uDC4D"), /*#__PURE__*/React.createElement("button", {
    className: "hover-action-btn info-btn",
    onClick: handleOpenInfo,
    title: "Episode details & more"
  }, "\u2304")), /*#__PURE__*/React.createElement("h4", {
    className: "hover-title"
  }, movie.title), /*#__PURE__*/React.createElement("div", {
    className: "hover-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hover-match"
  }, movie.match), /*#__PURE__*/React.createElement("span", {
    className: "hover-maturity"
  }, movie.maturity), /*#__PURE__*/React.createElement("span", {
    className: "hover-duration"
  }, movie.duration), /*#__PURE__*/React.createElement("span", {
    className: "hover-rating"
  }, "\u2605 ", movie.rating)), /*#__PURE__*/React.createElement("div", {
    className: "hover-genres"
  }, movie.genres?.slice(0, 3).map((g, i) => /*#__PURE__*/React.createElement("span", {
    key: g,
    className: "hover-genre-pill"
  }, i > 0 && " • ", g))))));
}