import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#FDE9EA]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#588061]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#869F77]'>
          Julia Ishibashi
        </h1>
        <p className='text-[#588061] py-4 max-w-[700px]'>
          Thank you for visiting my website!
        </p>
        <div>
          <ScrollLink to="works">
            <button className='text-[#588061] group border-[#588061] border-2 rounded-full px-6 py-3 my-2 flex items-center hover:text-white hover:bg-[#869F77] hover:border-[#588061]'>

              View Work

              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
