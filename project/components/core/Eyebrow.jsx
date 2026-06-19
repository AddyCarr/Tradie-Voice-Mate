import React from "react";

/**
 * Tradie Voice Mate — Eyebrow
 * Small uppercase label in Forest Green that sits above every section headline.
 */
export function Eyebrow({ children, onDark = false, color, style = {}, ...rest }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "var(--font-body)",
        fontSize: "var(--type-eyebrow)",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "var(--tracking-eyebrow)",
        color: color || (onDark ? "var(--tvm-forest-green)" : "var(--tvm-forest-green)"),
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
