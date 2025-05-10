import { useState } from "react";

const AnimatedButton = ({ text, link }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="overflow-hidden flex gap-0 items-center relative namefont leading-none cursor-pointer px-7 py-3 border rounded-full"
    >
      <div
        className={`w-full rounded-full absolute h-full transition-all duration-200 left-0 top-0 bg-black ${
          isHover ? "-translate-x-[0%]" : "-translate-x-[100%]"
        }`}
      ></div>
      <p className={`relative z-500 ${isHover ? "text-white" : "text-black"}`}>
        {text}
      </p>
      <i
        className={`transition-all duration-200 ${
          isHover
            ? "-translate-x-[0%] pl-2 text-[16px] opacity-100 text-white"
            : "translate-x-[400%] text-[0px] opacity-0 text-black"
        } fa-solid fa-arrow-right `}
      ></i>
    </button>
  );
};

export default AnimatedButton;
