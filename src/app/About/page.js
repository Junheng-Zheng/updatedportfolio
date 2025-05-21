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
  const [workMode, setWorkMode] = useState(true);
  return (
    <div className="w-full gradientbackground  overflow-hidden relative h-[100dvh] flex justify-center items-center">
      {/* <motion.div
        initial={{ y: -2000 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 w-full z-2000 bg-black h-full"
      ></motion.div> */}
      {/* <Noise
        patternSize={200}
        patternScaleX={1.5}
        patternScaleY={1.5}
        patternRefreshInterval={2}
        patternAlpha={15}
        className="absolute top-0 left-0 w-full h-full"
      /> */}
      <Navbar />
      <div className="absolute top-1/2 left-1/2 z-10 sm:w-fit  px-10 flex flex-col items-start gap-4 sm:gap-[24px] -translate-x-1/2 -translate-y-1/2">
        <div className="flex w-full items-center justify-between">
          <Link href="/../">
            <span className="text-white cursor-pointer text-[16px] sm:text-[18px] pb-2 border-b-2 border-white leading-none font-semibold">
              {"<- Back"}
            </span>
          </Link>
          <div className=" relative flex text-[21px] overflow-hidden bg-black/20 rounded-full">
            <div
              className={`absolute top-0 transition-all duration-300 rounded-full left-0 h-full w-[50%] bg-black ${
                workMode ? "translate-x-0" : "translate-x-full"
              }`}
            />
            <button
              onClick={() => setWorkMode(true)}
              className="p-5 py-3 w-full h-full cursor-pointer z-10"
            >
              <i className="z-10 fa-solid fa-briefcase"></i>
            </button>
            <button
              onClick={() => setWorkMode(false)}
              className="p-5 py-3 w-full h-full cursor-pointer z-10"
            >
              <i className=" z-10 fa-solid fa-user"></i>
            </button>
          </div>
        </div>
        {workMode && (
          <>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex w-full items-center h-6 gap-2"
            >
              <p className="overflow-hidden relative text-[18px] sm:text-[21px] pb-0.5 leading-none font-semibold">
                RIT
              </p>
              <div className=" bg-white w-[2px] h-full" />
              <p className="overflow-hidden relative text-[18px] sm:text-[21px] pb-0.5 leading-none font-semibold">
                Web & Mobile Computing
              </p>
              <div className=" bg-white w-[2px] h-full" />
              <p className="overflow-hidden relative text-[18px] sm:text-[21px] pb-0.5 leading-none font-semibold">
                3.7 GPA
              </p>
            </motion.div>
            <div className="relative flex items-center text-nowrap text-[16px] flex-wrap gap-2">
              {tags.map((tag, index) => (
                <InteractableTags
                  key={index}
                  name={tag.name}
                  percent={tag.Percent}
                  delay={0.3 + index * 0.1}
                />
              ))}
            </div>
          </>
        )}
        {/* {projects.map((project, index) => (
          <Hoverlink key={index} delay={0.0 + index * 0.2} href={project.href}>
            {project.title}
          </Hoverlink>
        ))} */}
      </div>

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
