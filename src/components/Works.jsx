import React from 'react';
import { data } from "../data/data.js";


const Works = () => {
  const project = data;
  return (
    <div name='works' className='w-full md:h-screen bg-[#FDE9EA] text-[#869F77]'>
      <div className='max-w-[1000px] h-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-5xl font-bold inline border-b-4 border-[#000000]'>Works</p>
          <p className='py-6'></p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

          {/* Grid Item */}
          {project.map((item, index) => (
            <div
              key={index}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
            >
              {/* 以下のオプションを使って画像を直接表示することもできます */}
              {/* <img src={item.image} alt="Project" className="object-contain w-full h-full rounded-md" /> */}

              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-[#869F77] tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-[#869F77] text-white hover:text-[#869F77] hover:bg-white text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2 bg-[#869F77] text-white hover:text-[#869F77] hover:bg-white text-lg"
                    >
                      Visit project
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}


        </div>
      </div>
    </div >
  );
};

export default Works;
