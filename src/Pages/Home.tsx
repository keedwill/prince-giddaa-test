import BusinessOwnersAndInvestors from "../components/BusinessOwnersAndInvestors";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import HowItWorks from "../components/HowItWorks";

import Navbar from "../components/Navbar";
import NoOfComponent from "../components/NoOfComponent";
import PrivateSectorWorkers from "../components/PrivateSectorWorkers";
import PublicSectorWorkers from "../components/PublicSectorWorkers";
import PurchaseOptions from "../components/PurchaseOptions";
import RemoteWorkers from "../components/RemoteWorkers";
import TrustedByComponent from "../components/TrustedByComponent";
import WhoWeServe from "../components/WhoWeServe";
import WhyGiddaa from "../components/WhyGiddaa";
import Slider2 from "../utilities/Slider2";

const data = [
  {
    title: "Lanre Edun",
    description: "HEAD OF MARKETING AT BRAINS & HAMMERS",
    image: "lanre.png",
  },
  {
    title: "Kunle Fatimehin",
    description: "DIRECTOR OF DIGITAL & INNOVATION AT KAIROS HOF",
    image: "kunle.png",
  },

  {
    title: "Emmanuel Uge",
    description: "DIRECTOR OF SALES AT WIGWE INFRASTURUCTURE",
    image: "emmanuel.png",
  },

  {
    title: "Dooshima Anakaa",
    description: "DIRECTOR OF FINANCE AT IKPAAHINDI VENTURES",
    image: "anaka.png",
  },
];

const Home = () => {
  return (
    <>
    
    
    <div className="flex flex-col ">
      <Navbar />

      <div className=" flex md:flex-row flex-col   md:h-[500px] h-[1000px] ">
        <div className="md:w-[45%] w-[100%] pl-[5%] py-[2%] pr-[2%]  h-full flex flex-col ">
          <div
            className="flex flex-col    capitalize text-[35px]"
            style={{ fontFamily: "myFirstFont" }}
          >
            <h1 className="">Securely and Affordably Own a Home in Nigeria.</h1>

            <h1 className=" text-[#335F32]">
              We Serve Nigerians Across the Globe.
            </h1>
          </div>
          <div className="mt-6">
            Experience confidence when buying a home in Nigeria whether you’re
            in Nigeria or Abroad! Enjoy peace of mind with legitimate
            transactions, straightfoward processes, and a variety of flexible
            payment options directly from top developers and banks.
          </div>

          <div className="flex justify-between mt-6">
            <button className="bg-[#335F32] text-white px-4 py-2 rounded-full">
              Find a Home
            </button>
            <button className="bg-white border border-[#335F32] text-[#335F32] text-sm w-[70%]    rounded-sm">
              10,000 People Have Seen This
            </button>
          </div>
        </div>
        <img
          className="md:w-[55%] w-[100%] h-full"
          src="background.png"
          alt=""
        />
      </div>

      <NoOfComponent />
      <TrustedByComponent />

      <Slider2 data={data} />

      <PurchaseOptions />

      <WhyGiddaa />
      <WhoWeServe />
      <RemoteWorkers />
      <PrivateSectorWorkers />
      <PublicSectorWorkers />
      <BusinessOwnersAndInvestors />
      <HowItWorks />
      <GetStarted />
      <Footer />
      <div className="w-full bg-white text-center font-bold p-2">
        <h1 className="text-[#335f32] text-sm">PROPERTY OF GIDDAA INC.</h1>
      </div>
    </div>
    </>
  );
};

export default Home;
