import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsEnvelope, BsFilePerson } from 'react-icons/bs'
import Logo from '../assets/JI_logo.png'
import { Link } from 'react-router-dom';

// import { Document, Page, pdfjs } from '@react-pdf/renderer';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const hadleClick = () => {
    setNav(!nav)
  };

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-centre px-4 bg-[#FDE9EA]mt-4 text-[#588061]'>
      {/* Logo */}
      <div>
        <Link to="/">
          <img src={Logo} alt='Julia Logo' style={{ width: '50px' }} />
        </Link>
      </div>

      {/* Menu */}
      <ul className='hidden md:flex'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/work">Works</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Hamberger Menu */}
      <div onClick={hadleClick} className='md:hidden z-10 absolute top-4 right-4'>
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#FDE9EA] flex flex-col justify-center items-center'}>
        <ul className="list-none md:flex">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/work">Works</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Social icons */}

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 text-[#869F77] bg-[#FDE9EA]'>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
          <a className='flex justify-between items-center w-full text-[999b84]' href='/' target="_blank" rel="noopener noreferrer">
            Resume<BsFilePerson size={30}></BsFilePerson>
          </a>
        </li>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center w-full text-[999b84]' href='https://www.linkedin.com/in/juliaishibashi/' target="_blank" rel="noopener noreferrer">
              Linkedin<FaLinkedin size={30}></FaLinkedin>
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center w-full text-[999b84]' href='https://github.com/juliaishibashi' target="_blank" rel="noopener noreferrer">
              Github<FaGithub size={30}></FaGithub>
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a className='flex justify-between items-center w-full text-[999b84]' href='/contact'>
              Email<BsEnvelope size={30}></BsEnvelope>
            </a>
          </li>


        </ul>
      </div>
    </div >
  )
}

export default Navbar