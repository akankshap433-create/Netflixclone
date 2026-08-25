import React, { useState, useEffect } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext.jsx";
import { ProfileProvider, useProfile } from "./context/ProfileContext.jsx";
import { MovieProvider, useMovie } from "./context/MovieContext.jsx";
import { TudumIntro } from "./components/Intro/TudumIntro.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { HeroBanner } from "./components/Hero/HeroBanner.jsx";
import { MovieRow } from "./components/Rows/MovieRow.jsx";
import { MovieCard } from "./components/Rows/MovieCard.jsx";
import { ContinueWatchingRow } from "./components/Rows/ContinueWatchingRow.jsx";
import { MovieDetailModal } from "./components/Modals/MovieDetailModal.jsx";
import { VideoPlayerModal } from "./components/Modals/VideoPlayerModal.jsx";
import { ProfileGate } from "./components/Profiles/ProfileGate.jsx";
import { LoginPage } from "./components/Auth/LoginPage.jsx";
import { Toast } from "./components/Common/Toast.jsx";
import { Footer } from "./components/Common/Footer.jsx";
import { ALL_MOVIES, getMoviesForProfile, getCategoriesForProfile, searchMovies } from "./services/movieService.js";
function MainApp() {
  const {
    isAuthenticated
  } = useAuth();
  const {
    currentProfile,
    isKids,
    myList,
    isProfileGateOpen
  } = useProfile();
  const {
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery
  } = useMovie();
  const [showIntro, setShowIntro] = useState(() => {
    // Check if user has already seen the intro during this session
    return !sessionStorage.getItem("netflix_has_seen_intro");
  });

  // Filtered movies based on profile (Adult vs Kids)
  const availableMovies = getMoviesForProfile(currentProfile);
  const categories = getCategoriesForProfile(currentProfile);

  // Search Results
  const searchResults = searchQuery ? searchMovies(searchQuery, currentProfile) : [];

  // My List movies
  const myListMovies = myList.map(id => ALL_MOVIES.find(m => m.id === id)).filter(Boolean).filter(m => isKids ? m.isKidFriendly : true);
  if (showIntro) {
    return /*#__PURE__*/React.createElement(TudumIntro, {
      onComplete: () => setShowIntro(false)
    });
  }
  if (!isAuthenticated) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LoginPage, null), /*#__PURE__*/React.createElement(Toast, null));
  }
  if (isProfileGateOpen) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ProfileGate, null), /*#__PURE__*/React.createElement(Toast, null));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: `netflix-app-root ${isKids ? "kids-theme" : ""}`
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("main", {
    className: "netflix-main-content"
  }, searchQuery ? /*#__PURE__*/React.createElement("section", {
    className: "search-results-section animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "search-results-header"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "search-results-title"
  }, "Explore titles related to: ", /*#__PURE__*/React.createElement("span", {
    className: "query-highlight"
  }, "\"", searchQuery, "\"")), /*#__PURE__*/React.createElement("span", {
    className: "results-count-badge"
  }, searchResults.length, " ", searchResults.length === 1 ? "title" : "titles", " found")), searchResults.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "search-grid-container"
  }, searchResults.map(movie => /*#__PURE__*/React.createElement(MovieCard, {
    key: movie.id,
    movie: movie
  }))) : /*#__PURE__*/React.createElement("div", {
    className: "search-no-results-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "no-results-icon"
  }, "\uD83D\uDD0D"), /*#__PURE__*/React.createElement("h3", null, "Your search for \"", searchQuery, "\" did not have any matches."), /*#__PURE__*/React.createElement("p", null, "Suggestions:"), /*#__PURE__*/React.createElement("ul", {
    className: "search-suggestions-list"
  }, /*#__PURE__*/React.createElement("li", null, "Try different keywords or check spelling"), /*#__PURE__*/React.createElement("li", null, "Looking for a movie or TV show? Try searching by actor or creator"), /*#__PURE__*/React.createElement("li", null, "Try searching for genres like \"Action\", \"Sci-Fi\", \"Comedy\", or \"Fantasy\"")), /*#__PURE__*/React.createElement("button", {
    className: "clear-search-btn",
    onClick: () => setSearchQuery("")
  }, "Back to Browse"))) : activeTab === "mylist" ?
  /*#__PURE__*/
  /* --- 2. MY LIST VIEW --- */
  React.createElement("section", {
    className: "mylist-page-section animate-fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mylist-header-bar"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "mylist-page-title"
  }, "My List"), /*#__PURE__*/React.createElement("span", {
    className: "mylist-profile-badge"
  }, "\uD83D\uDC64 ", currentProfile?.name, "'s Saved Titles (", myListMovies.length, ")")), myListMovies.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "mylist-grid-container"
  }, myListMovies.map(movie => /*#__PURE__*/React.createElement(MovieCard, {
    key: movie.id,
    movie: movie
  }))) : /*#__PURE__*/React.createElement("div", {
    className: "mylist-empty-state"
  }, /*#__PURE__*/React.createElement("div", {
    className: "empty-bookmark-icon"
  }, "\uD83D\uDCD1"), /*#__PURE__*/React.createElement("h2", null, "You haven't added any titles to your list yet."), /*#__PURE__*/React.createElement("p", null, "Explore movies and TV shows and click the ", /*#__PURE__*/React.createElement("strong", null, "+"), " button to add them to ", currentProfile?.name, "'s list."), /*#__PURE__*/React.createElement("button", {
    className: "browse-now-btn",
    onClick: () => setActiveTab("home")
  }, "Browse Now"))) : activeTab === "movies" ?
  /*#__PURE__*/
  /* --- 3. MOVIES VIEW --- */
  React.createElement("div", {
    className: "movies-tab-view animate-fade-in"
  }, /*#__PURE__*/React.createElement(HeroBanner, null), /*#__PURE__*/React.createElement(ContinueWatchingRow, null), /*#__PURE__*/React.createElement(MovieRow, {
    title: "Action & Blockbusters",
    movies: availableMovies.filter(m => m.genres.includes("Action"))
  }), /*#__PURE__*/React.createElement(MovieRow, {
    title: "Comedy & Feel-Good Movies",
    movies: availableMovies.filter(m => m.genres.includes("Comedy"))
  }), /*#__PURE__*/React.createElement(MovieRow, {
    title: "Sci-Fi, Fantasy & Adventures",
    movies: availableMovies.filter(m => m.genres.includes("Sci-Fi") || m.genres.includes("Fantasy"))
  }), /*#__PURE__*/React.createElement(MovieRow, {
    title: "Top Rated Movies",
    movies: availableMovies.filter(m => m.category.includes("Top Rated"))
  })) : activeTab === "tv" ?
  /*#__PURE__*/
  /* --- 4. TV SHOWS VIEW --- */
  React.createElement("div", {
    className: "tv-tab-view animate-fade-in"
  }, /*#__PURE__*/React.createElement(HeroBanner, null), /*#__PURE__*/React.createElement(ContinueWatchingRow, null), /*#__PURE__*/React.createElement(MovieRow, {
    title: "Binge-Worthy TV Dramas",
    movies: availableMovies.filter(m => m.genres.includes("Drama") && !m.isKidFriendly)
  }), /*#__PURE__*/React.createElement(MovieRow, {
    title: "Sci-Fi & Mystery TV",
    movies: availableMovies.filter(m => m.genres.includes("Sci-Fi") || m.genres.includes("Mystery"))
  }), /*#__PURE__*/React.createElement(MovieRow, {
    title: "Popular TV Shows on Netflix",
    movies: availableMovies.filter(m => m.category.includes("Popular on Netflix"))
  }), /*#__PURE__*/React.createElement(MovieRow, {
    title: "Netflix Original Series",
    movies: availableMovies.filter(m => m.category.includes("Netflix Originals"))
  })) :
  /*#__PURE__*/
  /* --- 5. HOME VIEW (Dynamic Profile Rows) --- */
  React.createElement("div", {
    className: "home-tab-view animate-fade-in"
  }, /*#__PURE__*/React.createElement(HeroBanner, null), /*#__PURE__*/React.createElement(ContinueWatchingRow, null), categories.map(cat => {
    const rowMovies = availableMovies.filter(cat.filter);
    return /*#__PURE__*/React.createElement(MovieRow, {
      key: cat.id,
      title: cat.title,
      movies: rowMovies,
      isLarge: cat.id === "netflix-originals" || cat.id === "popular-kids"
    });
  }))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(MovieDetailModal, null), /*#__PURE__*/React.createElement(VideoPlayerModal, null), /*#__PURE__*/React.createElement(Toast, null));
}
export function App() {
  return /*#__PURE__*/React.createElement(AuthProvider, null, /*#__PURE__*/React.createElement(ProfileProvider, null, /*#__PURE__*/React.createElement(MovieProvider, null, /*#__PURE__*/React.createElement(MainApp, null))));
}