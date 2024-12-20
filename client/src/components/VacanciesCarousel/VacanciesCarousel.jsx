import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import i1 from "./i1.png";
import i2 from "./i2.png";
import i3 from "./i3.png";
import i4 from "./i4.png";
import i5 from "./i5.png";
import i6 from "./i6.png";

const VacanciesCarousel = () => {
  const images = [
    { src: i1, subject: "Application for Driver" },
    { src: i2, subject: "Application for Welder" },
    { src: i3, subject: "Application for Sales Executive" },
    { src: i4, subject: "Application for Accountant" },
    { src: i5, subject: "Application for Chef" },
    { src: i6, subject: "Application for Delivery Man" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const visibleImages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
  ];

  return (
    <div className="w-full bg-white py-12 px-4 flex justify-center items-center">
      <div className=" flex items-center">
        {/* Current Vacancies Section */}
        <div className="bg-lightgreen hidden w-[356px] h-[300px] lg:-mt-14 text-white text-left flex-col justify-center items-center p-6 text-5xl font-bold mr-4 grid grid-cols-1 lg:flex">
          CURRENT <br /> VACANCIES
        </div>

        {/* Image Carousel */}
        <div className="relative flex flex-col items-center space-y-4">
          {/* Display Two Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:flex-row transition-transform duration-500 ease-in-out">
            <div className="p-12 text-4xl font-raleway text-white mb-4 lg:hidden bg-lightgreen">
              Current Vacancies
            </div>
            {visibleImages.map((item, index) => (
              <a
                key={index}
                href={`mailto:Hire@alshaheen.pro?subject=${encodeURIComponent(item.subject)}`}
                className=""
              >
                <img
                  src={item.src}
                  alt={`Vacancy ${index + 1}`}
                  className="w-80 h-80 object-cover ml-4 lg:p-0 lg:w-[356px] lg:h-[338px] rounded-lg shadow-md"
                />
              </a>
            ))}
          </div>

          {/* Navigation Buttons Below Images */}
          <div className="flex space-x-4 ml-0 lg:ml-[596px] mt-4">
            <button
              onClick={handlePrev}
              className="bg-white rounded-full shadow-lg p-2 hover:bg-gray-200"
            >
              <BsChevronLeft className="text-gray-600" size={24} />
            </button>
            <button
              onClick={handleNext}
              className="bg-white rounded-full shadow-lg p-2 hover:bg-gray-200"
            >
              <BsChevronRight className="text-gray-600" size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacanciesCarousel;
