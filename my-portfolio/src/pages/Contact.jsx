import React from "react";
import { useNavigate } from "react-router-dom";

const cardShadow = "0 4px 32px rgba(80,60,40,0.07)";
const cardBg = "#fcfaf6";
const accentGreen = "#4b6b4b";
const accentPurple = "#7c6c8a";
const accentText = "#8d6d7b";
const mainFont = "'Georgia', 'serif', 'Inter', sans-serif";

const socialLinks = [
  {
    icon: "🐙",
    label: "GitHub",
    sub: "Check out my code",
    url: "https://github.com/MaryamAshraff2",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    sub: "Professional network",
    url: "https://www.linkedin.com/in/maryam-ashraff-1109162ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    icon: "📸",
    label: "Instagram",
    sub: "Snapshots & stories",
    url: "https://instagram.com/mxry._aff",
  },
  {
    icon: "✉️",
    label: "Email",
    sub: "Direct connection",
    url: "mailto:maryamaff2001@gmail.com",
  },
];

const vibes = [
  {
    color: "#7c6c8a",
    title: "Building AI Poetry Generator",
    sub: "Making machines write like humans",
  },
  {
    color: accentGreen,
    title: "Late Night Jazz Playlist",
    sub: "Perfect coding soundtrack",
  },
];

const arrowBtnStyle = {
  position: "fixed",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 1100,
  background: "#f3e7d9",
  border: "2px solid #e7d7c7",
  borderRadius: "50%",
  width: 54,
  height: 54,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 8px rgba(80,60,40,0.10)",
  cursor: "pointer",
  transition: "background 0.2s, box-shadow 0.2s",
  fontSize: 32,
  color: "#6d535e",
  outline: "none",
};

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div style={{
      minHeight: "100vh",
      background: "#f7f3ea",
      fontFamily: mainFont,
      padding: 0,
    }}>
      {/* Top Center Arrow Button */}
      <button
        aria-label="Go to Previous Page"
        style={{ ...arrowBtnStyle, top: 24 }}
        onClick={() => navigate(-1)}
      >
        <span style={{ display: "block", transform: "rotate(-90deg)" }}>➤</span>
      </button>
      {/* Header Section */}
      <div style={{ textAlign: "center", marginTop: 48, marginBottom: 18 }}>
        <div style={{ fontSize: 38, color: accentPurple, marginBottom: 0 }}>
          <span role="img" aria-label="cafe">☕</span>
        </div>
        <div style={{ fontStyle: "italic", color: accentPurple, fontSize: 22, marginBottom: 8, marginTop: 8 }}>
          Let's connect
        </div>
        <div style={{ fontSize: 54, fontWeight: 700, lineHeight: 1.1, marginBottom: 16 }}>
          Pull Up a Virtual <span style={{ color: accentGreen }}>Café Chair</span>
        </div>
        <div style={{ fontSize: 22, color: accentText, marginBottom: 36, maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
          Whether you want to collaborate on a project, share a playlist recommendation, or just chat about life over virtual coffee, I'd love to hear from you.
        </div>
      </div>
      {/* Main Content: Two Columns */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 36,
        maxWidth: 1200,
        margin: "0 auto 0 auto",
      }}>
        {/* Send a Message Card */}
        <div style={{
          background: cardBg,
          borderRadius: 22,
          boxShadow: cardShadow,
          padding: "38px 32px 28px 32px",
          minWidth: 340,
          maxWidth: 440,
          flex: "1 1 340px",
          marginBottom: 24,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}>
          <div style={{ fontSize: 28, fontWeight: 700, color: "#2d2d2d", marginBottom: 18, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 26, color: accentPurple }}>💬</span> Send a Message
          </div>
          <form style={{ width: "100%" }}>
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <input type="text" placeholder="Your name" style={{ flex: 1, background: "#f7f3ea", border: "none", borderRadius: 10, padding: 12, fontSize: 17, color: "#6d535e", fontFamily: mainFont, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }} />
              <input type="email" placeholder="your@email.com" style={{ flex: 1, background: "#f7f3ea", border: "none", borderRadius: 10, padding: 12, fontSize: 17, color: "#6d535e", fontFamily: mainFont, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }} />
            </div>
            <input type="text" placeholder="What's on your mind?" style={{ width: "100%", background: "#f7f3ea", border: "none", borderRadius: 10, padding: 12, fontSize: 17, color: "#6d535e", fontFamily: mainFont, marginBottom: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }} />
            <textarea placeholder="Tell me about your project, share a song recommendation, or just say hello..." style={{ width: "100%", minHeight: 90, background: "#f7f3ea", border: "none", borderRadius: 10, padding: 12, fontSize: 17, color: "#6d535e", fontFamily: mainFont, marginBottom: 18, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }} />
            <button type="submit" style={{ width: "100%", background: "#f7f3ea", color: accentPurple, border: "none", borderRadius: 10, padding: 14, fontSize: 18, fontFamily: mainFont, fontStyle: "italic", opacity: 0.5, cursor: "not-allowed" }}>Send Message</button>
          </form>
        </div>
        {/* Connect with Me Card */}
        <div style={{
          background: cardBg,
          borderRadius: 22,
          boxShadow: cardShadow,
          padding: "38px 32px 28px 32px",
          minWidth: 340,
          maxWidth: 440,
          flex: "1 1 340px",
          marginBottom: 24,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}>
          <div style={{ fontSize: 28, fontWeight: 700, color: "#2d2d2d", marginBottom: 18 }}>
            Connect with me
          </div>
          <div style={{ fontSize: 18, color: accentText, marginBottom: 24 }}>
            Find me across the digital landscape or drop a line directly. I'm always up for meaningful conversations and creative collaborations.
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, width: "100%", marginBottom: 18 }}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: "1 1 160px",
                  background: "#f7f3ea",
                  border: "none",
                  borderRadius: 12,
                  padding: "18px 0 12px 0",
                  fontSize: 18,
                  fontWeight: 600,
                  color: accentPurple,
                  textAlign: "center",
                  textDecoration: "none",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                  transition: "background 0.2s, box-shadow 0.2s",
                  marginBottom: 6,
                }}
              >
                <span style={{ fontSize: 28 }}>{s.icon}</span>
                <span style={{ fontWeight: 700, color: "#2d2d2d", fontSize: 18 }}>{s.label}</span>
                <span style={{ fontWeight: 400, color: accentText, fontSize: 15 }}>{s.sub}</span>
              </a>
            ))}
          </div>
          {/* Currently Vibing To */}
          <div style={{
            background: cardBg,
            borderRadius: 18,
            boxShadow: cardShadow,
            marginTop: 18,
            padding: "24px 18px 18px 18px",
            width: "100%",
          }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#2d2d2d", marginBottom: 12 }}>
              Currently vibing to
            </div>
            {vibes.map((v) => (
              <div key={v.title} style={{
                display: "flex",
                alignItems: "center",
                background: "#f3e7d9",
                borderRadius: 12,
                padding: "12px 18px",
                marginBottom: 10,
                gap: 12,
              }}>
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: v.color, display: "inline-block" }}></span>
                <div>
                  <div style={{ fontWeight: 700, color: "#2d2d2d", fontSize: 17 }}>{v.title}</div>
                  <div style={{ color: accentText, fontSize: 15 }}>{v.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Footer Quote Card */}
      <div style={{
        background: cardBg,
        borderRadius: 18,
        boxShadow: cardShadow,
        margin: "48px auto 0 auto",
        maxWidth: 700,
        padding: "28px 32px 18px 32px",
        textAlign: "center",
      }}>
        <div style={{ fontStyle: "italic", color: accentPurple, fontSize: 22, marginBottom: 8 }}>
          "The best conversations happen over coffee"
        </div>
        <div style={{ color: accentText, fontSize: 18 }}>
          - Someone wise, probably
        </div>
      </div>
    </div>
  );
};

export default Contact; 