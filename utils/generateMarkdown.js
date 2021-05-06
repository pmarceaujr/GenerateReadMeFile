let readMeProjectTitle = ''
let readMeProjectDesc = ''
let readMeTableContents = '## Table of Contents \n '
let readMeScreensShots = ''
let readMeUserStory = ''
let readMeAccptCriteria = ''
let readMeInstallation = ''
let readMeUsage = ''
let readMeRequires = ''
let readMeTesting = ''
let readMeQuestions = ''
let readMeContributors = ''
let readMeWebLinks = ''
let licenseBadge = ''
let licenseLink = ''
let licenseText = ''
let licenseArray = {
  mit: { badge: 'MIT', name: 'MIT License', link: 'mit' },
  isc: { badge: 'ISC', name: 'ISC License', link: 'isc' },
  apache20: { badge: 'Apache_2.0', name: 'Apache License 2.0', link: 'apache-2.0' },
  gpl30: { badge: 'GPL_3.0', name: 'GNU General Public License v3.0', link: 'gpl-3.0' },
  bsd2clause: { badge: 'BSD_2_Clause', name: 'BSD 2-Clause "Simplified" License', link: 'bsd-2-clause' },
  bsd3clause: { badge: 'BSD_3_Clause', name: 'BSD 3-Clause "New" or "Revised" License', link: 'bsd-3-clause' },
  bsl10: { badge: 'BSL_1.0', name: 'Boost Software License 1.0', link: 'bsl-1.0' },
  cc010: { badge: 'CC0_1.0', name: 'Creative Commons Zero v1.0 Universal License', link: 'cc0-1.0' },
  epl20: { badge: 'EPL_2.0', name: 'Eclipse Public License 2.0', link: 'epl-2.0' },
  agpl30: { badge: 'AGPL_3.0', name: 'GNU Affero General Public License v3.0', link: 'agpl-3.0' },
  gpl20: { badge: 'GPL_2.0', name: 'GNU General Public License v2.0', link: 'gpl-2.0' },
  lgpl21: { badge: 'LGPL_2.1', name: 'GNU Lesser General Public License v2.1', link: 'lgpl-2.1' },
  mpl20: { badge: 'MPL_2.0', name: 'Mozilla Public License 2.0', link: 'mpl-2.0' },
  osl30: { badge: 'OSL_3.0', name: 'Open Software License 3.0', link: 'osl-3.0' },
  unlicense: { badge: 'Unlicense', name: 'The Unlicense', link: 'unlicense' },
  wtfpl: { badge: 'WTFPL', name: 'Do What The F*ck You Want To Public License', link: 'wtfpl' }
}


