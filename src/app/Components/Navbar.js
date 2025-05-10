"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = ({ className, activeButton }) => {
  const [ishover, sethover] = useState(false);

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
      className={`${className} z-5000 absolute z-200 top-0 sm:p-5 py-5 px-10 w-full`}
    >
      <div className="w-full flex justify-between items-center">
        {/* <div className="w-full hidden sm:flex justify-start">
          <button className="h-[35px] w-[35px] border rounded-full text-white bg-black">
            J
          </button>
        </div> */}
        <div className="w-full  sm:px-0 flex justify-center">
          {/* bg-[rgba(31,31,31,0.11)] */}
          <div className="shadow-lg border-b border-l border-white/10 justify-center shadow-gray-900/10 w-fit gap-2 sm:gap-5 py-4 sm:py-5 sm:px-8 px-4 rounded-full bg-black/10 items-center flex">
            <Link href={"/"}>
              <button
                className={`p-2.5 px-3 transition-all duration-100 rounded-full  ${
                  activeButton === "hello"
                    ? "bg-black text-white"
                    : "hover:bg-black/10 text-white/80"
                }`}
              >
                Hello
              </button>
            </Link>
            <Link href={"#about"}>
              <button
                className={`p-2.5 transition-all duration-100 rounded-full  ${
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
                className={`p-2.5 transition-all duration-100 rounded-full  ${
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
                className={`p-2.5 transition-all duration-100 rounded-full  ${
                  activeButton === "experience"
                    ? "bg-black text-white"
                    : "hover:bg-black/10 text-white/80"
                }`}
              >
                Experience
              </button>
            </Link>
          </div>
        </div>
        {/* <div className="w-full hidden sm:flex justify-end">
          <button className="bg-black py-3 px-5 rounded-full">
            Lets Chat!
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
