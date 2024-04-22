const Footer = () => {
  return (
    <div className="w-full md:p-[5%] p-[5%] bg-[#335F32] md:h-[500px] h-full items-center flex flex-col gap-4">
      <div className="bg-[#f3faf2] w-[400px] justify-center items-center flex flex-col text-[#335f2] py-4 rounded-full text-sm gap-2">
        <img src="community.png" alt="" />

        <h4
          className="text-[#335F32] flex justify-center items-center gap-2"
          style={{ fontFamily: "myFirstFont" }}
        >
          {" "}
          <img src="whatsapp.svg" className="h-[30px] w-[30px]" alt="" />
          Join Our WhatsApp Community
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </h4>
      </div>
      <div className="  h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-8  w-full">
        <div className=" text-left flex flex-col gap-2">
          <h1
            style={{ fontFamily: "myFirstFont" }}
            className="text-white font-bold text-base"
          >
            Developers
          </h1>
          <h1 className="text-white  text-sm">Join as a Developer</h1>
        </div>
        <div className=" text-left flex flex-col gap-2">
          <h1
            style={{ fontFamily: "myFirstFont" }}
            className="text-white font-bold text-base"
          >
            Banks
          </h1>
          <h1 className="text-white  text-sm font-bold">Join as a Bank</h1>
        </div>
        <div className=" text-left flex flex-col gap-2">
          <h1
            style={{ fontFamily: "myFirstFont" }}
            className="text-white font-bold text-base"
          >
            Legal
          </h1>
          <h1 className="text-white  text-sm">Privacy policy</h1>
          <h1 className="text-white  text-sm">Terms & Conditions</h1>
        </div>
        <div className=" text-left flex flex-col gap-2">
          <h1
            style={{ fontFamily: "myFirstFont" }}
            className="text-white font-bold text-base"
          >
            Contact Us
          </h1>
          <h1 className="text-white  text-sm font-thin">info@giddaa.com</h1>
          <h1 className="text-white  text-sm font-thin">WhatsApp</h1>
          <h1 className="text-white  text-sm font-bold">Book a Meeting</h1>
          <h1 className="text-white  text-sm font-bold">+234 809 762 1791</h1>
        </div>
        <div className=" text-left flex flex-col gap-2">
          <h1
            style={{ fontFamily: "myFirstFont" }}
            className="text-white font-bold text-base"
          >
            Site Navigation
          </h1>
          <h1 className="text-white  text-sm font-thin">Properties</h1>
          <h1 className="text-white  text-sm font-thin">Developers</h1>
          <h1 className="text-white  text-sm font-thin">Banks</h1>
        </div>
      </div>

      <div className="w-full  flex justify-center items-center flex-col mt-8">
        <div className="w-[50%] flex gap-2 justify-center items-center">
          <img src="linkedin.svg" alt="" />
          <img src="twitter.svg" alt="" />
          <img src="instagram.svg" alt="" />
          <img src="tiktok.svg" alt="" />
          <img src="facebook.svg" alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
