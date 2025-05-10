"use client";
import { useState, useEffect } from "react";

const Lilguy = ({ className }) => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [currPos, setCurrPos] = useState("none");
  useEffect(() => {
    const handleMouseMove = (event) => {
      const clientX =
        "touches" in event ? event.touches[0].clientX : event.clientX;
      const clientY =
        "touches" in event ? event.touches[0].clientY : event.clientY;
      setCoordinates({ x: clientX, y: clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    const screenHeightCenter = window.innerHeight / 2;
    const screenWidthThird = window.innerWidth / 3;
    if (coordinates.x < screenWidthThird) {
      if (coordinates.y > screenHeightCenter + 40) {
        setCurrPos("bottomleft");
      } else if (coordinates.y < screenHeightCenter - 40) {
        setCurrPos("topleft");
      } else {
        setCurrPos("centerleft");
      }
    } else if (
      coordinates.x >= screenWidthThird &&
      coordinates.x <= 2 * screenWidthThird
    ) {
      if (coordinates.y > screenHeightCenter + 40) {
        setCurrPos("bottomcenter");
      } else if (coordinates.y < screenHeightCenter - 40) {
        setCurrPos("topcenter");
      } else {
        setCurrPos("centercenter");
      }
    } else {
      if (coordinates.y > screenHeightCenter + 40) {
        setCurrPos("bottomright");
      } else if (coordinates.y < screenHeightCenter - 40) {
        setCurrPos("topright");
      } else {
        setCurrPos("centerright");
      }
    }
  }, [coordinates]);

  return (
    <div
      className={`w-fit h-fit translate-y-1/3 absolute flex flex-col bottom-0 justify-center items-center ${className}`}
    >
      <div className="w-[150px] bg-white relative translate-y-[25px] sm:translate-y-[20px] bg-[157, 255, 0] h-[150px] facegradient rounded-full">
        <div className="absolute top-0 w-full h-full items-center justify-center gap-4 flex flex-col">
          <div className={` bg-white blinking flex gap-7`}>
            <div
              className={`relative bg-black transition-all duration-750 purple ${currPos} opacity-80 w-[15px] h-[25px] rounded-full`}
            >
              <div className="bg-white w-[5px] h-[5px] rounded-full absolute top-1 left-1" />
            </div>
            <div
              className={` relative bg-black transition-all duration-750 ${currPos} purple opacity-80 w-[15px] h-[25px] rounded-full`}
            >
              <div className="bg-white w-[5px] h-[5px] rounded-full absolute top-1 left-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[250px] sm:h-[250px] aspect-square rounded-full bg-white" />
    </div>
  );
};

export default Lilguy;
