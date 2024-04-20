import { useRef, useState } from "react";

interface SliderProps {
  data: {
    title: string;
    description: string;
    image: string;
  }[];
}

const Slider2 = ({ data }: SliderProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredId, setIsHoveredId] = useState(0);
  const slidesContainer = useRef<HTMLDivElement>(null);
  const slideWidth = useRef<HTMLDivElement>(null);

  const nextButtonHandler = () => {
    const slideWidthValue = slideWidth.current?.clientWidth ?? 0;

    slidesContainer.current!.scrollLeft += slideWidthValue;
  };

  const prevButtonHandler = () => {
    const slideWidthValue = slideWidth.current?.clientWidth ?? 0;
    slidesContainer.current!.scrollLeft -= slideWidthValue;
  };

  const handleMouseEnter = (key: number) => {
    setIsHoveredId(key);

    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative  h-[500px] bg-[#F3FAF2] flex justify-center items-center pl-[5%]">
      <div
        ref={slidesContainer}
        className="slides-container h-[300px] cursor-pointer  flex  snap-x snap-mandatory overflow-hidden  space-x-10 rounded scroll-smooth  before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0"
      >
        {data.map((property, index) => {
          return (
            <div
              onMouseEnter={handleMouseEnter.bind(null, index)}
              onMouseLeave={handleMouseLeave}
              key={index}
              ref={slideWidth}
              className="slide relative border  aspect-square  h-full flex-shrink-0 snap-center rounded-2xl overflow-hidden"
            >
              <img
                className="  z-10   absolute m-4 right-0 "
                src={"play.svg"}
                alt=""
              />

              <img
                className="  object-contain  h-full w-full absolute  "
                src={property.image}
                alt=""
              />
              <div className="absolute opacity-30 bg-black  border h-[25%] bottom-0 w-full z-10"></div>
              <div className="absolute bottom-0 flex items-center justify-center z-20 p-4">
                <div className="text-white ">
                  <h2 className="text-sm font-bold mb-2">{property.title}</h2>
                  <p className="text-[10px]">{property.description}</p>
                </div>
              </div>

              {isHovered && isHoveredId == index ? (
                <>
                  <div className="absolute opacity-60 bg-black  border h-[100%] bottom-0 w-full z-20"></div>
                  <div className="w-full h-full absolute flex flex-col justify-center items-center z-20 ">
                    <img className="  w-[30%]   " src={"play.svg"} alt="" />
                    <div className="text-center mt-4">
                      <h4 className="text-white capitalize font-bold">
                        Hear from {property.title}
                      </h4>
                      <h4 className="text-white text-[10px] capitalize">
                        {property.description}
                      </h4>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-4 right-20   md:flex">
        <button
          onClick={prevButtonHandler}
          className="prev px-2 py-2 rounded-full bg-[#335F32] text-white  group"
          aria-label="prev"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
      <div className="absolute bottom-4 right-10   md:flex">
        <button
          onClick={nextButtonHandler}
          className="next px-2 py-2 rounded-full bg-[#335F32] text-white group"
          aria-label="next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider2;
