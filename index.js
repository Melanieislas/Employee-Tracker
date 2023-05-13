const inquirer = require('inquirer');
const cTable = require('console.table');
const fs = require('fs');
const mysql = require('mysql2');
const db = require('./connection')

db.connect (function(err,results) {
    if(err) {
        console.log(err);
    } 
    employee_data();
});

var employee_data = function() {
    /*db.query('SOURCE seeds.sql;', function(err,results) {
        if(err){
            console.log(err);
        }
    });*/
inquirer
    .prompt([
        {
            type: 'list',
            name: 'Home',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Quit'],
        },
    ])


    .then((data) => {
        if(data.Home === 'View all departments'){
            db.query('SELECT * FROM department', function(err,results) {
                console.table(results);
                employee_data();
            });
        } else if (data.Home === 'View all roles') {
            db.query('SELECT * FROM roles', function(err,results) {
                console.table(results);
                employee_data();
            });
        } else if (data.Home === 'View all employees') {
            db.query('SELECT * FROM employee', function(err,results) {
                console.table(results);
                employee_data();
            });
        } else if (data.Home === 'Add a department') {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'Department',
                        message: 'Add the name of your department: ',
                    }
                ]).then((data) => {
                    db.query('INSERT INTO department (id, name) VALUES ()', [data.Department],  function(err,results){
                        employee_data();
                    });
                })
        } else if (data.Home === 'Add a role') {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'Role_Name',
                        message: 'Add the name of your new role: ',
                    },
                    {
                        type: 'input',
                        name: 'Salary',
                        message: 'Add the salary for this role: ',
                    },
                    {
                        type: 'input',
                        name: 'Role_Department',
                        message: 'Add the department for this role: ',
                    }
                ]).then((data) => {
                    db.query('INSERT INTO roles (id, title, salary, department_id) VALUES ()', [data.Role_Name, data.Salary, data.Role_Department ],  function(err,results){
                        employee_data();
                    });
                })
        } else if (data.Home === 'Add an employee') {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'First',
                        message: 'Add the employees first name: ',
                    },
                    {
                        type: 'input',
                        name: 'Last',
                        message: 'Add the employees last name: ',
                    },
                    {
                        type: 'input',
                        name: 'Role',
                        message: 'Add the employee role: ',
                    },
                    {
                        type: 'input',
                        name: 'Manager',
                        message: 'Add the employees manager: ',
                    }
                ]).then((data) => {
                    db.query('INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES ()', [data.First, data.Last, data.Role, data.Manager ],  function(err,results){
                        employee_data();
                    });
                })
        } else if (data.Home === 'Quit') {
            console.log('Thank you!')
        }
    });
}


