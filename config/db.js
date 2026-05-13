const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Muiz0387#',
    database: 'lms'
});

module.exports = db.promise(); // Using promise() makes your code cleaner (async/await)