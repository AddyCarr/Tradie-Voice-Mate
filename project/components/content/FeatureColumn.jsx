import React from "react";

/**
 * Tradie Voice Mate — FeatureColumn
 * Oversized Staatliches numeral in Deep Teal + headline + body, with a left divider.
 * The signature "Large Number Columns" layout from the Features section.
 */
export function FeatureColumn({ number, title, children, onDark = true, divider = true, style = {} }) {
  return (
    <div
      style={{
        paddingLeft: divider ? "var(--space-5)" : 0,
        borderLeft: divider ? "1px solid " + (onDark ? "var(--tvm-on-dark-15)" : "var(--tvm-on-light-12)") : "none",
        ...style,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--type-numeral)",
          lineHeight: 0.9,
          color: "var(--tvm-deep-teal)",
        }}
      >
        {number}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          fontSize: "clamp(1.25rem, 2vw, 1.6rem)",
          letterSpacing: "0.02em",
          margin: "var(--space-3) 0 var(--space-2)",
          color: onDark ? "var(--tvm-on-dark)" : "var(--tvm-on-light)",
          lineHeight: 1.05,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--type-body)",
          lineHeight: "var(--leading-body)",
          margin: 0,
          color: onDark ? "var(--tvm-on-dark-70)" : "var(--tvm-on-light-70)",
        }}
      >
        {children}
      </p>
    </div>
  );
}
