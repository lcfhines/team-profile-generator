const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const generateHTML = require("./dist/generateHTML");

// array to store team members
const roster = [];

function startApp() {

    function buildRoster (){
        inquirer.prompt([
            {
                type: "list",
                message: "Who are you adding to the team roster?",
                name: "role",
                choices: ["Manager", "Engineer", "Intern"]
            }
        ])
        .then(function(response) {
            switch(response.role) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
            }
        })
    }

    function addToRoster (){
        inquirer.prompt([
            {
                type: "list",
                message: "What would you like to do now?",
                name: "next",
                choices: ["Add another employee to the roster", "Generate the HTML"]
            }
        ])
        .then(function(response) {
            switch(response.next) {
                case "Add another employee to the roster":
                    buildRoster();
                    break;
                case "Generate the HTML":
                    buildHTML();
                    break;
            }
        })
    }
    // if addManager is selected
    function addManager() {
        inquirer.prompt([
            {
                type: "input",
                message: "What is the manager's name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is the manager's employee ID?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the manager's email address?",
                name: "email",
            },
            {
                type: "input",
                message: "What is the manager's office number?",
                name: "officeNumber",
            },
        ]).then(response => {
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
            roster.push(manager);
            addToRoster();
        })

    }

    // if engineer is selected
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                message: "What is the engineer's name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is the engineer's employee ID?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the engineer's email address?",
                name: "email",
            },
            {
                type: "input",
                message: "What is the engineer's Github username?",
                name: "github",
            },
        ]).then(response => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            roster.push(engineer);
            addToRoster();
        })

    }

    // if intern is selected
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                message: "What is the intern's name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is the intern's employee ID?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the intern's email address?",
                name: "email",
            },
            {
                type: "input",
                message: "Where does the intern go to school?",
                name: "school",
            },
        ]).then(response => {
            const intern = new Intern(response.name, response.id, response.email, response.school);
            roster.push(intern);
            addToRoster();
        })
    };

    function buildHTML () {
        console.log("Roster is finalized");
        console.log(roster);
        fs.writeFileSync("index.html", generateHTML(roster), "utf-8");
    }

    buildRoster();

};

startApp();