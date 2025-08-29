import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 
import { NavLink } from "react-router-dom"; // ✅ Use NavLink for routing

const Portheader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "PROJECTS", path: "Projects" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-600/90 to-purple-600/90 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        
        {/* Logo / Title */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide drop-shadow-lg">
          Welcome to my <span className="text-yellow-300">portfolio!!</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center font-semibold text-white tracking-wide">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative cursor-pointer transition duration-300 hover:text-yellow-300 
              after:content-[''] after:absolute after:-bottom-1 after:left-1/2 
              after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-yellow-300 
              after:transition-all after:duration-300 hover:after:w-full"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "text-yellow-300 font-bold" : "text-white"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          {isOpen ? (
            <FaTimes onClick={() => setIsOpen(false)} />
          ) : (
            <FaBars onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <ul
        className={`md:hidden flex flex-col items-center gap-6 py-6 bg-indigo-700/95 
        rounded-b-2xl shadow-lg transition-all duration-500 ease-in-out 
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
      >
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer text-lg font-medium transition duration-300 hover:text-yellow-300"
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "text-yellow-300 font-bold" : "text-white"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Portheader;

