import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
    host: '37.60.252.97',
    port: 5050,
    user: 'programacion_unac',
    password: 'unac_2024_programacion',
    database: 'db_programacion'
});

client.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Connection error', err.stack))
    .finally(() => client.end());