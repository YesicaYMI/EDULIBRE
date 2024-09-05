import React from 'react';
import './App.css'; // Importamos los estilos

// Importamos las imágenes
import Logo from './images/Logo.png'; 

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="Logo" />
        </div>
        <nav className="menu-container">
          <ul className="menu">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#informacion">Información</a></li>
            <li><a href="#cursos">Cursos</a></li>
            <li><a href="#ingreso">Ingreso</a></li>
            <li><a href="#registro">Registro</a></li>
          </ul>
        </nav>
      </header>
      <main>


        
      </main>
    </div>
  );
}

export default App;
