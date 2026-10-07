"use client";

import React from "react";

interface FlagProps {
  active?: boolean;
  onClick?: () => void;
  className?: string;
  size?: number;
}

export function ArgentinaFlag({ active = false, onClick, className = "", size = 26 }: FlagProps) {
  // Selected flag is a bit larger and fully opaque, with NO border
  const width = active ? Math.round(size * 1.35) : size;
  const height = Math.round(width * 0.65);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-0 bg-transparent border-0 d-inline-flex align-items-center justify-content-center cursor-pointer ${className}`}
      style={{
        outline: "none",
        border: "none",
        background: "transparent",
        boxShadow: "none",
        transform: active ? "scale(1.08)" : "scale(1)",
        transition: "all 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
        opacity: active ? 1 : 0.62,
        cursor: "pointer",
      }}
      title="Español (Argentina)"
      aria-label="Seleccionar idioma Español"
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 768 512"
        style={{
          borderRadius: "3px",
          display: "block",
          filter: active ? "drop-shadow(0 2px 4px rgba(0,0,0,0.15))" : "none",
        }}
      >
        <path fill="#74acdf" d="M0 0h768v512H0z" />
        <path fill="#ffffff" d="M0 170.7h768v170.6H0z" />
        {/* Sun of May */}
        <circle cx="384" cy="256" r="42" fill="#f6b40e" />
        <circle cx="384" cy="256" r="32" fill="#d97706" />
        <circle cx="384" cy="256" r="26" fill="#f6b40e" />
        {/* Sun rays representation */}
        <g stroke="#f6b40e" strokeWidth="6">
          <line x1="384" y1="190" x2="384" y2="175" />
          <line x1="384" y1="322" x2="384" y2="337" />
          <line x1="318" y1="256" x2="303" y2="256" />
          <line x1="450" y1="256" x2="465" y2="256" />
          <line x1="337" y1="209" x2="326" y2="198" />
          <line x1="431" y1="303" x2="442" y2="314" />
          <line x1="337" y1="303" x2="326" y2="314" />
          <line x1="431" y1="209" x2="442" y2="198" />
        </g>
      </svg>
    </button>
  );
}

export function UKFlag({ active = false, onClick, className = "", size = 26 }: FlagProps) {
  const width = active ? Math.round(size * 1.35) : size;
  const height = Math.round(width * 0.65);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-0 bg-transparent border-0 d-inline-flex align-items-center justify-content-center cursor-pointer ${className}`}
      style={{
        outline: "none",
        border: "none",
        background: "transparent",
        boxShadow: "none",
        transform: active ? "scale(1.08)" : "scale(1)",
        transition: "all 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
        opacity: active ? 1 : 0.62,
        cursor: "pointer",
      }}
      title="English (UK)"
      aria-label="Select English language"
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 60 30"
        style={{
          borderRadius: "3px",
          display: "block",
          filter: active ? "drop-shadow(0 2px 4px rgba(0,0,0,0.15))" : "none",
        }}
      >
        <clipPath id="uk-clip-s">
          <path d="M0 0v30h60V0z" />
        </clipPath>
        <clipPath id="uk-clip-t">
          <path d="M30 15h30v15zm0 0v15H0zm0 0H0V0zm0 0V0h30z" />
        </clipPath>
        <g clipPath="url(#uk-clip-s)">
          <path d="M0 0v30h60V0z" fill="#012169" />
          <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
          <path d="M0 0l60 30m0-30L0 30" clipPath="url(#uk-clip-t)" stroke="#C8102E" strokeWidth="4" />
          <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
          <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
        </g>
      </svg>
    </button>
  );
}
