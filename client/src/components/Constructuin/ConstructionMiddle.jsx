import React from 'react';

const ConstructionMiddle = () => {
  return (
    <div>
      <section className="flex flex-col lg:flex-row">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[700px]">
          <img
            src="https://www.groupl.ae/images/ser_pic5.jpg"
            alt="Cabin Crew"
            className="w-full h-full lg:h-[532px] object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center bg-darkgray px-6 py-8 md:py-12 lg:px-12 lg:-mt-48">
          <h2 className="text-lightblue font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8">
            TALENT FOR YOUR <br /> BUSINESS
          </h2>
          <hr className="w-12 md:w-16 lg:w-20 border-t-4 md:border-t-6 lg:border-t-8 border-lightgreen mb-4 md:mb-8" />
          <p className="text-gray-600 text-base md:text-lg mb-4">
            The greatest structures are built on quality. Your business is no <br /> different. We help you find professionals who are trained in all <br /> processes involved in buildings, infrastructure, and industrial <br /> facilities, and associated activities.
          </p>
          <div className="flex space-x-6 font-raleway text-DarkRed font-semibold text-sm md:text-md">
            <div className="flex flex-col space-y-2">
              <span>| Project</span>
              <span>| Management</span>
              <span>| Engineers</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span>| Estimation</span>
              <span>| Contacts</span>
              <span>| Architect</span>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row bg-darkgray">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-8 md:py-12 bg-darkgray lg:px-12 lg:-mt-48">
          <h2 className="text-lightblue font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8 lg:ml-32">
            SKILL FOR YOUR <br /> BUSINESS
          </h2>
          <hr className="w-12 md:w-16 lg:w-20 border-t-4 md:border-t-6 lg:border-t-8 border-lightgreen mb-4 md:mb-8 lg:ml-32" />
          <p className="text-gray-600 text-base md:text-lg mb-4 lg:ml-32">
            We provide the best trained candidates for building, maintaining, <br /> and repairing structures, as required by your business.
          </p>
          <div className="flex space-x-6 font-raleway text-DarkRed font-semibold text-sm md:text-md lg:ml-32">
            <div className="flex flex-col space-y-2">
              <span>| MEP</span>
              <span>| Civil</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span>| Foreman</span>
              <span>| Supervisor</span>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] lg:-mt-48">
          <img
            src="https://www.groupl.ae/images/ser_pic6.jpg"
            alt="Cabin Crew"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default ConstructionMiddle;