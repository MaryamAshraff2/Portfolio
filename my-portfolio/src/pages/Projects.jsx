import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    icon: (
      <span style={{ fontSize: 32, color: '#a89eb2' }}>🧠</span>
    ),
    category: "Design and Analysis of Algorithms",
    title: "Simulated-GPS-Navigation-System-for-NED",
    status: { label: "Live", color: "#3d5c3d" },
    description:
      "A simulation-based navigation system built for the NED University campus using static node-edge data and graph search algorithms.",
    tech: ["Python", "Dijkstra’s Algorithm", "React+Vite"],
    codeUrl: "https://github.com/MaryamAshraff2/Simulated-GPS-Navigation-System-for-NED.git",
    demoUrl: "/CAMPUS NAVIGATION SYSTEM.mp4",
  },
  {
    icon: (
      <span style={{ fontSize: 32, color: '#a89eb2' }}>🎨</span>
    ),
    category: "ML/CV",
    title: "Real-Time-Wildlife-Detection-using-YOLOv8s",
    status: { label: "Completed", color: "#a89e7b" },
    description:
      "A real-time wildlife detection app using a custom YOLOv8s model and Streamlit to identify six species from images, video, or webcam input.",
    tech: ["YOLOv8s ", "Roboflow ", "Streamlit", "Google Colab "],
    codeUrl: "https://github.com/MaryamAshraff2/Real-Time-Wildlife-Detection-using-YOLOv8s.git",
    demoUrl: "#",
  },
];

const badgeStyle = {
  display: "inline-block",
  background: "#f3e7d9",
  color: "#6d535e",
  borderRadius: 22,
  padding: "6px 16px",
  fontSize: 15,
  fontWeight: 500,
  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
  border: "1px solid #e7d7c7",
  marginRight: 8,
  marginBottom: 6,
};

const modalBackdropStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.32)",
  zIndex: 1000,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modalContentStyle = {
  background: "#fcfaf6",
  borderRadius: 18,
  boxShadow: "0 8px 40px rgba(80,60,40,0.18)",
  padding: 0,
  maxWidth: 720,
  width: "90vw",
  maxHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
};

const closeBtnStyle = {
  position: "absolute",
  top: 12,
  right: 18,
  background: "#f3e7d9",
  border: "none",
  borderRadius: "50%",
  width: 36,
  height: 36,
  fontSize: 22,
  color: "#6d535e",
  cursor: "pointer",
  boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
  zIndex: 2,
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

const Projects = () => {
  const [modalVideo, setModalVideo] = useState(null);
  const navigate = useNavigate();

  const openModal = (videoUrl) => setModalVideo(videoUrl);
  const closeModal = () => setModalVideo(null);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f7f3ea",
      fontFamily: "'Georgia', 'serif', 'Inter', sans-serif",
      padding: 0,
    }}>
      {/* Top Center Arrow Button */}
      <button
        aria-label="Go to Home"
        style={{ ...arrowBtnStyle, top: 24 }}
        onClick={() => navigate("/home")}
      >
        <span style={{ display: "block", transform: "rotate(-90deg)" }}>➤</span>
      </button>
      {/* Bottom Center Arrow Button */}
      <button
        aria-label="Go to Interests"
        style={{ ...arrowBtnStyle, bottom: 24 }}
        onClick={() => navigate("/interests")}
      >
        <span style={{ display: "block", transform: "rotate(90deg)" }}>➤</span>
      </button>
      {/* Header Section */}
      <div style={{ textAlign: "center", marginTop: 36, marginBottom: 18 }}>
        <div style={{ fontStyle: "italic", color: "#7c6c8a", fontSize: 22, marginBottom: 8 }}>
          What I've been crafting
        </div>
        <div style={{ fontSize: 54, fontWeight: 700, lineHeight: 1.1, marginBottom: 16 }}>
          Projects Born from <span style={{ color: "#4b6b4b" }}>Passion & Purpose</span>
        </div>
        <div style={{ fontSize: 22, color: "#8d6d7b", marginBottom: 36, maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
          Each project is a blend of technical innovation and creative expression, designed to solve real problems while bringing a touch of beauty to the digital world.
        </div>
      </div>
      {/* Projects Grid */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 36,
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {projects.map((proj, idx) => (
          <div
            key={proj.title}
            style={{
              background: "#fcfaf6",
              borderRadius: 22,
              boxShadow: "0 4px 32px rgba(80,60,40,0.07)",
              padding: "32px 32px 28px 32px",
              minWidth: 340,
              maxWidth: 420,
              flex: "1 1 340px",
              marginBottom: 24,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {/* Icon */}
            <div style={{
              background: "#f3f0f7",
              borderRadius: 16,
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 18,
            }}>
              {proj.icon}
            </div>
            {/* Category */}
            <div style={{ color: "#a89eb2", fontWeight: 600, fontSize: 16, marginBottom: 4 }}>
              {proj.category}
            </div>
            {/* Title */}
            <div style={{ fontSize: 28, fontWeight: 700, color: "#2d2d2d", marginBottom: 8 }}>
              {proj.title}
            </div>
            {/* Status Badge */}
            <div style={{
              position: "absolute",
              top: 24,
              right: 32,
              background: proj.status.color,
              color: "#fff",
              borderRadius: 16,
              padding: "4px 18px",
              fontWeight: 600,
              fontSize: 16,
              opacity: 0.92,
            }}>
              {proj.status.label}
            </div>
            {/* Description */}
            <div style={{ fontSize: 17, color: "#7d5e6b", marginBottom: 18, marginTop: 6 }}>
              {proj.description}
            </div>
            {/* Tech Badges */}
            <div style={{ marginBottom: 18 }}>
              {proj.tech.map((t) => (
                <span key={t} style={badgeStyle}>{t}</span>
              ))}
            </div>
            {/* Buttons */}
            <div style={{ display: "flex", gap: 16, width: "100%" }}>
              <a
                href={proj.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  background: "#f7f3ea",
                  border: "none",
                  borderRadius: 12,
                  padding: "12px 0",
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#6d535e",
                  textAlign: "center",
                  textDecoration: "none",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  transition: "background 0.2s, box-shadow 0.2s",
                }}
              >
                <span role="img" aria-label="code">🛠️</span> Code
              </a>
              <button
                onClick={() => openModal(proj.demoUrl)}
                style={{
                  flex: 1,
                  background: "#ede6d6",
                  border: "none",
                  borderRadius: 12,
                  padding: "12px 0",
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#6d535e",
                  textAlign: "center",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  cursor: "pointer",
                  transition: "background 0.2s, box-shadow 0.2s",
                }}
              >
                <span role="img" aria-label="demo">↗️</span> Demo
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Modal Popup for Video Demo */}
      {modalVideo && (
        <div style={modalBackdropStyle} onClick={closeModal}>
          <div
            style={modalContentStyle}
            onClick={e => e.stopPropagation()}
          >
            <button style={closeBtnStyle} onClick={closeModal} aria-label="Close">×</button>
            <video
              src={modalVideo}
              controls
              autoPlay
              style={{
                width: "100%",
                maxHeight: "70vh",
                borderRadius: 12,
                background: "#000",
                marginTop: 36,
                marginBottom: 18,
              }}
            >
              Sorry, your browser does not support embedded videos.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects; 