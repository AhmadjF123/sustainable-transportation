import React from "react";

function SupportHeroSection() {
  return (
    <>
      <div className="md:px-[250px] bg-[url(supportBachground.svg)] md:bg-cover bg-no-repeat md:min-h-screen text-white mt-4 px-6 bg-cover">
        <h1 className="text-2xl text-center md:text-left md:text-4xl font-bold pt-4 md:pt-35">Hello,</h1>
        <h1 className="text-2xl text-center md:text-4xl md:text-left font-bold md:pt-6">How can we help?</h1>
        <p className="md:pt-10 pt-4 text-center md:text-left">We offer 24 hour support to attend to your needs.</p>
        <input type="search" placeholder="Search" className="p-4 mt-4 rounded-2xl md:w-[370px] w-full bg-white text-black outline-none mb-7"/>
      </div>
    </>
  );
}

export default SupportHeroSection;
