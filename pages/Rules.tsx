
import React from 'react';

const Rules: React.FC = () => {
  const safetyRules = [
    "Follow all staff instructions immediately and without question.",
    "No running, jumping, or touching artifacts under any circumstances.",
    "Some experiences involve total darkness and intense sensory effects.",
    "Not recommended for guests with severe anxiety, epilepsy, or heart conditions.",
    "Children must be accompanied by an adult at all times (Ages 12+ recommended).",
    "No photography, filming, or lighting devices unless explicitly permitted.",
    "We reserve the right to refuse entry to anyone under the influence of substances."
  ];

  return (
    <div className="pt-40 pb-40">
      <section className="max-w-4xl mx-auto px-6 reveal">
        <h1 className="text-xs tracking-[0.6em] text-[#8E1B1B] mb-8 uppercase font-bold text-center">Safety Protocol</h1>
        <h2 className="text-5xl md:text-7xl font-bold tracking-[0.2em] mb-24 text-center uppercase leading-none">RULES & SAFETY</h2>
        
        <div className="bg-[#12161A] border border-[#1F2E33]/20 p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#8E1B1B]" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#8E1B1B]/5 rounded-full blur-3xl" />
          
          <h3 className="text-3xl font-bold tracking-[0.2em] mb-16 uppercase italic text-[#E6E8EA]/90">A Warning to All Who Enter</h3>
          <div className="space-y-12">
            {safetyRules.map((rule, idx) => (
              <div key={idx} className="flex gap-10 items-start group">
                <span className="text-[#8E1B1B] font-bold text-2xl tracking-tighter opacity-50 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                <p className="text-xl font-light text-[#E6E8EA]/80 leading-relaxed group-hover:text-white transition-colors">{rule}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-24 pt-12 border-t border-[#1F2E33]/30">
            <p className="text-sm tracking-widest text-[#E6E8EA]/30 leading-relaxed italic text-center">
              The House of the Dead is an immersive environment. By entering, you acknowledge the psychological and sensory nature of the experience. We are not responsible for reactions to the unexplained.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
           <p className="text-[#8E1B1B] tracking-[0.3em] font-bold uppercase text-xs mb-8">Final Authority</p>
           <p className="text-[#E6E8EA]/50 max-w-lg mx-auto leading-relaxed">
             Our staff has final authority in all safety matters. Failure to comply will result in immediate removal from the premises without refund.
           </p>
        </div>
      </section>
    </div>
  );
};

export default Rules;
