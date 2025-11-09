import React from "react";

function StrideIntoSustainability() {
  return (
    <>
      <div className="flex md:flex-row justify-between items-center md:px-20 md:pt-20 flex-col  md:flex-row-reverse mt-10">
        <div className="relative mb-50">
          <img className="z-40 ml-40  w-[45%]" src="image3.png" alt="" />
          <img
            className="-z-20 absolute top-20 right-40 w-[45%] md:top-45 md:right-60"
            src="image4.png"
            alt=""
          />
        </div>
        <div className="text-center px-5">
          <h1 className="font-bold text-2xl md:text-5xl">Stride into Sustainability</h1>
          <p className="text-gray-500 md:max-w-[490px] text-2xl md:text-5xl pt-8">
            Green Steps Toward Eco-Friendly Walking Solutions
          </p>
        </div>
      </div>
    </>
  );
}

export default StrideIntoSustainability;
