import React from "react";

/**
 * Tradie Voice Mate — Card
 * Surface container. `light` (white on mint), `dark` (raised ink on near-black),
 * `pricing` (bordered white feature card). Flat by default; soft shadow optional.
 */
export function Card({ children, variant = "light", elevated = false, style = {}, ...rest }) {
  const variants = {
    light: {
      background: "var(--surface-light-card)",
      color: "var(--tvm-on-light)",
      border: "1px solid var(--tvm-mint-200)",
    },
    dark: {
      background: "var(--surface-dark-card)",
      color: "var(--tvm-on-dark)",
      border: "1px solid var(--tvm-on-dark-15)",
    },
    pricing: {
      background: "#fff",
      color: "var(--tvm-on-light)",
      border: "2px solid var(--tvm-deep-teal)",
    },
  };
  return (
    <div
      style={{
        borderRadius: "var(--radius-lg)",
        padding: "var(--space-6)",
        boxShadow: elevated ? "var(--shadow-card)" : "none",
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
