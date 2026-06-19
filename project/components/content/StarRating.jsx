import React from "react";

/**
 * Tradie Voice Mate — StarRating
 * Five-star rating for the social-proof strip. White stars by default (on teal).
 */
export function StarRating({ rating = 5, size = 16, color = "#fff", style = {} }) {
  return (
    <span style={{ display: "inline-flex", gap: "2px", ...style }} aria-label={rating + " out of 5 stars"}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"
          fill={i < rating ? color : "none"} stroke={color} strokeWidth="1.5">
          <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 7.1-1.01L12 2z"
            strokeLinejoin="round" />
        </svg>
      ))}
    </span>
  );
}
