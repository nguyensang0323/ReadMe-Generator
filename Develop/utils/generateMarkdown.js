// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license !== 'None' ? ` ![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`:''
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license !== 'None' ? `* [License](#license)` : ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license !== 'None' ? `## License\n This project is licensed under the ${license} license.` : ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ## Description\n
  ${data.description}\n

  ## Table of Content
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  ${renderLicenseLink(data.license)}
  * [Questions](#questions)

  ## Installation \n
  ${data.installation}

  ## Usage\n
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ${renderLicenseSection(data.license)}

  ## Questions
  If you have any question, you can email me at: ${data.email}
  You can see more of my work at: [${data.github}](https://github.com/${data.github})\n

`;
}

module.exports = generateMarkdown;
