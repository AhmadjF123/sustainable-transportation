import React from "react";

function SupportFrequently() {
  const itemParentStyle =
    "hover:bg-cyan-100 hover:shadow-inner flex p-4 items-center gap-3 border-b border-gray-200";

  const itemStyle = "inline-block bg-greenA border rounded-full h-4 w-4";
  return (
    <>
      <div className="md:px-[250px] md:py-20 relative">
        <h1 className="text-2xl text-center mt-8 mb-4 font-bold md:text-4xl md:mb-20 ">
          Frequently Asked Questions
        </h1>

        <div className="flex flex-col-reverse">
          <div className="z-50 relative border mb-4 bg-white border-gray-200 w-fit ">
          <div className={itemParentStyle}>
            <span className={itemStyle}></span>
            <h2 className="">
              What sustainable transportation options do you offer?
            </h2>
          </div>

          <div className={itemParentStyle}>
            <span className={itemStyle}></span>
            <h2 className="">
              Why should I consider sustainable transportation?`
            </h2>
          </div>

          <div className={itemParentStyle}>
            <span className={itemStyle}></span>
            <h2 className="">
              What are the benefits of using electric vehicles?
            </h2>
          </div>

          <div className={itemParentStyle}>
            <span className={itemStyle}></span>
            <h2 className="">
              What is the role of public transportation in sustainability?
            </h2>
          </div>

          <div className={itemParentStyle}>
            <span className={itemStyle}></span>
            <h2 className="">
              What is the environmental impact of ridesharing and carpooling?
            </h2>
          </div>
        </div>

        <div className="w-full z-10 px-11 mb-4 bg-gray-300 rounded-2xl text-center md:pl-40 md:pr-15 flex flex-col md:w-fit md:absolute md:top-45 md:right-85">
          <h2 className="pt-4 text-base/8 font-bold md:pt-10 md:max-w-[270px] before:content-['•'] before:text-2xl before:mr-1 pb-5">
            How can I influence sustainable transportation in my community?
          </h2>

          <p className="md:pb-15 pb-4 md:max-w-[320px] md:text-left text-base/8">
            By engaging in local initiatives, and advocating for better public
            transportation options, this will promote and encourage the
            community in discussions about sustainable transportation.
          </p>



        </div>
        </div>
      </div>
    </>
  );
}

export default SupportFrequently;
