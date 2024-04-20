import { useState } from "react";

type SingleWhyProps = {
  item: {
    title: string;
    description: string;
    image: string;
  };
};
const SingleWhy = ({ item }: SingleWhyProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      style={{ transition: "background-color 0.3s ease-out" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={` group   rounded-2xl h-[300px] p-4 gap-2  flex flex-col justify-center items-center ${
        isHovered ? "bg-[#f5f5de] border border-black" : "bg-white"
      } `}
    >
      <div className="border relative rounded-full w-[60px] h-[60px] border-[#335f32]">
        <img
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src={item.image}
          alt=""
        />
      </div>
      <h1
        className={`${
          isHovered ? "text-black" : " text-[#335f32]"
        } font-bold text-lg text-center`}
      >
        {item.title}
      </h1>
      <p className="text-center md:text-sm text-base">{item.description}</p>
    </div>
  );
};

export default SingleWhy;
