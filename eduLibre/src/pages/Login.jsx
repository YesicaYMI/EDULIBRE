import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

import Logo from '../images/Logo.svg';
import EduLibre from '../images/EduLibre.svg';
import GoogleLogo from '../images/google-logo.png';
import FacebookLogo from '../images/facebook-logo.png';
import ButtonsLogin from '../components/ButtonsLogin';

const Header = () => (
  <header className="header">
    <div className="logo-container">
      <img src={Logo} alt="Logo" className="Logo" />
      <img src={EduLibre} alt="Letra del logo" className="Logo" />
    </div>
  </header>
);

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setError('Por favor ingrese un email válido.');
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
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert('Login exitoso');
      } else {
        setError('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error en la autenticación:', error);
      setError('Hubo un error en el servidor. Intente nuevamente.');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <div className="login-page">
      <Header />
      <h1>Ya está aprendiendo con nosotros?</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Usuario:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
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
        <button type="submit" className="login-button">Continue aquí</button>
      </form>
      <div className="social-login">
        <button className="google-button">
          <img src={GoogleLogo} alt="Google Logo" className="social-logo" />
          Acceder con Google
        </button>
        <button className="facebook-button">
          <img src={FacebookLogo} alt="Facebook Logo" className="social-logo" />
          Acceder con Facebook
        </button>
      </div>
      <p className="register-link">
        ¿Aún no tiene cuenta? <span onClick={handleRegisterRedirect} className="register-button">Regístrese aquí</span>
      </p>
    </div>
  );
}

export default Login;
