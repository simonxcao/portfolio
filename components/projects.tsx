"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  // Define animation variants
  const projectVariant = {
    hidden: (direction: "left" | "right") => ({
      opacity: 0,
      x: direction === "left" ? -100 : 100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 overflow-x-hidden"
    >
      <SectionHeading>My Projects</SectionHeading>
      <div className="flex flex-col gap-12 max-w-screen-xl mx-auto px-4"> {/* Limit width */}
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center justify-center gap-8 border border-gray-200 p-6 rounded-lg shadow-lg max-w-full"
            // Animate from left for even-indexed projects, right for odd-indexed projects
            custom={index % 2 === 0 ? "left" : "right"}
            variants={projectVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            {/* Image on the left */}
            <Image
              src={project.imageUrl}
              alt={project.title}
              className="w-full md:w-1/3 object-cover rounded-lg"
              width={500} // Set width explicitly
              height={500} // Set height explicitly to enforce consistency
              style={{ aspectRatio: "4 / 3" }}
            />

            {/* Content on the right */}
            <div className="flex flex-col items-start justify-center text-center md:text-left md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-light-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
