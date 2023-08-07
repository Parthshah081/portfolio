import React from 'react'

const About = () => {
    return (
        <>
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-4'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-4 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'am Parth Shah, nice to meet you, Please take a look around.</p>
                    </div>
                    <div>
                        <p>I'm passionate and dedicated Front-End Developer based in Ahmedabad. I'm always excited to take on new challenges that allow me to expand my horizons. I am driven by a desire to create meaningful and impactful solutions that resonate with audiences and leave a positive impression. In every project, my goal is to deliver not only visually appealing work but also effective and user-friendly experiences. </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About