const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/employee");

// data - questions

const questions = [
    {
        type: 'input',
        message: 'What is the name of the employee?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is their email address?',
        name: 'email',
    },
    {
        type: 'list',
        message: 'What is their role?',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern']
    },
]

// functions - create HTML file
// generateHTML functio needs to be created somewhere
inquirer.prompt(questions)
.then((response) => {
    fs.writeFile('index.html', generateHTML(response), (err) =>
    err ? console.error(err) : console.log('Success!'))
})

// initiliza new employee object
const employee = new Employee();

function init() {}

// start 
init();