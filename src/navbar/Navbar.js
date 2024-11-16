import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import "./Navbar.css";

const Navbar = ({ onLinkClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "769px" });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";

    return (
      <ul className={listClassName}>
        <li>
          <button className="nav__link" onClick={() => { onLinkClick('about'); closeMobileMenu(); }}>
            About
          </button>
        </li>
        <li>
          <button className="nav__link" onClick={() => { onLinkClick('work'); closeMobileMenu(); }}>
            Work
          </button>
        </li>
        <li>
          <button className="nav__link" onClick={() => { onLinkClick('contact'); closeMobileMenu(); }}>
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
