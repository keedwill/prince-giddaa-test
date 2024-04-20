import WhyData from "../data/Why";
import SingleWhy from "./SingleWhy";

const Why = () => {
  return (
    
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col    mt-8">
        <h1
          className=" md:text-[37px] text-[25px]  text-[#335F32] text-center "
          style={{ fontFamily: "myFirstFont" }}
        >
          Here’s Why!
        </h1>
        <div className="rounded-b   border-b-4 border-[#335f32] "></div>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-[25px] mt-8  w-full" >
        {WhyData.map((item, index) => (
            <SingleWhy item={item} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Why;
