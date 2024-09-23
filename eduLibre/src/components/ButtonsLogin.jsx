import React from 'react';

function ButtonsLogin({ handleLogin, handleRegister }) {
  return (
    <div className="buttons-login">
      <button className="login-button" onClick={handleLogin}>Iniciar Sesión</button>
      <button className="register-button" onClick={handleRegister}>Registrarse</button>
    </div>
  );
}

export default ButtonsLogin;
