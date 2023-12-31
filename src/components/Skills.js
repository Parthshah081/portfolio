import React from 'react'
import CSS from '../assets/CSS.png';
import BOOTSTRAP from '../assets/BOOTSTRAP.png';
import GitHub from '../assets/GitHub.png';
import HTML from '../assets/HTML.png';
import REACT from '../assets/REACT.png';
import JavaScript from '../assets/JavaScript.png'
const Skills = () => {
  return (
    <>
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink'>Skills</p>
                <p className='py-4'>\\These are technologies I've worked with.</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-lg shadow-purple-800 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt='HTML icon'/>
                    <p className='py-4'>HTML</p>
                </div>
                <div className='shadow-lg shadow-purple-800 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt='CSS icon'/>
                    <p className='py-4'>CSS</p>
                </div>
                <div className='shadow-lg shadow-purple-800 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt='JavaScript icon'/>
                    <p className='py-4'>JavaScript</p>
                </div>
                <div className='shadow-lg shadow-purple-800 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={REACT} alt='REACT icon'/>
                    <p className='py-4'>React</p>
                </div>
                <div className='shadow-lg shadow-purple-800 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={BOOTSTRAP} alt='Bootstrap icon'/>
                    <p className='py-4'>Bootstrap</p>
                </div>
                <div className='shadow-lg shadow-purple-800 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt='GitHub icon'/>
                    <p className='py-4'>GitHub</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Skills