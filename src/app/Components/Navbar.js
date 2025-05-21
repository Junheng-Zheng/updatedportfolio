"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = ({ className, activeButton }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${className} z-5000 transition-all duration-300 absolute top-0 ${
        !isOpen && "py-5 px-10  sm:p-5 "
      } w-full`}
    >
      {isOpen && (
        <button
          className="fixed top-0 left-0 w-full h-[100dvh]"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      )}
      <div className="w-full flex justify-center items-center relative">
        <div
          className={`flex items-center  sm:gap-5  py-4 sm:py-5  border-b border-l border-white/10 bg-black/10 shadow-lg shadow-gray-900/10 transition-all duration-300 ${
            isOpen
              ? "w-[500px]  sm:w-full justify-between px-10 gap-12 sm:gap-100"
              : "  w-[200px] sm:w-[430px] rounded-[50px] sm:px-8 justify-center gap-1 px-6 "
          }`}
        >
          <Link href={"/"} className={`transition-all duration-300 `}>
            <button
              className={`cursor-pointer transition-all duration-100 rounded-full  ${
                activeButton === "hello" && !isOpen
                  ? " bg-black text-white"
                  : "hover:bg-black/10 text-white/80"
              } ${isOpen ? "text-[21px]" : "p-2.5 px-3"}`}
            >
              {isOpen ? "Menu" : "Hello"}
            </button>
          </Link>
          <Link href={"#projects"}>
            <button
              className={`cursor-pointer p-2.5 transition-all duration-100 rounded-full  ${
                activeButton === "projects"
                  ? "bg-black text-white"
                  : "hover:bg-black/10 text-white/80"
              } ${isOpen ? "hidden" : "sm:block hidden"}`}
            >
              Resume
            </button>
          </Link>
          <Link href={"/Experience"}>
            <button
              className={`cursor-pointer p-2.5 transition-all duration-100 rounded-full  ${
                activeButton === "experience"
                  ? "bg-black text-white"
                  : "hover:bg-black/10 text-white/80"
              } ${isOpen ? "hidden" : "sm:block hidden"}`}
            >
              Experience
            </button>
          </Link>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className={`cursor-pointer p-2.5 transition-all duration-100 block  rounded-full  ${
              isOpen
                ? "bg-black text-[21px] text-white aspect-square h-full flex items-center justify-center"
                : "hover:bg-black/10 text-white/80"
            }`}
          >
            {isOpen ? <i className="fa-solid fa-xmark"></i> : "More"}
          </button>
        </div>
      </div>

      <div
        className={`absolute w-full overflow-hidden flex flex-col translate-y-full  bg-black/10  bottom-0 left-0 ${
          isOpen
            ? "max-h-[400px] backdrop-blur-lg border-b-0.5 border-white transition-all duration-300 delay-200"
            : "max-h-[0px]"
        }`}
      >
        <Link href={"/"}>
          <button className="cursor-pointer hover:bg-black/10 transition-all duration-200 py-6 w-full text-left border-b border-white/10 px-10 h-full">
            Hello
          </button>
        </Link>
        <Link href={"/"}>
          <button className="cursor-pointer hover:bg-black/10 transition-all duration-200 py-6 w-full text-left border-b border-white/10 px-10 h-full">
            About
          </button>
        </Link>
        <Link href={"/"}>
          <button className="cursor-pointer hover:bg-black/10 transition-all duration-200 py-6 w-full text-left border-b border-white/10 px-10 h-full">
            Resume
          </button>
        </Link>
        <Link href={"/"}>
          <button className="cursor-pointer hover:bg-black/10 transition-all duration-200 py-6 w-full text-left border-b border-white/10 px-10 h-full">
            Projects
          </button>
        </Link>
        <Link href={"/"}>
          <button className="cursor-pointer hover:bg-black/10 transition-all duration-200 py-6 w-full text-left border-b border-white/10 px-10 h-full">
            Experience
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
