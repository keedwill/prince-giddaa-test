import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

interface Slide {
  // imageUrl: string;
  feedback: string;
  location: string;
}

interface CarouselProps {
  slides: Slide[];
}

const AutoSlider: React.FC<CarouselProps> = ({ slides }) => {
  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <AliceCarousel
      responsive={responsive}
      autoPlay
      autoPlayInterval={4000} // Adjust autoplay interval (in milliseconds)
      infinite
      disableButtonsControls
      disableDotsControls
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className=" border-l-2 px-[5%] h-[100px] flex gap-2 flex-col  justify-center items-start  "
        >
          <h3 className="font-bold md:text-base text-lg   ">
            {slide.feedback}
          </h3>
          <h6 className=" md:text-sm text-base  ">
            ~{slide.location}
          </h6>
        </div>
      ))}
    </AliceCarousel>
  );
};
export default AutoSlider;
