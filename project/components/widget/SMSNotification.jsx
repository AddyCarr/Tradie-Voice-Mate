import React from "react";

/**
 * Tradie Voice Mate — SMSNotification
 * The lead-summary SMS that slides in when the demo call ends.
 * Styled as a real phone notification: app row + monospaced field list.
 */
export function SMSNotification({
  business = "Tradie Voice Mate",
  fields = [],
  time = "now",
  style = {},
}) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "18px",
        padding: "14px 16px",
        width: "320px",
        maxWidth: "100%",
        boxShadow: "0 24px 60px -20px rgba(8,8,26,0.6)",
        fontFamily: "var(--font-body)",
        color: "var(--tvm-near-black)",
        ...style,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
        <span style={{
          width: "26px", height: "26px", borderRadius: "7px", background: "var(--tvm-forest-green)",
          display: "grid", placeItems: "center", flexShrink: 0,
        }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </span>
        <span style={{ fontWeight: 600, fontSize: "13px", flex: 1 }}>New lead — {business}</span>
        <span style={{ fontSize: "12px", color: "var(--tvm-on-light-45)" }}>{time}</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "4px 14px", fontSize: "13.5px", lineHeight: 1.45 }}>
        {fields.map((f, i) => (
          <React.Fragment key={i}>
            <span style={{ color: "var(--tvm-on-light-45)", fontWeight: 500 }}>{f.label}</span>
            <span style={{ fontWeight: f.strong ? 700 : 500, color: f.accent ? "var(--tvm-forest-green)" : "var(--tvm-near-black)" }}>{f.value}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
