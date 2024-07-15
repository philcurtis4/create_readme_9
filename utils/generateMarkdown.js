// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} ${licenseBadge}

  ## Description

  ${data.description}

  ## Table of Contents 

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Questions](#questions)

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## License

  ${licenseSection}

  ## How to Contribute

  ${data.contrib}

  ## Tests

  ${data.test}

  ## Questions

  If you have any questions my github username is : ${data.github}  
  And the link to my github is : https://github.com/${data.github}  
  And finally you can email me at: ${data.email}


`;
}

module.exports = generateMarkdown;
