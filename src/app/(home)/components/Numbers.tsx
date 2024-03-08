'use client'
import React, { useState, useEffect, useRef } from 'react';

interface NumbersProps {
  targetNumber: number;
}

const Numbers = ({ targetNumber }: NumbersProps) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const numbersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('intersecting');

            const intervalId = setInterval(() => {
              setCurrentNumber((prev) => {
                const nextNumber = Math.min(prev + 1, targetNumber);
                if (nextNumber === targetNumber) {
                  clearInterval(intervalId); // Clear the interval when target number is reached
                }
                return nextNumber;
              });
            }, 30);
          } else {
            setCurrentNumber(0);
            console.log('not intersecting');
          }
        });
      },
      { rootMargin: '100px' }
    );

    if (numbersRef.current) {
      observer.observe(numbersRef.current);
    }

    return () => {
      if (numbersRef.current) {
        observer.unobserve(numbersRef.current);
      }
    };
  }, [targetNumber]);

  return (
    <div ref={numbersRef} className="text-9xl text-myPurple-700 font-bold ml-9 inline">
      {currentNumber}%
    </div>
  );
};

export default Numbers;