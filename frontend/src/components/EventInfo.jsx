const EVENT_DETAILS = [
  {
    icon: (
      <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Date',
    value: 'June 15–17, 2026',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Time',
    value: '10:00 AM – 6:00 PM EST',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Location',
    value: 'Virtual — Worldwide',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Speakers',
    value: '50+ Industry Experts',
  },
];

const EventInfo = () => {
  return (
    <section id="info" className="py-24 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Event Details
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about DevCon 2026 — the premier digital
            conference for software developers.
          </p>
          <div className="section-divider mt-6 max-w-xs mx-auto" />
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {EVENT_DETAILS.map((detail, index) => (
            <div
              key={detail.title}
              className="glass-card p-8 rounded-2xl text-center scroll-animate"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-indigo-500/10 mb-5">
                {detail.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{detail.title}</h3>
              <p className="text-gray-400">{detail.value}</p>
            </div>
          ))}
        </div>

        {/* Description + highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-animate-left">
            <h3 className="text-2xl font-bold mb-6 text-white">Why Attend?</h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                DevCon 2026 brings together the brightest minds in software engineering
                for three days of cutting-edge content. Whether you&apos;re a frontend
                specialist, backend architect, or full-stack developer, there&apos;s
                something for you.
              </p>
              <ul className="space-y-3">
                {[
                  '40+ technical sessions across 5 tracks',
                  'Hands-on workshops with live coding',
                  '1-on-1 mentorship sessions',
                  'Virtual networking lounges',
                  'Career fair with top tech companies',
                  'Recordings available for 30 days',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="scroll-animate-right">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-white">Event Schedule</h3>
              <div className="space-y-4">
                {[
                  { day: 'Day 1', theme: 'Core — Languages & Frameworks', color: 'from-indigo-500 to-purple-500' },
                  { day: 'Day 2', theme: 'Scale — Architecture & Cloud', color: 'from-cyan-500 to-blue-500' },
                  { day: 'Day 3', theme: 'Future — AI & Emerging Tech', color: 'from-emerald-500 to-teal-500' },
                ].map((day) => (
                  <div
                    key={day.day}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className={`w-2 h-12 rounded-full bg-gradient-to-b ${day.color}`} />
                    <div>
                      <p className="text-sm text-indigo-400 font-semibold">{day.day}</p>
                      <p className="text-white font-medium">{day.theme}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
