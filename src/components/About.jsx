import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#FDE9EA] text-[#869F77]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-5xl font-bold inline border-b-4 border-[#000000]'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold text-[#869F77]'>

            <p>Hello, My name is Julia!</p>
          </div>
          <div>
            <p className='text-[#588061]'>I was raised in Japan and now I am a third-year Computer Science student at UVic. My favorite subject is algorithms because is not it amazing how the concept of a tree was invented?! Although I have not done much coding outside of class assignments before, I recently started working on my own projects. I have got plenty of ideas, so stay tuned for more updates! </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
