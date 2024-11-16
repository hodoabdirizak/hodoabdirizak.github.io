import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Navbar.css";

const Navbar = ({ onLinkClick }) => {
  const isMobile = useMediaQuery({ maxWidth: "767px" });

  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";

    return (
      <ul className={listClassName}>
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
