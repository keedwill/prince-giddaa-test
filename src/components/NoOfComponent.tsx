const NoOfComponent = () => {
  return (
    <div className="w-full  bg-[#F3FAF2] grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-8  md:h-[120px] p-2 h-full">
      <div className="flex flex-col  justify-center items-center">
        <h6
          className="text-[35px] text-[#335F32]"
          style={{ fontFamily: "myFirstFont" }}
        >
          180
        </h6>
        <h6 className="text-xs font-bold">NO OF PROPERTIES</h6>
      </div>
      <div className="flex flex-col  justify-center items-center">
        <h6
          className="text-[35px]  text-[#335F32]"
          style={{ fontFamily: "myFirstFont" }}
        >
          1,800
        </h6>
        <h6 className="text-xs font-bold">NO OF UNITS</h6>
      </div>
      <div className="flex flex-col  justify-center items-center ">
        <h6
          className="text-[35px]  text-[#335F32]"
          style={{ fontFamily: "myFirstFont" }}
        >
          32
        </h6>
        <h6 className="text-xs font-bold ">
          PLANS/METHODS YOU CAN PURCHASE YOUR HOME
        </h6>
      </div>
    </div>
  );
};

export default NoOfComponent;
