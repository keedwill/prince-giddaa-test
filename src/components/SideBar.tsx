import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative min-h-screen md:flex">
      <div
        className={`bg-[#f0f0f0] text-black w-64 py-4 ${
          isOpen ? "block" : "hidden"
        } md:block md:relative`}
      >
        <div className="h-16 flex items-center justify-between p-4">
          <img src="Giddaa Logo.png" alt="" />
          <button onClick={toggleMenu} className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="#335F32"
              stroke="#335F32"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <nav className=" pb-4">
          <ul>
            <li>
              <Link
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                to=""
                className="gap-2 my-4 p-2 text-sm flex justify-center items-center border-r-4 border-[#335F32] "
              >
                <img className={`${isHovered ? "text-[#335F32]" : "text-black"}`} src="money.svg" alt="" />
                <h5 className={`${isHovered ? "text-[#335F32]" : "text-black"}`}> TRANSACTIONS & EARNINGS</h5>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-semibold mb-4">Main Content</h1>
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default SideNav;
