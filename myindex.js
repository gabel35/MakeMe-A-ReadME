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
        name: "description"
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

For any addiotional questions:
${questions}

github: !(https://github.com/${username})
email: ${email}
        

-------------

Thank you!

        `;
        fs.writeFile("README.md", generateReadme, (err) =>
        err ? console.log(err) : console.log("success!")
        );
    });

// TODO //    
// License - choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the License section that explains which license the application is covered under

