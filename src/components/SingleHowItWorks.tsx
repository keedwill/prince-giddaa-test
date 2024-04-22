import React, { useState } from "react";
type SingleHowItWorksProps = {
  index: number;
  item: {
    title: string;
    explanation: string;
  };
};

const SingleHowItWorks = ({ item, index }: SingleHowItWorksProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      style={{ transition: "background-color 0.3s ease-out" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full  h-full cursor-pointer flex gap-4"
    >
      <div
        style={{ fontFamily: "myFirstFont" }}
        className={`${
          isHovered ? "bg-[#335F32] text-white" : "bg-[#F5F5DE] text-[#335f32]"
        } rounded-full font-bold p-4 flex justify-center items-center h-[70px]`}
      >
        {index + 1}
      </div>
      <div
        className={`${
          isHovered ? "bg-[#f3faf2]" : ""
        } h-full w-full  flex flex-col gap-4 p-4 rounded-2xl`}
      >
        <h1
          className="text-[#335f32] text-base"
          style={{ fontFamily: "myFirstFont" }}
        >
          {item.title}
        </h1>
        <div className="text-sm">{item.explanation}</div>

        <div className="w-full flex  items-end  h-full ">
          <button className="border border-[#335F32] flex gap-2 justify-center items-center rounded-3xl p-2 md:text-xs text-sm">
            <img src="play.svg" alt="" />
            WATCH THE VIDEO TO LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleHowItWorks;
