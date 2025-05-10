"use client";
import React, { useState, useEffect } from "react";
import Noise from "./Components/noise";
import Button from "./Components/Button";
import Lilguy from "./Components/Lilguy";
import Load from "./Components/Load";
import Navbar from "./Components/Navbar";
import Junbot from "./Components/Junbot";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setPageLoaded(true);
      }, 100);
    };

    // Check localStorage only after component mounts
    const played = sessionStorage.getItem("pagePlayed") === "true";
    setHasPlayed(played);

    if (document.readyState === "complete") {
      sessionStorage.setItem("pagePlayed", "true");
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div className="h-[100vh] w-[100vw] relative overflow-hidden">
      <div className="w-full h-full flex justify-center items-center">
        {!hasPlayed && <Load pageLoaded={pageLoaded} />}
        {/* <Noise
        patternSize={200}
        patternScaleX={1.5}
        patternScaleY={1.5}
        patternRefreshInterval={2}
        patternAlpha={15}
        className="absolute top-0 left-0 w-full h-full"
      /> */}
        <Navbar
          className={`${!hasPlayed && pageLoaded && "animateHello"} `}
          activeButton={"hello"}
        />
        <div
          className={`${
            !hasPlayed && pageLoaded && "animateHello"
          } gradientbackground absolute top-0 left-0 cursor-crosshair overflow-hidden h-screen w-screen flex justify-center items-center`}
        ></div>
        <div
          className={`${
            !hasPlayed && pageLoaded && "animateHello"
          } absolute top-1/2 left-1/2 z-10 sm:w-fit flex flex-col items-start w-full gap-[17px]  p-10 -translate-x-1/2 -translate-y-1/2`}
        >
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className=" text-[32px] sm:text-[42px] leading-none  font-semibold"
          >
            Junheng Zheng
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className=" text-[16px] sm:text-[21px]  sm:text-wrap leading-none font-semibold"
          >
            Product Designer & Software Developer.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="w-full flex justify-end"
          >
            <Link href="/Projects">
              <Button variant="primary">Projects {"->"}</Button>
            </Link>
          </motion.div>
        </div>
        <Button
          className={`${
            !hasPlayed && pageLoaded && "animateHello"
          } absolute bottom-5 sm:bottom-10 z-300 sm:left-10 left-5 sm:block hidden`}
          variant="secondary"
          onClick={() => {}}
        >
          Playground
        </Button>
        <Junbot
          className={`${
            !hasPlayed && pageLoaded && "animateHello"
          } sm:block hidden`}
        />
        <Lilguy className={`${!hasPlayed && pageLoaded && "animateHello"} `} />
      </div>
    </div>
  );
}

// export default function Home() {
//   return (
//     <div className="w-full h-full flex justify-center items-center">
//       <Navbar />
//       <div className="gradientbackground cursor-crosshair overflow-hidden h-screen w-screen flex justify-center items-center"></div>
//       <div className="absolute top-1/2 left-1/2 z-10 w-fit flex flex-col items-start gap-[17px] -translate-x-1/2 -translate-y-1/2">
//         <motion.h1
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.3 }}
//           className=" text-[42px] leading-none font-semibold"
//         >
//           Junheng Zheng
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.3, delay: 0.2 }}
//           className=" text-[21px] leading-none font-semibold"
//         >
//           Product Designer & Software Developer.
//         </motion.p>
//         <motion.div
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.3, delay: 0.4 }}
//           className="w-full flex justify-end"
//         >
//           <Link href="/Projects">
//             <Button variant="primary">Projects {"->"}</Button>
//           </Link>
//         </motion.div>
//       </div>
//       <Button
//         className="absolute bottom-10 left-10"
//         variant="secondary"
//         onClick={() => {}}
//       >
//         Playground
//       </Button>
//       <Junbot />
//       <Lilguy />
//     </div>
//   );
// }
