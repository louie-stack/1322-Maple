
import React from 'react';

const FogBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Cold Teal Fog Layer 1 */}
      <div className="absolute inset-0 opacity-20 animate-fog scale-125"
           style={{ background: 'radial-gradient(circle at 30% 50%, #1F2E33 0%, transparent 70%)' }} />
      
      {/* Cold Teal Fog Layer 2 */}
      <div className="absolute inset-0 opacity-15 animate-fog scale-150 delay-700"
           style={{ background: 'radial-gradient(circle at 70% 30%, #1F2E33 0%, transparent 60%)' }} />

      {/* Subtle Red Mist */}
      <div className="absolute inset-0 opacity-5 animate-fog scale-110 delay-1000"
           style={{ background: 'radial-gradient(circle at 50% 80%, #8E1B1B 0%, transparent 50%)' }} />
      
      {/* Noise/Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }} />
    </div>
  );
};

export default FogBackground;
