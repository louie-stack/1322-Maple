
import React from 'react';
import { HAUNTED_DOLLS } from '../constants';

const HauntedDolls: React.FC = () => {
  return (
    <div className="pt-32">
      <section className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <h1 className="text-xs tracking-[0.5em] text-[#8E1B1B] mb-8 uppercase font-bold">The Vessels</h1>
        <h2 className="text-4xl md:text-6xl font-bold tracking-[0.2em] mb-12 uppercase">Haunted Dolls</h2>
        <p className="max-w-2xl mx-auto text-[#E6E8EA]/60 text-lg font-light leading-relaxed">
          The House of the Dead is home to multiple haunted dolls — each with its own presence, history, and reputation. These are not decorations. They are artifacts.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-40 grid grid-cols-1 md:grid-cols-2 gap-20">
        {HAUNTED_DOLLS.map(doll => (
          <div key={doll.id} className="group">
            <div className="relative mb-10 overflow-hidden aspect-[4/5] border border-[#1F2E33]/30">
              <img 
                src={doll.imageUrl} 
                alt={doll.name} 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F12] to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10">
                <h3 className="text-3xl font-bold tracking-[0.3em]">{doll.name}</h3>
              </div>
            </div>
            <div className="space-y-6 text-[#E6E8EA]/70 text-lg font-light leading-relaxed">
              <p>{doll.longDescription}</p>
              {doll.id === 'rosemary' && (
                <p className="text-[#8E1B1B] font-bold tracking-[0.1em] italic">
                  Some spirits do not want their stories told.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HauntedDolls;
