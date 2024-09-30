import mssql from 'mssql';

const config = {
    server: 'LAPTOP-LQQLNC6E\\SQLEXPRESS',
    database: 'eduLibre',
    options: {
        encrypt: true,
        trustServerCertificate: true 
    },
    authentication: {
        type: 'ntlm',
        options: {
            domain: '',
            userName: '', 
            password: '' 
        }
    }
};
export async function getConfig(){
    try{
        return await mssql.connect(config);

    }
    catch(error){
        console.error('Error en la conexión a la base de datos:', error);
    }
}

export {mssql};
