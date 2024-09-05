"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";

export function Hero() {
  // Function to scroll the window down by one viewport height
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight, // Scrolls by one viewport height
      behavior: "smooth", // Smooth scrolling
    });
  };

  const words = [
    "Crafting",
    "Tomorrow,",
    "Today",
    "with",
    "B"
  ];

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-10 items-center justify-center px-8"
      >
        <div className="flex flex-wrap justify-center text-5xl md:text-7xl lg:text-8xl font-bold text-center dark:text-white">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.8, ease: "easeInOut" }}
              className={index > 0 ? 'ml-2' : ''}
            >
              {word}{" "}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.6 + words.length * 0.2, duration: 0.8, ease: "easeInOut" }}
          className="items-center justify-center flex flex-col space-y-0.5"
        >
          <div className="font-light dark:text-neutral-200 py-4 text-center">
            Hi! I&apos;m Biraja Prasad, a Multiplatform Developer creating beautiful and scalable solutions, as well as branding and logo design, based in India
          </div>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ delay: 0.8 + words.length * 0.2, duration: 0.8, ease: "easeInOut" }}
            className="flex items-center cursor-pointer" // Added cursor-pointer
            onClick={handleScroll} // Added onClick event handler
          >
            <DoubleArrowDownIcon className="dark:text-neutral-200" />
          </motion.div>
        </motion.div>
      </motion.div>
    </AuroraBackground>
  );
}
