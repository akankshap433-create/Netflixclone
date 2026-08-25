import React, { useState, useEffect, useRef } from "react";
import { useMovie } from "../../context/MovieContext.jsx";
import { useProfile } from "../../context/ProfileContext.jsx";

export function VideoPlayerModal() {
  const { playingMovie, playingEpisode, closePlayer, showToast } = useMovie();
  const { updateProgress, continueWatching, currentProfile } = useProfile();

  const existingItem = continueWatching.find(cw => cw.movieId === playingMovie?.id);
  const initialPercent = existingItem ? existingItem.progressPercent : 25;

  const [isPlaying, setIsPlaying] = useState(true);
  const [progressPercent, setProgressPercent] = useState(initialPercent);
  const [currentTimeSec, setCurrentTimeSec] = useState(Math.round((initialPercent / 100) * 3600));
  const totalDurationSec = 3600;
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [hasIframeError, setHasIframeError] = useState(false);
  const controlsTimeoutRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [playingMovie, progressPercent, currentTimeSec]);

  // Simulated progress timer
  useEffect(() => {
    let interval = null;
    if (isPlaying && playingMovie) {
      interval = setInterval(() => {
        setCurrentTimeSec(prev => {
          const next = prev + 1;
          if (next >= totalDurationSec) {
            setIsPlaying(false);
            return totalDurationSec;
          }
          const percent = Math.round((next / totalDurationSec) * 100);
          setProgressPercent(percent);
          return next;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, playingMovie, totalDurationSec]);

  // Save watch progress to current profile
  useEffect(() => {
    if (playingMovie) {
      updateProgress(
        playingMovie.id,
        progressPercent,
        Math.round(totalDurationSec / 60),
        Math.round(currentTimeSec / 60),
        playingEpisode ? playingEpisode.title : null
      );
    }
  }, [progressPercent, currentTimeSec, playingMovie, playingEpisode, updateProgress]);

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3500);
  };

  if (!playingMovie) return null;

  const handleClose = () => {
    updateProgress(
      playingMovie.id,
      progressPercent,
      Math.round(totalDurationSec / 60),
      Math.round(currentTimeSec / 60),
      playingEpisode ? playingEpisode.title : null
    );
    showToast(`Saved progress for ${playingMovie.title}`, "info");
    closePlayer();
  };

  const handleSeek = (e) => {
    const newPercent = parseFloat(e.target.value);
    setProgressPercent(newPercent);
    setCurrentTimeSec(Math.round((newPercent / 100) * totalDurationSec));
  };

  const handleSkip = (seconds) => {
    setCurrentTimeSec(prev => {
      const next = Math.min(totalDurationSec, Math.max(0, prev + seconds));
      setProgressPercent(Math.round((next / totalDurationSec) * 100));
      return next;
    });
  };

  const toggleFullscreen = () => {
    const elem = document.querySelector(".video-player-container");
    if (!document.fullscreenElement) {
      elem?.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div 
      className="video-player-fullscreen-backdrop animate-fade-in"
      onMouseMove={handleMouseMove}
    >
      <div className="video-player-container">
        {/* Prominent High-Contrast Top-Right Close Button */}
        <button 
          type="button"
          className="video-top-right-close-btn" 
          onClick={handleClose}
          aria-label="Close Video"
          title="Close Video (Esc)"
        >
          ✕
        </button>

        {/* Top Header Bar */}
        <div className={`video-player-top-bar ${showControls ? "visible" : "hidden"}`}>
          <button type="button" className="video-back-btn" onClick={handleClose}>
            ← Back
          </button>
          <div className="video-title-header">
            <h3>
              {playingMovie.title}
              {playingEpisode && <span className="video-ep-subtitle"> — {playingEpisode.title}</span>}
            </h3>
            <span className="video-user-pill">Watching as {currentProfile?.name}</span>
          </div>
        </div>

        {/* Video Surface */}
        <div className="video-canvas-viewport">
          {playingMovie.trailerUrl && !hasIframeError ? (
            <iframe
              src={`${playingMovie.trailerUrl}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&modestbranding=1&rel=0`}
              title={playingMovie.title}
              className="video-iframe"
              allow="autoplay; encrypted-media; fullscreen"
              onError={() => setHasIframeError(true)}
            />
          ) : (
            <div 
              className="video-fallback-backdrop"
              style={{ backgroundImage: `linear-gradient(to top, #000 0%, rgba(0,0,0,0.5) 100%), url("${playingMovie.backdrop || playingMovie.poster}")` }}
            >
              <div className="video-buffering-overlay">
                <div className="video-spinner"></div>
                <h3>{playingMovie.title}</h3>
                <p>Streaming 4K Ultra HD • Spatial Audio</p>
                <span className="fallback-note">Interactive video simulation active</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Video Controls Overlay */}
        <div className={`video-controls-overlay ${showControls ? "visible" : "hidden"}`}>
          {/* Timeline Bar */}
          <div className="video-timeline-bar">
            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={progressPercent}
              onChange={handleSeek}
              className="video-timeline-slider"
            />
            <div 
              className="video-timeline-fill"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>

          <div className="video-controls-bottom-row">
            <div className="video-controls-left">
              <button 
                type="button"
                className="video-ctrl-btn play-pause-btn" 
                onClick={() => setIsPlaying(!isPlaying)}
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? "❚❚" : "▶"}
              </button>

              <button 
                type="button"
                className="video-ctrl-btn" 
                onClick={() => handleSkip(-10)}
                title="Rewind 10 seconds"
              >
                ↺ 10
              </button>

              <button 
                type="button"
                className="video-ctrl-btn" 
                onClick={() => handleSkip(10)}
                title="Fast forward 10 seconds"
              >
                10 ↻
              </button>

              <div className="video-volume-group">
                <button 
                  type="button"
                  className="video-ctrl-btn volume-btn" 
                  onClick={() => setIsMuted(!isMuted)}
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? "🔇" : "🔊"}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => {
                    setVolume(parseFloat(e.target.value));
                    setIsMuted(false);
                  }}
                  className="video-volume-slider"
                />
              </div>

              <div className="video-time-display">
                <span>{formatTime(currentTimeSec)}</span>
                <span className="time-sep">/</span>
                <span>{formatTime(totalDurationSec)}</span>
              </div>
            </div>

            <div className="video-controls-right">
              <span className="video-quality-pill">4K UHD</span>
              <button 
                type="button"
                className="video-ctrl-btn fullscreen-btn" 
                onClick={toggleFullscreen}
                title="Toggle Fullscreen"
              >
                ⛶
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
