import React from 'react';
import { Link} from 'react-router-dom';
import Emojis from '../images/Emojis.svg';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Home.css'


const HeroSection = () => (
  
  <section className="hero-section">
    <div className="hero-content">
    <h1 className="header-title">EduLibre</h1>
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

const Home = () => (
  <div>
    <Header />
    <HeroSection />
    <BenefitsSection />
    <Footer />
  </div>
);

export default Home;
