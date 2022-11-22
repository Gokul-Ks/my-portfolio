import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Gokul K S, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building mini-projects and exploring the developer space.
               My skillset include building responsive web applications with MERN stack. 
               I love to try out new tools and constantly engaged with developer communities </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
