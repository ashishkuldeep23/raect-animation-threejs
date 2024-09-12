import React from 'react';
import {  useNavigate } from 'react-router-dom';



// // // // Make it letar -------------->


const Navbar = () => {

  const navigate = useNavigate();
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/mac-book', label: 'MacBook' },
    { path: '/ashish', label: 'Ashish' },
  ];

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-4">
        {navItems.map((item, index) => (
          <li key={index}>
            <button
              // to={item.path} 
              onClick={() => navigate(item.path)}
              className="text-white hover:text-gray-300"
            >{item.label}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
