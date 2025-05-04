import React, { useState } from 'react';
import logoIMG from "../../assets/logo.svg"
import "./NavBar.css"
import { Menu, X } from 'lucide-react';


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className='nav-overview'>
      <div className='icon-img'>
        <img src={logoIMG} alt="Logo" />
      </div>

      <div className='hamburger' onClick={toggleMenu}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
      <a href="#" onClick={closeMenu}>Home</a>
          <a href="#" onClick={closeMenu}>About</a>
          <a href="#" onClick={closeMenu}>Contact</a>
          <a href="#" onClick={closeMenu}>Blog</a>
          <a href="#" onClick={closeMenu}>Careers</a>
      </div>



      <div className='request-button'>
        <button className='invite-btn'>Request Invite</button>
      </div>

      {menuOpen && <div className='nav-backdrop' onClick={closeMenu}></div>}
    </nav>
  );
};

export default NavBar;