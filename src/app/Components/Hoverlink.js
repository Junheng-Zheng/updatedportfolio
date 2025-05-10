"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const Hoverlink = ({ children, delay, href, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link href={href} onClick={onClick}>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: delay }}
        className="cursor-pointer overflow-hidden relative text-[18px] sm:text-[21px] pb-0.5 leading-none font-semibold"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`absolute z-0 top-0 left-0 w-full transition-all duration-300    h-full bg-[rgb(157,255,0)] ${
            isHovered ? "translate-x-0" : "-translate-x-[calc(100%+0.5rem)]"
          }`}
        ></div>
        <p
          className={`relative z-10 transition-all duration-500 ${
            isHovered ? "text-black" : "text-white"
          }`}
        >
          {children}
        </p>
      </motion.div>
    </Link>
  );
};

export default Hoverlink;
