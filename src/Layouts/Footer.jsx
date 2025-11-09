import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer className="bg-primary flex items-center flex-col border-t-4 px-8">
        <div className="flex text-5xl items-center gap-2 mb-4 pt-7">
          <FaFacebookF className="bg-black text-white rounded-full p-2" />
          <FaInstagram className="bg-black text-white rounded-full p-2" />
          <FaTwitter className="bg-black text-white rounded-full p-2" />
        </div>
        <h2 className="max-w-[450px] text-center mb-4">
          Copyright © 2024 Sustainable Transportation - All Rights Reserved.
        </h2>
        <h1 className="border w-15 mb-3"></h1>
        <div className="text-center pt-4 pb-15">
          <h1 className="font-bold text-[15px] md:text-4xl">
            SUSTAINABLE 
          </h1>

          <h1 className="font-bold text-[15px] md:text-4xl">
             TRANSPORTATION
          </h1>
        </div>
      </footer>
    </>
  );
}

export default Footer;
