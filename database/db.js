const mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'todoDatabase',
    insecureAuth: true
});

db.connect((err) => {
    if (err) {
        throw err;
        // if (err.message.includes('Unknown database')) {
        //     const query = `CREATE DATABASE todoDatabase`;
        //     db.query(query, (err, result) => {
        //         if (err) throw err;
        //         console.log('Database created..')
        //     })
        // }
        // try {
        //     console.log("err");
        // } catch (err) {
        //     console.log(err)
        //     if (err === 'ER_BAD_DB_ERROR') {
        //         const query = `CREATE DATABASE todoDatabase`;
        //         db.query(query, (err, result) => {
        //             if (err) throw err;
        //             console.log('Database created..')
        //         })
        //     }
        // }
    }
    console.log("database connected ......!");
    // var sql = "CREATE TABLE todos (title VARCHAR(255), body VARCHAR(1000))";
    // db.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("Table created");
    // });

});

module.exports = db;