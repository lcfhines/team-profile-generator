# Team Profile Generator


## Description
A command-line application that takes in information about employees via user input and generates an HTML webpage that displays summaries for each person.

## User Story
```
AS A manager  
I WANT to generate a webpage that displays my team's basic info  
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input 
WHEN I am prompted for my team members and their information 
THEN an HTML file is generated that displays a nicely formatted team roster based on user input 
WHEN I click on an email address in the HTML  
THEN my default email program opens and populates the TO field of the email with the address  
WHEN I click on the GitHub username  
THEN that GitHub profile opens in a new tab  
WHEN I start the application  
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number  
WHEN I enter the team manager’s name, employee ID, email address, and office number  
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team  
WHEN I select the engineer option  
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu  
WHEN I select the intern option  
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu  
WHEN I decide to finish building my team  
THEN I exit the application, and the HTML is generated  
```
## Installation
The team profile generator requires installation of Node.js as well as the Inquirer package. This app is using Inquirer version 8.2.4.

## Usage
Once installations are complete, simply run `node index` in the terminal and answer the questions as prompted. This will generate an HTML file with your team's roster.  

The video below demos the user flow.  
[Team Profile Generator.webm](https://user-images.githubusercontent.com/113798073/198439380-bdd20c44-49c5-4220-ba8b-fe43094ae4f8.webm)



## Tests
Tests were run using Jest for each of the app's classes (Employee, Manager, Engineer, and Intern) to validate that the contructors stored properties on objects correctly and that the methods were set up correctly. All tests for these classes pass.  

To test, install Jest and run `npm test`.  

Each class has its own test file in the `tests` folder.
  
  
## Questions
Github profile: [lcfhines](https://github.com/lcfhines)  
Please reach out by email (lcf7pk@gmail.com) with additional questions.
