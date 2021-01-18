const fs = require('fs');
const inquirer = require('inquirer')

inquirer
    .prompt([
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
        message: "Is there anyone you would like to give credit to, and why?",
        name: "credits"
    },
    {
        type: "input",
        message: "How can others contribute to this project (guidelines)?",
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
    {
        type: "input",
        message: "Please provide the link to your project (an http/https url):",
        name: "link"
    },
    {
        type: "input",
        message: "Please provide a pathway to an image or screenshot of your project (ex. ./Assets/image.PNG):",
        name: "image"
    }
    ])
    .then((data) => {
        const {title, description, installation, usage, link, image, credits, contributing, tests, license, username, email, questions} = data;
        const generateReadme = `
        # ${title}

        ## Description

        ${description}

        ## Table of Contents

        * [Installation](#installation)
        * [Usage](#usage)
        * [Credits](#credits)
        * [Contributing](#contributing)
        * [Tests](#tests)
        * [License](#license)
        * [Questions](#questions)


        ## Installation

        ${installation}


        ## Usage

        ${usage}

        Please follow the following link to the application!
        !(${link})

        ![weather-app](${image})


        ## Credits

        ${credits}

        ### Contributing

        ${contributing}
        
        ### Tests

        ${tests}
        
        ### License

        ${license}

        ### Questions

        !(https://github.com/${username})
        ${questions}

        -------------

        Thank you!

        `
    })

// License - choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the License section that explains which license the application is covered under
// Questions - GitHub username with a link to my GitHub profile, email address with instructions on how to reach me with additional questions

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    const fileName = "README.md";

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
