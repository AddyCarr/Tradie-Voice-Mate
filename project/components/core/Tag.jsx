import React from "react";

/**
 * Tradie Voice Mate — Tag
 * Small pill. `data` = captured-field chip in the demo widget (mint on dark),
 * `solid` = teal fill, `outline` = hairline chip.
 */
export function Tag({ children, variant = "data", icon, style = {}, ...rest }) {
  const variants = {
    data: {
      background: "rgba(0,168,124,0.14)",
      color: "var(--tvm-teal-300)",
      border: "1px solid rgba(0,168,124,0.30)",
    },
    solid: {
      background: "var(--tvm-deep-teal)",
      color: "#fff",
      border: "1px solid transparent",
    },
    outline: {
      background: "transparent",
      color: "var(--tvm-on-light-70)",
      border: "1px solid var(--tvm-on-light-12)",
    },
    urgent: {
      background: "rgba(76,29,149,0.12)",
      color: "var(--tvm-deep-violet)",
      border: "1px solid rgba(76,29,149,0.30)",
    },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--font-body)",
        fontSize: "13px",
        fontWeight: 600,
        letterSpacing: "0.01em",
        padding: "6px 12px",
        borderRadius: "var(--radius-pill)",
        lineHeight: 1,
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {icon}
      {children}
    </span>
  );
}
