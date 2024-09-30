import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bcrypt from 'bcryptjs';

function Register() {
  const [cedula, setCedula] = useState('');
  const [edad, setEdad] = useState('');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('Estudiante');
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

    if (isNaN(edad) || edad <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor ingrese una edad válida.',
      });
      return;
    }

    if (nombre.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor ingrese un nombre válido.',
      });
      return;
    }

    if (!email.includes('@')) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor ingrese un correo electrónico válido.',
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
      const hashedPassword = await bcrypt.hash(password, 10);

      const response = await fetch('URL_DEL_BACKEND', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cedula, nombre, email, contraseñaHash: hashedPassword, rol}),
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: '¡Bienvenido a EduLibre!',
        }).then(() => {
          navigate('/selection');
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

  const iconSources = [
    {
        src: 'https://img.freepik.com/vector-premium/100-o-dia-escuela-dibujos-animados-color-clipart_576561-6416.jpg',
        alt: 'School building icon'
    },
    {
        src: 'https://us.123rf.com/450wm/kuklamalvina/kuklamalvina2403/kuklamalvina240300142/230105802-libro-antiguo-abierto-con-marcador-y-hojas-de-papel-rayadas-vac%C3%ADas.jpg?ver=6',
        alt: 'Open book icon'
    },
    {
        src: 'https://i.pinimg.com/736x/66/16/41/661641025b358aff6dbdbb72b086af67.jpg',
        alt: 'Smartphone icon'
    },
    {
        src: 'https://us.123rf.com/450wm/platypusmi86/platypusmi861806/platypusmi86180601201/115499411-colorido-bloc-de-notas-abierto-en-espiral-con-marcadores-limpie-la-p%C3%A1gina-y-c%C3%BAbrala-con-pegatinas.jpg?ver=6',
        alt: 'Notebook icon'
    },
    {
        src: 'https://www.shutterstock.com/image-vector/gorro-gorra-o-birrete-de-600nw-1909825534.jpg',
        alt: 'Graduation cap icon'
    },
    {
        src: 'https://i.pinimg.com/736x/e7/7d/93/e77d934bdb53572b7a3f8da4e95b1a4f.jpg',
        alt: 'Backpack icon'
    }
];

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
            <label>Nombre:</label>
            <input 
              type="text" 
              value={nombre} 
              onChange={(e) => setNombre(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <label>Edad:</label>
            <input 
              type="number" 
              value={edad} 
              onChange={(e) => setEdad(e.target.value)} 
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
          <div className="input-group">
            <label>Rol:</label>
            <select value={rol} onChange={(e) => setRol(e.target.value)} required>
              <option value="Estudiante">Estudiante</option>
              <option value="Administrador">Administrador</option>
            </select>
          </div>
          <button type="submit" className="register-button">Regístrese aquí</button>
        </form>
        <p className="login-link">
          ¿Ya tiene cuenta? <span onClick={handleLoginRedirect} className="login-link-text">Iniciar Sesión</span>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Register;