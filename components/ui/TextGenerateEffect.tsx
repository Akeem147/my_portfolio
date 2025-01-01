"use client";
import React from "react";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [animate, filter, duration]); // Include missing dependencies
  

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="text-center">
      {wordsArray.map((word, idx) => (
        <React.Fragment key={word + idx}>
          <motion.span
            className={`${
              idx > 3 ? "text-purple" : "dark:text-white text-black opacity-0"
            }`}
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}
          </motion.span>
          {/* Add a space between words */}
          {idx < wordsArray.length - 1 && <span>&nbsp;</span>}
          {/* Insert a <br /> every 3 words */}
          {(idx + 1) % 3 === 0 && <br />}
        </React.Fragment>
      ))}
    </motion.div>
    
    );
  };
  
  

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading- tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
