import React from "react";

/**
 * Tradie Voice Mate — Tick
 * Forest-green check + label. Used for trust indicators and pricing inclusions.
 */
export function Tick({ children, onDark = false, style = {}, ...rest }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        fontFamily: "var(--font-body)",
        fontSize: "15px",
        fontWeight: 500,
        color: onDark ? "var(--tvm-on-dark-70)" : "var(--tvm-on-light-70)",
        ...style,
      }}
      {...rest}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
        <path d="M20 6L9 17l-5-5" stroke="var(--tvm-forest-green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {children}
    </span>
  );
}
