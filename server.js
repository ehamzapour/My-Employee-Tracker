const mysql = require ('mysql2');
const inquirer = require('inquirer');
require('console.table');


//Connect to Database
const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Sardasht1!',
        database: 'employee_db'
    }
);

//Connect to MySQL Server and Database
connection.connect(err => {
    if (err) throw err;
    startPrompt();
});

//Welcome Message
startPrompt = () => {
    console.log("EMPLOYEE TRACKER")
    options();
};

//Prompt to Choose from List
const options = () => {
    inquirer.prompt (
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: [
                'View All Employees',
                'View All Departments',
                'View All Roles',
                'Add Employee',
                'Add Role',
                'Add Department',
                'Update Employee Role',
                'Quit'
            ]
        }

    )

    .then(answer => {
        switch (answer.choices) {

        case "View All Employees":
            showEmployees();
            break;

        case "View All Departments":
            showDepartments();
            break;

        case "View All Roles":
            showRoles();
            break;
        

        case "Add Employee":
            addEmployee();
            break;
        

        case "Add Role":
            addRole();
            break;
        

        case "Add Department":
            addDepartment();
            break;
        

        case "Update Employee Role":
            updateRole();
            break;
        

        case "Quit":
            connection.end()
            break;
        }
    });
};

//View All Employees
function showEmployees() {
    connection.promise().query('SELECT * FROM employee').then(allEmployees => {
        console.table(allEmployees[0])
        options();
    })
}

//View All Departments
function showDepartments() {
    connection.promise().query('SELECT * FROM department').then(allDepartments => {
        console.table(allDepartments[0])
        options();
    })
}

//View All Roles
function showRoles() {
    connection.promise().query('SELECT * FROM roles').then(allRoles => {
        console.table(allRoles[0])
        options();
    })
}

   
                        


//View All Departments
// showDepartments = () => {
//     const sql = 'SELECT * FROM department';

//     connection.query((err, res) => {
//         if (err) throw err;
//         console.table('All Departments:', res);
//         option();
//     })
// };

//View All Roles
// showRoles = () => {
//     const sql = 'SELECT * FROM roles';

//     connection.query((err, res) => {
//         if (err) throw err;
//         console.table('All Roles:', res);
//         option();
//     })
// };

// //Add Employee
// addEmployee = () => {
//     connection.query('SELECT * FROM', (err, res) => {
//         if (err) throw err;
//         inquirer.prompt ([
//             { 
//                 name: 'first_name',
//                 type: 'input',
//                 message: "What is the employee's first name?",
//             },
//             {
//                 name: 'last_name',
//                 type: 'input',
//                 message: "What is the employee's last name?",
//             },
//             {
//                 name: 'role_id',
//                 type: 'input',
//                 message: "What is the employee's role?",
//             }
//         ])
//     })
