import React, { useState } from "react";
import { NavLink } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
   <div className="bg-primary md:py-[70px] md:px-[250px] px-7 py-8">
  <div className="flex items-center justify-between">
    {/* Title */}
    <h2 className="text-[13px] md:text-[20px] font-bold md:max-w-0.5">
      SUSTAINABLE TRANSPORTATION
    </h2>

    {/* Links */}
    <div className={`${isOpen ? "transition-all duration-300 ease-in-out flex flex-col gap-4 absolute top-[100px] left-0 w-full bg-primary pl-7" : "hidden"} md:flex md:gap-8 font-semibold`}>
      <NavLink className="hover:text-gray-200" to="/">Home</NavLink>
      <NavLink className="hover:text-gray-200" to="/about">About</NavLink>
      <NavLink className="hover:text-gray-200" to="/contact">Contact</NavLink>
      <NavLink className="hover:text-gray-200" to="/support">Support</NavLink>
    </div>

    {/* Hamburger */}
    <div onClick={() => setIsOpen(!isOpen)} className="block md:hidden text-4xl border-2 rounded-full p-2">
      <GiHamburgerMenu />
    </div>
  </div>
</div>

    </>
  );
}

export default Navbar;
