const TrustedByComponent = () => {
  return (
    <div className="w-full pl-[5%] bg-[#f5f5de] h-[150px] py-[2%]">
      <div className="flex flex-col w-fit">
        <h1
          className="text-[35px]  text-[#335F32] "
          style={{ fontFamily: "myFirstFont" }}
        >
          {" "}
          Trusted By
        </h1>
        <div className="rounded-b   border-b-4 border-[#335f32] mx-6"></div>
      </div>
    </div>
  );
};

export default TrustedByComponent;
