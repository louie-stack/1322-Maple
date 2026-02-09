
import React from 'react';

const FacesOfDead: React.FC = () => {
  return (
    <div className="bg-[#050505] min-h-screen text-gray-300 font-eerie pb-24">
      <div className="relative h-[60vh]">
        <img 
          src="https://picsum.photos/id/103/1920/1080?grayscale" 
          alt="Faces of the Dead" 
          className="w-full h-full object-cover brightness-[0.2] contrast-200 filter sepia-[1] hue-rotate-[320deg]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
        <div className="absolute bottom-12 left-6 md:left-24">
          <h1 className="text-7xl font-horror text-red-600 mb-4 glitch-text uppercase">FACES OF THE DEAD</h1>
          <p className="text-red-800 font-metal text-2xl tracking-widest">THE DEPRIVATION EXPERIENCE</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12 space-y-16">
        <section className="text-center">
            <h2 className="text-5xl font-horror text-red-700 mb-8">TOTAL DARKNESS. TOTAL FEAR.</h2>
            <p className="text-xl leading-relaxed max-w-2xl mx-auto">
              Welcome to the Deprivation Room. Here, your senses are stripped away until 
              all that remains is the darkness—and whatever lives inside it.
            </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-red-950/20 p-8 border border-red-900 h-full flex flex-col justify-center">
              <h3 className="text-3xl font-horror text-red-600 mb-4">WHAT HAPPENS?</h3>
              <p>
                The room is 100% light-sealed and soundproof. In the absence of external stimuli, 
                the human brain begins to manufacture its own reality. 
                But in 1322 Maple, the brain doesn't have to work alone.
              </p>
            </div>
            <div className="bg-black/50 p-8 border border-red-900 h-full flex flex-col justify-center">
              <h3 className="text-3xl font-horror text-red-600 mb-4">THE FACES</h3>
              <p>
                Participants report seeing screaming faces emerging from the walls. 
                They feel hands touching their shoulders. They hear breathing that isn't their own.
              </p>
            </div>
        </div>

        <section className="bg-black p-12 border-4 border-double border-red-900 text-center">
          <h3 className="text-4xl font-horror text-red-600 mb-6 uppercase">PSYCHOLOGICAL WARNING</h3>
          <p className="mb-8">
            This attraction is not for those with heart conditions, claustrophobia, or a 
            history of panic attacks. You will be monitored by infrared cameras. 
            There is a safe word. Most people use it.
          </p>
          <div className="font-metal text-5xl text-red-900 tracking-tighter hover-shake">YOU CANNOT UNSEE THE TRUTH</div>
        </section>
      </div>
    </div>
  );
};

export default FacesOfDead;
