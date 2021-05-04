// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
let html = '';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projTitle',
    },
    {
        type: 'input',
        message: 'Enter a description of your project.',
        name: 'projDesc',
    },
    {
        type: 'input',
        message: 'Enter your user story.',
        name: 'userStory',
    },
    {
        type: 'input',
        message: 'Enter acceptance criteria',
        name: 'accptCriteria',
    },
    {
        type: 'input',
        message: 'What are the steps to install your project?',
        name: 'projInstall',
    },
    {
        type: 'input',
        message: 'What is the use/purpose of your project?',
        name: 'projUsage',
    },
    {
        type: 'input',
        message: 'What is required for your project?',
        name: 'projRequires',
    },
    {
        type: 'input',
        message: 'Who are the other contributors on your project?',
        name: 'projContribs',
    },
    {
        type: 'input',
        message: 'Enter test information for your project',
        name: 'projTesting',
    },
    {
        type: 'input',
        message: 'What should users do if they have questions?',
        name: 'projQues',
    },
    {
        type: 'list',
        message: 'What is the license on your project?',
        choices: ['None',
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense'],
        name: 'projLicense',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('New Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(response)
            return response
        })
        .then(response => {
            let fileContents = generateMarkdown(response)
            console.log(fileContents)
            writeToFile('README123.md', fileContents)
        })
}

// Function call to initialize app
init();
