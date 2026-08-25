import React, { useEffect, useState } from "react";
import { tudumAudio } from "../../services/audioService.js";
export function TudumIntro({
  onComplete
}) {
  const [fading, setFading] = useState(false);
  useEffect(() => {
    // Attempt to play audio
    const timerAudio = setTimeout(() => {
      tudumAudio.playTudum();
    }, 150);

    // Trigger fade transition
    const timerFade = setTimeout(() => {
      setFading(true);
    }, 2200);

    // Complete intro
    const timerComplete = setTimeout(() => {
      sessionStorage.setItem("netflix_has_seen_intro", "true");
      if (onComplete) onComplete();
    }, 2700);
    return () => {
      clearTimeout(timerAudio);
      clearTimeout(timerFade);
      clearTimeout(timerComplete);
    };
  }, [onComplete]);
  const handleSkip = () => {
    sessionStorage.setItem("netflix_has_seen_intro", "true");
    if (onComplete) onComplete();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `tudum-container ${fading ? "tudum-fade-out" : ""}`,
    onClick: handleSkip
  }, /*#__PURE__*/React.createElement("div", {
    className: "tudum-animation-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "netflix-n-logo"
  }, /*#__PURE__*/React.createElement("span", {
    className: "n-bar left"
  }), /*#__PURE__*/React.createElement("span", {
    className: "n-bar diagonal"
  }), /*#__PURE__*/React.createElement("span", {
    className: "n-bar right"
  }), /*#__PURE__*/React.createElement("div", {
    className: "n-glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "n-light-ray"
  })), /*#__PURE__*/React.createElement("div", {
    className: "tudum-wordmark"
  }, "NETFLIX")), /*#__PURE__*/React.createElement("button", {
    className: "tudum-skip-btn",
    onClick: handleSkip
  }, "Skip Intro \u2715"));
}