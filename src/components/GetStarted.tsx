

const GetStarted = () => {
  return (
    <div className="w-full  md:p-[5%] p-[5%] bg-[#f3faf2] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4  w-[50%] text-center">
        <h1
          className=" md:text-[40px] text-[30px]  text-[#335F32] text-center "
          style={{ fontFamily: "myFirstFont" }}
        >
          {" "}
          Get Started
        </h1>

        <div className="text-xs">
          We are on a mission to empower income earning Nigerians to own their
          first homes before they turn 50 years old. Create an account and join
          the mission. It’s gonna be a long but fulfilling ride. Let’s Go!
        </div>

        <button className="bg-[#335F32] w-[150px] text-white py-2 rounded-2xl text-sm">Create an Account</button>
      </div>
    </div>
  );
}

export default GetStarted