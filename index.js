const inquirer = require('inquirer');
const cTable = require('console.table');
const fs = require('fs');
const mysql = require('mysql2');


console.table([
    {
      name: 'foo',
      age: 10
    }, {
      name: 'bar',
      age: 20
    }
  ]);

inquirer
    .prompt([
        {
            type: 'list',
            name: 'Home',
            message: 'What would you like to do?',
            choices: ['Update an employee role', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
        },
        /*{
            type: 'list',
            name: 'Home6',
            message: 'What would you like to do?',
            choices: ['Uj', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Quit'],
            when: (data) => data.Home === 'Update an employee role',
        },*/
    ])

    .then((data) => {
        if (data.Home === 'Update an employee role') {
            const db = mysql.createConnection(
            {
                host: 'localhost',
                user: 'root',
                password: 'Caramel505',
                database: 'company_db'
            },

            console.log(`Connected to the company_db database.`)
            );
        
            /*
            db.query('source schema.sql;', function(err,results) {
                console.log(results);
            });
            
            db.query('source seeds.sql;', function(err,results) {
                console.log(results);
            });*/

            db.query('SELECT * FROM employee', function(err,results) {
                console.table(results);
            });
        }
    });
