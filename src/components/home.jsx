import React from 'react';
import dotted from '../../public/assets/dotted_halftone.png';
const home = () => {
  return (
    <>
      <div className='flex flex-col h-[calc(100vh-70px)] z-10'>
        <div className='fixed bg-[url("../../public/assets/dotted_halftone.png")] h-[calc(65vh)] w-[calc(70vw)] bg-cover z-20 opacity-[0.2] bottom-0 left-[15vw]' />
        <div className='p-3 w-[80vw]'>
          <div className='font-urbanist font-bold text-4xl sm:text-8xl'>
            Let's build something great together
          </div>
          <div className='mt-5 text-vivid-green font-sometype-mono'>
            FullStack Developer
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
