import { useState, useEffect } from "react";

const Load = ({ pageLoaded }) => {
  return (
    <div
      className={`h-screen w-screen absolute top-0 left-0 overflow-hidden flex justify-center items-center ${
        pageLoaded ? "animatebackground" : ""
      }`}
    >
      <div
        className={`overflow-hidden z-200 text-center ${
          pageLoaded ? "animate" : ""
        }`}
      >
        <h1
          className={`px-10 opacity-0 text-[85px] font-bold ${
            pageLoaded ? "animatetext" : ""
          }`}
        >
          JUN
        </h1>
      </div>
      <div
        className={`absolute translate-x-1/2 translate-y-1/2 top-1/2 left-1/2 ${
          pageLoaded ? "rotateanimation" : ""
        }`}
      >
        <div
          className={`circle-element w-[25px] h-[25px] rounded-full bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
            pageLoaded ? "animatecircle" : ""
          }`}
        ></div>
        <div
          className={`circle-element w-[25px] h-[25px] rounded-full bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
            pageLoaded ? "animatetopleft" : ""
          }`}
        ></div>
        <div
          className={`circle-element w-[25px] h-[25px] rounded-full bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
            pageLoaded ? "animatetopright" : ""
          }`}
        ></div>
        <div
          className={`circle-element w-[25px] h-[25px] rounded-full bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
            pageLoaded ? "animatetopcenter" : ""
          }`}
        ></div>
        <div
          className={`circle-element w-[25px] h-[25px] rounded-full bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
            pageLoaded ? "animatebottomleft" : ""
          }`}
        ></div>
        <div
          className={`circle-element w-[25px] h-[25px] rounded-full bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
            pageLoaded ? "animatebottomright" : ""
          }`}
        ></div>
        <div
          className={`circle-element w-[25px] h-[25px] rounded-full bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
            pageLoaded ? "animatebottomcenter" : ""
          }`}
        ></div>
        <div
          className={`circle-element w-[25px] h-[25px] rounded-full bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
            pageLoaded ? "animatecenter" : ""
          }`}
        ></div>
        <div
          className={`circle-element w-[25px] h-[25px] rounded-full bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
            pageLoaded ? "animatecenterleft" : ""
          }`}
        ></div>
        <div
          className={`circle-element w-[25px] h-[25px] rounded-full bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
            pageLoaded ? "animatecenterright" : ""
          }`}
        ></div>
        <div
          className={`w-[90px] h-[90px] rounded-2xl bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
            pageLoaded ? "animateshowsquare" : ""
          }`}
        ></div>
        <div
          className={`w-[90px] h-[90px] rounded-2xl bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
            pageLoaded ? "animatefill" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Load;
