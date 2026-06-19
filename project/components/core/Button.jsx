import React from "react";

/**
 * Tradie Voice Mate — Button
 * Pill-shaped CTA. Primary = Deep Teal fill, Secondary = ghost/outline,
 * Inverted = white fill (for use on teal sections).
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled = false,
  trailingArrow = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: "10px 18px", fontSize: "14px" },
    md: { padding: "14px 26px", fontSize: "16px" },
    lg: { padding: "18px 34px", fontSize: "18px" },
  };

  const variants = {
    primary: {
      background: "var(--tvm-deep-teal)",
      color: "#fff",
      border: "2px solid transparent",
      boxShadow: "var(--shadow-teal)",
    },
    secondary: {
      background: "transparent",
      color: "#fff",
      border: "2px solid var(--tvm-on-dark-15)",
    },
    inverted: {
      background: "#fff",
      color: "var(--tvm-near-black)",
      border: "2px solid transparent",
    },
    "inverted-ghost": {
      background: "transparent",
      color: "#fff",
      border: "2px solid rgba(255,255,255,0.6)",
    },
  };

  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    letterSpacing: "var(--tracking-cta)",
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    textDecoration: "none",
    lineHeight: 1,
    transition: "transform var(--dur-fast) var(--ease-out), filter var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)",
    whiteSpace: "nowrap",
    ...sizes[size],
    ...variants[variant],
    ...style,
  };

  const hover = (e, on) => {
    if (disabled) return;
    e.currentTarget.style.transform = on ? "translateY(-1px)" : "translateY(0)";
    e.currentTarget.style.filter = on ? "brightness(0.94)" : "brightness(1)";
  };

  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      onClick={onClick}
      disabled={href ? undefined : disabled}
      style={base}
      onMouseEnter={(e) => hover(e, true)}
      onMouseLeave={(e) => hover(e, false)}
      {...rest}
    >
      {children}
      {trailingArrow && <span aria-hidden="true" style={{ fontFamily: "var(--font-body)" }}>→</span>}
    </Tag>
  );
}
