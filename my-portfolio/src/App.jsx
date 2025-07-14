import React from "react";
import VinylSpinner from "./components/VinylSpinner";
import FlyingBeeButton from "./components/FlyingBeeButton";

const THEME_COLORS = [
  
  "#755072", // Dusty Purple
  "#F4F1DE", // Soft Ivory
];

const bgAnimName = "bg-color-cycle";

const keyframes = `
  @keyframes ${bgAnimName} {
    0% { background: linear-gradient(135deg, ${THEME_COLORS[0]}, ${THEME_COLORS[1]}); }
    20% { background: linear-gradient(135deg, ${THEME_COLORS[1]}, ${THEME_COLORS[2]}); }
    40% { background: linear-gradient(135deg, ${THEME_COLORS[2]}, ${THEME_COLORS[3]}); }
    60% { background: linear-gradient(135deg, ${THEME_COLORS[3]}, ${THEME_COLORS[4]}); }
    80% { background: linear-gradient(135deg, ${THEME_COLORS[4]}, ${THEME_COLORS[0]}); }
    100% { background: linear-gradient(135deg, ${THEME_COLORS[0]}, ${THEME_COLORS[1]}); }
  }
`;

const App = () => {
  return (
    <div>
      <style>{keyframes}</style>
      {/* Film grain overlay style */}
      <style>{`
        .film-grain-overlay {
          pointer-events: none;
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          z-index: 1;
          opacity: 0.22;
          mix-blend-mode: soft-light;
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" seed="2"/></filter><rect width="120" height="120" fill="white" filter="url(%23grain)" opacity="0.55"/></svg>');
          background-size: 220px 220px;
          animation: grain-move 1.8s steps(2) infinite alternate;
        }
        @keyframes grain-move {
          0% { background-position: 0 0; }
          100% { background-position: 40px 60px; }
        }
      `}</style>
      <div className="film-grain-overlay" />
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: `${bgAnimName} 18s linear infinite`,
          transition: "background 2s",
          position: "relative",
          zIndex: 2,
        }}
      >
        <VinylSpinner size={320} speed={4} />
        <FlyingBeeButton targetUrl="/home" size={40} />
      </div>
    </div>
  );
};

export default App;
