import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Marquee from 'react-fast-marquee';

const About = () => {
  // Ref to track if the element is in view
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });
  return (
    <div name='about' className='w-full bg-[#fbc1d4] text-[#000]'>
      <Marquee className='bg-[#fbc1d4] text-[#000] text-[min(13vw,100px)] h-40 mb-40'>
        <p>
          Thank you for visiting my website
          <span className="star"> &nbsp;❣&nbsp;</span> 
          Thank you for visiting my website
          <span className="star"> &nbsp;❣&nbsp;</span> 
        </p>
      </Marquee>
      
      <div className='flex flex-col justify-center items-center w-full' ref={ref}>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <motion.div
            className='sm:text-right pb-8 pl-4'
            initial={{ y: 100, opacity: 0 }} 
            animate={isInView ? { y: 0, opacity: 1 } : {}}  // Animate when in view
            transition={{ duration: 1.5 }} // 1.5 seconds animation
          >
            <p className='text-5xl inline border-b border-[#000000]'>
              About
            </p>
          </motion.div>
          <div></div>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl text-[#000]'>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}  // Animate when in view
              transition={{ duration: 2, delay: 0.5 }}  // 2 seconds animation, 0.5 second delay
            >
              Hello, My name is Julia!
            </motion.p>
          </div>
          <div>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}  // Animate when in view
              transition={{ duration: 2, delay: 1 }}  // 2 seconds animation, 1 second delay
              className='text-[#000]'
            >
              I was raised in Japan and now I am a third-year Computer Science student at UVic. 
              My favorite subject is algorithms because is not it amazing how the concept of a tree was invented?! 
              Although I have not done much coding outside of class assignments before, I recently started working on my own projects. 
              I have got plenty of ideas, so stay tuned for more updates!
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
