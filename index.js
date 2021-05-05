// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
let html = '';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter your Github username (Required):',
        name: 'username',
        validate: (input) => {
            if (input === '') {
                return "Github username is required.  Please enter your Github username:"
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Please enter the name of your Github repository (Required):',
        name: 'reponame',
        validate: (input) => {
            if (input === '') {
                return "Github repository name is required.  Please enter your Github repository name:"
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Please enter the title of your project (Required):',
        name: 'projTitle',
        validate: (input) => {
            if (input === '') {
                return "Project title is required.  Please enter your project title:"
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Please enter a description of your project (Required):',
        name: 'projDesc',
        validate: (input) => {
            if (input === '') {
                return "Project description is required.  Please enter your project description:"
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Please enter your user story (Optional):',
        name: 'userStory',
    },
    {
        type: 'input',
        message: 'Please enter acceptance criteria (Optional):',
        name: 'accptCriteria',
    },
    {
        type: 'input',
        message: 'Please enter the steps to install your project (Optional):?',
        name: 'projInstall',
    },
    {
        type: 'input',
        message: 'Please enter the use/purpose of your project (Optional):',
        name: 'projUsage',
    },
    {
        type: 'input',
        message: 'Please enter the requirements for your project (Optional):?',
        name: 'projRequires',
    },
    {
        type: 'input',
        message: 'Please enter any other contributors on your project (Optional):?',
        name: 'projContribs',
    },
    {
        type: 'input',
        message: 'Please enter test information for your project (Optional):',
        name: 'projTesting',
    },
    {
        type: 'input',
        message: 'Please enter steps users should take if they have questions (Optional):',
        name: 'projQues',
    },
    {
        type: 'input',
        message: 'Please enter the link to the deployed project (Optional):',
        name: 'projLink',
    },
    {
        type: 'list',
        message: 'Please select the license that governs your project (Required):',
        choices: [
            { value: '', name: 'None' },
            { value: 'mit', name: 'MIT License' },
            { value: 'isc', name: 'ISC License' },
            { value: 'apache-2.0', name: 'Apache License 2.0' },
            { value: 'gpl-3.0', name: 'GNU General Public License v3.0' },
            { value: 'bsd-2-clause', name: 'BSD 2-Clause "Simplified" License' },
            { value: 'bsd-3-clause', name: 'BSD 3-Clause "New" or "Revised" License' },
            { value: 'bsl-1.0', name: 'Boost Software License 1.0' },
            { value: 'cc0-1.0', name: 'Creative Commons Zero v1.0 Universal' },
            { value: 'epl-2.0', name: 'Eclipse Public License 2.0' },
            { value: 'agpl-3.0', name: 'GNU Affero General Public License v3.0' },
            { value: 'gpl-2.0', name: 'GNU General Public License v2.0' },
            { value: 'lgpl-2.1', name: 'GNU Lesser General Public License v2.1' },
            { value: 'mpl-2.0', name: 'Mozilla Public License 2.0' },
            { value: 'osl-3.0', name: 'Open Software License 3.0' },
            { value: 'unlicense', name: 'The Unlicense' },
            { value: 'wtfpl', name: 'Do What The F*ck You Want To Public License' }],
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
