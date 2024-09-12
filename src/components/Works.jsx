import React, { useState } from 'react';
import { data } from "../data/data.js";
const Works = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="w-full h-screen bg-[#fbc1d4] text-[black] flex">
      {/* Left section for the image */}
      <div className="w-1/2 h-full flex items-center justify-center">
        {hoveredIndex !== null && (
          <div
            className="transition-all duration-500 ease-in-out"
            style={{
              backgroundImage: `url(${data[hoveredIndex].image})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '80%',
              height: '80%',
              boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.5)',
              borderRadius: '10px',
              transform: 'translateY(0)',
            }}
          ></div>
        )}
      </div>

      {/* Right section for the list */}
      <div className="w-1/2 h-full p-10 flex flex-col justify-start">
        <p className='text-5xl inline border-b border-[#000000]'>Works</p>
        <p className='py-6'></p>

        <div className="flex flex-col space-y-8">
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex justify-between items-center border-b border-black pb-2 cursor-pointer transition-transform duration-300 ${hoveredIndex === index ? 'transform translate-x-2' : ''}`} // Adds movement on hover
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="text-xl transition-all duration-300">
                {hoveredIndex === index ? `→ ${item.name}` : item.name}
              </span>
              <span className="text-lg">{item.category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
