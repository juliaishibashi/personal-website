import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  { category: "Languages", items: ["Java", "Python", "C++", "Swift", "SQL", "Julia", "R", "Javascript"] },
  { category: "Technologies", items: ["Git", "React", "pandas", "JUnit", "Catch2"] },
  { category: "Miscellaneous", items: ["Black/white box unit testing", "PostgreSQL", "Figma", "LaTeX", "Jupyter Notebook", "Matlab"] }
];

const Skills = () => {
  const [randomDelay, setRandomDelay] = useState([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    // Generate random delays for animation
    const delays = skills.flatMap(skill => skill.items.map(() => Math.random() * 0.5));
    setRandomDelay(delays);
  }, []);

  return (
    <div className='flex flex-col justify-center items-center w-full h-screen bg-[#fbc1d4]' ref={ref}>
      <motion.div
        className='max-w-[1000px] w-full grid grid-cols-2 gap-8'
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
      >
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-5xl inline border-b border-[#000000]'>
            Skills
          </p>
        </div>
        <div></div>
      </motion.div>

      {skills.map((skillCategory, categoryIndex) => (
        <motion.div
          key={categoryIndex}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: categoryIndex * 0.5 }}
          className="mb-6"
        >
          <h3 className="text-xl font-semibold mb-4">{skillCategory.category}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skillCategory.items.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card bg-gray-100 text-gray-800 px-4 py-2 rounded-md shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: randomDelay[index] }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
