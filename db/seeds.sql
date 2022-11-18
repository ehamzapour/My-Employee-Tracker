INSERT INTO department (name)
VALUES
('Engineering'),
('Finance'),
('Legal'),
('Sales');

INSERT INTO roles (title, salary, department_id)
VALUES
('Sales Lead', 100000, 4),
('Salesperson', 80000, 4),
('Lead Engineer', 150000, 1),
('Software Engineer', 120000, 1),
('Account Manager', 160000, 2),
('Accountant', 125000, 2),
('Legal Team Lead', 250000, 3),
('Lawyer', 190000, 3);

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES
('John', 'Doe', 1, 923),
('Beyonce', 'Knowles', 2, 328),
('Taylor', 'Swift', 3, 101),
('Blake', 'Lively', 4, 512),
('Jimmy', 'Kimmel', 5, 026),
('Kim', 'Kardashian', 6, 467),
('Tom', 'Cruise', 7, 385),
('Dwayne', 'Johnson', 8, 594);