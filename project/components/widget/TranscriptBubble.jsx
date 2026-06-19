import React from "react";

/**
 * Tradie Voice Mate — TranscriptBubble
 * A single line of the live-call transcript. `caller` = left, dark bubble;
 * `agent` = right, Deep Teal bubble.
 */
export function TranscriptBubble({ speaker = "caller", children, style = {} }) {
  const isAgent = speaker === "agent";
  return (
    <div style={{ display: "flex", justifyContent: isAgent ? "flex-end" : "flex-start", ...style }}>
      <div
        style={{
          maxWidth: "82%",
          padding: "10px 14px",
          borderRadius: isAgent ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
          background: isAgent ? "var(--tvm-deep-teal)" : "var(--tvm-ink-700)",
          color: isAgent ? "#fff" : "var(--tvm-on-dark-70)",
          fontFamily: "var(--font-body)",
          fontSize: "14px",
          lineHeight: 1.45,
        }}
      >
        {!isAgent && (
          <span style={{ display: "block", fontSize: "11px", fontWeight: 600, color: "var(--tvm-on-dark-50)", marginBottom: "2px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Caller
          </span>
        )}
        {children}
      </div>
    </div>
  );
}
