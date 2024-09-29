import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function GradosMenu() {
  const navigate = useNavigate();

  const handleGradoClick = (grado) => {
    navigate(`/grado/${grado}`);
  };

  return (
    <div className="grados-menu">
      <Header />
      <button onClick={() => navigate('/materias')} className="question-button">¿Quieres escoger por materia?</button>
      <h1>Vamos a escoger</h1>
      <div className="options">
        {[...Array(12).keys()].map((i) => (
          <button
            key={i + 1}
            onClick={() => handleGradoClick(i + 1)}
            className="option-button"
          >
            {i + 1}
          </button>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default GradosMenu;
