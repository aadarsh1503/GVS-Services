import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import i1 from "./i1.png";
import i2 from "./i2.png";
import i3 from "./i3.png";
import i4 from "./i4.png";
import i5 from "./i5.png";
import i6 from "./i6.png";

const TheTeam = () => {
  const images = [
    {
      src: i1,
      alt: "Event 1",
      heading: "MARIA BERNADETH CASTRO ",
      description: "ADMINISTRATOR",
    },
    {
      src: i2,
      alt: "Event 2",
      heading: "ASMAN RAHIM",
      description: "TECHNOLOGY OFFICER",
    },
    {
      src: i3,
      alt: "Event 3",
      heading: "SHAMEEMUDHEEN KANNAMPURATH VALAPPIL",
      description: "HRM SALES EXECUTIVE",
    },
    {
      src: i4,
      alt: "Event 4",
      heading: "MARICRIS ANGELES",
      description: "ACCOUNTANT",
    },
    {
      src: i5,
      alt: "Event 5",
      heading: "CANDY REGORIS",
      description: "CUSTOMER SALES",
    },
    {
      src: i6,
      alt: "Event 6",
      heading: "RIYADH SHAHEEN",
      description: "MANAGING DIRECTOR",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const visibleImages = [
    images[(currentIndex - 1 + images.length) % images.length],
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
  ];

  return (
    <div className="w-full bg-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Title Section */}
        <div className="text-left mb-4">
          <h1 className="text-lightblue font-bold text-4xl">THE TEAM</h1>
        </div>

        {/* Image Carousel */}
        <div className="relative flex items-center justify-center space-x-4">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute -left-28 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 hover:bg-gray-200"
          >
            <BsChevronLeft className="text-gray-600" size={24} />
          </button>

          {/* Display Three Images */}
          <div className="flex space-x-4 transition-transform duration-500 ease-in-out">
            {visibleImages.map((image, index) => (
              <div key={index} className="relative group w-60 lg:w-[306px] lg:h-[332px] h-40">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-fill rounded-lg shadow-md"
                />
                {/* Description Overlay */}
                <div className="absolute inset-0 top-44 bg-lightgreen bg-opacity-80 text-white opacity-0 group-hover:opacity-100 flex flex-col items-start justify-center transition-opacity duration-300 rounded-lg p-4">
                  <p className="text-lg font-bold text-left">{image.heading}</p> {/* Heading */}
                  <p className="text-12.8 text-left font-semibold whitespace-pre-line">{image.description}</p> {/* Description */}
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute -right-32 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 hover:bg-gray-200"
          >
            <BsChevronRight className="text-gray-600" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TheTeam;