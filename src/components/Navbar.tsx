import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Properties" },
    { id: 3, text: "Developers" },
    { id: 4, text: "Mortgage Banks" },
    { id: 5, text: "Consult an Expert" },
    { id: 6, text: "Login" },
  ];

  return (
    <div className="bg-[#F2F2F2] w-full flex justify-between items-center h-24  mx-auto px-[5%]  ">
      {/* Logo */}
      <img src="Giddaa Logo.png" alt="" />

      <SearchBar />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          // <li
          //   key={item.id}
          //   className="p-4   m-2 cursor-pointer duration-300 text-[#4B4B4B] hover:text-[#335F32] hover:font-bold "
          // >
          //   {item.text}
          // </li>
          <NavLink
            to={item.text === "Home" ? "/" : item.text}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "p-4   m-2 cursor-pointer  text-[#335F32] font-bold "
                : "p-4   m-2 cursor-pointer duration-300 text-[#4B4B4B] hover:text-[#335F32] hover:font-bold"
            }
          >
            {item.text}
          </NavLink>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r  bg-[#F2F2F2] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] "
        }
      >
        {/* Mobile Logo */}
        <img src="Giddaa Logo.png" alt="" className="p-4" />

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4  duration-300 text-[#4B4B4B] hover:text-[#335F32] cursor-pointer hover:font-bold "
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
