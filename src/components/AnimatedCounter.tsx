import { useState, useEffect } from 'react';

interface AnimatedCounterProps {
  targetNumber: number;
  duration?: number; // Animation duration in milliseconds
  className?: string;
}

const AnimatedCounter = ({ targetNumber, duration = 2000, className = "" }: AnimatedCounterProps) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    if (targetNumber === 0) return;

    const startTime = Date.now();
    const startNumber = 0;
    const difference = targetNumber - startNumber;

    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      // Easing function for smooth animation (ease-out)
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const newNumber = Math.floor(startNumber + (difference * easedProgress));

      setCurrentNumber(newNumber);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCurrentNumber(targetNumber);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [targetNumber, duration]);

  return (
    <span className={className}>
      {currentNumber.toLocaleString()}
    </span>
  );
};

export default AnimatedCounter;
