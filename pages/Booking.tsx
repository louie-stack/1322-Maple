
import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

const Booking: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  // Simple calendar mock for October (Haunt Season)
  const daysInMonth = 31;
  const startDay = 2; // Starts on a Tuesday (for display purposes)
  const soldOutDates = [12, 13, 19, 20, 26, 27, 31];

  const renderCalendar = () => {
    const calendarDays = [];
    // Padding for start of month
    for (let i = 0; i < startDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="h-10 md:h-12" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isSoldOut = soldOutDates.includes(day);
      const isSelected = selectedDate === day;

      calendarDays.push(
        <button
          key={day}
          disabled={isSoldOut}
          onClick={() => setSelectedDate(day)}
          className={`h-10 md:h-12 flex items-center justify-center text-xs md:text-sm tracking-widest transition-all duration-300 relative group
            ${isSoldOut ? 'opacity-20 cursor-not-allowed grayscale' : 'hover:text-white cursor-pointer'}
            ${isSelected ? 'text-[#8E1B1B] font-bold' : 'text-[#E6E8EA]/60'}
          `}
        >
          {/* Selected Highlight */}
          {isSelected && (
            <div className="absolute inset-0 bg-[#8E1B1B]/10 border border-[#8E1B1B]/40 rounded-sm scale-110 shadow-[0_0_15px_rgba(142,27,27,0.3)]" />
          )}
          {/* Day Label */}
          <span className="relative z-10">{day}</span>
          {/* Sold Out Cross */}
          {isSoldOut && (
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-full h-px bg-[#8E1B1B]/40 rotate-45" />
             </div>
          )}
        </button>
      );
    }
    return calendarDays;
  };

  return (
    <div className="pt-40 pb-40">
      <section className="max-w-7xl mx-auto px-6 mb-32 text-center reveal">
        <h1 className="text-xs tracking-[0.6em] text-[#8E1B1B] mb-8 uppercase font-bold">Secure Your Entry</h1>
        <h2 className="text-5xl md:text-7xl font-bold tracking-[0.2em] mb-12 uppercase leading-none">BOOKING</h2>
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
              Arrive in cinematic style. Take a guided journey through Atchison’s most haunted locations before being dropped at our doorstep for your booking.
            </p>
            <button className="cta-base cta-secondary w-full sm:w-auto">
              BOOK A HAUNTED TAXI TOUR
            </button>
          </div>
        </div>

        {/* Booking Section */}
        <div className="reveal">
          <div className="bg-[#12161A] border border-[#1F2E33]/20 p-12 md:p-16 relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#8E1B1B]/5 blur-[100px] rounded-full pointer-events-none" />
            <h3 className="text-3xl font-bold tracking-[0.2em] mb-10 uppercase">Ticket Reservation</h3>
            <p className="text-[#E6E8EA]/50 font-light mb-14 leading-relaxed">
              Select your date and encounter below. Early booking is highly recommended as sensory rooms have extremely limited capacity.
            </p>
            
            <div className="space-y-10">
               <div className="group">
                  <label className="block text-[10px] tracking-[0.4em] uppercase text-[#8E1B1B] mb-6 font-bold group-hover:text-white transition-colors">Select Date (OCTOBER)</label>
                  <div className="bg-[#0B0F12] border border-[#1F2E33]/30 p-4">
                    <div className="grid grid-cols-7 gap-1 mb-4 border-b border-[#1F2E33]/20 pb-2 text-[8px] tracking-[0.2em] text-[#E6E8EA]/30 uppercase font-bold text-center">
                      <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {renderCalendar()}
                    </div>
                  </div>
                  {selectedDate && (
                    <p className="mt-4 text-[10px] tracking-widest text-[#8E1B1B] uppercase font-bold">Selected: OCTOBER {selectedDate}</p>
                  )}
               </div>
               <div className="group relative">
                  <label className="block text-[10px] tracking-[0.4em] uppercase text-[#8E1B1B] mb-4 font-bold group-hover:text-white transition-colors">Experience Tier</label>
                  <div className="relative">
                    <select className="w-full bg-[#0B0F12] border border-[#1F2E33]/30 px-6 py-5 focus:outline-none focus:border-[#8E1B1B] transition-all text-[#E6E8EA]/80 font-light appearance-none cursor-pointer pr-12">
                      <option value="single">Single Entry — $49.95</option>
                      <option value="group">Group Entry — $199.95</option>
                    </select>
                    {/* Custom Arrow */}
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="#8E1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
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

export default Booking;
