import React from "react";

export function Logo({
  width = 150,
  height = 52,
  isNavHovered = false,
  color,
  ...props
}) {
  const logoColor = color || (isNavHovered ? "#0F3D3E" : "#ffffff");

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 300 120"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: logoColor, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: logoColor, stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Background circle elements */}
      <circle cx="30" cy="40" r="12" fill={logoColor} opacity="0.8" />
      <circle cx="50" cy="40" r="12" fill={logoColor} opacity="0.6" />

      {/* Main company name */}
      <text
        x="80"
        y="50"
        fontFamily="Arial, sans-serif"
        fontSize="32"
        fontWeight="bold"
        fill={logoColor}
      >
        nunu
      </text>

      {/* Consulting text */}
      <text
        x="80"
        y="75"
        fontFamily="Arial, sans-serif"
        fontSize="16"
        fontWeight="normal"
        fill={logoColor}
        letterSpacing="2px"
      >
        CONSULTING
      </text>

      {/* Decorative line */}
      <line x1="80" y1="85" x2="240" y2="85" stroke={logoColor} strokeWidth="2" />

      {/* Small accent dots */}
      <circle cx="245" cy="85" r="2" fill={logoColor} />
      <circle cx="255" cy="85" r="2" fill={logoColor} />
    </svg>
  );
}