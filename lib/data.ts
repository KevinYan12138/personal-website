import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer Intern",
    company: "Corteva Agriscience",
    description:
      "Developed a web application to replace OutSystems app for over 100 research facilities, projecting annual savings of over $100,000 and thousands of work hours in global research operations",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - August 2024",
  },
  {
    title: "Software Engineer Intern",
    company: "Corteva Agriscience",
    description:
      "Reduced latency by more than 85% (from 10s to 1.2s) for REST API calls by optimizing the automated system that captures and uploads satellite map screenshots",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - August 2023",
  },
  {
    title: "Software Engineer Intern",
    company: "University of Illinois Urbana-Champaign",
    description:
      "Developed an English learning Android App using Android Studio for Costa Rica customs with two professors and five students, empowering officers to effectively assist travelers from diverse backgrounds worldwide",
    icon: React.createElement(CgWorkAlt),
    date: "February 2022 - May 2022",
  },
] as const;

export const projectsData = [
] as const;

export const skillsData = [
  "Java",
  "Python",
  "C++",
  "C#",
  "Swift",
  "Kotlin",
  ".NET",
  "Spring Boot",
  "Flask",
  "React",
  "Angular",
  "TypeScript",
  "JavaScript",
  "Azure",
  "AWS",
  "Google Cloud",
  "Flutter",
  "Node.js",
  "MySQL",
  "MongoDB",
  "GraphQL",
  "Rest API",
  "Kafka",
  "Kubernetes",
  "Docker",
] as const;
