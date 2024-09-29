import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';// Asegúrate de tener los estilos necesarios

function MateriasMenu() {
  const navigate = useNavigate();

  const handleMatematicasClick = () => {
    navigate('/matematicas');
  };

  const handleLecturaCriticaClick = () => {
    navigate('/lectura-critica');
  };

  const handleSocialesYCiudadanasClick = () => {
    navigate('/sociales-y-ciudadanas');
  };

  const handleCienciasNaturalesClick = () => {
    navigate('/ciencias-naturales');
  };

  const handleInglesClick = () => {
    navigate('/ingles');
  };

  return (
    <>
        <Header />
        <div className="materias-menu">
      
            <div className="question-container">
                <button onClick={() => navigate('/grados')} className="question-button">¿Quieres escoger por grado?</button>
            </div>
            <h1>Vamos a escoger</h1>
            <div className="options">
                <button onClick={handleMatematicasClick} className="option-button">Matemáticas</button>
                <button onClick={handleLecturaCriticaClick} className="option-button">Lectura Crítica</button>
                <button onClick={handleSocialesYCiudadanasClick} className="option-button">Sociales y Ciudadanas</button>
                <button onClick={handleCienciasNaturalesClick} className="option-button">Ciencias Naturales</button>
                <button onClick={handleInglesClick} className="option-button">Inglés</button>
            </div>
        </div>
        <Footer />
    </>

  );
}

export default MateriasMenu;
