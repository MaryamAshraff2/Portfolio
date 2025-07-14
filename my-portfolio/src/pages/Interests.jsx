import React from "react";
import { useNavigate } from "react-router-dom";

const interests1 = [
  {
    icon: "🎵",
    title: "R&B & Chill Vibes",
    desc: "Curating the perfect playlist for late-night coding sessions and dreamy car rides.",
    link: "https://open.spotify.com/playlist/37i9dQZF1FoTfQ80oldq9i?si=XDkzsR7UTcuemQdCOpT9HQ&pi=zEjZ-cmKTbutb"
  },
  {
    icon: "📖",
    title: "Crime Documentaries",
    desc: "Fascinated by the psychology behind mysteries and the art of storytelling.",
    link: "https://www.youtube.com/@rottenmangopod"
  },
  {
    icon: "🚗",
    title: "Night Drives",
    desc: "There's something magical about empty roads, city lights, and good music.",
  },
];

const interests2 = [
  {
    icon: "☕",
    title: "Café Culture",
    desc: "Seeking cozy corners, vintage interiors, and the perfect brew for productivity.",
  },
  {
    icon: "📷",
    title: "Vintage Photography",
    desc: "Capturing moments with film grain aesthetics and warm, nostalgic tones.",
    link: "https://pin.it/3Xc5N1tXX"
  },
  {
    icon: "📍",
    title: "European Dreams",
    desc: "Planning future adventures to cobblestone streets and old-world charm.",
  },
];

const playlistMoods = [
  {
    label: "Late Night Coding",
    link: "https://open.spotify.com/track/2f1WulnyiYYnseSQWI8Oi9?si=B5bbthdCR7i2JYKjOLwR1w&context=spotify%3Aplaylist%3A37i9dQZF1DX9FgX1w7S7rW"
  },
  {
    label: "Rainy Window Vibes",
    link: "https://open.spotify.com/track/7hEYnl43DzkQkjEKpW5Xhh?si=4fQEC-ucRB-3KgbnU4xqpg"
  },
  {
    label: "Golden Hour Dreams",
    link: "https://open.spotify.com/track/0OdztoASgKBBNcAgtErk0X?si=Sd3umo6NSs6VaF3PFW8s1g"
  },
  {
    label: "City Light Cruising",
    link: "https://open.spotify.com/track/3rmqiQbzPDx7A8p88IRFKg?si=Vg6lqBMbSjev2RtIfcAv_g"
  },
  {
    label: "Sunday Morning Coffee",
    link: "https://open.spotify.com/track/7eJMfftS33KTjuF7lTsMCx?si=B9Y1wYYaTj2sReTc9o8ijg"
  }
];

const cardStyle = {
  background: "#fcfaf6",
  borderRadius: 22,
  boxShadow: "0 4px 32px rgba(80,60,40,0.07)",
  padding: "38px 32px 28px 32px",
  minWidth: 320,
  maxWidth: 420,
  flex: "1 1 320px",
  margin: 18,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  transition: "box-shadow 0.2s, transform 0.2s",
};

const badgeStyle = {
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
  margin: 8,
};

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

