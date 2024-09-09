import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.svg';
import EduLibre from '../images/EduLibre.svg';

function Home() {
  return (
    <div>
      <header className="header">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="Logo" />
          <img src={EduLibre} alt="Letra del logo" className="Logo" />
        </div>
        <nav className="menu-container">
          <ul className="menu">
            <li><Link to="/login">Ingreso</Link></li>
            <li><Link to="/registro">Registro</Link></li>
          </ul>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Bienvenido a EduLibre</h1>
          <p>La mejor plataforma para educación accesible y gratuita.</p>
          <div className="hero-buttons">
            <Link to="/login" className="btn-primary">Comenzar Ahora</Link>
            <Link to="/informacion" className="btn-secondary">Más Información</Link>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="benefit">
          <h2>Educación Accesible</h2>
          <p>Accede a cursos gratuitos y refuerza tus conocimientos.</p>
        </div>
        <div className="benefit">
          <h2>Estudia a tu Ritmo</h2>
          <p>Organiza tu propio plan de estudio y sigue tu progreso.</p>
        </div>
        <div className="benefit">
          <h2>Título Oficial</h2>
          <p>Prepárate para obtener tu título de bachiller con nuestros recursos.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 EduLibre. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
