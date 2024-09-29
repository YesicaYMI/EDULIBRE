import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/SelectionMenu.css';

function Metodo() {
    const navigate = useNavigate();

    const handleMateriasClick = () => {
        navigate('/materias');
    };

    const handleGradosClick = () => {
        navigate('/grados');
    };

    return (
        <div className="metodo-page">
            <Header />
            <h1>Vamos a escoger</h1>
            <div className="options-container">
                <div className="option-card" onClick={handleMateriasClick}>
                    <h2>Por Materias</h2>
                </div>
                <div className="option-card" onClick={handleGradosClick}>
                    <h2>Por grados</h2>
                </div>
            </div>
            <div className="buttons-container">
                <button className="continue-button" onClick={handleMateriasClick}>Continue aquí</button>
                <button className="continue-button" onClick={handleGradosClick}>Continue aquí</button>
            </div>
        </div>
    );
}

export default Metodo;
