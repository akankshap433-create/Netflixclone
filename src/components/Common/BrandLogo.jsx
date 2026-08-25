import React from "react";

// Official-style scalable Netflix Wordmark SVG
export function NetflixWordmark({ height = 32, className = "" }) {
  return (
    <svg 
      className={`netflix-wordmark-svg ${className}`}
      height={height} 
      viewBox="0 0 111 30" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <path 
        d="M105.06 14.16L110.87 29.56H104.99L101.44 20.35L97.89 29.56H92.01L97.82 14.16L92.24 0H98.12L101.44 9.07L104.76 0H110.64L105.06 14.16ZM84.77 0V29.56H79.62V0H84.77ZM70.4 29.56H65.25V5.15H56.55V0H79.1V5.15H70.4V29.56ZM47.88 5.15H42.73V12.18H47.16V17.33H42.73V29.56H37.58V0H47.88V5.15ZM29.28 29.56H18.98V0H29.28V5.15H24.13V12.18H28.56V17.33H24.13V24.41H29.28V29.56ZM10.3 14.78L13.73 29.56H8.58L5.15 14.78V29.56H0V0H5.15L8.58 14.78L5.15 0H10.3V14.78Z" 
        fill="#E50914"
      />
    </svg>
  );
}

// Official-style scalable Netflix "N" Ribbon Logo
export function NetflixNLogo({ width = 45, height = 75, className = "" }) {
  return (
    <svg 
      className={`netflix-n-ribbon-svg ${className}`}
      width={width} 
      height={height} 
      viewBox="0 0 38 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left Red Vertical Pillar */}
      <path d="M0 0H12V60H0V0Z" fill="#B1060F" />
      {/* Right Red Vertical Pillar */}
      <path d="M26 0H38V60H26V0Z" fill="#B1060F" />
      {/* Center Diagonal Ribbon with Drop Shadow */}
      <path 
        d="M0 0H12L38 60H26L0 0Z" 
        fill="#E50914" 
        filter="drop-shadow(-3px 0px 4px rgba(0,0,0,0.7))"
      />
    </svg>
  );
}
