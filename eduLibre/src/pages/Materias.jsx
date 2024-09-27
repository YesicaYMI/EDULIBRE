import React, { useEffect, useState } from 'react';

const Materias = () => {
    const [materias, setMaterias] = useState([]);

    useEffect(() => {
        // Simulación de una llamada a una API para obtener las materias
        const fetchMaterias = async () => {
            const response = await fetch('/api/materias'); // Reemplaza con la URL real de tu API
            const data = await response.json();
            setMaterias(data);
        };

        fetchMaterias();
    }, []);

    return (
        <div>
            <h1>Materias de EduLibre</h1>
            <ul>
                {materias.map((materia) => (
                    <li key={materia.id}>{materia.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default Materias;