import React from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const NavLinkStyle = ({ isActive }) =>
    isActive
      ? 'bg-vivid-green px-4 py-2 rounded-xl text-black font-semibold'
      : 'bg-jet-black px-4 py-2 rounded-xl';
  return (
    <div className='flex font-sometype-mono h-[70px] justify-between py-2 px-[10px]'>
      <div className='text-slate-gray font-bold'>
        <Link to='home'>
          <div>Pratyush</div>
          <div>Srivastava</div>
        </Link>
      </div>
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        color={'#02d866'}
        rounded={true}
        easing='ease-in-out'
        size={25}
        distance='lg'
      />
      {isOpen && (
        <div className='fixed right-0 top-[70px] mr-2 bg-slate-gray px-3 py-6 rounded-2xl z-50 font-urbanist'>
          <div className='flex flex-col w-[45vw] gap-3'>
            <NavLink
              to='home'
              onClick='setOpen(false)'
              className={NavLinkStyle}
            >
              Home
            </NavLink>
            <hr className='bg-black border-0 h-1' />
            <NavLink
              to='about'
              onClick='setOpen(false)'
              className={NavLinkStyle}
            >
              About
            </NavLink>
            <NavLink
              to='work'
              onClick='setOpen(false)'
              className={NavLinkStyle}
            >
              Work
            </NavLink>
            <NavLink
              to='contact'
              onClick='setOpen(false)'
              className={NavLinkStyle}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default navbar;
