import { useState, useEffect, useCallback } from 'react';

/**
 * CountdownTimer — Shows a M:SS countdown.
 * When it reaches 0, calls onExpired to signal parent.
 *
 * @param {number} initialMinutes - Minutes to count down from
 * @param {function} onExpired - Callback when timer hits 0
 */
const CountdownTimer = ({ initialMinutes = 5, onExpired }) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const [isExpired, setIsExpired] = useState(false);

  const handleExpire = useCallback(() => {
    if (!isExpired) {
      setIsExpired(true);
      onExpired?.();
    }
  }, [isExpired, onExpired]);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleExpire();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, handleExpire]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isUrgent = timeLeft <= 60;
  const display = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div
      className={`text-center mb-6 scroll-animate ${
        isExpired ? 'opacity-0' : ''
      }`}
    >
      <p className="text-sm text-gray-400 mb-2">
        {isUrgent
          ? '⚠️ Hurry! Registration closing soon!'
          : 'Registration closes in:'}
      </p>
      <div
        className={`inline-flex items-center justify-center gap-1 ${
          isUrgent ? 'timer-urgent' : ''
        }`}
      >
        <span
          className={`text-4xl font-mono font-bold ${
            isUrgent ? 'text-red-400' : 'text-indigo-400'
          }`}
        >
          {display}
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
