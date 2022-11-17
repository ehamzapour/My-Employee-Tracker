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
    inquirer.prompt ([
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

    ])

    .then((answer) => {
        switch (answer.choices) {

        case "View all employees":
            showEmployees();
            break;

        case "View all departments":
            showDepartments();
            break;

        case "View all roles":
            showRoles();
            break;
        

        case "Add employee":
            addEmployee();
            break;
        

        case "Add role":
            addRole();
            break;
        

        case "Add department":
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
showEmployees = () => {
    var query = 'SELECT * FROM employee';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log(res.length + 'Success!');
        console.table('All Employees:', res);
    })
};
    

   
                        


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
