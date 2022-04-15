// Packages needed for this application
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');

const fs = require('fs');
// Array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the application? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else {
                console.log('Input is required!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log('Input is required!');
                return false;
            }
        }
    },
    {
       type: 'input',
       name: 'email',
       message: 'What is your email address? (Required)',
       validate: userInput => {
           if (userInput) {
               return true;
           }
           else {
               console.log('Input is required!');
               return false;
           }
       } 
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select which license will be used for this application',
        choices: ["Apache 2.0 License", "Boost Software License 1.0", "BSD 3-Clause License", "BSD 2- Clause License", "Eclipse Public License 1.0", "The MIT License", "The Artistic License", "GNU GPL v3", "GNU GPL v2", "GNU AGPL v3", "GNU LGPL v3", "GNU FDL v1.3", "IBM Public License Version 1.0", "ISC License (ISC)"]
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a detailed description of the application. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            }
            else {
                console.log('Input is required!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for the application. (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            }
            else {
                console.log('Input is required!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions on how the application will be used. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            }
            else {
                console.log('Input is required!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How will other users be able to contribute to the application?'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'List the steps in order on how to correctly test the application. (Required)',
        validate: testInput => {
            if (testInput) {
                return true;
            }
            else {
                console.log('Input is required!');
                return false;
            }
        }
    },
    
];

// Function to write README file
function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, (err) => {
       if (err)
        throw err;
        console.log('User data moved to README.');
   });
};

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile("README.md", generateMarkdown(userInput));
        });
};

// Function call to initialize app
init();
