
import React from 'react';
import { CONTACT_INFO } from '../constants';

const PlanYourVisit: React.FC = () => {
  return (
    <div className="pt-40 pb-40">
      <section className="max-w-7xl mx-auto px-6 mb-32 text-center reveal">
        <h1 className="text-xs tracking-[0.6em] text-[#8E1B1B] mb-8 uppercase font-bold">Logistics of Fear</h1>
        <h2 className="text-5xl md:text-7xl font-bold tracking-[0.2em] mb-12 uppercase leading-none">PLAN YOUR VISIT</h2>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-32">
        {/* Contact & Location */}
        <div className="space-y-24 reveal">
          <div className="group">
            <h3 className="text-xs tracking-[0.4em] text-[#8E1B1B] mb-8 uppercase font-bold group-hover:translate-x-2 transition-transform">Address</h3>
            <p className="text-3xl font-light tracking-[0.1em] leading-tight mb-2">{CONTACT_INFO.ADDRESS}</p>
            <p className="text-[#E6E8EA]/40 tracking-widest uppercase text-sm italic">Atchison, Kansas 66062</p>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.ADDRESS)}`} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-[10px] tracking-widest text-[#8E1B1B] hover:text-white transition-colors uppercase border-b border-[#8E1B1B]/30 pb-1">
              OPEN IN GOOGLE MAPS —&gt;
            </a>
          </div>

          <div className="group">
            <h3 className="text-xs tracking-[0.4em] text-[#8E1B1B] mb-8 uppercase font-bold group-hover:translate-x-2 transition-transform">Contact Information</h3>
            <div className="space-y-8">
              <a href={`tel:${CONTACT_INFO.PHONE.replace(/\D/g, '')}`} className="block text-3xl font-light tracking-[0.1em] hover:text-[#8E1B1B] transition-colors">{CONTACT_INFO.PHONE}</a>
              <div className="space-y-4">
                <a href={`mailto:${CONTACT_INFO.EMAIL_MAIN}`} className="block text-lg font-light text-[#E6E8EA]/60 hover:text-white transition-colors border-l border-[#8E1B1B]/30 pl-6">{CONTACT_INFO.EMAIL_MAIN}</a>
                <a href={`mailto:${CONTACT_INFO.EMAIL_ALT}`} className="block text-lg font-light text-[#E6E8EA]/60 hover:text-white transition-colors border-l border-[#8E1B1B]/30 pl-6">{CONTACT_INFO.EMAIL_ALT}</a>
              </div>
            </div>
          </div>

          <div className="p-10 border border-[#1F2E33]/30 bg-[#12161A]/50 relative reveal">
            <h3 className="text-xs tracking-[0.4em] text-[#8E1B1B] mb-8 uppercase font-bold">Haunted Taxi Ghost Tours USA</h3>
            <p className="text-lg font-light text-[#E6E8EA]/70 mb-10 leading-relaxed italic">
              Arrive in cinematic style. Take a guided journey through Atchison’s most haunted locations before being dropped at our doorstep.
            </p>
            <button className="cta-base cta-secondary w-full sm:w-auto">
              BOOK A HAUNTED TAXI TOUR
            </button>
          </div>
        </div>

        {/* Booking Section */}
        <div className="reveal">
          <div className="bg-[#12161A] border border-[#1F2E33]/20 p-12 md:p-16 relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#8E1B1B]/5 blur-[100px] rounded-full" />
            <h3 className="text-3xl font-bold tracking-[0.2em] mb-10 uppercase">Ticket Reservation</h3>
            <p className="text-[#E6E8EA]/50 font-light mb-14 leading-relaxed">
              Select your date and encounter below. Early booking is highly recommended as sensory rooms have extremely limited capacity.
            </p>
            
            <div className="space-y-10">
               <div className="group">
                  <label className="block text-[10px] tracking-[0.4em] uppercase text-[#8E1B1B] mb-4 font-bold group-hover:text-white transition-colors">Select Date</label>
                  <input type="date" className="w-full bg-[#0B0F12] border border-[#1F2E33]/30 px-6 py-5 focus:outline-none focus:border-[#8E1B1B] transition-all text-[#E6E8EA]/80 font-light" />
               </div>
               <div className="group">
                  <label className="block text-[10px] tracking-[0.4em] uppercase text-[#8E1B1B] mb-4 font-bold group-hover:text-white transition-colors">Experience Tier</label>
                  <select className="w-full bg-[#0B0F12] border border-[#1F2E33]/30 px-6 py-5 focus:outline-none focus:border-[#8E1B1B] transition-all text-[#E6E8EA]/80 font-light appearance-none cursor-pointer">
                    <option>General Admission - House History</option>
                    <option>Psychomanteum Solo Experience</option>
                    <option>Deprivation Chamber (30 Min)</option>
                    <option>The Final Convergence (All Rooms)</option>
                  </select>
               </div>
               <div className="group">
                  <label className="block text-[10px] tracking-[0.4em] uppercase text-[#8E1B1B] mb-4 font-bold group-hover:text-white transition-colors">Quantity</label>
                  <input type="number" min="1" defaultValue="1" className="w-full bg-[#0B0F12] border border-[#1F2E33]/30 px-6 py-5 focus:outline-none focus:border-[#8E1B1B] transition-all text-[#E6E8EA]/80 font-light" />
               </div>
               
               <button className="cta-base cta-primary w-full mt-6">
                 CHECK AVAILABILITY
               </button>
            </div>
            
            <div className="mt-12 text-center space-y-4">
              <p className="text-[10px] tracking-[0.3em] text-[#E6E8EA]/30 uppercase font-bold">
                All ticket sales are final.
              </p>
              <p className="text-[10px] tracking-[0.3em] text-[#8E1B1B] uppercase font-bold">
                Fear is non-refundable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanYourVisit;
