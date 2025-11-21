import React from "react";
import HeroSection from "../Components/HeroSection";
import YourJourney from "../Components/YourJourney";
import GreenTransit from "../Components/GreenTransit";
import GreenRoadsAhead from "../Components/GreenRoadsAhead";
import StrideIntoSustainability from "../Components/StrideIntoSustainability";

function HomePage() {
  return (
    <>
      <HeroSection/>
      <YourJourney/>
      <GreenRoadsAhead/>
      <StrideIntoSustainability/>
      <GreenTransit/>
    </>
  );
}

export default HomePage;
