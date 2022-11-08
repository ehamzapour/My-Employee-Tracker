const mysql = require ('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

//Connect to Database
const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: process.env.MYSQL_PASSWORD,
        database: 'employee_db'
    }
);

//Connect to MySQL Server and Database
connection.connect(err => {
    if (err) throw err;
    options();
});

