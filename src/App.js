import React from 'react';
import './App.css'; // Estilos de la página

// Importamos el logo
import Logo from './images/Logo.png'; 

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="Logo" />
        </div>
        <nav className="menu-container">
          <ul className="menu">
            <li><a href="/Login">Ingreso</a></li>
            <li><a href="/registro">Registro</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Bienvenido a EduLibre</h1>
          <p>La mejor plataforma para educación accesible y gratuita.</p>
          <div className="hero-buttons">
            <a href="/Login" className="btn-primary">Comenzar Ahora</a>
            <a href="/informacion" className="btn-secondary">Más Información</a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 EduLibre. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
