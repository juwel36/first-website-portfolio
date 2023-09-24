import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {
  return (
    <div className='flex justify-between shadow-md pb-3 p-5'>
      <div className='text-2xl text-yellow-800'>Goriber Daraz</div>
      <div className=''>
     
      <nav>
      <NavLink className='mr-3' to="/">Home</NavLink>
      <NavLink className='mr-3' to="/about">About</NavLink>
      <NavLink className='mr-3' to="/contact">Contact</NavLink>
      <NavLink className='mr-3' to="/users">Users</NavLink>
      <NavLink to="/dashbord">Dashbord</NavLink>
      </nav>
      </div>
    </div>
  );
};

export default Header;
