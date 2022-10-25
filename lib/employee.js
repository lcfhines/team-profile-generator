const { get } = require("http");
const inquirer = require("inquirer");
const engineer = require("./engineer");
const intern = require("./intern");
const manager = require("./manager");


class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
}

    // getName()
    // getId()
    // getEmail()
    // getRole() 
        // if manager - getOfficeNumber and getRole = Manager
        // if engineer - getGithub and getRole = Engineer
        // if intern - getSchool and getRole = Intern


