import React from 'react';
import i4 from "./i4.png"

const ConstructionLast = () => {
  return (
    <div className="flex items-center justify-center w-full h-auto lg:h-screen py-20 lg:py-0  lg:mt-32 bg-white px-4">
      <div className="w-full lg:w-3/4 h-auto lg:h-3/4 bg-white">
        
        {/* Heading with large underline */}
        <div className="text-left mb-4 lg:mb-8">
          <h2 className="text-2xl lg:text-4xl font-raleway font-bold text-lightblue pb-1 lg:pb-2 relative inline-block">
            PROCESS
            {/* Large underline */}
            <div className="absolute bottom-0 w-28 lg:w-[956px] left-0 lg:left-14 border-b-4 border-lightblue"></div>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Left side: Image */}
          <div className="w-full lg:w-1/2 h-48 lg:h-[406px] mb-4 lg:mb-0">
            <img
              src={i4}
              alt="Process"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side: Heading and Text */}
          <div className="w-full lg:w-1/2  h-auto lg:h-full flex flex-col justify-start">
            
            {/* Red Block with Text */}
            <div className="bg-lightgreen text-white p-4 sm:p-8 md:p-12  lg:py-[100px]">
              <ul className="space-y-2 sm:space-y-2 text-sm sm:text-base md:text-lg">
                <li><span className="text-white">|</span> Application & Registration</li>
                <li><span className="text-white">|</span> Initial Screening & Review</li>
                <li><span className="text-white">|</span> Interview & Assessment</li>
                <li><span className="text-white">|</span> Training & Development</li>
                <li><span className="text-white">|</span> Onboarding & Integration</li>
                <li><span className="text-white ">|</span> Ongoing Support & Career Advancement</li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionLast;
