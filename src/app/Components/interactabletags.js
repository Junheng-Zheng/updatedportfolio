import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
const InteractableTags = ({ name, percent, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [width, setNewWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setNewWidth(ref.current.offsetWidth);
    }
  }, []); // Run once on mount

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className="relative rounded-full overflow-hidden inline-block"
    >
      <button
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={width !== 0 ? { width: width } : undefined} // conditional style prop
        className="relative overflow-hidden group cursor-pointer px-3 py-1 z-10 bg-black/40 text-white hover:text-black hover:font-semibold"
      >
        <span className="relative z-10 block whitespace-nowrap">
          {isHovered ? `${percent}%` : name}
        </span>
        <span className="absolute inset-0 bg-[rgb(157,255,0)] transform -translate-x-[calc(100%_+_5px)] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
      </button>
    </motion.div>
  );
};

export default InteractableTags;
