import React from 'react';
import logo from '../assets/logo.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import resume from '../assets/Resume.pdf'
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleCLick = () => {
    setMenu(!menu)
  }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-transparent text-gray-300 z-[100]'>
      <div>
        <img src={logo} alt='logo image' style={{ width: '80px' }} />
      </div>

      <div>
        <ul className='hidden md:flex'>
          <li>
            <Link to="home" smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} offset={50} duration={500}>
              Skills
            </Link>
          </li>
          <li>
          <Link to="work" smooth={true} offset={50} duration={500}>
             Projects
            </Link>
            </li>
          <li>
          <Link to="contact" smooth={true} offset={50} duration={500}>
             Contact
            </Link>
            </li>
        </ul>
      </div>
      {/* hamburger */}
      <div onClick={handleCLick} className='md:hidden'>
        <FaBars />
      </div>
      {/* mobile menu */}
      <ul className={!menu ? 'hidden' : 'absolute top-[81px] right-5 w-full h-[300px] flex flex-col justify-center items-center px-4 bg-[#0a192f] duration-300'}>
        <li className='py-4'>
        <Link onClick={handleCLick} to="home" smooth={true} offset={50} duration={500}>
              Home
            </Link>
        </li>
        <li className='py-4'>
        <Link onClick={handleCLick} to="about" smooth={true} offset={50} duration={500}>
              About
            </Link>
        </li>
        <li className='py-4'>
        <Link onClick={handleCLick} to="skills" smooth={true} offset={50} duration={500}>
              Skills
            </Link>
        </li>
        <li className='py-4'>
        <Link onClick={handleCLick} to="work" smooth={true} offset={50} duration={500}>
             Projects
            </Link>
        </li>
        <li className='py-4'>
        <Link onClick={handleCLick} to="contact" smooth={true} offset={50} duration={500}>
             Contact
            </Link>
        </li>
      </ul>

      {/* Social media icons */}

      <div className='hidden lg:flex flex-col fixed top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a href='https://www.linkedin.com/in/parth-shah-7884b2165' className='flex justify-between items-center w-full text-gray-300'>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/Parthshah081'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://parthshah081@gmail.com'>
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
            <a className='flex justify-between items-center w-full text-gray-300' href={resume} download='Resume'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar