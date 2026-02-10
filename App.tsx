
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FogBackground from './components/FogBackground';
import Home from './pages/Home';
import History from './pages/History';
import Experiences from './pages/Experiences';
import Booking from './pages/Booking';
import Rules from './pages/Rules';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/**
 * Synthesizes a startling, harsh horror scream with a ghostly resonance
 * using the Web Audio API.
 */
const playHorrorScream = () => {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    const t = ctx.currentTime;

    const mainGain = ctx.createGain();
    mainGain.gain.setValueAtTime(0, t);
    mainGain.gain.linearRampToValueAtTime(1.0, t + 0.01);
    mainGain.gain.exponentialRampToValueAtTime(0.001, t + 1.2);

    const osc1 = ctx.createOscillator();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(800, t);
    osc1.frequency.exponentialRampToValueAtTime(2800, t + 0.1);
    osc1.frequency.exponentialRampToValueAtTime(400, t + 1.0);

    const osc2 = ctx.createOscillator();
    osc2.type = 'square';
    osc2.frequency.setValueAtTime(1200, t);
    osc2.frequency.exponentialRampToValueAtTime(3200, t + 0.05);
    osc2.frequency.exponentialRampToValueAtTime(600, t + 1.1);

    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.value = 45;
    lfoGain.gain.value = 800;
    lfo.connect(lfoGain);
    lfoGain.connect(osc1.frequency);
    lfoGain.connect(osc2.frequency);

    const bufferSize = ctx.sampleRate * 1.5;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const channelData = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      channelData[i] = Math.random() * 2 - 1;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.setValueAtTime(2000, t);
    noiseFilter.Q.value = 10;

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.7, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, t + 0.8);

    const bellOsc = ctx.createOscillator();
    bellOsc.type = 'sine';
    bellOsc.frequency.setValueAtTime(110, t);
    const bellGain = ctx.createGain();
    bellGain.gain.setValueAtTime(0.3, t);
    bellGain.gain.exponentialRampToValueAtTime(0.001, t + 2.0);

    osc1.connect(mainGain);
    osc2.connect(mainGain);
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(mainGain);
    bellOsc.connect(bellGain);
    bellGain.connect(mainGain);

    mainGain.connect(ctx.destination);

    osc1.start(t);
    osc2.start(t);
    lfo.start(t);
    noise.start(t);
    bellOsc.start(t);

    osc1.stop(t + 1.2);
    osc2.stop(t + 1.2);
    lfo.stop(t + 1.2);
    noise.stop(t + 1.2);
    bellOsc.stop(t + 2.0);
  } catch {
    // Fail silently
  }
};

const App: React.FC = () => {
  const [showFlash, setShowFlash] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFlash(true);
      setTimeout(() => setShowFlash(false), 160);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.classList.contains('cta-base') || target.closest('.cta-base'))) {
        playHorrorScream();
      }
    };
    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#8E1B1B] selection:text-white relative">
      <ScrollToTop />
      <FogBackground />
      <Navbar />

      {showFlash && (
        <div className="fixed inset-0 z-[9999] pointer-events-none bg-black flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=1000"
            className="w-full h-full object-cover grayscale invert contrast-[800%] brightness-[150%] mix-blend-difference"
            alt="Terror"
          />
        </div>
      )}

      <main className="flex-grow z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
