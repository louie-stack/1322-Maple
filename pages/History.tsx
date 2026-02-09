import React from 'react';
import { Link } from 'react-router-dom';

const History: React.FC = () => {
  // The provided cinematic night scene of 1322 Maple Street
  const houseImageUrl = '/images/1322 Maple Street house at night.jpeg';

  return (
    <div className="relative min-h-screen bg-[#0B0F12]">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-end overflow-hidden border-b border-[#1F2E33]/30">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[30000ms] scale-110 translate-x-[-2%]"
          style={{ backgroundImage: '/images/1322 Maple Street house at night.jpeg'; }}
        >
          {/* Moody Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F12] via-[#0B0F12]/30 to-transparent" />
          <div className="absolute inset-0 bg-[#0B0F12]/50 mix-blend-multiply" />
          
          {/* Subtle Red Mist Glow */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#8E1B1B]/15 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 pb-24 w-full">
          <h1 className="text-xs tracking-[0.7em] text-[#8E1B1B] mb-6 uppercase font-bold reveal active">A Legacy of Restlessness</h1>
          <h2 className="text-5xl md:text-8xl font-bold tracking-[0.2em] uppercase leading-none reveal active">THE HISTORY</h2>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 py-32 relative">
        {/* Floating Background Text for Atmosphere */}
        <div className="absolute -left-20 top-40 text-[12rem] font-bold text-white/[0.02] select-none pointer-events-none tracking-tighter uppercase">
          Buried
        </div>
        
        <div className="space-y-16 text-[#E6E8EA]/80 text-xl leading-[1.9] font-light relative z-10">
          <div className="reveal">
            <h3 className="text-2xl font-bold tracking-[0.3em] mb-10 uppercase text-white border-l-2 border-[#8E1B1B] pl-6">1322 Maple Street</h3>
            <p>
              The house at 1322 Maple Street in Atchison, Kansas stands on land once known as Block 56 — the site of an old cemetery that held an estimated 600 bodies.
            </p>
          </div>

          <div className="reveal">
            <p>
              When the cemetery was relocated in the late 1800s, records show that nearly 100 bodies were never accounted for.
            </p>
          </div>

          <div className="relative py-20 my-20 reveal">
            <div className="absolute inset-0 bg-[#8E1B1B]/5 -skew-y-2 border-y border-[#8E1B1B]/20" />
            <div className="relative text-3xl md:text-5xl font-bold tracking-[0.2em] text-[#8E1B1B] text-center uppercase leading-tight">
              They were never moved.<br />
              <span className="text-white">They were built over.</span>
            </div>
          </div>

          <div className="reveal">
            <p>
              The house that now stands at 1322 Maple Street rests on this disturbed ground, and for decades visitors, residents, and investigators have reported unexplained activity: voices, shadows, movement, and a persistent feeling of being watched.
            </p>
          </div>

          <div className="reveal">
            <p>
              Many believe the souls beneath the house are not at rest. They are tied to the foundation, woven into the walls, and waiting for acknowledgment.
            </p>
          </div>
        </div>

        <div className="mt-40 text-center reveal">
          <Link to="/experiences" className="cta-base cta-primary !px-16 !py-6">
            Experience the House
          </Link>
        </div>
      </section>
    </div>
  );
};

export default History;
