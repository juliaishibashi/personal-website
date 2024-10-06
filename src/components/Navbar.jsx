import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsEnvelope } from 'react-icons/bs'
import Logo from '../assets/julia.png'
import Bird from '../assets/bird.png'
import { Link as ScrollLink } from 'react-scroll';
import { Helmet } from 'react-helmet';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav)
  };
  
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#fbc1d4] text-[#000] z-50'>
      {/* Helmet*/}
      <Helmet>
        <title>Julia Ishibashi</title>
        <link rel="icon" type="image/png" href={Bird} sizes="100x60" />
      </Helmet>

      {/* Logo */}
      <div>
        <ScrollLink to="home" smooth={true} duration={500}>
          <img src={Logo} alt='Julia Logo' style={{ width: '300px' }} />
        </ScrollLink>
      </div>

      {/* Menu */}
      <ul className='hidden md:flex space-x-6'>
        <li className='py-2 text-2xl hover:text-white '><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>

        <li className='py-2 text-2xl hover:text-white '><ScrollLink to="about" smooth={true} duration={500} offset={-100}>About</ScrollLink></li>

        <li className='py-2 text-2xl hover:text-white '><ScrollLink to="skills" smooth={true} duration={500}>Skills</ScrollLink></li>

        <li className='py-2 text-2xl hover:text-white  '><ScrollLink to="works" smooth={true} duration={500} offset={-60}>Works</ScrollLink></li>

        <li className='py-2 text-2xl hover:text-white '><ScrollLink to="contact" smooth={true} duration={500} offset={-150}>Contact</ScrollLink></li>
      </ul>

      {/* Hamberger Menu */}
      <div onClick={handleClick} className='md:hidden z-10 absolute top-4 right-4'>
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#fbc1d4] flex flex-col justify-center items-center'}>
        <ul className='list-none md:flex'>
          <li className='py-6 text-4xl hover:text-black'><ScrollLink to="home" onClick={handleClick}>Home</ScrollLink></li>
          <li className='py-6 text-4xl hover:text-black'><ScrollLink to="about" onClick={handleClick} >About</ScrollLink></li>
          <li className='py-6 text-4xl hover:text-black'><ScrollLink to="skills" onClick={handleClick}>Skills</ScrollLink></li>
          <li className='py-6 text-4xl hover:text-black'><ScrollLink to="works" onClick={handleClick}>Works</ScrollLink></li>
          <li className='py-6 text-4xl hover:text-black'><ScrollLink to="contact" onClick={handleClick} >Contact</ScrollLink></li>
        </ul>
      </div>

      {/* Social icons */}

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 text-[#000] bg-[#fbc1d4]'>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>

        </li>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center w-full' href='https://www.linkedin.com/in/juliaishibashi/' target="_blank" rel="noopener noreferrer">
              Linkedin<FaLinkedin size={30}></FaLinkedin>
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center w-full' href='https://github.com/juliaishibashi' target="_blank" rel="noopener noreferrer">
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <button
              onClick={() => {
                const contactElement = document.getElementById('contact');
                if (contactElement) {
                  const offset = -150;
                  const elementPosition = contactElement.getBoundingClientRect().top + window.scrollY;
                  const offsetPosition = elementPosition + offset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className='flex justify-between items-center w-full'
            >
              Email
              <BsEnvelope size={30} />
            </button>
          </li>
        </ul>
      </div>
    </div >
  )
}

export default Navbar