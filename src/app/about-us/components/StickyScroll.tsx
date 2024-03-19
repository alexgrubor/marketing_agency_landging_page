'use client'
import React, { useRef } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import { cn } from '../../../../utils/cn';

interface ContentItem {
  title: string;
  description: string;
  content?: React.ReactNode | any;
}

const StickyScroll: React.FC<{
  content: ContentItem[];
  contentClassName?: string;
}> = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ['start start', 'end start'],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ['var(--slate-900)', 'var(--black)', 'var(--neutral-900)'];
 

  return (
    <motion.div
      
      className="h-[31rem] bg-secondBg text-bg overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-3xl my-2 font-bold text-myPurple-700"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.4,
                }}
                className="text-lg  "
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-[20rem]" />
        </div>
      </div>
      <motion.div
      
        className={cn(
          'hidden lg:block h-60 w-80 rounded-md  sticky top-10 overflow-hidden',
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};

export default StickyScroll;
