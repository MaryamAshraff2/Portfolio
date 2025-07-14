import React, { useMemo, useRef, useState, useEffect } from "react";
import "../App.css";

const VinylSpinner = ({ size = 320, speed = 4 }) => {
  // Unique animation names for isolation
  const uniqueId = useMemo(() => Math.random().toString(36).substr(2, 6), []);
  const spinAnim = `vinyl-spin-${uniqueId}`;
  const bounceAnim = `vinyl-bounce-${uniqueId}`;
  const daisyAnim = `daisy-flutter-${uniqueId}`;

  // Keyframes for all animations
  const keyframes = `
    @keyframes ${spinAnim} {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes ${bounceAnim} {
      0%, 100% { transform: translateY(0); }
      20% { transform: translateY(-8px); }
      50% { transform: translateY(0); }
      70% { transform: translateY(6px); }
    }
    @keyframes ${daisyAnim} {
      0%, 100% { transform: scale(1) rotate(-2deg); }
      25% { transform: scale(1.04) rotate(2deg); }
      50% { transform: scale(0.98) rotate(-3deg); }
      75% { transform: scale(1.03) rotate(1deg); }
    }
  `;

  // Sizes
  const center = size / 2;
  const vinylRadius = center * 0.95;
  const labelRadius = center * 0.26;
  const grooveRadii = [0.7, 0.6, 0.5, 0.4, 0.3].map(f => center * f);

  // Glow
  const glowSize = size * 1.5;
  const glowColor = "rgba(230, 216, 173, 0.45)";
  const glowStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: glowSize,
    height: glowSize,
    transform: "translate(-50%, -50%)",
    borderRadius: "50%",
    background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
    filter: "blur(32px)",
    zIndex: 0,
    pointerEvents: "none",
  };

  return (
    <div style={{ width: size, height: size + 80, position: "relative", margin: "0 auto" }}>
      <style>{keyframes}</style>
      {/* Glow */}
      <div style={glowStyle} />
      {/* SVG Layer */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{
          display: "block",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Vinyl shadow */}
        <ellipse
          cx={center}
          cy={center + size * 0.06}
          rx={vinylRadius * 0.98}
          ry={vinylRadius * 0.18}
          fill="#bca98c"
          opacity="0.25"
        />
        {/* Vinyl record (spinning & bouncing) */}
        <g
          style={{
            transformOrigin: `${center}px ${center}px`,
            animation: `${spinAnim} linear infinite ${speed}s, ${bounceAnim} ease-in-out infinite ${speed * 1.2}s`,
          }}
        >
          {/* Main vinyl */}
          <circle
            cx={center}
            cy={center}
            r={vinylRadius}
            fill="#181818"
            stroke="#111"
            strokeWidth={size * 0.012}
          />
          {/* Grooves */}
          {grooveRadii.map((r, i) => (
            <circle
              key={i}
              cx={center}
              cy={center}
              r={r}
              fill="none"
              stroke="#353535"
              strokeWidth={size * 0.006}
              opacity={0.18 + 0.08 * (grooveRadii.length - i)}
            />
          ))}
          {/* Highlight */}
          <ellipse
            cx={center - vinylRadius * 0.25}
            cy={center - vinylRadius * 0.18}
            rx={vinylRadius * 0.38}
            ry={vinylRadius * 0.09}
            fill="#fff"
            opacity="0.13"
          />
          {/* Center label (cream) */}
          <circle
            cx={center}
            cy={center}
            r={labelRadius}
            fill="#f4f1de"
            stroke="#e6d8ad"
            strokeWidth={size * 0.012}
          />
          {/* Daisy (fluttering) */}
          <g
            style={{
              transformOrigin: `${center}px ${center}px`,
              animation: `${daisyAnim} 2.8s ease-in-out infinite`,
            }}
          >
            {/* Petals - now properly aligned */}
            {[...Array(12)].map((_, i) => {
              const angle = (i * 360) / 12;
              const petalLength = labelRadius * 0.8;
              const petalWidth = labelRadius * 0.3;
              
              // Calculate petal position
              const x = center;
              const y = center - labelRadius * 0.45; // Start position at top of center
              
              return (
                <ellipse
                  key={i}
                  cx={x}
                  cy={y}
                  rx={petalWidth}
                  ry={petalLength}
                  fill="#fff"
                  stroke="#e6d8ad"
                  strokeWidth={size * 0.008}
                  transform={`rotate(${angle} ${center} ${center})`}
                  opacity="0.96"
                />
              );
            })}
            {/* Daisy center */}
            <circle
              cx={center}
              cy={center}
              r={labelRadius * 0.38}
              fill="#e6d8ad"
              stroke="#bca98c"
              strokeWidth={size * 0.008}
            />
          </g>
          {/* Center hole */}
          <circle
            cx={center}
            cy={center}
            r={labelRadius * 0.16}
            fill="#f4f1de"
            stroke="#bca98c"
            strokeWidth={size * 0.004}
          />
        </g>
      </svg>
      {/* Audio + Mute/Unmute Button */}
      <AudioControls />
    </div>
  );
};

// --- AudioControls subcomponent ---
const AudioControls = () => {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = muted;
      audio.volume = 0.5;
      // Try to autoplay if not muted (user interaction may be required)
      if (!muted) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      } else {
        audio.pause();
      }
    }
  }, [muted]);

  // Try to autoplay on mount (muted)
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = true;
      audio.volume = 0.5;
      audio.loop = true;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, []);

  // Theme colors (match vinyl label)
  const buttonBg = "#e6d8ad";
  const buttonBgActive = "#bca98c";
  const buttonText = "#fff";

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", marginTop: 24 }}>
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        muted={muted}
        style={{ display: "none" }}
      />
      <button
        onClick={() => setMuted(m => !m)}
        style={{
          marginTop: 8,
          padding: "10px 32px",
          borderRadius: 24,
          border: "none",
          background: muted ? buttonBg : buttonBgActive,
          color: buttonText,
          fontWeight: 600,
          fontSize: 18,
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          transition: "background 0.2s",
        }}
        aria-label={muted ? "Unmute background music" : "Mute background music"}
      >
        {muted ? "Unmute Music" : "Mute Music"}
      </button>
    </div>
  );
};

export default VinylSpinner;