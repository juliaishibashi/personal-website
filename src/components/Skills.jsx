import React from 'react';

import Java from '../assets/java.png';
import Python from '../assets/python.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Cpp from '../assets/cpp.png';
import Sql from '../assets/sql.png';
import GitHub from '../assets/github-mark.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full md:h-screen bg-[#FDE9EA] text-[#869F77]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-5xl font-bold inline border-b-4 border-[#000000]'>Skills</p>
                    <p className='py-6'></p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                        <img className='w-24 h-24 mx-auto' src={Python} alt="Python icon" />
                        <p className='my-4'>Python</p>
                    </div>
                    <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                        <img className='w-24 h-24 mx-auto' src={Java} alt="Java icon" />
                        <p className='my-4'>Java</p>
                    </div>
                    <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                        <img className='w-24 h-24 mx-auto' src={Cpp} alt="C++ icon" />
                        <p className='my-4'>C++</p>
                    </div>
                    <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                        <img className='w-24 h-24 mx-auto' src={Sql} alt="PostgreSQL icon" />
                        <p className='my-4'>PostgreSQL</p>
                    </div>
                    <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                        <img className='w-24 h-24 mx-auto' src={JavaScript} alt="JavaScript icon" />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                        <img className='w-24 h-24 mx-auto' src={ReactImg} alt="React icon" />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                        <img className='w-24 h-24 mx-auto' src={Tailwind} alt="Tailwind icon" />
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#000000] hover:scale-110 duration-500'>
                        <img className='w-24 h-24 mx-auto' src={GitHub} alt="GitHub icon" />
                        <p className='my-4'>GitHub</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;
