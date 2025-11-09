import React from 'react'

function GreenRoadsAhead() {
  return (
    <>
        <div className="flex flex-col md:flex-row justify-between items-center md:mb-20 md:pt-50 md:px-20 px-10">
        <div className="relative mb-20">
          <img className="w-[50%] md:w-full" src="image1.png" alt="" />
          <img className="w-[70%] md:w-full absolute top-25 left-15 md:top-60 md:left-20" src="image2.png" alt="" />
        </div>
        <div className="text-center mt-5">
          <h1 className="font-bold text-2xl md:text-5xl">Green Roads Ahead</h1>
          <p className="text-gray-500 md:max-w-[490px] text-2xl md:text-5xl pt-8">
            Driving a sustainable future through eco-friendly transportation
            solutions and innovation."
          </p>
        </div>
      </div>
    </>
  )
}

export default GreenRoadsAhead