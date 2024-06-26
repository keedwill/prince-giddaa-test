import { useState } from "react";
import RemoteWorkersData from "../data/RemoteWorkers";
import Explanation from "./Explanation";


const RemoteWorkers = () => {
   const [showExplanation, setShowExplanation] = useState(false);
   const [isRotated, setIsRotated] = useState(false);
   const [ExplanationIndex, setExplanationIndex] = useState<number | null>(
     null
   );
   const showExplanationModalHandler = (index: number) => {
     setExplanationIndex(index);
     setIsRotated((prevState) => !prevState);
     setShowExplanation(!showExplanation);
   };
  return (
    <div className="bg-[#F3FAF2]   p-[5%] grid grid-cols-1 md:grid-cols-2 mt-10 gap-8 md:gap-0  w-full">
      <div className="flex flex-col  gap-4  items-center md:items-start">
        <img className="w-[100px] h-[100px]" src="laptop.svg" alt="" />
        <h1
          className=" md:text-[50px] text-[30px]  text-[#335F32] mt-4 text-center md:text-left "
          style={{ fontFamily: "myFirstFont" }}
        >
          {" "}
          Naija Remote Workers
        </h1>
        <div className="md:pr-[10%] pr-0 mt-4">
          Do you work from home? Your own Home? With Giddaa, that’s possible.
          You don’t need to have all the money at once to buy a house to become
          a homeowner. Leverage your job flexibility working remotely and your
          current earning capacity to build equity in a home of your own.
        </div>
        <div className="grid grid-cols-2  gap-4 w-full md:pr-[10%] pr-0">
          {RemoteWorkersData.map((item, index) => (
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
        <img src="remote.png" className="" alt="" />
      </div>
    </div>
  );
}

export default RemoteWorkers