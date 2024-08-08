import React, { useState, useEffect } from 'react';
import './CountDownTimer.css';

const CountDownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = new Date(targetDate) - now;

      if (difference <= 0) {
        clearInterval(intervalId);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className="countdown-timer">
      <div className="time-box">
        <span className="time">{timeLeft.days}</span>
        <span className="label">Days</span>
      </div>
      <div className="time-box">
        <span className="time">{timeLeft.hours}</span>
        <span className="label">Hours</span>
      </div>
      <div className="time-box">
        <span className="time">{timeLeft.minutes}</span>
        <span className="label">Minutes</span>
      </div>
      <div className="time-box">
        <span className="time">{timeLeft.seconds}</span>
        <span className="label">Seconds</span>
      </div>
    </div>
  );
};

export default CountDownTimer;