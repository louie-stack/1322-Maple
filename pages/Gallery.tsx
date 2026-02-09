
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { url: 'https://picsum.photos/seed/h1/800/800?grayscale', title: 'Exterior at Night' },
    { url: 'https://picsum.photos/seed/h2/800/800?grayscale', title: 'The Hallway' },
    { url: 'https://picsum.photos/seed/h3/800/800?grayscale', title: 'The Artifacts' },
    { url: 'https://picsum.photos/seed/h4/800/800?grayscale', title: 'Shadow Work' },
    { url: 'https://picsum.photos/seed/h5/800/800?grayscale', title: 'Dirty Gerty Closet' },
    { url: 'https://picsum.photos/seed/h6/800/800?grayscale', title: 'The Basement' },
    { url: 'https://picsum.photos/seed/h7/800/800?grayscale', title: 'Reflections' },
    { url: 'https://picsum.photos/seed/h8/800/800?grayscale', title: 'Visitor Log' },
  ];

  return (
    <div className="pt-32 pb-40">
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <h1 className="text-xs tracking-[0.5em] text-[#8E1B1B] mb-8 uppercase font-bold">Documented Proof</h1>
        <h2 className="text-4xl md:text-6xl font-bold tracking-[0.2em] mb-12 uppercase">Inside the House of the Dead</h2>
        <div className="max-w-2xl mx-auto space-y-4 text-[#E6E8EA]/60 font-light italic">
          <p>Every photo was taken inside the actual location.</p>
          <p>Nothing is staged. Nothing is recreated.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="group relative aspect-square overflow-hidden bg-[#12161A]">
            <img 
              src={img.url} 
              alt={img.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-[#8E1B1B]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
              <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-white bg-black/50 px-2 py-1 inline-block">{img.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
