"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.5,
    },
  }),
};

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      duration: 0.5,
    },
  },
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<keyof typeof skillsData>("Languages");

  return (
    <section
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>

      {/* Tab Navigation */}
      <div className="flex justify-center gap-4 mb-8">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category as keyof typeof skillsData)}
            className={`px-6 py-2 rounded-lg text-lg font-medium transition ${activeTab === category
                ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-black"
                : "bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white/70"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills List */}
      <motion.ul
        key={activeTab} // Forces re-render and animation on tab switch
        className="flex flex-wrap justify-center gap-4 text-lg text-gray-800 dark:text-white/80"
        initial="initial"
        animate="animate"
        whileInView="animate"
        viewport={{ once: false, amount: 0.3 }} // Reanimate on scroll into view
        variants={containerVariants}
      >
        {skillsData[activeTab].map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            custom={index} // Pass index to control delay
            initial="initial"
            whileInView="animate" // Reanimate individual items on scroll
            viewport={{ once: false, amount: 0.3 }} // Re-trigger for each skill
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
