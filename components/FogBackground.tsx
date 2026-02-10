
import React from 'react';

const FogBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      
      {/* Cold Teal Fog Layer 1 */}
      <div
        className="fog fog-1"
        style={{
          background: 'radial-gradient(circle at 30% 50%, #1F2E33 0%, transparent 70%)'
        }}
      />

      {/* Cold Teal Fog Layer 2 */}
      <div
        className="fog fog-2"
        style={{
          background: 'radial-gradient(circle at 70% 30%, #1F2E33 0%, transparent 60%)'
        }}
      />

      {/* Subtle Red Mist */}
      <div
        className="fog fog-red"
        style={{
          background: 'radial-gradient(circle at 50% 80%, #8E1B1B 0%, transparent 55%)'
        }}
      />

      {/* Subtle Grain */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")'
        }}
      />

      <style>{`
        .fog {
          position: absolute;
          inset: -40%;
          opacity: 0.18;
          filter: blur(70px);
          animation: fog-drift linear infinite;
        }

        .fog-1 {
          animation-duration: 240s;
          transform: scale(1.2);
        }

        .fog-2 {
          animation-duration: 360s;
          transform: scale(1.4) rotate(180deg);
          opacity: 0.14;
        }

        .fog-red {
          animation-duration: 420s;
          opacity: 0.08;
          transform: scale(1.1);
        }

        @keyframes fog-drift {
          from {
            transform: translateX(-6%) translateY(0%) scale(1.2);
          }
          to {
            transform: translateX(6%) translateY(-2%) scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default FogBackground;
