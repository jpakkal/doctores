const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});

connection.connect();

function query(string, parameters = []) {
    return new Promise(function (resolve, reject) {
        connection.query(string, parameters, function (err, results) {
            if (err) reject(err)
            else resolve(results)
        })
    });
}

module.exports = { query };