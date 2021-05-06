// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
let html = '';

//Create an array of questions for user input
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
        message: 'Please enter your email address (Required):',
        name: 'email',
        validate: (input) => {
            if (input === '') {
                return "Email address is required.  Please enter your email address:"
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
        message: 'Please enter the usage/directions of your project (Optional):',
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
            { value: 'apache20', name: 'Apache License 2.0' },
            { value: 'gpl30', name: 'GNU General Public License v3.0' },
            { value: 'bsd2clause', name: 'BSD 2-Clause "Simplified" License' },
            { value: 'bsd3clause', name: 'BSD 3-Clause "New" or "Revised" License' },
            { value: 'bsl10', name: 'Boost Software License 1.0' },
            { value: 'cc010', name: 'Creative Commons Zero v1.0 Universal' },
            { value: 'epl20', name: 'Eclipse Public License 2.0' },
            { value: 'agpl30', name: 'GNU Affero General Public License v3.0' },
            { value: 'gpl20', name: 'GNU General Public License v2.0' },
            { value: 'lgpl21', name: 'GNU Lesser General Public License v2.1' },
            { value: 'mpl20', name: 'Mozilla Public License 2.0' },
            { value: 'osl30', name: 'Open Software License 3.0' },
            { value: 'unlicense', name: 'The Unlicense' },
            { value: 'wtfpl', name: 'Do What The F*ck You Want To Public License' }],
        name: 'projLicense',
    },
    {
        type: 'input',
        message: 'Please enter the file name for screenshot #1 (Required):',
        name: 'projScreen1',
        validate: (input) => {
            if (input === '') {
                return "At least one screenshot is required.  Please enter the file name for screenshot #1:"
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Please enter the file name for screenshot #2 (Optional):',
        name: 'projScreen2',
    },
    {
        type: 'input',
        message: 'Please enter the file name for screenshot #3 (Optional):',
        name: 'projScreen3',
    },
];
///////// NEw code for screenshots
//Create an array of questions for user to add screenshots or other media links
/*const screenshots = [    
    {
        type: 'input',
        message: 'Please enter the screenshot file name (Required):',
        name: 'projScreen',
        validate: (input) => {
            if (input === '') {
                return "At least one screenshot is required.  Please enter the screenshot file name:"
            }
            return true;
        }
    },
];*/


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Your new README.md file has been created!')
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
