import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#eee]/10 backdrop-blur-lg px-6 sm:px-8 py-4 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="font-black text-xl">Saascend</h1>

        {/* Desktop menu */}
        <ul className="hidden lg:flex gap-6">
          {["Home", "Portfolio", "Team", "Blog", "Contact Us"].map((item) => (
            <li key={item}>
              <Link
                to={`/${
                  item === "Home" ? "" : item.toLowerCase().replace(/\s+/g, "")
                }`}
                className="text-black font-medium text-sm hover:underline"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className="lg:hidden text-black focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? "x" : "..."}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="mt-6 flex flex-col gap-4 lg:hidden">
          {["Home", "Portfolio", "Team", "Blog", "Contact Us"].map((item) => (
            <li key={item}>
              <Link
                to={`/${
                  item === "Home" ? "" : item.toLowerCase().replace(/\s+/g, "")
                }`}
                className="block text-black font-medium text-md hover:underline"
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
