import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsEnvelope, BsFilePerson } from 'react-icons/bs'
import Logo from '../assets/logo1.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const hadleClick = () => setNav(!nav)


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-centre px-4 bg-[	#f4eeed] text-[#999b84]' >
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '50px' }} />
      </div>

      {/* Menu */}
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Content</li>
      </ul>


      {/* Hamberger Menu */}
      <div onClick={hadleClick} className='md:hidden z-10 absolute top-4 right-4'>
        {!nav ? <FaTimes /> : FaTimes}
        <FaBars />
      </div>


      {/* Mobile Menu */}
      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#f4eeed] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl' >Content</li>
      </div>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-[999b84]' href='/'>
              Linkedin<FaLinkedin size={30}></FaLinkedin>
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-[999b84]' href='/'>
              Github<FaGithub size={30}></FaGithub>
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-[999b84]' href='/'>
              Email<BsEnvelope size={30}></BsEnvelope>
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-[999b84]' href='/'>
              Resume<BsFilePerson size={30}></BsFilePerson>
            </a>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Navbar