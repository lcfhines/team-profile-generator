// functions to return cards based on role for each object in the roster array
const generateManager = function(manager) {
    return `
    <div class="card text-white bg-primary mb-3 col p-3 m-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${manager.name}</h5>
            <p class="card-text">${manager.role}</p>
        </div>
        <ul class="list-group list-group-flush p2">
             <li class="list-group-item text-dark">Employee ID: ${manager.id}</li>
            <li class="list-group-item text-dark">Email: ${manager.email}</li>
            <li class="list-group-item text-dark">Office: ${manager.officeNumber}</li>
        </ul>
    </div>
    `;
    };

const generateEngineer = function(engineer) {
    return `
    <div class="card text-white bg-primary mb-3 col p-3 m-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${engineer.name}</h5>
            <p class="card-text">${engineer.role}</p>
        </div>
        <ul class="list-group list-group-flush p2">
            <li class="list-group-item text-dark">Employee ID: ${engineer.id}</li>
            <li class="list-group-item text-dark">Email: ${engineer.email}</li>
            <li class="list-group-item text-dark">Github:<a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
    </div>
    `;
};



const generateIntern = function(intern) {
    return `
    <div class="card text-white bg-primary mb-3 col p-3 m-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${intern.name}</h5>
            <p class="card-text">${intern.role}</p>
        </div>
        <ul class="list-group list-group-flush p2">
            <li class="list-group-item text-dark">Employee ID: ${intern.id}</li>
            <li class="list-group-item text-dark">Email: ${intern.email}</li>
            <li class="list-group-item text-dark">School: ${intern.school}</li>
        </ul>
    </div>
    `;
};

generateRoster = (data) => {

// store cards in team 
    team = []

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.role;

        if (role === "Manager") {
            const managerCard = generateManager(employee);
            team.push(managerCard);
        } else
        if (role === "Engineer") {
            const engineerCard = generateEngineer(employee);
            team.push(engineerCard);
        } else 
        if (role === "Intern") {
            const internCard = generateIntern(employee);
            team.push(internCard);
        }
    }

    const employeeCards = team.join('')
    // const generatePage = generateHTML(employeeCards);
    // return generatePage;
}

const generateHTML = function(employeeCards) {
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
            ${employeeCards}
            </div>
        </div>

    `
}

module.exports = generateHTML;