import React from "react";
import PurchaseOptionsData from "../data/PurchaseOptions";
import SinglePurchaseOption from "./SinglePurchaseOption";

const PurchaseOptions = () => {
  return (
    <div className="md:p-[5%] p-[5%] w-full ">
      <div className="flex flex-col md:w-fit w-full   place-content-center">
        <h1
          className=" md:text-[37px] text-[25px]  text-[#335F32] text-center "
          style={{ fontFamily: "myFirstFont" }}
        >
          {" "}
          Your Purchase Options
        </h1>
        <div className="rounded-b   border-b-4 border-[#335f32] md:mx-12 mx-24"></div>
      </div>

      <div className="w-full flex justify-center items-center mt-[5%] font-bold ">
        <h1 className=" md:w-[50%] w-full text-center md:text-md text-sm">
          Buying a home isn’t a one-size fits all kind of purchase — we know!.
          So…we give you all the options the market has to offer to choose from!
        </h1>
      </div>

      <div className="grid md:grid-cols-2  lg:grid-cols-3 grid-cols-1 gap-8 mt-8">
        {PurchaseOptionsData.map((item, index) => {
          return <SinglePurchaseOption item ={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default PurchaseOptions;
