import React from "react";
import AboutHeroSection from "../Components/AboutHeroSection";
import ForFuture from "../Components/ForFuture";

function AboutPage() {
  return (
    <>
      <div className="md:px-[250px]">
        <AboutHeroSection/>
      </div>
      <ForFuture/>

    </>
  );
}

export default AboutPage;
