import '../index.css';
import { useNavigate } from 'react-router-dom';
import ReactCurvedText from 'react-curved-text';
import { BsHeartArrow } from "react-icons/bs";
import Marquee from 'react-fast-marquee';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div name='home' className='w-full md:h-screen bg-[#fbc1d4] flex flex-col'>
      <div className='flex flex-col justify-center items-center h-full px-8'>
        {/* My name */}
        <div className='text-center text-[#000]'>
          <p className='text-[min(8vw,100px)] leading-[1.3] mb-4'>
            Hi, my name is
          </p>
          <p className='text-[min(8vw,100px)] leading-[1.3] mt-4'>
            Julia Ishibashi
          </p>
        </div>
  
        <div className='py-10'></div>
  
        <div className='mt-6'>
          <button
            className='relative flex items-center justify-center w-40 h-40 rounded-full border-2 border-[#000] bg-transparent text-[#000] group px-6 py-3 hover:text-white hover:bg-[#000] hover:border-[#000]'
            onClick={() => navigate('/profile')}
          >
            <div className='absolute inset-0 flex items-center justify-center'>
              <ReactCurvedText
                width={200}
                height={200}
                cx={100}
                cy={100}
                rx={90}
                ry={90}
                text="Learn More About Me * Check My Profile Here *"
                svgProps={{ className: 'absolute curved-text' }}
              />
            </div>
            <span className='group-hover:rotate-90 duration-300'>
              <BsHeartArrow className='ml-3 text-6xl -scale-x-100' />
            </span>
          </button>
        </div>
      </div>
      <Marquee
        className="bg-[#fbc1d4] text-black text-[min(10vw,70px)] h-32 font-['Comic Neue', 'cursive']"
        speed={60}
      >
        <p>
          Thank you for visiting my website
          <span className="star"> &nbsp;❣&nbsp;</span> 
          Thank you for visiting my website
          <span className="star"> &nbsp;❣&nbsp;</span> 
        </p>
      </Marquee>
    </div>
  );
};

export default Home;