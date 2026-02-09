
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0F12] border-t border-[#1F2E33]/30 py-20 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-[0.2em] mb-4">1322 MAPLE</h2>
        <p className="text-[#E6E8EA]/60 tracking-[0.1em] mb-12">WHERE THE DEAD ARE NOT AT REST.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full mb-16">
          <div>
            <h4 className="text-xs tracking-widest text-[#8E1B1B] mb-6 uppercase">Navigation</h4>
            <div className="flex flex-col space-y-3">
              <Link to="/history" className="text-sm hover:text-white transition-colors">History</Link>
              <Link to="/experiences" className="text-sm hover:text-white transition-colors">Experiences</Link>
              <Link to="/booking" className="text-sm hover:text-white transition-colors">Booking</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs tracking-widest text-[#8E1B1B] mb-6 uppercase">Information</h4>
            <div className="flex flex-col space-y-3">
              <Link to="/rules" className="text-sm hover:text-white transition-colors">Rules & Safety</Link>
            </div>
          </div>
          <div className="md:col-span-2">
             <h4 className="text-xs tracking-widest text-[#8E1B1B] mb-6 uppercase">Our Partners</h4>
             <p className="text-sm text-[#E6E8EA]/50 mb-4">Powered by Haunted Taxi Ghost Tours USA</p>
             <p className="text-sm text-[#E6E8EA]/50">Proud Partner of Haunted Social</p>
          </div>
        </div>

        <p className="text-[10px] tracking-widest text-[#E6E8EA]/30 uppercase">
          &copy; {new Date().getFullYear()} 1322 MAPLE HOUSE OF THE DEAD. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
