
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        scrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/images/club-logo.png" alt="Tech Club Logo" className="h-10 w-10" />
          <span className="text-white text-xl font-bold">Tech Club</span>
        </div>
        <ul className="flex space-x-6 text-white text-lg">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Projects</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
