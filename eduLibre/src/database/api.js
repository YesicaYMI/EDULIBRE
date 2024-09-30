import express from 'express';
import { getConfig } from './dbConfig.js';
import bcrypt from 'bcryptjs';

const router = express.Router();

router.post('/register', async (req, res) => {
    const { cedula, edad, nombre, email, contraseña, rol } = req.body;

    try {
        // Hashear la contraseña
        const salt = await bcrypt.genSalt(10);
        const contraseñaHash = await bcrypt.hash(contraseña, salt);

        // Conectar a la base de datos
        const pool = await getConfig();

        // Insertar el nuevo usuario en la base de datos
        const result = await pool.request()
            .input('Cedula', mssql.NVarChar, cedula)
            .input('Edad', mssql.Int, edad)
            .input('Nombre', mssql.NVarChar, nombre)
            .input('Email', mssql.NVarChar, email)
            .input('ContraseñaHash', mssql.NVarChar, contraseñaHash)
            .input('Rol', mssql.NVarChar, rol)
            .query('INSERT INTO Usuarios (Cedula, Edad, Nombre, Email, ContraseñaHash, Rol) VALUES (@Cedula, @Edad, @Nombre, @Email, @ContraseñaHash, @Rol)');

        res.status(201).send({ success: true, message: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).send({ success: false, error: 'Error al registrar usuario' });
    }
});

export default router;
