"use client";
import React, { useState, useEffect } from "react";
import Noise from "../Components/noise";
import Button from "../Components/Button";
import Lilguy from "../Components/Lilguy";
import Load from "../Components/Load";
import Navbar from "../Components/Navbar";
import Junbot from "../Components/Junbot";
import Link from "next/link";
import { motion } from "framer-motion";
import Hoverlink from "../Components/Hoverlink";
export default function Projects() {
  const projects = [
    {
      title: "UX Designer @ Liberty Mutual",
      href: "/liberty-mutual",
    },
    {
      title: "Product Designer @ Tiger Snack Box",
      href: "/tiger-snack-box",
    },
    {
      title: "Frontend & UI @ D&D Motor Systems",
      href: "/d-and-d-motor-systems",
    },
  ];
  return (
    <div className="w-full overflow-hidden relative h-full flex justify-center items-center">
      {/* <Noise
        patternSize={200}
        patternScaleX={1.5}
        patternScaleY={1.5}
        patternRefreshInterval={2}
        patternAlpha={15}
        className="absolute top-0 left-0 w-full h-full"
      /> */}
      <Navbar activeButton={"experience"} />
      <div className="gradientbackground cursor-crosshair overflow-hidden h-screen w-screen flex justify-center items-center"></div>
      <div className="absolute top-1/2 left-1/2 z-10 sm:w-fit w-full px-10 flex flex-col items-start gap-4 sm:gap-[17px] -translate-x-1/2 -translate-y-1/2">
        <Link href="/../">
          <p className="text-white cursor-pointer text-[18px] pb-2 border-b-2 border-white leading-none font-semibold">
            {"<- Back"}
          </p>
        </Link>
        {projects.map((project, index) => (
          <Hoverlink key={index} delay={0.0 + index * 0.2} href={project.href}>
            {project.title}
          </Hoverlink>
        ))}
        {/* <div className="flex w-full justify-end items-center">
          <button
            onClick={() => {
              setCurrentProject(currentProject + 1);
            }}
            className="text-white cursor-pointer text-[18px] border-white leading-none font-semibold"
          >
            {"Next ->"}
          </button>
        </div> */}
      </div>
      <Button
        className="absolute bottom-10 z-300 left-10"
        variant="secondary"
        onClick={() => {}}
      >
        Playground
      </Button>
      <Junbot />
      <Lilguy />
    </div>
  );
}
