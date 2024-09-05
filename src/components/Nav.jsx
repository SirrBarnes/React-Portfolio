// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';

import './UI/Navbar.css'

const Nav = () => {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <header>
      <nav>
        <h2 className = "header">Sergio Torres</h2>
        <Link to="/about" className = "activeLink">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
      </nav>
    </header>
  );
};

export default Nav;