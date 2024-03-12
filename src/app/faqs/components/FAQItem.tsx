'use client'
import { useState } from "react";

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem = ({ question, answer } : FAQItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="mb-4 shadow-md shadow-secondBg"> 
        <button
          className="bg-myPurple-600 text-white font-medium py-3 px-6 w-full rounded-t-md flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={`faq-content-${question}`} 
        >
          {question}
          <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </button>
        <div
          id={`faq-content-${question}`}
          className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}
          aria-hidden={!isOpen}
        >
          <div className="p-6 bg-secondBg rounded-b-md">
            {answer}
          </div>
        </div>
      </div>
    );
  };
  

export default FAQItem;