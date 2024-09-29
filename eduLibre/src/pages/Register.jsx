import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from '../components/Header';
import Footer from '../components/Footer';



function Register() {
  const [cedula, setCedula] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (cedula.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor ingrese un número de cédula válido.',
      });
      return;
    }

    if (isNaN(age) || age <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor ingrese una edad válida.',
      });
      return;
    }

    if (password.length < 6) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La contraseña debe tener al menos 6 caracteres.',
      });
      return;
    }

    try {
      const response = await fetch('URL_DEL_BACKEND', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cedula, age, password }),
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: '¡Bienvenido a EduLibre!',
        }).then(() => {
          Swal.fire({
            title: 'Vamos a escoger',
            html: `
              <div style="display: flex; justify-content: space-around;">
                <button id="materias" class="swal2-confirm swal2-styled" style="background-color: green;">Por Materias</button>
                <button id="grados" class="swal2-confirm swal2-styled" style="background-color: green;">Por Grados</button>
              </div>
            `,
            showConfirmButton: false,
            didOpen: () => {
              document.getElementById('materias').addEventListener('click', () => {
                navigate('/materias');
              });
              document.getElementById('grados').addEventListener('click', () => {
                navigate('/grados');
              });
            }
          });
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error en el registro',
        });
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error en el servidor. Intente nuevamente.',
      });
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <>
    <div className="register-page">
      <Header />
      <h1>Regístrese para comenzar a aprender</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Número de Cédula:</label>
          <input 
            type="text" 
            value={cedula} 
            onChange={(e) => setCedula(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label>Edad:</label>
          <input 
            type="number" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
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
        <button type="submit" className="register-button">Regístrese aquí</button>
      </form>
      <p className="login-link">
        ¿Ya tiene cuenta? <span onClick={handleLoginRedirect} className="login-link-text">Iniciar Sesión</span>
      </p>
    </div>
    <Footer/>
    </>
  );
}

export default Register;
