
import React from 'react';
import { Link } from 'react-router-dom';

const TheHouse: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="max-w-4xl mx-auto px-6">
        <h1 className="text-xs tracking-[0.5em] text-[#8E1B1B] mb-8 uppercase font-bold text-center">A Legacy of Restlessness</h1>
        <h2 className="text-4xl md:text-6xl font-bold tracking-[0.1em] text-center mb-20 uppercase leading-tight">The History of 1322 Maple Street</h2>
        
        <div className="relative mb-24 group">
          <div className="absolute -inset-10 bg-[#1F2E33]/5 blur-3xl rounded-full" />
          <img src="https://picsum.photos/seed/vintage-house/1200/600?grayscale" alt="House History" className="w-full h-auto grayscale brightness-50 border border-[#1F2E33]/30 relative z-10" />
        </div>

        <div className="space-y-12 text-[#E6E8EA]/80 text-xl leading-[1.8] font-light">
          <p>
            The house at 1322 Maple Street in Atchison, Kansas stands on land once known as Block 56 — the site of an old cemetery that held an estimated 600 bodies.
          </p>
          <p>
            When the cemetery was relocated in the late 1800s, records show that nearly 100 bodies were never accounted for.
          </p>
          <div className="text-3xl font-bold tracking-[0.15em] text-[#8E1B1B] py-8 text-center uppercase border-y border-[#1F2E33]/20">
            They were never moved.<br />
            They were built over.
          </div>
          <p>
            The house that now stands at 1322 Maple Street rests on this disturbed ground, and for decades visitors, residents, and investigators have reported unexplained activity: voices, shadows, movement, and a persistent feeling of being watched.
          </p>
          <p>
            Many believe the souls beneath the house are not at rest. They are tied to the foundation, woven into the walls, and waiting for acknowledgment.
          </p>
        </div>

        <div className="mt-32 text-center">
          <Link to="/experiences" className="px-12 py-5 border border-[#8E1B1B] tracking-[0.3em] font-bold hover:bg-[#8E1B1B]/10 transition-all inline-block uppercase">
            Experience the House
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TheHouse;
