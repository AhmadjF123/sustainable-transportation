import React from "react";

function AboutCard({image,title,description}) {
  return (
    <>
      <div className="flex flex-col items-center mb-15 ">
        <img className="w-fit mb-4" src={image} alt="" />
        <h2 className="font-bold text-4xl mb-2 text-center">{title}</h2>
        <p className=" text-[20px] text-center px-13">{description}</p>
      </div>
    </>
  );
}

export default AboutCard;
