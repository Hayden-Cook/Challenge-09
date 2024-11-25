// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return `- [License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License
  This project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  To install the packages, clone this repo to your local terminal and run ${data.installation}.

  ## Usage
  You can run this generator by using ${data.usage}.

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  You can test this application by using ${data.tests}.

  ## Questions
  If you have any questions, please feel free to contact me:
  - Email: [${data.email}](mailto:${data.email})
  - GitHub: [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
