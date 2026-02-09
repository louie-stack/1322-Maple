
import React from 'react';

const Rosemary: React.FC = () => {
  return (
    <div className="bg-[#050505] min-h-screen text-gray-300 font-eerie pb-24">
      <div className="relative h-[60vh]">
        <img 
          src="https://picsum.photos/id/102/1920/1080?grayscale" 
          alt="Rosemary" 
          className="w-full h-full object-cover brightness-[0.2] contrast-200 filter sepia-[1] hue-rotate-[320deg]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
        <div className="absolute bottom-12 left-6 md:left-24">
          <h1 className="text-7xl font-horror text-red-600 mb-4 glitch-text">ROSEMARY</h1>
          <p className="text-red-800 font-metal text-2xl tracking-widest">THE LAMENTING MOTHER</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12 space-y-12">
        <section className="border-l-4 border-red-900 pl-8 py-4 bg-red-950/5">
          <p className="text-xl leading-relaxed italic">
            "Rosemary’s curse follows those who dare to look too long. Her tears are not of sorrow, but of a trap."
          </p>
        </section>

        <article className="space-y-8">
          <h2 className="text-4xl font-horror text-red-700">A CURSED LEGACY</h2>
          <p>
            Rosemary is a Victorian-era doll said to be a vessel for a grieving mother who lost her 
            entire family to the 1322 Maple fire. Legend says the mother's soul was bound to the doll 
            to prevent her from seeking vengeance—but it only gave her a new way to reach out.
          </p>
          <p>
            Visitors have claimed to see the doll's porcelain face soften and leak a thick, 
            dark substance that resembles blood or tears.
          </p>
        </article>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-900/10 p-8 border border-red-900">
            <h3 className="text-2xl font-horror text-red-600 mb-4">REPORTS</h3>
            <ul className="list-disc list-inside space-y-4 text-sm">
              <li>Cold spots reaching sub-zero temperatures.</li>
              <li>A faint singing voice coming from empty rooms.</li>
              <li>Disruption of all electronic recording equipment.</li>
            </ul>
          </div>
          <div className="bg-black p-8 border border-red-900">
             <h3 className="text-2xl font-horror text-red-600 mb-4">THE CURSE</h3>
             <p className="text-sm">
                If you dream of Rosemary, you must return to the house within 13 days or suffer 
                her eternal lament.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rosemary;
