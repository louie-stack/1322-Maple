
import React, { useEffect, useState, useCallback, useRef } from 'react';

const THREAT_MESSAGES = [
  "YOU ARE NOT SAFE",
  "THEY ARE WATCHING",
  "1322 MAPLE NEVER LETS YOU LEAVE",
  "DONT LOOK BEHIND YOU",
  "YOU BROUGHT THEM WITH YOU",
  "GOD CANT HEAR YOU HERE",
  "CLOSE YOUR EYES"
];

const HorrorSystem: React.FC = () => {
  const [showFlash, setShowFlash] = useState(false);
  const [threat, setThreat] = useState<string | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Audio setup
  const playScream = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    const ctx = audioContextRef.current;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(100, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
    osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.8);

    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.9);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 1);
  }, []);

  // Subliminal Flashes logic (Every 3 seconds, 150ms flash)
  useEffect(() => {
    const flashInterval = setInterval(() => {
      setShowFlash(true);
      setTimeout(() => setShowFlash(false), 150);
      
      // Randomly trigger scream during flashes
      if (Math.random() > 0.7) {
        playScream();
      }
    }, 3000);

    return () => clearInterval(flashInterval);
  }, [playScream]);

  // Threat Banner logic (Every 2 seconds)
  useEffect(() => {
    const bannerInterval = setInterval(() => {
      const randomThreat = THREAT_MESSAGES[Math.floor(Math.random() * THREAT_MESSAGES.length)];
      setThreat(randomThreat);
      setTimeout(() => setThreat(null), 1000);
    }, 2000);

    return () => clearInterval(bannerInterval);
  }, []);

  return (
    <>
      {/* Subliminal Flash */}
      {showFlash && (
        <div className="fixed inset-0 z-[1000] pointer-events-none flex items-center justify-center bg-white/20">
          <img 
            src={`https://picsum.photos/1920/1080?grayscale&blur=2&sig=${Math.random()}`} 
            alt="Fear"
            className="w-full h-full object-cover mix-blend-difference invert opacity-40 scale-110"
          />
        </div>
      )}

      {/* Threat Banner */}
      <div className="fixed top-24 left-0 z-[800] pointer-events-none w-full flex overflow-hidden">
        {threat && (
          <div className="bg-red-700 text-black px-8 py-2 font-metal text-2xl animate-slide-in whitespace-nowrap border-y border-black shadow-[0_0_20px_rgba(255,0,0,0.5)]">
             {threat}
          </div>
        )}
      </div>

      <style>{`
        @keyframes slide-in {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { transform: translateX(0); opacity: 1; }
          90% { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(-100%); opacity: 0; }
        }
        .animate-slide-in {
          animation: slide-in 1s forwards;
        }
        .fog-layer {
  position: absolute;
  inset: -20%;
  background: url("https://www.transparenttextures.com/patterns/foggy-birds.png");
  opacity: 0.12;
  animation: drift linear infinite;
}

.fog-1 {
  animation-duration: 180s;
  transform: scale(1.2);
}

.fog-2 {
  animation-duration: 260s;
  transform: scale(1.4) rotate(180deg);
}

@keyframes drift {
  from {
    transform: translateX(-10%) scale(1.2);
  }
  to {
    transform: translateX(10%) scale(1.2);
  }
}
      `}</style>
    </>
  );
};
{/* Global Cinematic Vignette */}
<div className="fixed inset-0 pointer-events-none z-[500]">
  <div
    className="w-full h-full"
    style={{
      background: `
        radial-gradient(
          ellipse at center,
          rgba(0,0,0,0) 40%,
          rgba(0,0,0,0.25) 65%,
          rgba(0,0,0,0.6) 100%
        )
      `
    }}
  />
</div>
{/* Slow Drifting Fog */}
<div className="fixed inset-0 pointer-events-none z-[400] overflow-hidden">
  <div className="fog-layer fog-1" />
  <div className="fog-layer fog-2" />
</div>

export default HorrorSystem;
