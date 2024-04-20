import React, { useState } from "react";
import DiasporaData from "../data/Diaspora";
import Explanation from "./Explanation";

const WhoWeServe = () => {
  const [showExplanation, setShowExplanation] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [ExplanationIndex, setExplanationIndex] = useState<number | null>(null);
  const showExplanationModalHandler = (index: number) => {
    setExplanationIndex(index);
    setIsRotated((prevState) => !prevState);
    setShowExplanation(!showExplanation);
  };
  return (
    <div className="md:p-[5%] p-[5%] w-full flex flex-col">
      <div className="flex flex-col md:w-fit w-full   place-content-center">
        <h1
          className=" md:text-[50px] text-[30px]  text-[#335F32] text-center "
          style={{ fontFamily: "myFirstFont" }}
        >
          {" "}
          Who We Serve
        </h1>
        <div className="rounded-b   border-b-4 border-[#335f32] md:mx-12 mx-24"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8 md:gap-0  w-full ">
        <div className="flex flex-col gap-4  items-center md:items-start">
          <img src="plane.svg" className="w-[100px] h-[100px]" alt="" />
          <h1
            style={{ fontFamily: "myFirstFont" }}
            className="text-[50px] text-[#0A7E32] opacity-[30%] font-bold"
          >
            The Diaspora
          </h1>
          <div className="md:pr-[10%] pr-0">
            Living outside Nigeria? Thinking about buying a place{" "}
            <b>Back Home</b> for viists (No need for hotels, Airbnbs, or your
            parent’s house), Investment, or is it a personal goal of yours? Or
            maybe you see yourself spending more time back home . If any of
            those sounds like you, we can help you along your home purchase
            journey.
          </div>

          <div className="grid grid-cols-2  gap-4 w-full">
            {DiasporaData.map((item, index) => (
              <div
                key={index}
                className="    mt-6 text-[#335F32] cursor-pointer relative"
              >
                <button
                  className=" flex gap-2"
                  onClick={showExplanationModalHandler.bind(null, index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`w-6 h-6 transition-transform duration-300 transform ${
                      isRotated && ExplanationIndex === index
                        ? "rotate-180"
                        : "rotate-0"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <h1 className="text-md ">{item.title}</h1>
                </button>

                {showExplanation && ExplanationIndex === index && (
                  <Explanation explanation={item.explanation} />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <img src="diaspora.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeServe;
