import React, { useState } from 'react';

function Registro() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();

    if (username.length < 3) {
      setError('El nombre de usuario debe tener al menos 3 caracteres.');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    setError(''); // Limpiar errores

    try {
      const response = await fetch('URL_DEL_BACKEND', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert('Registro exitoso');
      } else {
        setError('Error en el registro');
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      setError('Hubo un error en el servidor. Intente nuevamente.');
    }
  };

  return (
    <div className="registro-page">
      <h1>Registro</h1>
      <form onSubmit={handleRegister}>
        <div className="input-group">
          <label>Usuario:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label>Contraseña:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="registro-button">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;
