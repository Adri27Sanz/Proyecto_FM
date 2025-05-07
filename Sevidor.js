const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",  
    user: "root",
    password: "AdriMartinezSanz27",
    database: "refugioanimales",
  charset: 'utf8mb4' 
});

 connection.connect((err) => {
     if (err) {
         console.error('Error conectando a MySQL:', err);
         return;
     }
     console.log('Conexión a MySQL exitosa ✅');
 });
 function queryDatabase(query, params = []) {
     return new Promise((resolve, reject) => {
         connection.query(query, params, (err, results) => {
             if (err) {
                 return reject(err);
             }
             resolve(results);
         });
     });
 }

 module.exports = { connection, queryDatabase };

