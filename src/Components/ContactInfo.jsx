import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function ContactInfo() {
  return (
    <>
      <div className="relative bg-black text-white w-fit text-center md:px-24 rounded-xl overflow-hidden px-7">
        <h1 className="text-3xl font-bold pt-7 pb-4 text-center">
          Contact Information
        </h1>
        <p className=" text-xl md:max-w-[400px] text-primary">
          We'd love to hear from you! Whether you have questions, feedback,
          we're here to assist you.
        </p>

        <div className="mt-7 pb-30 md:pb-50 flex flex-col ">
          <div className="flex justify-center items-center gap-5 mb-7">
            <FaPhoneVolume />
            <p>+447475 044782</p>
          </div>

          <div className="flex justify-center items-center gap-5 mb-7">
            <FaEnvelope />
            <p>Joseph.Oni@bcu.ac.uk</p>
          </div>

          <div className="flex justify-center items-center gap-5">
            <FaLocationDot />
            <p>4 Cardigan Lane, B4 7BD</p>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 bg-greenB w-[250px] h-[250px] rounded-full z-10 translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute bottom-10 right-10 bg-greenA w-[150px] h-[150px] rounded-full z-50"></div>

        <div className="flex gap-4 mb-15">
          <div className="bg-blackB text-white text-2xl rounded-full p-2">
            <FaTwitter className="" />
          </div>
          <div className="bg-white text-black text-2xl rounded-full p-2">
            <FaInstagram className="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
