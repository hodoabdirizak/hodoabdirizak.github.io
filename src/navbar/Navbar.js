import React from "react";
import "./Navbar.css";

const Navbar = ({ onLinkClick }) => {

  const renderNavLinks = () => {

    return (
      <ul className='nav__list'>
        <li>
          <button className="nav__link" onClick={() => { onLinkClick('about'); }}>
            About
          </button>
        </li>
        <li>
          <button className="nav__link" onClick={() => { onLinkClick('work'); }}>
            Work
          </button>
        </li>
        <li>
          <button className="nav__link" onClick={() => { onLinkClick('contact'); }}>
            Contact
          </button>
        </li>
      </ul>
    );
  };

  return (
    <header className="header">
      <nav className="nav container">
        <button className="nav__logo" onClick={() => onLinkClick('home')}>
          H+A
        </button>

        { (
          renderNavLinks()
        )}
      </nav>
    </header>
  );
};

export default Navbar;
