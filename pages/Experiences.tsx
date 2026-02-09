
import React from 'react';
import { Link } from 'react-router-dom';
import { EXPERIENCES, HAUNTED_DOLLS } from '../constants';

const Experiences: React.FC = () => {
  return (
    <div className="pt-40">
      <section className="max-w-7xl mx-auto px-6 mb-40 text-center reveal">
        <h1 className="text-xs tracking-[0.6em] text-[#8E1B1B] mb-8 uppercase font-bold">Beyond the Threshold</h1>
        <h2 className="text-5xl md:text-7xl font-bold tracking-[0.2em] mb-12 uppercase leading-none">THE ROOMS OF THE DEAD</h2>
        <p className="max-w-2xl mx-auto text-[#E6E8EA]/50 text-xl font-light leading-relaxed italic">
          Each room within the House of the Dead offers a different encounter with the unknown. Some test your senses. Others test your courage. None leave you unchanged.
        </p>
      </section>

      {EXPERIENCES.map((exp, index) => (
        <section key={exp.id} id={exp.id} className={`py-40 px-6 border-t border-[#1F2E33]/10 ${index % 2 === 0 ? 'bg-[#12161A]/20' : ''}`}>
          <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`reveal ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <div className="relative group">
                <div className="absolute inset-0 bg-[#8E1B1B]/5 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                <img src={exp.imageUrl} alt={exp.title} className="relative z-10 w-full aspect-[4/5] object-cover grayscale brightness-50 border border-[#1F2E33]/20" />
              </div>
            </div>
            <div className={`reveal ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <h3 className="text-4xl md:text-5xl font-bold tracking-[0.2em] mb-10 leading-tight uppercase">{exp.title}</h3>
              <div className="space-y-8 text-[#E6E8EA]/70 text-lg leading-[1.8] font-light">
                {exp.longDescription?.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                
                {/* Special content for the Haunted Doll Room */}
                {exp.id === 'doll-room' && (
                  <div className="mt-16 space-y-24 border-t border-[#1F2E33]/30 pt-16">
                    {HAUNTED_DOLLS.map(doll => (
                      <div key={doll.id} className="group/doll reveal">
                        <div className="flex flex-col md:flex-row gap-10 items-start">
                          <div className="w-full md:w-48 aspect-[3/4] flex-shrink-0 overflow-hidden border border-[#1F2E33]/30">
                            <img src={doll.imageUrl} alt={doll.name} className="w-full h-full object-cover grayscale brightness-75 group-hover/doll:grayscale-0 group-hover/doll:brightness-100 transition-all duration-700" />
                          </div>
                          <div>
                            <h4 className="text-2xl font-bold tracking-[0.2em] mb-4 uppercase text-[#E6E8EA]">{doll.name}</h4>
                            <p className="text-base text-[#E6E8EA]/60 leading-relaxed italic mb-4">
                              {doll.description}
                            </p>
                            <p className="text-base text-[#E6E8EA]/70 leading-relaxed">
                              {doll.longDescription}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-8 flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-[#8E1B1B] text-xs tracking-[0.3em] font-bold uppercase">
                    <span className="w-8 h-px bg-[#8E1B1B]" />
                    {exp.id === 'doll-room' ? 'Artifact Warning: Active' : 'Sensory Warning: High'}
                  </div>
                  <p className="text-[#E6E8EA]/40 text-sm italic">
                    {exp.id === 'deprivation' ? 'Many guests report being touched in complete silence.' : 
                     exp.id === 'doll-room' ? 'Movement has been documented in this room after hours.' :
                     'Vision disturbances are common in this room.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-40 bg-[#0B0F12] border-t border-[#1F2E33]/10 text-center px-6 reveal">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-[0.1em] text-[#E6E8EA] uppercase mb-14 leading-tight">
            Will You Enter the Void?
          </h2>
          <Link to="/booking" className="cta-base cta-primary !px-14 !py-6">
            RESERVE YOUR ENCOUNTER
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
