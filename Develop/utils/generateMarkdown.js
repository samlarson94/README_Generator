// Create a function that returns a license badge based on which license is passed in
  //Shields.io used for quality metadata badges
// If there is no license, return an empty string
// license = `${data.license}`;
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Project: ${data.title}
  
  ## Description 
  - ${data.motivation}
  - ${data.problem}
  - ${data.learnings}

  ##Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Badges](#badges)
  - [Contact Me](#questions)

  ## Installation <a name="installation"></a>
  - ${data.steps}

  ## Usage <a name="usage"></a>
  - ${data.usage}

  ## Contributing <a name="credits"></a>
  - ${data.credits}

  ## License <a name="license"></a>
  - ${data.license}
  
  ## How to Contribute <a name="constribute"></a>
  - ${data.contribute}

  ## Tests <a name="tests"></a>
  - ${data.tests}

  ## Contact Me <a name="questions"></a>
  - Feel free to reach out with any questions
  - Github Profile: [${data.username}](https://github.com/${data.username})
  - Email: [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
