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

//Prompt to Choose from List
const options = () => {
    inquirer.prompt ({
        type: 'list',
        name: 'actions',
        message: 'What would you like to do?',
        choices: [
            'View all employees',
            'View all departments',
            'View all roles',
            'Add employee',
            'Add role',
            'Add department',
            'Quit'
        ]

    })

    .then((answers) => {
        const { choices } = answers;

        if(choices === "View all employees") {
            showEmployees();
        }

        if(choices === "View all departments") {
            showDepartments();
        }

        if(choices === "View all roles") {
            showRole();
        }

        if(choices === "Add employee") {
            addEmployee();
        }

        if(choices === "Add role") {
            addRole();
        }

        if(choices === "Add department") {
            addDepartment();
        }

        if(choices === "Quit") {
            connection.end();
        }
    })
};