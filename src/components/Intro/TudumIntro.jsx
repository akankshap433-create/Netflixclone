import React, { useEffect, useState } from "react";
import { tudumAudio } from "../../services/audioService.js";
import { NetflixNLogo, NetflixWordmark } from "../Common/BrandLogo.jsx";

export function TudumIntro({ onComplete }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Attempt to play Tudum sound
    const timerAudio = setTimeout(() => {
      tudumAudio.playTudum();
    }, 100);

    // Trigger fade transition
    const timerFade = setTimeout(() => {
      setFading(true);
    }, 2100);

    // Complete intro
    const timerComplete = setTimeout(() => {
      sessionStorage.setItem("netflix_has_seen_intro", "true");
      if (onComplete) onComplete();
    }, 2600);

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

  return (
    <div className={`tudum-container ${fading ? "tudum-fade-out" : ""}`} onClick={handleSkip}>
      <div className="tudum-animation-wrapper">
        {/* Crisp Vector Netflix N Ribbon Logo */}
        <div className="tudum-n-container">
          <NetflixNLogo width={70} height={110} />
          <div className="n-glow-pulse"></div>
        </div>

        {/* Crisp Vector Netflix Wordmark */}
        <div className="tudum-wordmark-wrapper">
          <NetflixWordmark height={36} />
        </div>
      </div>

      <button className="tudum-skip-btn" onClick={handleSkip}>
        Skip Intro ✕
      </button>
    </div>
  );
}
