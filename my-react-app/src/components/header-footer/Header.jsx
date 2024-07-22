import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <img src={logo} alt="Logo" />
          <h2>Portfolio</h2>
        </div>
        <div className={`${styles.links} ${isMenuOpen ? styles.showMenu : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className={styles.social}>
        <a href="https://www.instagram.com/amxnnnnn.___?igsh=MWUyOGNyNmZqdHBhcA=="><i className="bi bi-instagram" style={{color:'#C13584'}}> </i> </a>
        <a href="https://www.linkedin.com/in/aman-mandahad"> <i className="bi bi-linkedin" style={{color:'#1DA1F2'}}></i></a>
        <a href="https://github.com/Amanmandahad">  <i className="bi bi-github"></i> </a> 
        </div>
        <button className={styles.toggleButton} onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </div>
  );
};

export default Header;





























