/*
title of my project         
Table of Contents,          
Description,                
user Story                  
acceptance criteria
 Installation, 
 Usage, 
 Contributing, 
 Tests,  
 Questions
   License, 
  None
Apache License 2.0
GNU General Public License v3.0
MIT License
BSD 2-Clause "Simplified" License
BSD 3-Clause "New" or "Revised" License
Boost Software License 1.0
Creative Commons Zero v1.0 Universal
Eclipse Public License 2.0
GNU Affero General Public License v3.0
GNU General Public License v2.0
GNU Lesser General Public License v2.1
Mozilla Public License 2.0
The Unlicense
*/

const fs = require('fs');
const inquirer = require('inquirer');
let html = ''
inquirer
    //their name, location, bio, LinkedIn URL, and GitHub URL
    .prompt([
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
    ])
    .then((response) => {
        //console.log(response)
        /* html = `<!DOCTYPE html>
 <html lang="en">
   <head>
     <meta charset="UTF-8" />
     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <link href="style.css" rel="stylesheet" type="text/css" />
     <title>Node Generated Profile</title>
   </head>
   <body>
     <h1>${response.header}</h1>
     <container>
       <p class="name">${response.name}</p>
       <p class="loc">${response.location}</p>
       <p class="linkedin">${response.linkedin}</p>
       <p class="github">${response.github}</p>
       <p class="bio">${response.bio}</p>
       <p class="misc">${response.misc}</p>
     </container>
   </body>
 </html>`;*/
        console.log(response)
        fs.writeFile('index.html', html, (err) =>
            err ? console.error(err) : console.log('Success!')
        );
    })
