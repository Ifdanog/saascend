import React from "react";

const HeadingText = ({ title }) => {
  return (
    <>
      <h2 className="flex items-center justify-center gap-4 text-5xl font-bold leading-tight text-center">
        {title}
      </h2>
      <span className="flex items-center gap-2 mt-5">
        <span className="w-[50%] h-[2px] bg-black"></span>
        <span className="w-2 h-2 bg-black rounded-full"></span>
        <span className="w-[50%] h-[2px] bg-black"></span>
      </span>
    </>
  );
};

export default HeadingText;
