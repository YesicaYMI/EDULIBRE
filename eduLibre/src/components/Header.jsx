import React from 'react';
import Logo from '../images/Logo.svg';
import EduLibre from '../images/EduLibre.svg';
import '../styles/Header.css'

const Header = () => (
  <header className="header">
    <div className="logo-container">
      <img src={Logo} alt="Logo" className="Logo" />
      <img src={EduLibre} alt="Letra del logo" className="Logo" />
    </div>
  </header>
);

export default Header;
