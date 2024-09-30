import mssql from 'mssql';

const config = {
    server: 'LAPTOP-LQPTENLC\\SQLEXPRESS',
    database: 'eduLibre',
    options: {
        encrypt: false,  
        trustServerCertificate: true 
    },
};

export const getConfig = async () => {
    try {
        const pool = await mssql.connect(config);
        console.log('Conectado a la base de datos');
        return pool;
    } catch (err) {
        console.error('Error al conectar a la base de datos:', err);
        throw err;
    }
};