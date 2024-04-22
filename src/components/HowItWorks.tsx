import HowItWorksData from "../data/HowItWorks";
import SingleHowItWorks from "./SingleHowItWorks";


const HowItWorks = () => {
  return (
    <div className="md:p-[5%] p-[5%] w-full flex flex-col">
      <div className="flex flex-col md:w-fit w-full   place-content-center">
        <h1
          className=" md:text-[50px] text-[30px]  text-[#335F32] text-center "
          style={{ fontFamily: "myFirstFont" }}
        >
          {" "}
          How It Works
        </h1>
        <div className="rounded-b   border-b-4 border-[#335f32] md:mx-12 mx-24"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8  w-full ">
        {HowItWorksData.map((item, index) => (
          <SingleHowItWorks index={index} item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default HowItWorks