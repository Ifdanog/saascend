import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-between px-8 py-4 bg-[#eee]">
      <h1>Saascend</h1>
      <ul className="flex gap-[20px] m-0 p-0">
        <li>
          <Link to="/" className="text-black">
            Home
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="text-black">
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/team" className="text-black">
            Team
          </Link>
        </li>
        <li>
          <Link to="/blog" className="text-black">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-black">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
