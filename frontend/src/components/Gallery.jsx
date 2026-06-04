const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    alt: 'Conference keynote presentation',
    label: 'Keynote Stage',
  },
  {
    src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80',
    alt: 'Workshop session',
    label: 'Workshops',
  },
  {
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80',
    alt: 'Networking event',
    label: 'Networking',
  },
  {
    src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    alt: 'Audience at conference',
    label: 'Live Audience',
  },
  {
    src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80',
    alt: 'Panel discussion',
    label: 'Panel Discussions',
  },
  {
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
    alt: 'Office hours',
    label: 'Mentorship',
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A glimpse into what awaits you at DevCon 2026.
          </p>
          <div className="section-divider mt-6 max-w-xs mx-auto" />
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-16">
          {GALLERY_IMAGES.map((img, index) => (
            <div
              key={img.label}
              className={`gallery-item scroll-animate-scale ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span className="text-white font-semibold text-lg">{img.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Video section */}
        <div className="scroll-animate">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Watch — DevCon 2025 Highlights
          </h3>
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-white/10">
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/2cYz1VjXVZk"
                title="DevCon 2025 Highlights"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            Relive the energy from last year&apos;s event.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