// Function to return the Project Title
function renderProjectTitle(title) {
  if (title) {
    console.log(title)
    readMeProjectTitle = `# ${title}`
  }
  else {
    readMeProjectTitle = ''
  }
}
// Function to return the Project Description
function renderProjectDesc(description) {
  if (description) {
    console.log(description)
    readMeProjectDesc = `## Description \n ${description}`
  }
  else {
    readMeProjectDesc = ''
  }
}
// Function to return the Project User Story
function renderProjectUser(userStory) {
  if (userStory) {
    console.log(userStory)
    readMeUserStory = `## User Story \n  \`\`\`${userStory}\`\`\` `
    readMeTableContents = readMeTableContents + '- [User Story](#user-story) \n'
  }
  else {
    readMeUserStory = ''
  }
}
// Function to return the Project Acceptance Criteria
function renderProjectCriteria(criteria) {
  if (criteria) {
    console.log(criteria)
    readMeAccptCriteria = `## Acceptance Criteria \n  \`\`\`${criteria} \`\`\``
    readMeTableContents = readMeTableContents + '- [Acceptance Criteria](#acceptance-criteria) \n'
  }
  else {
    readMeAccptCriteria = ''
  }
}
// Function to return the Project Installation Procedures
function renderProjectInstall(install) {
  if (install) {
    console.log(install)
    readMeInstallation = `## Installation \n ${install}`
    readMeTableContents = readMeTableContents + '- [Installation](#installation) \n'
  }
  else {
    readMeInstallation = ''
  }
}
// Function to return the Project Directions or Usage
function renderProjectUsage(usage) {
  if (usage) {
    console.log(usage)
    readMeUsage = `## Usage \n  ${usage} `
    readMeTableContents = readMeTableContents + '- [Usage](#usage) \n'
  }
  else {
    readMeUsage = ''
  }
}
// Function to return the Project Required files
function renderProjectReqs(required) {
  if (required) {
    console.log(required)
    readMeRequires = `## Required \n  ${required} `
    readMeTableContents = readMeTableContents + '- [Required](#required) \n'
  }
  else {
    readMeRequires = ''
  }
}
// Function to return the Project Testing
function renderProjectTesting(testing) {
  if (testing) {
    console.log(testing)
    readMeTesting = `## Testing \n  ${testing} `
    readMeTableContents = readMeTableContents + '- [Testing](#testing) \n'
  }
  else {
    readMeTesting = ''
  }
}
// Function to return the Project Question or Support
function renderProjectQuestions(question) {
  if (question) {
    console.log(question)
    readMeQuestions = `## Questions And Support \n  ${question} `
    readMeTableContents = readMeTableContents + '- [Questions And Support](#questions) \n'
  }
  else {
    readMeQuestions = ''
  }
}
// Function to return the Project Contributors
function renderProjectContribs(contributors) {
  if (contributors) {
    console.log(contributors)
    readMeContributors = `## Contributors \n  ${contributors} `
    readMeTableContents = readMeTableContents + '- [Contributors](#contributors) \n'
  }
  else {
    readMeContributors = ''
  }
}
// Function to return the Project Contributors
function renderProjectWebLinks(weblinks) {
  if (weblinks) {
    console.log(weblinks)
    readMeWebLinks = `## Deployed Link \n  ${weblinks} `
    readMeTableContents = readMeTableContents + '- [Deployed Link](#deployed-link) \n'
  }
  else {
    readMeWebLinks = ''
  }
}
// Function that returns a license badge, license link and license text based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    console.log(licenseArray[license]['badge'])
    licenseBadge = `[![badge](https://img.shields.io/badge/license-${licenseArray[license]['badge']}-green)](https://choosealicense.com/licenses/${licenseArray[license]['link']})`
    licenseLink = `[${licenseArray[license]['name']}](https://choosealicense.com/licenses/${licenseArray[license]['link']})`
    licenseText = `## License \n This project is licensed under the [${licenseArray[license]['name']}](https://choosealicense.com/licenses/${licenseArray[license]['link']}).`
    readMeTableContents = readMeTableContents + '- [License](#license) \n'
  }
  else {
    licenseBadge = ''
    licenseLink = ''
    licenseText = ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderProjectTitle(data.projTitle)
  renderProjectDesc(data.projDesc)
  renderProjectUser(data.userStory)
  renderProjectCriteria(data.accptCriteria)
  renderProjectInstall(data.projInstall)
  renderProjectUsage(data.projUsage)
  renderProjectReqs(data.projRequires)
  renderProjectTesting(data.projTesting)
  renderProjectQuestions(data.projQues)
  renderProjectContribs(data.projContribs)
  renderProjectWebLinks(data.projLink)
  renderLicenseBadge(data.projLicense)

  let fileContents =
    `
${readMeProjectTitle}

${licenseBadge}

${readMeProjectDesc}

${readMeTableContents}

---
${readMeUserStory}

${readMeAccptCriteria}  

${readMeInstallation}  

${readMeUsage}  

${readMeRequires}

${readMeTesting} 

${readMeQuestions}  

${readMeContributors}  

${readMeWebLinks}

${licenseText}   


`
  return fileContents;
}

module.exports = generateMarkdown;
