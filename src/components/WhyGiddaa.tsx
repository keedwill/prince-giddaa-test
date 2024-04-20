import WhyGiddaaFeedback from "../data/WhyGiddaaFeedback";
import AutoSlider from "../utilities/Slider";
import Why from "./Why";



const WhyGiddaa = () => {
  return (
    <div className="md:p-[5%] p-[5%] w-full bg-[#F3FAF2] ">
      <div className="flex flex-col md:w-fit w-full   place-content-center">
        <h1
          className=" md:text-[37px] text-[25px]  text-[#335F32] text-center "
          style={{ fontFamily: "myFirstFont" }}
        >
          {" "}
          Why Giddaa?
        </h1>
        <div className="rounded-b   border-b-4 border-[#335f32] md:mx-12 mx-24"></div>
      </div>

      <div className="w-full flex justify-center items-center mt-[5%]  ">
        <h1 className=" md:w-[50%] w-full text-center md:text-md text-sm">
          Too many Nigerians at home and abroad have complained about scams,
          inavailabilty of flexible payment options, how stressful, ambiguous,
          and manual the property purchase process is, we heard you all,{" "}
          <b className="font-bold">over 100+ of you!</b>
        </h1>
      </div>

      <div className="mt-8">
        <AutoSlider slides={WhyGiddaaFeedback} />
      </div>

      <Why/>
    </div>
  );
};

export default WhyGiddaa;
