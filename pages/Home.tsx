
import React from 'react';
import { Link } from 'react-router-dom';
import { EXPERIENCES, HAUNTED_DOLLS, CONTACT_INFO } from '../constants';

const Home: React.FC = () => {
  const gerty = HAUNTED_DOLLS.find(d => d.id === 'dirty-gerty');

  const trustItems = [
    "Open Year-Round",
    "Family Friendly",
    "Powered by Haunted Taxi Ghost Tours USA",
    "Proud Partner of Haunted Social"
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Cinematic Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[20000ms] scale-105"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1920")' }}
        >
          {/* Gradients to darken and create mood */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F12]/60 via-transparent to-[#0B0F12]" />
          <div className="absolute inset-0 bg-[#1F2E33]/10 mix-blend-overlay" />
        </div>

        {/* Clawed Hand Overlay (Right Side) */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none z-10 opacity-40 mix-blend-multiply transition-opacity duration-1000">
           <img 
            src="https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=1000" 
            alt="Fear"
            className="w-full h-full object-contain object-right-top grayscale brightness-50 contrast-125"
            style={{ filter: 'drop-shadow(-20px 20px 30px #000)' }}
           />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <h1 className="text-6xl md:text-[10rem] font-bold tracking-[0.3em] mb-2 text-glow-red leading-none uppercase">
            1322 MAPLE
          </h1>
          <h2 className="text-xl md:text-3xl font-light tracking-[0.6em] mb-12 text-[#E6E8EA]/80 uppercase">
            HOUSE OF THE DEAD
          </h2>
          <div className="inline-block px-4 py-1 text-[10px] tracking-[0.5em] text-[#8E1B1B] mb-16 uppercase font-bold border-x border-[#8E1B1B]">
            THE DEMONS HOUSE
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/booking" className="cta-base cta-primary">
              BUY TICKETS
            </Link>
            <Link to="/booking" className="cta-base cta-secondary">
              ENTER IF YOU DARE
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Strip - Continuous Scrolling Marquee */}
      <section className="relative z-20 py-20 bg-[#0E1216] border-y border-[#1F2E33]/10 overflow-hidden select-none pointer-events-none">
        <div className="flex animate-marquee">
          {/* First set of items */}
          <div className="flex items-center">
            {trustItems.map((item, idx) => (
              <React.Fragment key={`set1-${idx}`}>
                <span className="px-16 text-[10px] tracking-[0.5em] text-[#E6E8EA]/25 uppercase font-medium whitespace-nowrap">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 bg-[#8E1B1B]/30 rounded-full flex-shrink-0" />
              </React.Fragment>
            ))}
          </div>
          {/* Duplicate set for seamless looping */}
          <div className="flex items-center">
            {trustItems.map((item, idx) => (
              <React.Fragment key={`set2-${idx}`}>
                <span className="px-16 text-[10px] tracking-[0.5em] text-[#E6E8EA]/25 uppercase font-medium whitespace-nowrap">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 bg-[#8E1B1B]/30 rounded-full flex-shrink-0" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-40 px-6 bg-[#0B0F12]">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-5xl font-bold tracking-[0.2em] mb-12 uppercase">
            We Make Fear Fun — Year Round
          </h2>
          <div className="space-y-8 text-[#E6E8EA]/70 leading-relaxed text-xl font-light">
            <p>
              Located at 1322 Maple Street in Atchison, Kansas, the House of the Dead is home to documented paranormal activity, haunted artifacts, and immersive fear experiences.
            </p>
            <p>
              Built atop forgotten burial ground, this house is more than a location — it is a convergence point for restless energy, unexplained encounters, and stories that refuse to fade. Whether you walk its halls, face its haunted rooms, or arrive by Haunted Taxi Ghost Tour, this is not a place you simply visit.
            </p>
            <p className="text-[#8E1B1B] font-bold tracking-[0.4em] italic uppercase pt-6 text-sm">
              It’s a place that watches back.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-32 px-6 bg-[#0B0F12]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="reveal">
              <h3 className="text-xs tracking-[0.5em] text-[#8E1B1B] mb-4 uppercase font-bold">Curated Terror</h3>
              <h4 className="text-4xl md:text-5xl font-bold tracking-[0.2em] uppercase">The Experiences</h4>
            </div>
            <Link to="/experiences" className="text-xs tracking-widest text-[#E6E8EA]/50 hover:text-[#8E1B1B] transition-colors border-b border-[#E6E8EA]/20 pb-1 uppercase">
              View All Experiences —&gt;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {EXPERIENCES.map((exp, idx) => (
              <Link 
                to="/experiences" 
                key={exp.id} 
                className={`group relative block aspect-[3/4] overflow-hidden bg-[#12161A] border border-[#1F2E33]/10 reveal`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <img src={exp.imageUrl} alt={exp.title} className="w-full h-full object-cover grayscale brightness-50 transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F12] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <h4 className="text-xl font-bold tracking-widest mb-3 group-hover:text-[#8E1B1B] transition-colors uppercase">{exp.title}</h4>
                  <p className="text-xs text-[#E6E8EA]/40 leading-relaxed font-light line-clamp-2 transition-colors group-hover:text-[#E6E8EA]/70">{exp.description}</p>
                  <div className="h-px w-0 group-hover:w-full bg-[#8E1B1B] transition-all duration-500 mt-6" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dirty Gerty Feature */}
      <section className="relative py-40 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#12161A]/40 z-0" />
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal order-2 lg:order-1">
            <h5 className="text-[#8E1B1B] tracking-[0.4em] uppercase text-xs font-bold mb-6">Permanent Resident</h5>
            <h2 className="text-5xl md:text-7xl font-bold tracking-[0.2em] mb-10 leading-tight">DIRTY GERTY</h2>
            <div className="space-y-8 text-[#E6E8EA]/70 text-xl leading-relaxed font-light mb-14 italic">
              <p>Considered by many to be one of the most haunted dolls in the United States, Dirty Gerty resides permanently within the House of the Dead.</p>
              <p>Guests report movement, whispered voices, and overwhelming feelings of being watched when near her.</p>
              <p className="text-[#E6E8EA] font-bold not-italic tracking-[0.1em] text-2xl uppercase">
                She is not a prop.<br />
                She is not a replica.<br />
                And she is not alone.
              </p>
            </div>
            <Link to="/experiences" className="cta-base cta-secondary">
              MEET DIRTY GERTY
            </Link>
          </div>
          <div className="relative group reveal order-1 lg:order-2">
            <div className="absolute -inset-6 border border-[#8E1B1B]/10 translate-x-6 translate-y-6 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
            <img 
              src={gerty?.imageUrl} 
              alt="Dirty Gerty" 
              className="w-full aspect-[4/5] object-cover border border-[#1F2E33]/20 grayscale hover:grayscale-0 transition-all duration-1000 brightness-75"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-60 px-6 text-center bg-[#0B0F12] relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-[#8E1B1B]/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-4xl md:text-6xl font-bold tracking-[0.2em] mb-16 uppercase leading-tight">
            Think you’re brave enough to enter?
          </h2>
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
             <Link to="/booking" className="cta-base cta-primary !px-14 !py-6">
              BOOK YOUR EXPERIENCE
             </Link>
             <span className="text-[#E6E8EA]/20 tracking-[0.5em] uppercase text-xs">OR CALL</span>
             <a href={`tel:${CONTACT_INFO.PHONE.replace(/\D/g, '')}`} className="text-3xl font-light tracking-[0.1em] hover:text-[#8E1B1B] transition-colors border-b border-transparent hover:border-[#8E1B1B]">
               {CONTACT_INFO.PHONE}
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
