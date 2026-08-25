import React, { useState, useEffect } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext.jsx";
import { ProfileProvider, useProfile } from "./context/ProfileContext.jsx";
import { MovieProvider, useMovie } from "./context/MovieContext.jsx";

import { TudumIntro } from "./components/Intro/TudumIntro.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { HeroBanner } from "./components/Hero/HeroBanner.jsx";
import { MovieRow } from "./components/Rows/MovieRow.jsx";
import { Top10Row } from "./components/Rows/Top10Row.jsx";
import { MovieCard } from "./components/Rows/MovieCard.jsx";
import { ContinueWatchingRow } from "./components/Rows/ContinueWatchingRow.jsx";
import { MovieDetailModal } from "./components/Modals/MovieDetailModal.jsx";
import { VideoPlayerModal } from "./components/Modals/VideoPlayerModal.jsx";
import { ProfileGate } from "./components/Profiles/ProfileGate.jsx";
import { LoginPage } from "./components/Auth/LoginPage.jsx";
import { PlanSelectionPage } from "./components/Auth/PlanSelectionPage.jsx";
import { Toast } from "./components/Common/Toast.jsx";
import { Footer } from "./components/Common/Footer.jsx";

import { 
  ALL_MOVIES, 
  getMoviesForProfile, 
  getCategoriesForProfile, 
  getTop10ForProfile,
  searchMovies 
} from "./services/movieService.js";

