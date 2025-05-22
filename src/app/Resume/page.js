"use client";
import React, { useState, useEffect } from "react";
import Noise from "../Components/noise";
import Button from "../Components/Button";
import InteractableTags from "../Components/interactabletags";
import Lilguy from "../Components/Lilguy";
import Load from "../Components/Load";
import Navbar from "../Components/Navbar";
import Junbot from "../Components/Junbot";
import Link from "next/link";
import { motion } from "framer-motion";
import Hoverlink from "../Components/Hoverlink";
export default function About() {
  const tags = [
    {
      name: "React",
      Percent: 100,
    },
    {
      name: "Typescript",
      Percent: 100,
    },
    {
      name: "Javascript",
      Percent: 100,
    },
    {
      name: "Node.js",
      Percent: 100,
    },
    {
      name: "Express",
      Percent: 100,
    },
    {
      name: "MongoDB",
      Percent: 90,
    },
    {
      name: "PostgreSQL",
      Percent: 80,
    },
    {
      name: "Python",
      Percent: 80,
    },
    {
      name: "Java",
      Percent: 80,
    },
  ];
  return (
    <div className="w-full gradientbackground  overflow-hidden relative h-[100dvh] flex justify-center items-center">
      <Navbar activeButton="resume" />
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          bounce: 0.3, // bounce between 0 and 1
          duration: 0.5, // slightly longer so the bounce is visible
        }}
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 0, visibility: "hidden" }}
          transition={{
            duration: 0.3,
            delay: 0.5,
            type: "spring",
            bounce: 0.2,
          }}
          className="w-[35px] h-[35px] rounded-full bg-white"
        ></motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          bounce: 0.5,
          duration: 0.5,
          delay: 0.9,
        }}
        className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
      >
        <Button onClick={() => {}}>
          Download Resume <i className="fa-solid fa-download"></i>
        </Button>
      </motion.div>

      <Button
        className={` absolute bottom-5 sm:bottom-10 z-300 sm:left-10 left-5 sm:block hidden`}
        variant="secondary"
        onClick={() => {}}
      >
        Playground
      </Button>
      <Junbot className={`sm:block hidden`} />
      <Lilguy />
    </div>
  );
}
