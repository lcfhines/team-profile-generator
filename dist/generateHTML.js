// function to return card based on role for each object in the roster array


function generateHTML(data) {
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
                // MANAGER CARD(S)
                // ENGINEER CARD(S)
                // INTERN CARD(S)
            </div>
        </div>

    `
}

module.exports = generateHTML;