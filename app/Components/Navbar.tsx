"use client";

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-[#FFF9F1]"> {/* Adjust background color */}
      {/* Logo */}
      <div className="text-xl font-bold text-Black">LOGO</div>

      {/* Links and Buttons */}
      <ul className="flex space-x-4 items-center">
        {/* Become a Seller link */}
        <li>
          <a href="#" className="text-Red font-bold rounded-full px-3 py-1 transition">
            Become a Seller
          </a>
        </li>

        {/* Log in link */}
        <li>
          <a href="#" className="text-Red font-bold px-8 py-2 hover:bg-lightRed rounded-full transition">
            Log in
          </a>
        </li>

        {/* Sign up button */}
        <li>
          <button className="px-8 py-2 bg-Red font-bold text-white rounded-full transition">
            Sign up
          </button>
        </li>

        {/* Language selection button */}
        <li>
          <button className="text-Red bg-lightRed font-bold rounded-lg px-3 py-1 flex items-center">
            EN <span className="ml-1 text-Black">▼</span> {/* Arrow Icon */}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
