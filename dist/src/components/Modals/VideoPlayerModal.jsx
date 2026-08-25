import React, { useState, useEffect, useRef } from "react";
import { useMovie } from "../../context/MovieContext.jsx";
import { useProfile } from "../../context/ProfileContext.jsx";
export function VideoPlayerModal() {
  const {
    playingMovie,
    closePlayer,
    showToast
  } = useMovie();
  const {
    updateProgress,
    continueWatching,
    currentProfile
  } = useProfile();

  // Find saved progress for this movie in the current profile
  const existingItem = continueWatching.find(cw => cw.movieId === playingMovie?.id);
  const initialPercent = existingItem ? existingItem.progressPercent : 25;
  const [isPlaying, setIsPlaying] = useState(true);
  const [progressPercent, setProgressPercent] = useState(initialPercent);
  const [currentTimeSec, setCurrentTimeSec] = useState(Math.round(initialPercent / 100 * 3600));
  const totalDurationSec = 3600; // Simulated 60 min
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef(null);

  // Playback timer simulation
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
          const percent = Math.round(next / totalDurationSec * 100);
          setProgressPercent(percent);
          return next;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, playingMovie, totalDurationSec]);

  // Save progress on unmount / close or progress update
  useEffect(() => {
    if (playingMovie) {
      updateProgress(playingMovie.id, progressPercent, Math.round(totalDurationSec / 60), Math.round(currentTimeSec / 60));
    }
  }, [progressPercent, currentTimeSec, playingMovie, updateProgress]);

  // Auto-hide controls on mouse idle
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  };
  if (!playingMovie) return null;
  const handleClose = () => {
    updateProgress(playingMovie.id, progressPercent, Math.round(totalDurationSec / 60), Math.round(currentTimeSec / 60));
    showToast(`Saved watch progress for ${playingMovie.title}`, "info");
    closePlayer();
  };
  const handleSeek = e => {
    const newPercent = parseFloat(e.target.value);
    setProgressPercent(newPercent);
    setCurrentTimeSec(Math.round(newPercent / 100 * totalDurationSec));
  };
  const handleSkip = seconds => {
    setCurrentTimeSec(prev => {
      const next = Math.min(totalDurationSec, Math.max(0, prev + seconds));
      setProgressPercent(Math.round(next / totalDurationSec * 100));
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
  const formatTime = secs => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "video-player-fullscreen-backdrop",
    onMouseMove: handleMouseMove
  }, /*#__PURE__*/React.createElement("div", {
    className: "video-player-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: `video-player-top-bar ${showControls ? "visible" : "hidden"}`
  }, /*#__PURE__*/React.createElement("button", {
    className: "video-back-btn",
    onClick: handleClose
  }, "\u2190 Back to Browse"), /*#__PURE__*/React.createElement("div", {
    className: "video-title-header"
  }, /*#__PURE__*/React.createElement("h3", null, playingMovie.title), /*#__PURE__*/React.createElement("span", {
    className: "video-user-pill"
  }, "Watching as ", currentProfile?.name))), /*#__PURE__*/React.createElement("div", {
    className: "video-canvas-viewport"
  }, playingMovie.trailerUrl ? /*#__PURE__*/React.createElement("iframe", {
    src: `${playingMovie.trailerUrl}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&modestbranding=1&rel=0`,
    title: playingMovie.title,
    className: "video-iframe",
    allow: "autoplay; encrypted-media; fullscreen"
  }) : /*#__PURE__*/React.createElement("div", {
    className: "video-fallback-backdrop",
    style: {
      backgroundImage: `url("${playingMovie.backdrop || playingMovie.poster}")`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "video-buffering-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "video-spinner"
  }), /*#__PURE__*/React.createElement("p", null, "Streaming 4K Ultra HD \u2022 Spatial Audio")))), /*#__PURE__*/React.createElement("div", {
    className: `video-controls-overlay ${showControls ? "visible" : "hidden"}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "video-timeline-bar"
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "100",
    step: "0.1",
    value: progressPercent,
    onChange: handleSeek,
    className: "video-timeline-slider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "video-timeline-fill",
    style: {
      width: `${progressPercent}%`
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "video-controls-bottom-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "video-controls-left"
  }, /*#__PURE__*/React.createElement("button", {
    className: "video-ctrl-btn play-pause-btn",
    onClick: () => setIsPlaying(!isPlaying),
    title: isPlaying ? "Pause" : "Play"
  }, isPlaying ? "❚❚" : "▶"), /*#__PURE__*/React.createElement("button", {
    className: "video-ctrl-btn",
    onClick: () => handleSkip(-10),
    title: "Rewind 10 seconds"
  }, "\u21BA 10"), /*#__PURE__*/React.createElement("button", {
    className: "video-ctrl-btn",
    onClick: () => handleSkip(10),
    title: "Fast forward 10 seconds"
  }, "10 \u21BB"), /*#__PURE__*/React.createElement("div", {
    className: "video-volume-group"
  }, /*#__PURE__*/React.createElement("button", {
    className: "video-ctrl-btn volume-btn",
    onClick: () => setIsMuted(!isMuted),
    title: isMuted ? "Unmute" : "Mute"
  }, isMuted ? "🔇" : "🔊"), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "1",
    step: "0.05",
    value: isMuted ? 0 : volume,
    onChange: e => {
      setVolume(parseFloat(e.target.value));
      setIsMuted(false);
    },
    className: "video-volume-slider"
  })), /*#__PURE__*/React.createElement("div", {
    className: "video-time-display"
  }, /*#__PURE__*/React.createElement("span", null, formatTime(currentTimeSec)), /*#__PURE__*/React.createElement("span", {
    className: "time-sep"
  }, "/"), /*#__PURE__*/React.createElement("span", null, formatTime(totalDurationSec)))), /*#__PURE__*/React.createElement("div", {
    className: "video-controls-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "video-quality-pill"
  }, "4K UHD"), /*#__PURE__*/React.createElement("button", {
    className: "video-ctrl-btn fullscreen-btn",
    onClick: toggleFullscreen,
    title: "Toggle Fullscreen"
  }, "\u26F6"))))));
}