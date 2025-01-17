import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaCalendarTimes, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import leksa from "@/public/leksa.png";
import profile from "@/public/profile.png";
import zotservices from "@/public/zotservices.gif";
import anime from "@/public/AnimeNinja.gif";
import fabflix from "@/public/fabflix2.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "University of California - Irvine",
    location: "Irvine, CA",
    description:
      "Graduating with a BS in Computer Science and minor in Informatics",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2021 - Jun 2025",
  },
  {
    title: "Full-Stack Software Engineer ",
    location: "Office of Informative Techology | Irvine, CA",
    description:
      "Worked for the Office of Informative Techology at University of California - Irvine, maintaining and upscaling their graduation commencement website as well as all the SaaS related to it.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2022 - present",
  },
  {
    title: "Jr. Full Stack Software Engineer Intern ",
    location: "DigiTechIT Solutions | Remote",
    description:
      "Became an full stack software engineer intern where we launched an imaging compression, tagging, and application microservice.",
    icon: React.createElement(FaReact),
    date: "Jun 2023 - Sep 2024",
  },
  {
    title: "Software Engineer Intern",
    location: "CoreLogic | Remote",
    description:
      "Incoming Software Engineer Intern at CoreLogic",
    icon: React.createElement(FaCalendarTimes),
    date: "Jun 2025 - Sep 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Leksa",
    description:
      "A student-focused food social media app, including AI-powered personalized recommendations and tailored for college communities",
    tags: ["React Native", "Javascript", "PostgreSql", "Express.js", "Cloudflare", "DigitalOcean", "Docker", "Kubernetes", "Python"],
    imageUrl: leksa,
    githubLink: "https://www.instagram.com/leksa.ai/",
  },
  {
    title: "ZotServices",
    description:
      "An online marketplace designed to connect UCI students with student-run services, enabling users to post, explore, and review various offerings.",
    tags: ["Python", "Django", "SQLite", "React.js", "Javascript", "Bootstrap"],
    imageUrl: zotservices,
    githubLink: "https://github.com/julian-z/ZotServices",
  },
  {
    title: "AnimeNinjas",
    description:
      "Developed a fully responsive anime recommendation website with 100+ monthly users, featuring a Python scraper for 25,000+ anime, MongoDB integration, user authentication, reviews, and optimized infinite scroll for 15% improved user retention.",
    tags: ["EJS", "HTML/CSS", "MongoDB", "Javascript", "Python", "Express.js",],
    imageUrl: anime,
    githubLink: "https://github.com/simonxcao/AnimeNinjas",
  },
  {
    title: "FabFlix",
    description:
      "Led a team to develop and deploy a scalable cybercommerce movie catalog with 30,000+ movies and 100,000+ stars, leveraging MySQL replication, Docker, and Kubernetes to optimize performance and reduce server load by 60%.",
    tags: ["Java", "Tomcat", "AWS", "Docker", "Kubernetes", "MySQL", "GCP", "Javascript", "HTML/CSS"],
    imageUrl: fabflix,
    githubLink: "https://www.youtube.com/watch?v=AXasmBiF-2M&ab_channel=AlvinPhan",
  },
] as const;

export const skillsData = {
  Languages: [
    "Python",
    "Java",
    "C/C++",
    "JavaScript",
    "SQL",
    "PHP",
    "TypeScript",
    "Swift",
    "C#",
    "HTML/CSS",
    "MIPS Assembly",
    "Go",
  ],
  Frameworks: [
    "Express.js",
    "React.js",
    "React Native",
    "Vue.js",
    "Laravel",
    "Next.js",
    "Git",
    "Flask",
    "Django",
    "Cypress",
    "Angular",
    "Bootstrap",
    "Passport.js",
    "Tailwind CSS",
    "Framer Motion"
  ],
  Technologies: [
    "Docker",
    "Kubernetes",
    "MySQL",
    "MongoDB",
    "SQLite",
    "PostgreSQL",
    "Google Cloud Platform",
    "AWS",
    "Redis",
    "Linux",
    "Azure",
    "Figma",
  ]
};
