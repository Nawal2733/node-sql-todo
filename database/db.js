const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'todoDatabase',
    insecureAuth: true
});

db.connect((err) => {
    if (err) {
        throw err;

    }
    console.log("database connected ......!");

    db.query('CREATE DATABASE IF NOT EXISTS todoDatabase', (err, result) => {
        if (err) throw err;
        console.log(`Database Created........!`)
        const sql = "CREATE TABLE IF NOT EXISTS todos (id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(1000), auth varchar(20), date varchar(50), PRIMARY KEY(id))";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Table created");

        });
    })



});

module.exports = db;