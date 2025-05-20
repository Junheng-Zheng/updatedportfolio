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

// export default function Home() {
//   const [pageLoaded, setPageLoaded] = useState(true);
//   return (
//     <div className="w-[100dvw] h-[100dvh] overflow-hidden">
//       <Load pageLoaded={pageLoaded} />
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.3, delay: 1.5 }}
//         className="w-[100dvw] z-10000 bg-red-500 gradientbackground overflow-hidden h-[100dvh] flex justify-center items-center"
//       >
//         <Navbar activeButton={"hello"} />
//         <div className="cursor-crosshair overflow-hidden h-screen w-screen flex justify-center items-center"></div>
//         <div className="absolute top-1/2 left-1/2 z-10 w-fit flex flex-col items-start gap-[17px] -translate-x-1/2 -translate-y-1/2">
//           <motion.h1
//             initial={{ opacity: 0, x: -100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3 }}
//             className=" text-[42px] leading-none font-semibold"
//           >
//             Junheng Zheng
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, x: -100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3, delay: 0.2 }}
//             className="text-[18px] sm:text-[21px] leading-none font-semibold"
//           >
//             <span className="hidden sm:inline">
//               UI/UX Designer & Frontend Developer @ RIT
//             </span>
//             <span className="inline sm:hidden">
//               UI/UX & Frontend Developer @ RIT
//             </span>
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, x: -100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3, delay: 0.4 }}
//             className="w-full flex justify-end"
//           >
//             <Link href="/Projects">
//               <Button variant="primary">Projects {"->"}</Button>
//             </Link>
//           </motion.div>
//         </div>
//         <Button
//           className="absolute bottom-10 left-10"
//           variant="secondary"
//           onClick={() => {}}
//         >
//           Playground
//         </Button>
//         <Junbot />
//         <Lilguy />
//       </motion.div>
//     </div>
//   );
// }

export default function Home() {
  const [firstTime, setFirstTime] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem("firstTime")) {
      setFirstTime(false);
    } else {
      sessionStorage.setItem("firstTime", "true");
    }
  }, []);

  if (!mounted) {
    return (
      <div className="h-[100dvh] w-[100dvw] gradientbackground overflow-hidden"></div>
    );
  }

  return (
    <div className="h-[100dvh] w-[100dvw] gradientbackground overflow-hidden">
      {firstTime && <Load />}
      <motion.div
        initial={firstTime ? { opacity: 0 } : { opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={
          firstTime
            ? { duration: 0.5, delay: 2.1 }
            : { duration: 0.3, delay: 0 }
        }
        className="h-[100dvh] w-[100dvw] overflow-hidden"
      >
        <div className="w-full h-full flex justify-center items-center">
          <Navbar activeButton={"hello"} />
          <div
            className={`
            gradientbackground absolute top-0 left-0 cursor-crosshair overflow-hidden h-screen w-screen flex justify-center items-center`}
          ></div>
          <div
            className={`absolute top-1/2 left-1/2 z-10 sm:w-fit flex flex-col items-start w-full gap-[17px]  p-10 -translate-x-1/2 -translate-y-1/2`}
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
              className="text-[18px] sm:text-[21px] leading-none font-semibold"
            >
              <span className="hidden sm:inline">
                UI/UX Designer & Frontend Developer @ RIT
              </span>
              <span className="inline sm:hidden">
                UI/UX & Frontend Developer @ RIT
              </span>
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
            className={`absolute bottom-5 sm:bottom-10 z-300 sm:left-10 left-5 sm:block hidden`}
            variant="secondary"
            onClick={() => {}}
          >
            Playground
          </Button>
          <Junbot className="sm:block hidden" />
          <Lilguy />
        </div>
      </motion.div>
    </div>
  );
}
