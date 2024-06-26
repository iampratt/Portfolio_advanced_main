import React from 'react';
import data from '../assets/data';

const about = () => {
  return (
    <div className='flex flex-col h-[calc(100vh-70px)] z-10 p-3'>
      <div className='flex flex-row text-pale-gray font-urbanist text-2xl font-semibold justify-center'>
        Hey there! I am Pratyush
      </div>
      <div className='mt-10 snap-x snap-mandatory flex flex-row overflow-scroll'>
        {data.about.map((value) => {
          console.log(value);
          return (
            <div className='snap-start pb-2'>
              <div className='text-vivid-green text-nowrap mx-2 flex justify-center'>
                {value[0]}
              </div>
              <div className='border-b-[3px] mt-2' />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default about;
