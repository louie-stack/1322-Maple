
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'HOME', path: '/' },
    { name: 'HISTORY', path: '/history' },
    { name: 'EXPERIENCES', path: '/experiences' },
    { name: 'BOOKING', path: '/booking' },
    { name: 'RULES & SAFETY', path: '/rules' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0B0F12]/95 border-b border-[#1F2E33]/30 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-[0.2em] hover:text-[#8E1B1B] transition-colors">
          1322 MAPLE
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs tracking-widest hover:text-[#8E1B1B] transition-colors ${location.pathname === item.path ? 'text-[#8E1B1B]' : 'text-[#E6E8EA]'}`}
            >
              {item.name}
            </Link>
          ))}
          <a
            href={`tel:${CONTACT_INFO.PHONE.replace(/\D/g, '')}`}
            className="text-xs tracking-widest text-[#E6E8EA]/60 hover:text-white transition-colors"
          >
            {CONTACT_INFO.PHONE}
          </a>
          <Link
            to="/booking"
            className="cta-base cta-primary !px-6 !py-2 !text-[10px]"
          >
            BOOK YOUR EXPERIENCE
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-[#E6E8EA]" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-[#0B0F12] z-40 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-lg tracking-[0.3em]"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/booking"
            className="cta-base cta-primary mt-8"
            onClick={() => setIsOpen(false)}
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
