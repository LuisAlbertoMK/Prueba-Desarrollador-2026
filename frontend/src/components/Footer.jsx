const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-dark/50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="scroll-animate">
            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-3">
              DevCon 2026
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              The premier digital conference for software developers worldwide.
              Three days of inspiration, education, and connection.
            </p>
          </div>

          {/* Quick links */}
          <div className="scroll-animate">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'About', href: '#info' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Register', href: '#register' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="scroll-animate">
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>hello@devcon2026.com</li>
              <li>
                <span className="inline-flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Virtual Event
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>&copy; {year} DevCon 2026. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            for developers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
