import React from "react";
import AboutCard from "./AboutCard";

function AboutHeroSection() {
  return (
    <>
      <h1 className="text-2xl text-center md:text-left pt-5 pb-9 font-bold md:text-5xl md:max-w-[650px] md:my-20">
        What is Sustainable Transportation really about?
      </h1>
      <div className="flex flex-col md:flex-row justify-between">
        <AboutCard
          image="CleanMobility.png"
          title="Clean Mobility"
          description="Efficient, green transit planning encouraging sustainable, urban mobility."
        />
        <AboutCard
          image="SmartTransit.png"
          title="Smart Transit"
          description=" Utilizing technology for sustainable, and interconnected urban mobility"
        />
        <AboutCard
          image="GreenerJourneys.png"
          title="Greener Journeys"
          description="Environmentally friendly travel choices promoting sustainability and safety."
        />
      </div>
    </>
  );
}

export default AboutHeroSection;
