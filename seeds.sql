INSERT INTO department (id, name)
VALUES (001, 'Engineering'),
        (002, 'Marketing'),
        (003, 'Legal'),
        (004, 'Sales');

INSERT INTO roles (id, title, salary, department_id)
VALUES (001, 'Salesperson', 800.00, 001),
        (002, 'Salespersonf', 800.00, 002),
        (003, 'Salespersong', 800.00, 003),
        (004, 'Salespersonh', 800.00, 004);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, 'Melanie', 'Doe', 001, 001),
        (002, 'Jimmy', 'Gonzalez', 002, 002),
        (003, 'Sal', 'Smith', 003, 003),
        (004, 'Selena', 'Gomez', 004, 004);