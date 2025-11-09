import React from "react";

function GreenTransit() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center md:px-20 md:pt-50 mt-10 md:my-20 px-10 mb-10">
        <div>
          <img src="/image5.png" alt="" />
        </div>
        <div className="text-center">
          <h1 className="mt-4 font-bold text-2xl md:text-5xl">Green Transit</h1>
          <p className="text-gray-500 md:max-w-[590px] text-2xl md:text-5xl md:pt-8">
            Embark on eco-conscious journeys with our sustainable bus solutions.
            Redefining transportation.
          </p>
        </div>
      </div>
    </>
  );
}

export default GreenTransit;
