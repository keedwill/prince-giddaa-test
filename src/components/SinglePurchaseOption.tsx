import { useEffect, useState } from "react";
import Explanation from "./Explanation";

type PurchaseOption = {
  item: {
    title: string;
    subTitle: string;
    description: string;
    explanation: string;
    features: string[];
  };
};
const SinglePurchaseOption = ({ item }: PurchaseOption) => {
  const [showExplanation, setShowExplanation] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [bgColor, setBgColor] =useState('')

  const showExplanationModalHandler = () => {
    setIsRotated((prevState) => !prevState);
    setShowExplanation(!showExplanation);
  };

  useEffect(()=>{

    if (item.subTitle.toLowerCase().includes("turtle")) {
      setBgColor("#f3faf2");
    }
    if (item.subTitle.toLowerCase().includes("horse")) {
      setBgColor("#F5F5DE");
    }
    if (item.subTitle.toLowerCase().includes("rabbit")) {
      setBgColor("#f0f0f0");
    }
  },[])

  

  return (
    <div style={{backgroundColor:`${bgColor}`}} className={`hover:border hover:border-[#335f32] hover:border-3 flex flex-col    h-full rounded-2xl p-[3%] `}>
      <div className=" flex flex-col items-center justify-center relative h-fit ">
        <div className="">
          {item.subTitle.toLowerCase().includes("turtle") && (
            <img src="turtle.svg" className="absolute left-0" alt="" />
          )}

          {item.subTitle.toLowerCase().includes("horse") && (
            <img src="horse.svg" className="absolute left-0" alt="" />
          )}
          {item.subTitle.toLowerCase().includes("rabbit") && (
            <img src="rabbit.svg" className="absolute left-0" alt="" />
          )}

          <h1
            className="text-[25px] text-[#335F32] text-center"
            style={{ fontFamily: "myFirstFont" }}
          >
            {item.title}
          </h1>
          <h6 className="text-xs text-center">{item.subTitle}</h6>
        </div>
        <div className=" md:text-sm text-md text-left mt-4 leading-loose  ">
          {item.description}
        </div>
      </div>

      <div className=" flex gap-4 mt-6 text-[#335F32] cursor-pointer relative">
        <button className="flex gap-2 " onClick={showExplanationModalHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`w-6 h-6 transition-transform duration-300 transform ${
              isRotated ? "rotate-180" : "rotate-0"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h1 className="text-md ">View Another Explanation</h1>
          <img src="bulb.svg" alt="" />
        </button>

        {showExplanation && <Explanation explanation={item.explanation} />}
      </div>

      <div className=" flex flex-col gap-4 mt-6">
        <h1
          className="text-[20px] text-[#335F32] text-center"
          style={{ fontFamily: "myFirstFont" }}
        >
          Features of {item.title}
        </h1>
        <div className="w-full ">
          {item.features.map((feature, index) => (
            <div
              className="flex items-start gap-2   mb-4    text-sm"
              key={index}
            >
              <img src="arrow.svg" className="top-0" alt="" />
              <p className="">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center items-end  h-full ">
        <button className="border border-[#335F32] flex gap-2 justify-center items-center rounded-3xl p-2 md:text-xs text-sm">
          <img src="play.svg" alt="" />
          WATCH THE VIDEO TO LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default SinglePurchaseOption;
