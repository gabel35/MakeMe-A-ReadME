// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')

// array of questions for user input
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
        message: "How do you install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "How do you use your project?",
        name: "usage"
    },
    {
        type: "input",
        message: "How can others contribute to this project?",
        name: "contributing"
    },
    {
        type: "input",
        message: "How do you test your project?",
        name: "tests"
    },
    {
        type: "list",
        message: "Choose a license for your project:",
        name: "license",
        choices: ["", "", "", ""]
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "How should others contact you for questions?",
        name: "questions"
    },
];

// Description - description, 
// Table of Contents - taken to the corresponding section of the README
// Installation -installation instructions, 
// Usage - usage information, 
// Contributing - contribution guidelines, 
// Tests - test instructions
// License - choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the License section that explains which license the application is covered under
// Questions - GitHub username with a link to my GitHub profile, email address with instructions on how to reach me with additional questions

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    const {title, description, installation, usage, contributing, tests, license, username, email, questions} = data;
    const fileName = "README.md";

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// Questions for Andrew: //
// is my index ok, or do I need to transcribe in the format they gave? how to do so? //
// is this what is meant by the lecnse portion? //
// does the package-lock.json need to be gitignored or nah? //


