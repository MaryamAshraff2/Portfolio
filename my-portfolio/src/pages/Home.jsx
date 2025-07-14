import React from "react";
import { useNavigate } from "react-router-dom";

const cafeImg = "/me.jpg";

const badges = [
  { label: "AI/ML Enthusiast", icon: "<>" },
  { label: "R&B Lover", icon: "🎵" },
  { label: "Café Dreamer", icon: "☕" },
  { label: "Vintage Soul", icon: "♡" },
];

const arrowBtnStyle = {
  position: "fixed",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 100,
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

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f7f3ea",
      fontFamily: "'Georgia', 'serif', 'Inter', sans-serif",
      padding: "0 0 0 0",
    }}>
      {/* Top Center Arrow Button */}
      <button
        aria-label="Go to main page"
        style={{ ...arrowBtnStyle, top: 24 }}
        onClick={() => navigate("/")}
      >
        <span style={{ display: "block", transform: "rotate(-90deg)" }}>➤</span>
      </button>
      {/* Bottom Center Arrow Button */}
      <button
        aria-label="Go to next page"
        style={{ ...arrowBtnStyle, bottom: 24 }}
        onClick={() => navigate("/about")}
      >
        <span style={{ display: "block", transform: "rotate(90deg)" }}>➤</span>
      </button>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "48px 24px 24px 24px",
      }}>
        {/* Left: Text Content */}
        <div style={{ flex: 1, minWidth: 340, maxWidth: 600 }}>
          <div style={{ fontStyle: "italic", color: "#7c7c7c", fontSize: 22, marginBottom: 8 }}>
            Getting to know me
          </div>
          <div style={{ fontSize: 54, fontWeight: 700, lineHeight: 1.1, marginBottom: 16 }}>
            A Digital Soul with <span style={{ color: "#4b6b4b" }}>Vintage Dreams</span>
          </div>
          <div style={{ fontSize: 20, color: "#6d535e", marginBottom: 28, lineHeight: 1.6 }}>
            Picture this: someone who codes AI models while listening to smooth R&B, dreams in vintage European aesthetics, and finds inspiration in rainy café windows. That's me in a nutshell.
          </div>
          <div style={{ fontSize: 20, color: "#6d535e", marginBottom: 28, lineHeight: 1.6 }}>
            I'm fascinated by the intersection of <span style={{ fontWeight: 700, color: '#3d3d3d' }}>technology and humanity.</span> Whether I'm building machine learning systems or crafting user experiences, I believe in creating digital spaces that feel warm, thoughtful, and genuinely human.
          </div>
          <div style={{ fontSize: 20, color: "#6d535e", marginBottom: 32, lineHeight: 1.6 }}>
            When I'm not immersed in code, you'll find me curating the perfect playlist for a night drive, getting lost in crime documentaries, or dreaming about cozy European bookshops I'd love to visit someday.
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {badges.map((badge) => (
              <span
                key={badge.label}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "#f3e7d9",
                  color: "#6d535e",
                  borderRadius: 22,
                  padding: "8px 18px",
                  fontSize: 17,
                  fontWeight: 500,
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  border: "1px solid #e7d7c7",
                  marginBottom: 6,
                }}
              >
                <span style={{ fontSize: 18 }}>{badge.icon}</span> {badge.label}
              </span>
            ))}
          </div>
        </div>
        {/* Right: Image with Quote Overlay */}
        <div style={{
          flex: 1,
          minWidth: 320,
          maxWidth: 480,
          marginLeft: 32,
          marginTop: 24,
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}>
          <div style={{ position: "relative", width: "100%", maxWidth: 420 }}>
            <img
              src={cafeImg}
              alt="Vintage cafe illustration"
              style={{
                width: "100%",
                borderRadius: 24,
                boxShadow: "0 6px 32px rgba(80,60,40,0.13)",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 18,
                left: 18,
                background: "rgba(255,255,255,0.92)",
                borderRadius: 16,
                padding: "16px 24px",
                fontSize: 20,
                color: "#6d535e",
                fontStyle: "italic",
                boxShadow: "0 2px 12px rgba(80,60,40,0.07)",
                maxWidth: "85%",
              }}
            >
              "Creating digital experiences that feel like warm hugs."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;