function MainApp() {
  const { isAuthenticated, selectedPlan } = useAuth();
  const { currentProfile, isKids, myList, isProfileGateOpen, isProfileSelected } = useProfile();
  const { activeTab, setActiveTab, searchQuery, setSearchQuery } = useMovie();

  const [showIntro, setShowIntro] = useState(() => {
    return !sessionStorage.getItem("netflix_has_seen_intro");
  });

  const availableMovies = getMoviesForProfile(currentProfile);
  const categories = getCategoriesForProfile(currentProfile);
  const top10List = getTop10ForProfile(currentProfile);
  const searchResults = searchQuery ? searchMovies(searchQuery, currentProfile) : [];

  const myListMovies = myList
    .map(id => ALL_MOVIES.find(m => m.id === id))
    .filter(Boolean)
    .filter(m => isKids ? m.isKidFriendly : true);

  // 1. TUDUM OPENING ANIMATION
  if (showIntro) {
    return <TudumIntro onComplete={() => setShowIntro(false)} />;
  }

  // 2. LOGIN MUST COME FIRST FOR NEW USER
  if (!isAuthenticated) {
    return (
      <>
        <LoginPage />
        <Toast />
      </>
    );
  }

  // 3. SUBSCRIPTION PLAN SELECTION AFTER LOGIN
  if (!selectedPlan) {
    return (
      <>
        <PlanSelectionPage />
        <Toast />
      </>
    );
  }

  // 4. PROFILE SELECTION ("Who's watching?")
  if (isProfileGateOpen || !isProfileSelected) {
    return (
      <>
        <ProfileGate />
        <Toast />
      </>
    );
  }

  // 5. MAIN STREAMING PLATFORM (Home, TV, Movies, New & Popular, My List, Kids)
  return (
    <div className={`netflix-app-root ${isKids ? "kids-theme" : ""}`}>
      <Navbar />

      <main className="netflix-main-content">
        {/* Search Results View */}
        {searchQuery ? (
          <section className="search-results-section animate-fade-in">
            <div className="search-results-header">
              <h2 className="search-results-title">
                Explore titles related to: <span className="query-highlight">"{searchQuery}"</span>
              </h2>
              <span className="results-count-badge">
                {searchResults.length} {searchResults.length === 1 ? "title" : "titles"} found
              </span>
            </div>

            {searchResults.length > 0 ? (
              <div className="search-grid-container">
                {searchResults.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            ) : (
              <div className="search-no-results-box">
                <div className="no-results-icon">🔍</div>
                <h3>Your search for "{searchQuery}" did not have any matches.</h3>
                <p>Suggestions:</p>
                <ul className="search-suggestions-list">
                  <li>Try different keywords or check spelling</li>
                  <li>Looking for a movie or TV show? Try searching by actor or creator</li>
                  <li>Try searching for genres like "Action", "Sci-Fi", "Comedy", or "Romance"</li>
                </ul>
                <button type="button" className="clear-search-btn" onClick={() => setSearchQuery("")}>
                  Back to Browse
                </button>
              </div>
            )}
          </section>
        ) : activeTab === "mylist" ? (
          /* My List View */
          <section className="mylist-page-section animate-fade-in">
            <div className="mylist-header-bar">
              <h1 className="mylist-page-title">My List</h1>
              <span className="mylist-profile-badge">
                {currentProfile?.name}'s Saved Titles ({myListMovies.length})
              </span>
            </div>

            {myListMovies.length > 0 ? (
              <div className="mylist-grid-container">
                {myListMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            ) : (
              <div className="mylist-empty-state">
                <div className="empty-bookmark-icon">📑</div>
                <h2>You haven't added any titles to your list yet.</h2>
                <p>
                  Explore movies and TV shows and click the <strong>+</strong> button to add them to {currentProfile?.name}'s list.
                </p>
                <button type="button" className="browse-now-btn" onClick={() => setActiveTab("home")}>
                  Browse Now
                </button>
              </div>
            )}
          </section>
        ) : activeTab === "movies" ? (
          /* Movies View */
          <div className="movies-tab-view animate-fade-in">
            <HeroBanner />
            <ContinueWatchingRow />
            <MovieRow 
              title="Action & Blockbusters" 
              movies={availableMovies.filter(m => m.genres.includes("Action") && m.type === "movie")} 
            />
            <MovieRow 
              title="Indian Blockbusters" 
              movies={availableMovies.filter(m => m.category.includes("Indian Movies") && m.type === "movie")} 
            />
            <MovieRow 
              title="Comedy Hits" 
              movies={availableMovies.filter(m => m.genres.includes("Comedy") && m.type === "movie")} 
            />
            <MovieRow 
              title="Sci-Fi & Adventures" 
              movies={availableMovies.filter(m => m.genres.includes("Sci-Fi") && m.type === "movie")} 
            />
            <MovieRow 
              title="Top Rated Movies" 
              movies={availableMovies.filter(m => m.category.includes("Top Rated") && m.type === "movie")} 
            />
          </div>
        ) : activeTab === "tv" ? (
          /* TV Shows View */
          <div className="tv-tab-view animate-fade-in">
            <HeroBanner />
            <ContinueWatchingRow />
            <MovieRow 
              title="Trending TV Series" 
              movies={availableMovies.filter(m => m.type === "series")} 
            />
            <MovieRow 
              title="Korean Dramas & Hits" 
              movies={availableMovies.filter(m => m.category.includes("Korean Shows") && m.type === "series")} 
            />
            <MovieRow 
              title="Sci-Fi & Fantasy Series" 
              movies={availableMovies.filter(m => (m.genres.includes("Sci-Fi") || m.genres.includes("Fantasy")) && m.type === "series")} 
            />
            <MovieRow 
              title="Netflix Originals" 
              movies={availableMovies.filter(m => m.category.includes("Netflix Originals") && m.type === "series")} 
            />
          </div>
        ) : activeTab === "new_popular" ? (
          /* New & Popular View */
          <div className="new-popular-tab-view animate-fade-in">
            <HeroBanner />
            <Top10Row title="Top 10 in Streaming Today" movies={top10List} />
            <MovieRow 
              title="Trending This Week" 
              movies={availableMovies.filter(m => m.category.includes("Trending Now"))} 
            />
            <MovieRow 
              title="Popular on Netflix" 
              movies={availableMovies.filter(m => m.category.includes("Popular on Netflix"))} 
            />
            <MovieRow 
              title="New Releases" 
              movies={availableMovies.filter(m => parseInt(m.year) >= 2022)} 
            />
          </div>
        ) : (
          /* Home View (Hero, Continue Watching, Top 10, Dynamic Rows) */
          <div className="home-tab-view animate-fade-in">
            <HeroBanner />
            <ContinueWatchingRow />

            {!isKids && top10List.length > 0 && (
              <Top10Row title="Top 10 in Streaming Today" movies={top10List} />
            )}

            {categories.map((cat) => {
              const rowMovies = availableMovies.filter(cat.filter);
              if (rowMovies.length === 0) return null;
              return (
                <MovieRow 
                  key={cat.id} 
                  title={cat.title} 
                  movies={rowMovies} 
                  isLarge={cat.id === "netflix-originals" || cat.id === "popular-kids"}
                />
              );
            })}
          </div>
        )}
      </main>

      <Footer />
      <MovieDetailModal />
      <VideoPlayerModal />
      <Toast />
    </div>
  );
}

export function App() {
  return (
    <AuthProvider>
      <ProfileProvider>
        <MovieProvider>
          <MainApp />
        </MovieProvider>
      </ProfileProvider>
    </AuthProvider>
  );
}
