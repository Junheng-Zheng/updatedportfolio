// const Load = ({ pageLoaded }) => {
//   return (
//     <>
//       {pageLoaded && (
//         <div
//           className={`h-screen w-screen absolute top-0 left-0 overflow-hidden flex justify-center items-center ${
//             pageLoaded ? "animatebackground" : ""
//           }`}
//         >
//           <div
//             className={`overflow-hidden z-200 text-center ${
//               pageLoaded ? "animate" : ""
//             }`}
//           >
//             <h1
//               className={`px-10 opacity-0 text-[85px] font-bold ${
//                 pageLoaded ? "animatetext" : ""
//               }`}
//             >
//               JUN
//             </h1>
//           </div>

//           <div
//             className={`absolute translate-x-1/2 translate-y-1/2 top-1/2 left-1/2 ${
//               pageLoaded ? "rotateanimation" : ""
//             }`}
//           >
//             {/* Circle elements */}
//             {[
//               "animatecircle",
//               "animatetopleft",
//               "animatetopright",
//               "animatetopcenter",
//               "animatebottomleft",
//               "animatebottomright",
//               "animatebottomcenter",
//               "animatecenter",
//               "animatecenterleft",
//               "animatecenterright",
//             ].map((anim, i) => (
//               <div
//                 key={i}
//                 className={`circle-element w-[25px] h-[25px] rounded-full ${
//                   i === 0 ? "bg-white" : "bg-black"
//                 } absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
//                   pageLoaded ? anim : ""
//                 }`}
//               ></div>
//             ))}

//             {/* Squares */}
//             <div
//               className={`w-[90px] h-[90px] rounded-2xl bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
//                 pageLoaded ? "animateshowsquare" : ""
//               }`}
//             ></div>
//             <div
//               className={`w-[90px] h-[90px] rounded-2xl bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
//                 pageLoaded ? "animatefill" : ""
//               }`}
//             ></div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Load;
import { motion } from "framer-motion";

const circleVariants = {
  initial: { scale: 0 },
  animate: (translate) => ({
    scale: 1,
    x: translate?.x || 0,
    y: translate?.y || 0,
    transition: { delay: 0.9, duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
  }),
};

const squareVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay: 1.3, duration: 0.01 },
  },
};

const fillVariants = {
  initial: { scale: 0 },
  animate: {
    scale: 20,
    transition: { delay: 1.7, duration: 0.3, ease: "easeIn" },
  },
};

const Load = () => {
  const positions = [
    { x: 0, y: 0 }, // center (white)
    { x: 30, y: -30 }, // topleft
    { x: -30, y: -30 }, // topright
    { x: 0, y: -30 }, // topcenter
    { x: -30, y: 30 }, // bottomleft
    { x: 30, y: 30 }, // bottomright
    { x: 0, y: 30 }, // bottomcenter
    { x: 0, y: 0 }, // center
    { x: -30, y: 0 }, // centerleft
    { x: 30, y: 0 }, // centerright
  ];

  return (
    <div className="w-[100dvw] h-[100dvh] overflow-hidden">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 1.9 }}
        className="h-[100dvh] w-[100dvw] absolute top-0 left-0 overflow-hidden flex justify-center items-center"
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.3,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="overflow-hidden z-200 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            className="px-10 text-[85px] font-bold"
          >
            JUN
          </motion.h1>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.3,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className={`circle-element w-[25px] h-[25px] rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white`}
        />
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 90 }}
          transition={{
            delay: 1.3,
            duration: 0.4,
            ease: [0.25, 1.75, 0.5, 1.25],
          }}
          className="absolute translate-x-1/2 translate-y-1/2 top-1/2 left-1/2"
        >
          {positions.map((pos, i) => (
            <motion.div
              custom={pos}
              variants={circleVariants}
              initial="initial"
              animate="animate"
              key={i}
              className="circle-element w-[25px] h-[25px] rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white"
            />
          ))}

          <motion.div
            variants={squareVariants}
            initial="initial"
            animate="animate"
            className="w-[90px] h-[90px] rounded-2xl bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />

          <motion.div
            variants={fillVariants}
            initial="initial"
            animate="animate"
            className="w-[90px] h-[90px] rounded-2xl bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Load;
