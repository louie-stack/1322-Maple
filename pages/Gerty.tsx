
import React from 'react';

const Gerty: React.FC = () => {
  return (
    <div className="bg-[#050505] min-h-screen text-gray-300 font-eerie pb-24">
      <div className="relative h-[60vh]">
        <img 
          src="https://picsum.photos/id/64/1920/1080?grayscale" 
          alt="Dirty Gerty" 
          className="w-full h-full object-cover brightness-[0.2] contrast-200 filter sepia-[1] hue-rotate-[320deg]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
        <div className="absolute bottom-12 left-6 md:left-24">
          <h1 className="text-7xl font-horror text-red-600 mb-4 glitch-text">DIRTY GERTY</h1>
          <p className="text-red-800 font-metal text-2xl tracking-widest">THE WATCHER IN THE DARK</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12 space-y-12">
        <section className="border-l-4 border-red-900 pl-8 py-4 bg-red-950/5">
          <p className="text-xl leading-relaxed italic">
            "Dirty Gerty is one of the most infamous haunted dolls in the United States. 
            She doesn't move when you're looking. She waits for the blink."
          </p>
        </section>

        <article className="space-y-8">
          <h2 className="text-4xl font-horror text-red-700">THE ORIGIN OF GERTY</h2>
          <p>
            Dirty Gerty was discovered in the attic of an abandoned farmhouse in rural Kansas. 
            The previous owners reported hearing the sounds of a child crying, only to find the doll 
            sitting in a different room than where it was left.
          </p>
          <p>
            Paranormal investigators have captured Class A EVPs in her presence. Visitors to the 
            1322 Maple House report a feeling of intense dread and the sensation of being 
            poked or scratched when standing too close to her display case.
          </p>
        </article>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-900/10 p-8 border border-red-900">
            <h3 className="text-2xl font-horror text-red-600 mb-4">ACTIVITY LOG</h3>
            <ul className="list-disc list-inside space-y-4 text-sm">
              <li>Appeared in the hallway after being locked in a trunk.</li>
              <li>Visible scratches appeared on a visitor's arm after they mocked her.</li>
              <li>Security cameras glitch whenever her eyes are in direct frame.</li>
            </ul>
          </div>
          <div className="bg-black p-8 border border-red-900 shadow-[0_0_20px_rgba(139,0,0,0.3)]">
             <h3 className="text-2xl font-horror text-red-600 mb-4">WARNING</h3>
             <p className="text-sm">
                Do not look Dirty Gerty in the eyes for more than 13 seconds. 
                She is known to follow visitors home.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gerty;
