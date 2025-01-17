"use client";
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useTheme } from "@/context/theme-context";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`mb-10 px-4 text-center ${theme === "light" ? "text-gray-500" : "text-gray-400 dark:bg-gray-900"
        }`}
    >
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/simonxcao/"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:${theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/simonxcao"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:${theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:tcao10@uci.edu"
            className={`hover:${theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
          >
            <FaEnvelope size={24} />
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className={theme === "light" ? "text-gray-700" : "text-gray-300"}>
            Simon Cao
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
