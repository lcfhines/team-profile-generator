// function to generate the roster html
const generateRoster = roster => {

    // based on role 
    const generateManager = manager => {
        return `
    <div class="card text-white bg-primary mb-3 col p-3 m-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${manager.name}</h5>
            <p class="card-text">${manager.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush p2">
             <li class="list-group-item text-dark">Employee ID: ${manager.id}</li>
            <li class="list-group-item text-dark">Email: <a href="mailto:${manager.email}> ${manager.email}</a></li>
            <li class="list-group-item text-dark">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>
    `;
    };


    const generateEngineer = engineer => {
        return `
    <div class="card text-white bg-primary mb-3 col p-3 m-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${engineer.name}</h5>
            <p class="card-text">${engineer.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush p2">
            <li class="list-group-item text-dark">Employee ID: ${engineer.id}</li>
            <li class="list-group-item text-dark">Email: <a href="mailto:${engineer.email}"> ${engineer.email}</a></li>
            <li class="list-group-item text-dark">Github: <a href="https://github.com/${engineer.github}"> ${engineer.github}</a></li>
        </ul>
    </div>
    `;
    };


    const generateIntern = intern => {
        return `
    <div class="card text-white bg-primary mb-3 col p-3 m-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${intern.name}</h5>
            <p class="card-text">${intern.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush p2">
            <li class="list-group-item text-dark">Employee ID: ${intern.id}</li>
            <li class="list-group-item text-dark">Email: <a href="mailto:${intern.email}"> ${intern.email}</a></li>
            <li class="list-group-item text-dark">School: ${intern.school}</li>
        </ul>
    </div>
    `;
    };

    const team = []

    team.push(roster
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
        .join("")
    );
    team.push(roster
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    team.push(roster
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return team.join("");
}

module.exports = roster => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <title>My Team</title>
    </head>

    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="mx-auto" style="width: 200px;">My Team</h1>
            </div>
        </div>
        <div class="container">
            <div class="row">
            ${generateRoster(roster)}
            </div>
        </div>

    `
};