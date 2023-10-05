import React from "react";
import "./navbar.css"

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <a className="social" href="#slider">Главная</a>
        </li>
        <li>
          <a className="social" href="#footer">Контакты</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
