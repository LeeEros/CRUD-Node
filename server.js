const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'mariadb',
    user: 'root',
    password: 'root',
    database: 'crud'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to MariaDB:', err.stack);
        return;
    }
    console.log('Connected to MariaDB as id', connection.threadId);
});

app.get('/', (req, res) => {
    connection.query('SELECT NOW()', (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
