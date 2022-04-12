// Create a function that returns a license badge based on which license is passed in
  //Shields.io used for quality metadata badges
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Project: ${data.title}
  
  [![alt-text](image-url)](url-to-point-to)
  
  ## Description
  - ${data.motivation}
  - ${data.problem}
  - ${data.learnings}

  ##Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits] (#credits)
  - [License] (#license)
  - [Badges] (#badges)

  ## Installation
  - ${data.steps}

  ## Usage Information
  - ${data.usage}

  ## Contributing
  - ${data.credits}

  ## License
  - ${data.license} //Currently undefined.  What type of data is select
  
  ## How to Contribute
  - ${data.contribute}

  ## Tests
  - ${data.tests}

  ## Questions
  - Feel free to reach out with any questions
  - Github Profile: [${data.username}] (https://github.com/${data.username})
  - Email: [${data.email}@gmail.com] (mailto:${data.email}@gmail.com)

`;
}

module.exports = generateMarkdown;
