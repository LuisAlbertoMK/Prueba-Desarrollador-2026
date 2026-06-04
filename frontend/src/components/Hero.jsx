const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="hero-bg" />
      <div className="hero-grid" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="hero-title mb-6">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-6">
            June 15–17, 2026 · Virtual Event
          </span>
        </div>

        <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            The Future of
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Software Development
          </span>
        </h1>

        <p className="hero-subtitle text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join 5,000+ developers for three days of inspiring talks, hands-on workshops,
          and networking with industry leaders from around the globe.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#register"
            className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105 transition-all duration-300"
          >
            Get Your Free Ticket
          </a>
          <a
            href="#info"
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-gray-300 font-semibold text-lg hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-sm text-gray-500">Scroll to explore</span>
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