const Interests = () => {
  const navigate = useNavigate();
  return (
    <div style={{
      minHeight: "100vh",
      background: "#f7f3ea",
      fontFamily: "'Georgia', 'serif', 'Inter', sans-serif",
      padding: 0,
    }}>
      {/* Top Center Arrow Button */}
      <button
        aria-label="Go to Projects"
        style={{ ...arrowBtnStyle, top: 24 }}
        onClick={() => navigate("/about")}
      >
        <span style={{ display: "block", transform: "rotate(-90deg)" }}>➤</span>
      </button>
      {/* Bottom Center Arrow Button */}
      <button
        aria-label="Go to Contact"
        style={{ ...arrowBtnStyle, bottom: 24 }}
        onClick={() => navigate("/contact")}
      >
        <span style={{ display: "block", transform: "rotate(90deg)" }}>➤</span>
      </button>
      {/* Header Section */}
      <div style={{ textAlign: "center", marginTop: 48, marginBottom: 18 }}>
        <div style={{ fontStyle: "italic", color: "#7c6c8a", fontSize: 22, marginBottom: 8 }}>
          Beyond the code
        </div>
        <div style={{ fontSize: 54, fontWeight: 700, lineHeight: 1.1, marginBottom: 16 }}>
          What Makes My <span style={{ color: "#4b6b4b" }}>Soul Sing</span>
        </div>
        <div style={{ fontSize: 24, color: "#8d6d7b", marginBottom: 36, maxWidth: 900, marginLeft: "auto", marginRight: "auto" }}>
          The inspiration for my work comes from life's simple pleasures and the beauty found in everyday moments.
        </div>
      </div>
      {/* Interests Cards Row 1 */}
      <div style={{
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "center",
        gap: 36,
        maxWidth: 1400,
        margin: "0 auto 0 auto",
        overflowX: "auto",
      }}>
        {interests1.map((item) => {
          const card = (
            <div key={item.title} style={{
              ...cardStyle,
              cursor: item.link ? "pointer" : "default",
              ...(item.link ? {
                boxShadow: "0 8px 32px rgba(80,60,40,0.13)",
              } : {})
            }}>
              <div style={{
                background: "#f3ecd9",
                borderRadius: "50%",
                width: 80,
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
                fontSize: 38,
                color: "#7c6c8a",
              }}>{item.icon}</div>
              <div style={{ fontSize: 28, fontWeight: 700, color: "#2d2d2d", marginBottom: 10, fontFamily: "inherit" }}>{item.title}</div>
              <div style={{ fontSize: 18, color: "#7d5e6b" }}>{item.desc}</div>
            </div>
          );
          return item.link ? (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              {card}
            </a>
          ) : card;
        })}
      </div>
      {/* Interests Cards Row 2 */}
      <div style={{
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "center",
        gap: 36,
        maxWidth: 1400,
        margin: "32px auto 0 auto",
        overflowX: "auto",
      }}>
        {interests2.map((item) => {
          const card = (
            <div key={item.title} style={{
              ...cardStyle,
              cursor: item.link ? "pointer" : "default",
              ...(item.link ? {
                boxShadow: "0 8px 32px rgba(80,60,40,0.13)",
              } : {})
            }}>
              <div style={{
                background: "#f3ecd9",
                borderRadius: "50%",
                width: 80,
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
                fontSize: 38,
                color: item.title === "European Dreams" ? "#4b6b4b" : "#7c6c8a",
              }}>{item.icon}</div>
              <div style={{ fontSize: 28, fontWeight: 700, color: "#2d2d2d", marginBottom: 10, fontFamily: "inherit" }}>{item.title}</div>
              <div style={{ fontSize: 18, color: "#7d5e6b" }}>{item.desc}</div>
            </div>
          );
          return item.link ? (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              {card}
            </a>
          ) : card;
        })}
      </div>
      {/* Playlist Moods Section */}
      <div style={{
        background: "#fcfaf6",
        borderRadius: 22,
        boxShadow: "0 4px 32px rgba(80,60,40,0.07)",
        margin: "48px auto 0 auto",
        maxWidth: 1200,
        padding: "38px 32px 28px 32px",
        textAlign: "center",
      }}>
        <div style={{ fontSize: 38, color: "#7c6c8a", marginBottom: 8 }}>
          <span role="img" aria-label="headphones">🎧</span>
        </div>
        <div style={{ fontSize: 34, fontWeight: 700, color: "#2d2d2d", marginBottom: 8, fontFamily: "inherit" }}>
          Current Playlist Moods
        </div>
        <div style={{ fontSize: 20, color: "#8d6d7b", marginBottom: 24 }}>
          The soundtracks that fuel my creativity and code
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginBottom: 18 }}>
          {playlistMoods.map((mood) =>
            mood.link ? (
              <a
                key={mood.label}
                href={mood.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <span style={badgeStyle}>♡ {mood.label}</span>
              </a>
            ) : (
              <span key={mood.label} style={badgeStyle}>♡ {mood.label}</span>
            )
          )}
        </div>
        <div style={{ fontStyle: "italic", color: "#7c6c8a", fontSize: 20, marginTop: 18, textAlign: "right", width: "100%" }}>
          "Music is the rhythm that makes code dance"
        </div>
      </div>
    </div>
  );
};

export default Interests; 