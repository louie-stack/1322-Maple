
import React from 'react';
import { Link } from 'react-router-dom';

const TaxiTour: React.FC = () => {
  return (
    <div className="bg-[#050505] min-h-screen text-gray-300 font-eerie pb-24">
      <div className="relative h-[60vh]">
        <img 
          src="https://picsum.photos/id/10/1920/1080?grayscale" 
          alt="Dark Road" 
          className="w-full h-full object-cover brightness-[0.2] contrast-150 filter sepia-[1] hue-rotate-[320deg]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
        <div className="absolute bottom-12 left-6 md:left-24">
          <h1 className="text-7xl font-horror text-red-600 mb-4 glitch-text uppercase">HAUNTED TAXI</h1>
          <p className="text-red-800 font-metal text-2xl tracking-widest">AT THE GATES OF HELL</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-12 space-y-12">
        <section className="bg-red-900/10 p-10 border border-red-900 relative">
          <div className="absolute -top-4 -left-4 bg-red-600 text-black px-4 py-1 font-metal">OFFICIAL PARTNER</div>
          <h2 className="text-4xl font-horror text-red-700 mb-6">DO NOT DRIVE ALONE</h2>
          <p className="text-lg">
            We have partnered with <strong>Haunted Taxi Ghost Tours</strong> to provide safe—or perhaps 
            dangerously spooky—transportation to 1322 Maple House of the Dead.
          </p>
        </section>

        <article className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-horror text-red-600 mb-4">THE JOURNEY</h3>
            <p>
              Your tour begins the moment you step into the taxi. Experience the haunted history 
              of Atchison as you wind through the dark streets toward the most cursed property 
              in the state.
            </p>
          </div>
          <div className="bg-black/80 p-6 border border-red-900 space-y-4">
            <h3 className="text-2xl font-horror text-red-600">BOOKING INFO</h3>
            <p className="text-sm">Available Friday and Saturday nights only. Reservations are mandatory.</p>
            <p className="text-red-500 font-bold">Price: $49.95 per person (Includes House Entry)</p>
            <Link 
              to="/?book=true"
              className="block w-full bg-red-800 text-white py-3 font-metal text-center hover:bg-red-600 transition-all hover-shake shadow-lg"
            >
              BOOK TOUR
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default TaxiTour;
