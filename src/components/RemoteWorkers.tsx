

const RemoteWorkers = () => {
  return (
    <div className="bg-[#F3FAF2]  p-[5%] grid grid-cols-1 md:grid-cols-2 mt-10 gap-8 md:gap-0  w-full">
      <div className="flex flex-col">
        <img className="w-[100px] h-[100px]" src="laptop.svg" alt="" />
        <h1
          className=" md:text-[50px] text-[30px]  text-[#335F32] mt-4 text-center md:text-left "
          style={{ fontFamily: "myFirstFont" }}
        >
          {" "}
          Naija Remote Workers
        </h1>
        <div className="md:pr-[10%] pr-0 mt-4">
          Do you work from home? Your own Home? With Giddaa, that’s possible.
          You don’t need to have all the money at once to buy a house to become
          a homeowner. Leverage your job flexibility working remotely and your
          current earning capacity to build equity in a home of your own.
        </div>
      </div>
      <div>
        <img src="remote.png" alt="" />
      </div>
    </div>
  );
}

export default RemoteWorkers