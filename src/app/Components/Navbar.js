"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = ({ className, activeButton }) => {
  const [ishover, sethover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const github = ishover ? (
    <Link
      onMouseEnter={() => {
        sethover(true);
      }}
      onMouseLeave={() => {
        sethover(false);
      }}
      className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full transition-all duration-200"
      href={""}
    >
      <p>Github</p>
      <i className="animate-git text-[21px] fa-brands fa-github"></i>
    </Link>
  ) : (
    <Link
      onMouseEnter={() => {
        sethover(true);
      }}
      onMouseLeave={() => {
        sethover(false);
      }}
      className="bg-white text-black px-4 py-3 rounded-full transition-all duration-200"
      href={""}
    >
      Github
    </Link>
  );

  return (
    <div
      className={`${className} sm:p-5 z-5000 transition-all duration-300 absolute top-0 ${
        !isOpen && "py-5 px-10 "
      } w-full`}
    >
      <div className="w-full flex justify-center items-center relative">
        {/* <div className="w-full hidden sm:flex justify-start">
          <button className="h-[35px] w-[35px] border rounded-full text-white bg-black">
            J
          </button>
        </div> */}
        {/* bg-[rgba(31,31,31,0.11)] */}
        <div
          className={`flex items-center  sm:gap-5 sm:w-fit sm:rounded-full py-4 sm:py-5 sm:px-8 border-b border-l border-white/10 bg-black/10 shadow-lg shadow-gray-900/10 transition-all duration-300 ${
            isOpen
              ? "w-[500px] justify-between px-10 gap-12"
              : "  w-[200px]  rounded-[50px] justify-center gap-1  px-6 "
          }`}
        >
          <Link href={"/"} className={`transition-all duration-300 `}>
            <button
              className={` transition-all duration-100 rounded-full  ${
                activeButton === "hello" && !isOpen
                  ? "p-2.5 px-3 bg-black text-white"
                  : "hover:bg-black/10 text-white/80 text-[21px]"
              }`}
            >
              {isOpen ? "Menu" : "Hello"}
            </button>
          </Link>
          <Link href={"#about"}>
            <button
              className={`p-2.5 transition-all duration-100 sm:block hidden rounded-full  ${
                activeButton === "about"
                  ? "bg-black text-white"
                  : "hover:bg-black/10 text-white/80"
              }`}
            >
              About
            </button>
          </Link>
          <Link href={"#projects"}>
            <button
              className={`p-2.5 transition-all duration-100 sm:block hidden rounded-full  ${
                activeButton === "projects"
                  ? "bg-black text-white"
                  : "hover:bg-black/10 text-white/80"
              }`}
            >
              Resume
            </button>
          </Link>
          <Link href={"/Experience"}>
            <button
              className={`p-2.5 transition-all duration-100 sm:block hidden rounded-full  ${
                activeButton === "experience"
                  ? "bg-black text-white"
                  : "hover:bg-black/10 text-white/80"
              }`}
            >
              Experience
            </button>
          </Link>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className={`p-2.5 transition-all duration-100 block sm:hidden rounded-full  ${
              isOpen
                ? "bg-black text-[21px] text-white aspect-square h-full flex items-center justify-center"
                : "hover:bg-black/10 text-white/80"
            }`}
          >
            {isOpen ? <i className="fa-solid fa-xmark"></i> : "More"}
          </button>
        </div>
      </div>
      {/* <div className="w-full hidden sm:flex justify-end">
          <button className="bg-black py-3 px-5 rounded-full">
            Lets Chat!
          </button>
        </div> */}
      <div
        className={`absolute w-full overflow-hidden flex flex-col translate-y-full transition-all duration-300 bg-black/10  bottom-0 left-0 ${
          isOpen
            ? "max-h-[400px] backdrop-blur-lg border-b-0.5 border-white delay-200"
            : "max-h-[0px]"
        }`}
      >
        <Link href={"/"}>
          <button className=" py-6 w-full text-left border-b border-white/10 px-10 h-full">
            Hello
          </button>
        </Link>
        <Link href={"/"}>
          <button className=" py-6 w-full text-left border-b border-white/10 px-10 h-full">
            About
          </button>
        </Link>
        <Link href={"/"}>
          <button className=" py-6 w-full text-left border-b border-white/10 px-10 h-full">
            Resume
          </button>
        </Link>
        <Link href={"/"}>
          <button className=" py-6 w-full text-left border-b border-white/10 px-10 h-full">
            Projects
          </button>
        </Link>
        <Link href={"/"}>
          <button className=" py-6 w-full text-left border-b border-white/10 px-10 h-full">
            Experience
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
