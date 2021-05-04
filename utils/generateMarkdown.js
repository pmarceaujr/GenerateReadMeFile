// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log('Data123')
  console.log(data.projTitle)
  let fileContents =
    `
  # ${data.projTitle}

## Description
${data.projDesc}

## Table of Contents (Optional)

- [User Story](#user_story)
- [Acceptance Criteria](#acceptance_criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Requires](#requires)
- [Contributors](#contributors)
- [Testing](#testing)
- [Questions](#questions)
- [License](#license) 
        
## User Story
${data.userStory}

## Acceptance Criteria
${data.accptCriteria}  

## Installation
${data.projInstall}  

## Usage
${data.projUsage}  

## Requires
${data.projRequires}

## Contributors
${data.projContribs}  

## Testing
${data.projTesting}  

## Questions
${data.projQues}  

## License
${data.projLicense}   
  `
  return fileContents;
}

module.exports = generateMarkdown;
