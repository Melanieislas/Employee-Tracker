const inquirer = require('inquirer');
const cTable = require('console.table');
const fs = require('fs');

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
        {
            type: 'list',
            name: 'Home6',
            message: 'What would you like to do?',
            choices: ['Uj', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Quit'],
            when: (data) => data.Home === 'Update an employee role',
        },
    ])

    .then((data) => {
        if (data.Home === 'update an employee role') {
            console.log('HEY');
        }
    })