"use client";
import { motion } from "framer-motion";
import React from "react";
import AuroraBackground from "./AuroraBackground"; // Adjust the path based on your project structure

const AuroraBackgroundDemo = ({title, description, link}) => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative  flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-2xl md:text-5xl font-bold dark:text-white text-center">
          {title}
        </div>
        <div className="font-extralight text-center text-base md:text-3xl dark:text-neutral-200 py-4">
          {description}
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          {link}
        </button>
      </motion.div>
    </AuroraBackground>
  );
};

export default AuroraBackgroundDemo;
