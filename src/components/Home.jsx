import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#f4eeed]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#8f774f]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#524132]'>
          Julia Ishibashi
        </h1>
        <p className='text-[#8f774f] py-4 max-w-[700px]'>
          I am a third year computer science student at the UVic
        </p>
        <div>
          <button className='text-[#524132] group border-[#524132] border-2 px-6 py-3 my-2 flex items-center hover:text-[#f4eeed] hover:bg-[#524132] hover:border-[#524132]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
