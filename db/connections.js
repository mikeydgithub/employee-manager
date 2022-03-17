// Connect to the MySQL Database
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'slack',
        database: 'company'
    },
    console.log('Connected to Company database.')
);

module.exports = db;