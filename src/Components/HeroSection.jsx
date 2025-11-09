import React from "react";

function HeroSection() {
  return (
    <section className="flex flex-col-reverse justify-between md:pl-[250px] mb-10 md:mb-40">
      <div className="">
        <h1 className="font-bold text-center md:max-w-0.5 text-8xl mb-5 md:mb-15 mt-7">
          Go <span className="text-green-500">Green.</span>
        </h1>
        <p className="font-semibold text-center max-w-[450px] md:mb-25 text-xl">
          Empowering Eco-Friendly Journeys through Sustainable Transportation
          Solutions
        </p>
        <div className="mt-4 flex flex-col md:items-start md:gap-5 items-center">
          <button className="md:mr-8 mt-5 text-white bg-black rounded-3xl py-4 px-9 text-2xl">
            Learn More
          </button>
          <button className="text-white hidden md:block bg-black rounded-3xl py-4 px-9 text-2xl">
            Learn More
          </button>
        </div>
      </div>

      <div className="md:absolute md:right-0 md:top-0 md:z-50 pointer-events-none">
        <img src="/Africa.png" alt="Africa" />
      </div>
    </section>
  );
}

export default HeroSection;
