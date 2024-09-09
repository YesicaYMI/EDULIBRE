import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.svg';
import EduLibre from '../images/EduLibre.svg';
import Emojis from '../images/Emojis.svg';
import '../styles/Home.css'; // Asegúrate de tener un archivo CSS para los estilos

const Header = () => (
  <header className="header">
    <div className="logo-container">
      <img src={Logo} alt="Logo" className="Logo" />
      <img src={EduLibre} alt="Letra del logo" className="Logo" />
    </div>
  </header>
);

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-content">
      <img src={Emojis} alt="Emojis" className="Emojis" />
      <div className="hero-text">
        <p>Completa tu bachillerato de forma divertida, efectiva y sin costo.</p>
        <div className="hero-buttons">
          <Link to="/login" className="btn-primary">Empieza Ahora</Link>
        </div>
      </div>
    </div>
  </section>
);

const BenefitsSection = () => (
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
);

const Footer = () => (
  <footer className="footer">
    <p>© 2024 EduLibre. Todos los derechos reservados.</p>
  </footer>
);

const Home = () => (
  <div>
    <Header />
    <HeroSection />
    <BenefitsSection />
    <Footer />
  </div>
);

export default Home;
