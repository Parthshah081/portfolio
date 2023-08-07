import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import './Home.css';
import parth from '../assets/parth.png';
import Typewriter from 'typewriter-effect';
const Home = () => {
  return (
    <>
    <section name="home" className='main-div h-screen w-full flex items-center pl-[7rem] pt-[1%] pr-[2rem] bg-[#0a192f] home'>
      <div className='max-w-[33rem] px-8'>
        <h4 className='font-bold text-pink-600'>Hello, my name is</h4>
        <h1 className='sm:text-7xl font-bold text-4xl text-cyan-50'>Parth Shah</h1>
        <div className='text-4xl text-pink-600 font-bold'>I'm working with
        <span className='text-4xl text-pink-600 font-bold'>
          <Typewriter
            options={{
              autoStart:true,
              loop: true,
              delay: 40,
              strings:[
                'HTML','CSS', 'JavaScript', 'BootStrap', 'TailwindCSS', 'ReactJs', 'NextJs', 'MaterialUI'
              ],
            }}
            />
        </span>
        </div> 
        <p className='text-1xl font-semibold text-[#8892b0]'>As a fresher frontend developer, I have a passion for creating visually appealing and user-friendly websites. With a solid foundation in HTML, CSS, and JavaScript, I am eager to contribute my skills and knowledge to a dynamic team.</p>
        <a href='https://github.com/Parthshah081'><button className='text-white mt-4 border-2 px-6 py-3 flex items-center xl:ml-0 lg:ml-0 btn hover:bg-pink-600 hover:border-pink-600'>View Work <HiArrowNarrowRight className='ml-2'/></button></a>
      </div>
      <div className='absolute top-[50%] right-0 transform translate-y-[-50%] w-[730px] h-full overflow-hidden pointer-events-none skills profession-container'>
        <div className='absolute top-0 right-0 w-[710px] h-full rounded-[50%] flex justify-center items-center rotate-360 profession-box'>
            <div className='absolute left-0 flex items-center flex-col text-var(--main-color) transform rotate-[calc(360deg/4 * 4)] origin-[50%] bg-[#0a192f] p-3 profession' id='profession1'>
                 <AiFillHtml5 className='text-red-500' size={30} />
                 <h3 className='text-2xl font-bold text-white'>HTML</h3>
            </div>
            <div className='absolute pr-4 right-0 flex items-center flex-col text-var(--main-color) transform rotate-[calc(360deg/2)] origin-[50%] bg-[#0a192f] p-3 profession' id='profession2'>
                 <FaCss3Alt className='text-blue-500' size={30}/>
                 <h3 className='text-2xl font-bold text-white'>CSS</h3>
            </div>
            <div className='absolute pr-2 left-50% top-0 flex items-center flex-col text-var(--main-color) transform rotate-[calc(360deg/4)] origin-[50%] bg-[#0a192f] p-3 profession' id='profession3'>
                 <SiJavascript className='text-yellow-500' size={30}/>
                 <h3 className='text-2xl font-bold text-white'>JavaScript</h3>
            </div>
            <div className='absolute pr-2 left-50% bottom-0 flex items-center flex-col text-var(--main-color) transform rotate-[calc(270deg)] origin-[50%] bg-[#0a192f] p-3 profession' id='profession4'>
                 <FaReact className='text-blue-400' size={30}/>
                 <h3 className='text-white text-2xl font-bold'>ReactJS</h3>
            </div>

          <div className='w-[630px] h-[630px] border-solid border-[3px] border-white rounded-[50%] circle'></div>
        </div>
        <div className='overlay absolute top-0 right-0 w-0 h-0 border-t-[365px] border-solid border-t-pink-600 border-b-[365px] border-b-pink-600 border-r-[365px] border-r-pink-600 border-l-[365px] border-l-transparent'></div>
      </div>
      <div className='home-img absolute bottom-0 left-[70%] pointer-events-none'>
        <img src={parth} alt='profile pic'/>
      </div>
    </section>
    </>
  )
}

export default Home