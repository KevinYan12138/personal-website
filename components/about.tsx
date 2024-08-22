"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently a senior studying Computer Science & Stats at UIUC.
        My favorite part of programming is the problem-solving aspect. I love the
        feeling of finally figuring out a solution to a problem. I have experience
        in Full-stack, Frontend, and Backend development. 
        I am always looking to learn new technologies. I am currently looking for a
        full-time position as a software engineer after graduation.
      </p>

      <p>
        When I'm not coding, I enjoy playing
        video games and watching movies.
      </p>
    </motion.section>
  );
}
