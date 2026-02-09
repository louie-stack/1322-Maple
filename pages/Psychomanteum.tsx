
import React from 'react';
import { Link } from 'react-router-dom';

const Psychomanteum: React.FC = () => {
  return (
    <div className="bg-[#050505] min-h-screen text-gray-300 font-eerie pb-24">
      <div className="relative h-[60vh]">
        <img 
          src="https://picsum.photos/id/40/1920/1080?grayscale" 
          alt="Psychomanteum" 
          className="w-full h-full object-cover brightness-[0.2] contrast-200 filter sepia-[1] hue-rotate-[320deg]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
        <div className="absolute bottom-12 left-6 md:left-24">
          <h1 className="text-7xl font-horror text-red-600 mb-4 glitch-text uppercase">The Psychomanteum</h1>
          <p className="text-red-800 font-metal text-2xl tracking-widest">A CHAMBER FOR THE DEAD</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12 space-y-12">
        <section className="bg-red-950/20 p-8 border border-red-700">
          <h2 className="text-4xl font-horror text-red-600 mb-6">DO YOU WISH TO COMMUNICATE?</h2>
          <p className="mb-6">
            The Psychomanteum is a specialized ritual chamber designed to open the mind's eye 
            and facilitate contact with the other side. Using a combination of sensory deprivation, 
            mirror scrying, and specific ambient frequencies, we bridge the gap between worlds.
          </p>
          <div className="bg-black p-4 border border-red-900 text-red-500 font-bold uppercase tracking-tighter">
            WARNING: SPIRIT CONTACT CANNOT BE GUARANTEED TO BE BENEVOLENT.
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-horror text-red-800 mb-4">THE RITUAL</h3>
            <p className="mb-4">
              You will sit in a darkened room, facing a black mirror tilted at an angle that 
              prevents you from seeing your own reflection. As your eyes adjust to the darkness, 
              the mirror becomes a portal.
            </p>
            <p>
              Many participants report seeing the faces of deceased loved ones—or entities 
              that have never been human.
            </p>
          </div>
          <div className="space-y-6">
            <div className="p-4 border-l-2 border-red-600">
              <h4 className="font-metal text-xl text-red-600">SENSORY SHIFT</h4>
              <p className="text-sm">The air will grow heavy. Your pulse will slow. You are no longer in Atchison.</p>
            </div>
            <div className="p-4 border-l-2 border-red-600">
              <h4 className="font-metal text-xl text-red-600">THE REFLECTION</h4>
              <p className="text-sm">When the glass begins to ripple, do not look away. The dead demand attention.</p>
            </div>
          </div>
        </div>

        <div className="text-center py-12">
          <Link 
            to="/?book=true"
            className="inline-block bg-red-700 text-black px-12 py-4 font-metal text-3xl hover:bg-red-500 transition-all hover-shake shadow-[0_0_30px_rgba(255,0,0,0.4)]"
          >
            RESERVE YOUR SESSION
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Psychomanteum;
