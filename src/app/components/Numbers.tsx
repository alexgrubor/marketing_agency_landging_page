'use client'
import { useState, useEffect } from 'react';

interface NumbersProps {
  targetNumber: number; 
}

const Numbers = ({ targetNumber } : NumbersProps) => {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentNumber((prev) => Math.min(prev + 1, targetNumber)); 
      }, 30); 
  
      return () => clearInterval(intervalId); 
    }, [currentNumber, targetNumber]);

  return (
    <div className="text-9xl text-myPurple-700 font-bold ml-9 inline">
      {currentNumber}% 
    </div>
  );
};

export default Numbers;
