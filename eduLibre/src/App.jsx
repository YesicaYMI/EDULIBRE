import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SelectionMenu from './components/SelectionMenu';
import MateriasMenu from './components/MateriasMenu';
import GradosMenu from './components/GradosMenu';
import ForgotPasswordPage from './pages/ForgotPassword';


function App() {
  return (

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/selection" element={<SelectionMenu />} />
          <Route path="/materias" element={<MateriasMenu />} />
          <Route path="/grados" element={<GradosMenu />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        </Routes>  
  )
}
export default App;
