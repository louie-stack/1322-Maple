
import React, { useEffect, useState, useRef } from 'react';

const THREAT_MESSAGES = [
  "YOU ARE NOT SAFE",
  "THEY ARE WATCHING",
  "DO NOT TURN AROUND",
  "1322 MAPLE KNOWS YOU",
  "YOU SHOULDN'T BE HERE",
  "IT FOLLOWED YOU IN"
];

const HorrorSystem: React.FC = () => {
  const [showThreat, setShowThreat] = useState<string | null>(null);
  const [darkness, setDarkness] = useState(0.3);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const lastMove = useRef(Date.now());

  /* =========================
     🧠 THREATS TIED TO ACTIONS
  ========================= */

  // Trigger threat on aggressive mouse movement
  useEffect(() => {
    const onMove = () => {
      const now = Date.now();
      if (now - lastMove.current < 60) {
        setShowThreat(randomThreat());
        setTimeout(() => setShowThreat(null), 1200);
      }
      lastMove.current = now;
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Trigger threat when user tries to leave
  useEffect(() => {
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowThreat("DON'T LEAVE");
        setTimeout(() => setShowThreat(null), 1200);
      }
    };

    document.addEventListener('mouseleave', onLeave);
    return () => document.removeEventListener('mouseleave', onLeave);
  }, []);

  function randomThreat() {
    return THREAT_MESSAGES[Math.floor(Math.random() * THREAT_MESSAGES.length)];
  }

  /* =========================
     🔦 LIGHT FALLOFF ON SCROLL
  ========================= */

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight;
      setDarkness(0.3 + Math.min(scrolled / max, 0.6));
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* =========================
     🎥 SUBTLE CAMERA PARALLAX
  ========================= */

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;

      parallaxRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <>
      {/* =========================
          🎥 PARALLAX WRAPPER
      ========================= */}
      <div
        ref={parallaxRef}
        className="fixed inset-0 pointer-events-none z-[300] transition-transform duration-500 ease-out"
      />

      {/* =========================
          🌫 DRIFTING FOG (VISIBLE)
      ========================= */}
      <div className="fixed inset-0 pointer-events-none z-[400] overflow-hidden">
        <div className="fog fog-1" />
        <div className="fog fog-2" />
      </div>

      {/* =========================
          🔦 LIGHT FALLOFF
      ========================= */}
      <div
        className="fixed inset-0 pointer-events-none z-[500]"
        style={{
          background: `radial-gradient(circle at center, rgba(0,0,0,0) 30%, rgba(0,0,0,${darkness}) 85%)`
        }}
      />

      {/* =========================
          🧠 THREAT BANNER
      ========================= */}
      {showThreat && (
        <div className="fixed top-28 left-0 w-full z-[900] flex justify-center pointer-events-none">
          <div className="bg-red-700 text-black px-10 py-3 text-2xl font-bold tracking-widest animate-threat">
            {showThreat}
          </div>
        </div>
      )}

      {/* =========================
          🎞 STYLES
      ========================= */}
      <style>{`
        .fog {
          position: absolute;
          inset: -30%;
          background: radial-gradient(
            ellipse at center,
            rgba(255,255,255,0.18) 0%,
            rgba(255,255,255,0.1) 30%,
            rgba(255,255,255,0.05) 55%,
            rgba(255,255,255,0) 70%
          );
          filter: blur(50px);
          animation: drift linear infinite;
        }

        .fog-1 {
          animation-duration: 200s;
        }

        .fog-2 {
          animation-duration: 320s;
          transform: rotate(180deg);
        }

        @keyframes drift {
          from { transform: translateX(-10%) scale(1.2); }
          to { transform: translateX(10%) scale(1.2); }
        }

        @keyframes threat {
          0% { opacity: 0; transform: scale(0.95); }
          15% { opacity: 1; transform: scale(1); }
          85% { opacity: 1; }
          100% { opacity: 0; transform: scale(1.05); }
        }

        .animate-threat {
          animation: threat 1.2s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default HorrorSystem;
