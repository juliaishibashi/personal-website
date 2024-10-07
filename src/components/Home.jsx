import React from 'react';
import '../index.css';
import { Link as ScrollLink } from 'react-scroll';
import ReactCurvedText from 'react-curved-text';
import { BsHeartArrow } from "react-icons/bs";



const Home = () => {
  
  return (
    <div name='home' className='w-full md:h-screen bg-[#fbc1d4] flex flex-col'>
      {/* Container */}
      <div className='flex flex-col justify-center items-center h-full px-8'>
        <p className='text-[#000] text-[min(8vw,100px)] sm:text-[min(8vw,100px)] mb-5'>
          Hi my name is
        </p>
        <p className='py-10'></p>
        <div
  className="text-[#000] text-[min(8vw,100px)] mt-xl-4"
  // style={{ fontStyle: 'italic'}}
>
  Julia Ishibashi
</div>

        <div className='mt-6'>
        <p className='py-10'></p>
          <ScrollLink to="works" offset={-60}>
<button className='relative flex items-center justify-center w-40 h-40 rounded-full border-[#000] border-2 bg-transparent text-[#000] group border-[#000] border-2 rounded-full px-6 py-3 flex items-center hover:text-white hover:bg-[#000] hover:border-[#000]'>
      {/* Curved Text */}
      <div className='absolute inset-0 flex items-center justify-center'>
        <ReactCurvedText
          width={200}
          height={200}
          cx={100}
          cy={100}
          rx={90}
          ry={90}
          text=" See What I’ve Made * Check Out My Projects *"
          svgProps={{ className: 'absolute curved-text' }} // Apply the class here
          />
      </div>
      {/* icon */}
      <span className='group-hover:rotate-90 duration-300'>
        <BsHeartArrow className='ml-3 text-6xl' />
      </span>
    </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Home;