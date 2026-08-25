import React, { useState, useEffect } from "react";
import { useMovie } from "../../context/MovieContext.jsx";
import { useProfile } from "../../context/ProfileContext.jsx";
import { ALL_MOVIES } from "../../services/movieService.js";
export function HeroBanner() {
  const {
    openModal,
    openPlayer
  } = useMovie();
  const {
    isKids,
    currentProfile
  } = useProfile();
  const [featuredMovie, setFeaturedMovie] = useState(null);
  useEffect(() => {
    // Select an awesome featured movie tailored to the current profile
    let candidates = [];
    if (isKids) {
      candidates = ALL_MOVIES.filter(m => m.isKidFriendly);
    } else if (currentProfile?.id === "profile-sarah") {
      candidates = ALL_MOVIES.filter(m => m.id === "bridgerton" || m.id === "glass-onion" || m.id === "alchemy-of-souls");
    } else {
      // Alex / Default
      candidates = ALL_MOVIES.filter(m => m.id === "the-vampire-diaries" || m.id === "stranger-things" || m.id === "the-witcher" || m.id === "squid-game");
    }
    const selected = candidates[0] || ALL_MOVIES[0];
    setFeaturedMovie(selected);
  }, [isKids, currentProfile]);
  if (!featuredMovie) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "hero-banner-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-backdrop-image",
    style: {
      backgroundImage: `linear-gradient(to top, #141414 0%, rgba(20,20,20,0.6) 40%, rgba(20,20,20,0.2) 70%, rgba(20,20,20,0.7) 100%), linear-gradient(to right, #141414 0%, rgba(20,20,20,0.8) 35%, transparent 70%), url("${featuredMovie.backdrop || featuredMovie.poster}")`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-gradient-overlay"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-content-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-badge-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero-original-badge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "n-badge-red"
  }, "N"), " SERIES"), /*#__PURE__*/React.createElement("span", {
    className: "hero-top10-badge"
  }, "\uD83C\uDFC6 TOP 10 IN STREAMING")), /*#__PURE__*/React.createElement("h1", {
    className: "hero-movie-title"
  }, featuredMovie.title), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero-match-score"
  }, featuredMovie.match), /*#__PURE__*/React.createElement("span", {
    className: "hero-maturity-badge"
  }, featuredMovie.maturity), /*#__PURE__*/React.createElement("span", {
    className: "hero-duration"
  }, featuredMovie.duration), /*#__PURE__*/React.createElement("span", {
    className: "hero-quality-badge"
  }, featuredMovie.quality), /*#__PURE__*/React.createElement("span", {
    className: "hero-rating-score"
  }, "\u2605 ", featuredMovie.rating)), /*#__PURE__*/React.createElement("p", {
    className: "hero-description-text"
  }, featuredMovie.description), /*#__PURE__*/React.createElement("div", {
    className: "hero-genres-row"
  }, featuredMovie.genres?.map((g, idx) => /*#__PURE__*/React.createElement("span", {
    key: g,
    className: "hero-genre-tag"
  }, idx > 0 && /*#__PURE__*/React.createElement("span", {
    className: "genre-dot"
  }, "\u2022"), g))), /*#__PURE__*/React.createElement("div", {
    className: "hero-actions-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "hero-play-btn",
    onClick: () => openPlayer(featuredMovie),
    title: "Play Now"
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn-icon"
  }, "\u25B6"), /*#__PURE__*/React.createElement("span", {
    className: "btn-text"
  }, "Play")), /*#__PURE__*/React.createElement("button", {
    className: "hero-info-btn",
    onClick: () => openModal(featuredMovie),
    title: "More Information"
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn-icon"
  }, "\u2139"), /*#__PURE__*/React.createElement("span", {
    className: "btn-text"
  }, "More Info")))));
}