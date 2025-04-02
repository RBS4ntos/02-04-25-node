import mysql from 'mysql2';

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'senac@02',
    database: 'rafael'
}).promise();

const insert = await pool.query("select * from `vscode`.`codigos` limit 5 offset 2;");
console.log(insert)

