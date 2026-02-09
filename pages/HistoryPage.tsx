
import React from 'react';
import { Link } from 'react-router-dom';

const HistoryPage: React.FC = () => {
  return (
    <div className="bg-[#050505] min-h-screen text-gray-300 font-eerie pb-24">
       <div className="max-w-4xl mx-auto px-6 py-24 space-y-16">
          <header className="text-center">
            <h1 className="text-8xl font-horror text-red-600 mb-4 glitch-text">DARK HISTORY</h1>
            <p className="text-red-800 font-metal text-3xl">1322 MAPLE STREET</p>
          </header>

          <section className="space-y-8 relative">
             <div className="absolute top-0 left-0 w-1 h-full bg-red-900 opacity-20"></div>
             <div className="pl-12 space-y-12">
                <article>
                   <h2 className="text-4xl font-horror text-red-700 mb-4">1882: THE UNMARKED GRAVES</h2>
                   <p className="text-lg leading-relaxed">
                      Before the house was built, the land served as an unofficial burial ground for the city's 
                      unwanted—the sick, the criminal, and the unclaimed. Over 100 bodies were laid to rest here 
                      without markers. When the foundations were dug, bones were found. They were simply pushed deeper.
                   </p>
                </article>

                <article>
                   <h2 className="text-4xl font-horror text-red-700 mb-4">1921: THE DEMONS HOUSE</h2>
                   <p className="text-lg leading-relaxed">
                      The property earned its name "The Demons House" after a series of failed exorcisms performed 
                      by a renegade priest in the early 20s. He claimed the house wasn't just haunted, but was 
                      a "mouth of the earth" that refused to close.
                   </p>
                </article>

                <article>
                   <h2 className="text-4xl font-horror text-red-700 mb-4">TODAY: THE DEAD REMAIN</h2>
                   <p className="text-lg leading-relaxed">
                      Modern thermal imaging and EMF scans show constant, violent fluctuations. 
                      At 1322 Maple, the veil is not just thin—it is shredded.
                   </p>
                </article>
             </div>
          </section>

          <div className="bg-red-950/20 p-12 border-2 border-red-900 text-center">
             <h3 className="text-5xl font-horror text-red-600 mb-6">WE INVITE YOU TO SEE</h3>
             <p className="mb-8 italic">"You don't visit the house. The house visits you."</p>
             <Link 
              to="/?book=true" 
              className="inline-block bg-red-700 text-black px-12 py-4 font-metal text-2xl hover:bg-red-500 transition-all hover-shake"
             >
              VISIT THE CEMETERY
             </Link>
          </div>
       </div>
    </div>
  );
};

export default HistoryPage;
