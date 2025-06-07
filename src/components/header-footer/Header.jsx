import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../Images/logo (3).png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.logo}>
     <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
          <h2>Portfolio</h2>
        </div>
        <div className={`${styles.links} ${isMenuOpen ? styles.showMenu : ''}`}>
          <ul>
  <li>
    <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
  </li>
  <li>
    <NavLink to="/skills" onClick={() => setIsMenuOpen(false)}>Skills</NavLink>
  </li>
  <li>
    <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
  </li>
  <li>
    <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
  </li>
</ul>

        </div>
     
        <button className={styles.toggleButton} onClick={toggleMenu}>
         {isMenuOpen ? "X" : " ☰"}
        </button>
      </div>
    </div>
  );
};

export default Header;





























