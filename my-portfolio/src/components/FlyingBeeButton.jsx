import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FlyingBeeButton = ({ targetUrl = "/", size = 60 }) => {
  const navigate = useNavigate();
  const [position, setPosition] = useState({ 
    x: window.innerWidth / 2, 
    y: window.innerHeight / 2 
  });
  const [hovered, setHovered] = useState(false);
  const [trail, setTrail] = useState([]);
  const [direction, setDirection] = useState(1);

  const message = "   click me...";
  const letters = message.split("");

  useEffect(() => {
    let requestId;
    let velocity = { x: 1.2 * direction, y: 0.8 };
    const boundaries = {
      minX: size,
      maxX: window.innerWidth - size,
      minY: size,
      maxY: window.innerHeight - size
    };

    // Balanced weights between corners and center
    const areaWeights = {
      corners: 1.2,    // Slight preference for corners
      center: 1.0,     // But still visits center often
      edges: 0.8       // Less time on edges
    };

    const getRandomTarget = () => {
      const rand = Math.random();
      
      if (rand < 0.4) { // 40% chance for corners
        const cornerX = Math.random() > 0.5 ? boundaries.minX : boundaries.maxX;
        const cornerY = Math.random() > 0.5 ? boundaries.minY : boundaries.maxY;
        return { x: cornerX, y: cornerY };
      } 
      else if (rand < 0.7) { // 30% chance for center
        return { 
          x: boundaries.minX + (boundaries.maxX - boundaries.minX) * 0.3 + Math.random() * 0.4 * (boundaries.maxX - boundaries.minX),
          y: boundaries.minY + (boundaries.maxY - boundaries.minY) * 0.3 + Math.random() * 0.4 * (boundaries.maxY - boundaries.minY)
        };
      }
      else { // 30% chance for edge areas
        return {
          x: Math.random() > 0.5 ? 
             boundaries.minX + (boundaries.maxX - boundaries.minX) * 0.1 :
             boundaries.minX + (boundaries.maxX - boundaries.minX) * 0.9,
          y: boundaries.minY + (boundaries.maxY - boundaries.minY) * (0.2 + Math.random() * 0.6)
        };
      }
    };

    const moveBee = () => {
      setPosition(prev => {
        // Change direction every 2-4 seconds
        if (Math.random() < 0.008) {
          const target = getRandomTarget();
          const dx = target.x - prev.x;
          const dy = target.y - prev.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          velocity = {
            x: (dx / distance) * (1 + Math.random() * 0.5),
            y: (dy / distance) * (0.8 + Math.random() * 0.4)
          };
          
          setDirection(Math.sign(velocity.x));
        }

        let newX = prev.x + velocity.x;
        let newY = prev.y + velocity.y;

        // Gentle boundary handling
        if (newX < boundaries.minX || newX > boundaries.maxX) {
          velocity.x *= -0.8; // Soft bounce
          setDirection(Math.sign(velocity.x));
          newX = Math.max(boundaries.minX, Math.min(boundaries.maxX, newX));
        }

        if (newY < boundaries.minY || newY > boundaries.maxY) {
          velocity.y *= -0.8; // Soft bounce
          newY = Math.max(boundaries.minY, Math.min(boundaries.maxY, newY));
        }

        return { x: newX, y: newY };
      });

      requestId = requestAnimationFrame(moveBee);
    };

    moveBee();
    return () => cancelAnimationFrame(requestId);
  }, [direction, size]);

  useEffect(() => {
    setTrail(prev => {
      const newTrail = [...prev, position];
      if (newTrail.length > letters.length * 3) {
        return newTrail.slice(1);
      }
      return newTrail;
    });
  }, [position, letters.length]);

  const handleClick = () => {
    navigate(targetUrl);
  };

  const rotation = direction > 0 ? 0 : 180;

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        background: "none",
        border: "none",
        cursor: "pointer",
        width: `${size * 2}px`,
        height: `${size * 2}px`,
        overflow: "visible",
        padding: 0,
        left: 0,
        top: 0,
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.15s ease-out",
        zIndex: 1000,
      }}
    >
      {/* Trail letters */}
      {trail.slice(-letters.length).map((pos, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${size * 0.5}px`,
            top: `${size * 0.5}px`,
            transform: `
              translate(-50%, -50%)
              translate(${i * 10}px, ${Math.sin(i * 0.4) * 6}px)
              rotate(${i * 2}deg)
            `,
            fontSize: `${size * 0.6}px`,
            fontFamily: "'Dancing Script', cursive, sans-serif",
            fontWeight: "bold",
            color: hovered ? "#ffcc00" : "#fffacd",
            opacity: 0.3 + (i / letters.length) * 0.7,
            transition: "all 0.25s ease",
            pointerEvents: "none",
            zIndex: 1,
            textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
          }}
        >
          {letters[i % letters.length]}
        </div>
      ))}

      {/* Bee body */}
      <div
        style={{
          position: "relative",
          width: `${size}px`,
          height: `${size * 0.6}px`,
          transform: `rotateY(${rotation}deg)`,
          transformOrigin: "center",
          transition: "transform 0.2s ease",
          zIndex: 2,
        }}
      >
        {/* Bee wings */}
        <div
          style={{
            position: "absolute",
            width: `${size * 0.9}px`,
            height: `${size * 0.7}px`,
            top: `-${size * 0.25}px`,
            left: `-${size * 0.2}px`,
            zIndex: 1,
            animation: "flap 0.18s infinite alternate ease-in-out",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "rgba(255, 255, 255, 0.85)",
              borderRadius: "50%",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              filter: "blur(1px)",
            }}
          />
        </div>

        {/* Bee body */}
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#ffdb58",
            borderRadius: "50%",
            border: "2px solid #444",
            position: "relative",
            zIndex: 2,
            transform: hovered ? "scale(1.15)" : "scale(1)",
            transition: "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
          }}
        >
          {/* Vertical stripes */}
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: "14%",
                height: "100%",
                background: "#444",
                left: `${25 + i * 25}%`,
                transform: "translateX(-50%)",
                borderRadius: "2px",
              }}
            />
          ))}

          {/* Bee face */}
          <div
            style={{
              position: "absolute",
              width: `${size * 0.25}px`,
              height: `${size * 0.25}px`,
              background: "#444",
              borderRadius: "50%",
              top: "15%",
              left: "15%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              padding: "0 12%",
            }}
          >
            {/* Eyes */}
            <div
              style={{
                width: `${size * 0.07}px`,
                height: `${size * 0.07}px`,
                background: "white",
                borderRadius: "50%",
                boxShadow: "0 0 2px white",
              }}
            />
            <div
              style={{
                width: `${size * 0.07}px`,
                height: `${size * 0.07}px`,
                background: "white",
                borderRadius: "50%",
                boxShadow: "0 0 2px white",
              }}
            />
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes flap {
            0% { transform: translateY(0) rotate(3deg) scale(1); }
            100% { transform: translateY(-6px) rotate(-3deg) scale(1.05); }
          }
        `}
      </style>
    </button>
  );
};

export default FlyingBeeButton;