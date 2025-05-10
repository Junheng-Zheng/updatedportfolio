import React from "react";

const Phone = ({ imagesrc, title }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {/* <p className="text-sm bg-gray-100 p-2 text-gray-700 rounded-full w-fit">
        {title}
      </p> */}
      <div className="w-full border-3 relative border-gray-700 rounded-xl overflow-hidden">
        <div className="w-full h-full pb-1 absolute flex flex-col items-center justify-between top-0 left-0">
          <div className="w-[50%] h-[15px] rounded-b-lg bg-gray-700"></div>
        </div>
        <img src={imagesrc} className="rounded-md" />
      </div>
    </div>
  );
};

export default Phone;
