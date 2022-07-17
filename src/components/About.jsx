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
              <p>Hi. I'm Barry, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am currently a 4th year Computer Science and Business student in Trinity College, Dublin.
                 I am using my spare time to improve my skills as a full stack web developer, learning skills like;
                 Javascript, React.js, HTML, Vue.js, Node.js and CSS.

                 I have made this website as a personal portfolio to display all the personal projects I have worked on 
                 as well as what I have completed as part of my college coursework.
             </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;