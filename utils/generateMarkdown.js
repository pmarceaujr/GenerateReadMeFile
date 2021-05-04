let licenseBadge = ''
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log('license badge')
  if (license) {
    licenseBadge = `![badge](https://img.shields.io/badge/license-${license}-green)`
  }
  else {
    licenseBadge = ''
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log('license link')

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log('license section')
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log('Data123')
  console.log(data.projTitle)
  renderLicenseBadge(data.projLicense)
  renderLicenseLink(data.projLicense)
  renderLicenseSection(data.projLicense)
  let fileContents =
    `
  # ${data.projTitle}

  ${licenseBadge}
---  
## Description
${data.projDesc}

## Table of Contents (Optional)
- [Screenshots And Videos](#screenshots)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Requires](#requires)
- [Testing](#testing)
- [Questions And Support](#questions)
- [Contributors](#contributors)
- [License](#license) 

## Screenshots And Videos
---
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
👪 ${data.projContribs}  

## Testing
${data.projTesting}  

## Questions
${data.projQues}  
✉️  ${data.username}
    ${data.reponame}

## License
${data.projLicense}   
  `
  return fileContents;
}

module.exports = generateMarkdown;
