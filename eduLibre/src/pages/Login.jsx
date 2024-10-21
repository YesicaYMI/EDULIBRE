import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LogoLogin from '../images/LogoLogin.svg';
import '../styles/Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (username.trim() === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor ingrese un nombre de usuario válido.',
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
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Login exitoso',
                    text: 'Bienvenido de nuevo!',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Credenciales incorrectas',
                });
            }
        } catch (error) {
            console.error('Error en la autenticación:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error en el servidor. Intente nuevamente.',
            });
        }
    };

    const handleRegisterRedirect = () => {
        navigate('/register');
    };

    const handleForgotPasswordRedirect = () => {
        navigate('/forgot-password'); 
    };

    return (
        <>
        <div className="login-page">
            <Header />
            <img src={LogoLogin} alt="Emojis" className="Emojis" />
            <span class="highlight">¿Ya estas aprendiendo con nosotros?</span>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Usuario"
                        required
                    />
                </div>
                <div className="input-group">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Contraseña"
                        required
                    />
                </div>
                <button type="submit" className="login-button">Continue aquí</button>
            </form>
            <p className="forgot-password">
                <span onClick={handleForgotPasswordRedirect} className="forgot-password-link">
                    ¿Olvidaste tu contraseña?
                </span>
            </p>
            <p className="register-link">
                ¿Aún no tiene cuenta?{' '}
                <span onClick={handleRegisterRedirect} className="register-button">
                    Regístrese aquí
                </span>
            </p>
        </div>
        <Footer/>
        </>
    );
}

export default Login;
