import React, { useState } from "react";

const Button = ({ variant = "primary", onClick, className, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const variants = {
    primary: [
      "cursor-pointer rounded-full text-[18px] font-semibold bg-[rgb(157,255,0)] border border-white text-black",
      "bg-black",
      "text-white",
    ],
    secondary: [
      "cursor-pointer  rounded-full text-[18px] font-semibold border border-white text-white",
      "bg-white",
      "text-black",
    ],
  };

  return (
    <button
      className={`${variants[variant][0]} overflow-hidden rounded-full ${className} `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="px-5 py-3 relative">
        <div
          className={`z-200 absolute top-0 rounded-full w-full h-full border  transition-all ${
            variants[variant][1]
          } ease-in-out duration-200  ${
            isHovered ? "right-[0%] " : "right-[100%] "
          }`}
        ></div>
        <p
          className={`relative z-200 font-semibold ${
            isHovered && variants[variant][2]
          }`}
        >
          {children}
        </p>
      </div>
    </button>
  );
};

export default Button;
