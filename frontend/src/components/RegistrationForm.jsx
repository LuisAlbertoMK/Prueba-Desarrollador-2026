import { useState, useRef } from 'react';
import axios from 'axios';
import CountdownTimer from './CountdownTimer';

const INITIAL_FORM = { name: '', email: '', message: '' };
const TIMER_MINUTES = 5;

const RegistrationForm = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');
  const [formExpired, setFormExpired] = useState(false);
  const formRef = useRef(null);

  // ---------- Client-side validation ----------
  const validate = () => {
    const errs = {};
    if (!form.name.trim() || form.name.trim().length < 3) {
      errs.name = 'Name must be at least 3 characters';
    }
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Invalid email format';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    return errs;
  };

  // ---------- Handle input changes ----------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // ---------- Submit to backend ----------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSubmitting(true);

    try {
      await axios.post('/api/register', {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });
      setSubmitted(true);
    } catch (err) {
      const msg =
        err.response?.data?.errors?.[0]?.msg ||
        err.response?.data?.message ||
        'Something went wrong. Please try again.';
      setServerError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  // ---------- Timer expired ----------
  const handleTimerExpired = () => {
    setFormExpired(true);
  };

  // ---------- RENDER ----------
  return (
    <section
      id="register"
      className="py-24 px-4 relative"
      ref={formRef}
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/3 to-transparent pointer-events-none" />

      <div className="max-w-xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-10 scroll-animate">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Register Now
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Secure your free spot for DevCon 2026.
          </p>
          <div className="section-divider mt-6 max-w-xs mx-auto" />
        </div>

        {/* Timer */}
        {!submitted && !formExpired && (
          <CountdownTimer
            initialMinutes={TIMER_MINUTES}
            onExpired={handleTimerExpired}
          />
        )}

        {/* ---------- EXPIRED STATE ---------- */}
        {formExpired && !submitted && (
          <div className="glass-card p-12 rounded-2xl text-center scroll-animate animate-visible">
            <div className="text-6xl mb-6">⏰</div>
            <h3 className="text-2xl font-bold text-red-400 mb-4">
              Registration Window Closed
            </h3>
            <p className="text-gray-400 mb-8">
              The registration period for this session has ended.
              Don&apos;t worry — more spots may open up. Check back soon!
            </p>
            <button
              onClick={() => {
                setFormExpired(false);
                setForm(INITIAL_FORM);
              }}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
            >
              Try Again
            </button>
          </div>
        )}

        {/* ---------- SUCCESS STATE ---------- */}
        {submitted && (
          <div className="glass-card p-12 rounded-2xl text-center scroll-animate animate-visible">
            <div className="text-6xl mb-6">🎉</div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">
              You&apos;re Registered!
            </h3>
            <p className="text-gray-400 mb-2">
              Thank you, <span className="text-white font-semibold">{form.name}</span>!
            </p>
            <p className="text-gray-500 mb-8">
              We&apos;ve sent a confirmation to{' '}
              <span className="text-indigo-400">{form.email}</span>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm(INITIAL_FORM);
                setFormExpired(false);
              }}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-gray-300 font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Register Another Person
            </button>
          </div>
        )}

        {/* ---------- FORM ---------- */}
        {!submitted && !formExpired && (
          <form
            onSubmit={handleSubmit}
            className={`glass-card p-8 sm:p-10 rounded-2xl space-y-6 ${
              formExpired ? 'form-slide-out' : 'scroll-animate'
            }`}
            noValidate
          >
            {/* Server error */}
            {serverError && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {serverError}
              </div>
            )}

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className={`form-input ${errors.name ? 'error' : ''}`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1.5 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-1.5 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Why do you want to attend?
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className={`form-input resize-none ${errors.message ? 'error' : ''}`}
                placeholder="I'm excited to learn about the latest in web development..."
              />
              {errors.message && (
                <p className="mt-1.5 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl text-white font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {submitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Register Now'
              )}
            </button>

            {/* Timer note */}
            <p className="text-center text-xs text-gray-500">
              You have {TIMER_MINUTES} minutes to complete your registration.
              The form will close when the timer expires.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default RegistrationForm;
