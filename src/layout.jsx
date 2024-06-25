import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';

const layout = () => {
  return (
    <div className='bg-jet-black text-pale-gray'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default layout;
