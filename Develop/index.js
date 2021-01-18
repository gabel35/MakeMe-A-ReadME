// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input

// Description - description, 
// Table of Contents - taken to the corresponding section of the README
// Installation -installation instructions, 
// Usage - usage information, 
// Contributing - contribution guidelines, 
// Tests - test instructions
// License - choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled  that explains which license the application is covered under
// Questions - GitHub username with a link to my GitHub profile, email address with instructions on how to reach me with additional questions
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please describe your project: ",
        name: "desciption"
    },
    {
        type: "input",
        message: "How do you install your project",
        name: "installation"
    },
    {
        type: "input",
        message: "Please describe your project: ",
        name: "desciption"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
