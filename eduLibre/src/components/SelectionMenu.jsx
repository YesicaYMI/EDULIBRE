import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function SelectionMenu() {
  const navigate = useNavigate();

  const handleMateriasClick = () => {
    navigate('/materias');
  };

  const handleGradosClick = () => {
    navigate('/grados');
  };

  return (
    <>
      <Header />
      <div className="selection-menu">
        <h1>Vamos a escoger</h1>
        <div className="options">
          <button onClick={handleMateriasClick} className="option-button">Por Materias</button>
          <button onClick={handleGradosClick} className="option-button">Por Grados</button>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default SelectionMenu;
