import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ForgotPassword.css'

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        if (!email.includes('@')) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor ingrese un correo electrónico válido.',
            });
            setIsLoading(false);
            return;
        }

        // Simulación de una solicitud de recuperación de contraseña
        setTimeout(() => {
            Swal.fire({
                icon: 'success',
                title: 'Solicitud enviada',
                text: 'Se ha enviado un enlace de restablecimiento de contraseña a su correo electrónico.',
            });
            setIsLoading(false);
            navigate('/login');
        }, 2000);
    };

    return (
        <div className="forgot-password-page">
            <Header />

            <main className="forgot-password-main">
                <div className="forgot-password-container">
                    <div className="forgot-password-header">
                        <h1 className="forgot-password-title">¿Olvidó su contraseña?</h1>
                        <p className="forgot-password-description">
                            Ingrese su correo electrónico y le enviaremos un enlace para restablecer su contraseña.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="forgot-password-form">
                        <div className="forgot-password-input-container">
                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="forgot-password-input"
                            />
                        </div>
                        <button type="submit" className="forgot-password-button" disabled={isLoading}>
                            {isLoading ? 'Enviando...' : 'Enviar enlace de restablecimiento'}
                        </button>
                    </form>
                    <div className="forgot-password-footer">
                        <Link to="/login" className="forgot-password-login-link">
                            Volver a iniciar sesión
                        </Link>
                        <p className="forgot-password-register-prompt">
                            ¿No tiene una cuenta?{' '}
                            <Link to="/register" className="forgot-password-register-link">
                                Regístrese aquí
                            </Link>
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}