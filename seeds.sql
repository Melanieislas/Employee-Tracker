INSERT INTO department (id, name)
VALUES (001, 'Engineering'),
        (002, 'Marketing'),
        (003, 'Legal'),
        (004, 'Sales');

INSERT INTO roles (id, title, salary, department_id)
VALUES (001, 'Supervisor', 800.00, 001),
        (002, 'Engineer', 850.00, 002),
        (003, 'Salesperson', 700.00, 003),
        (004, 'Manager', 1200.00, 004);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, 'Melanie', 'Doe', 001, 001),
        (002, 'Jimmy', 'Gonzalez', 002, 002),
        (003, 'Sal', 'Smith', 003, 003),
        (004, 'Selena', 'Gomez', 004, 004);