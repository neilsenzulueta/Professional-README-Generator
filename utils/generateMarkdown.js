// Function to generate markdown for README
const generateMarkdown = responses =>{
  return `# ${responses.ProjectTitle}
  ![Github license](https://img.shields.io/badge/license-${responses.License}-blue.svg)

  ## Description
  ${responses.Description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Installation
  ${responses.Installation}

  ## Usage
  ${responses.Usage}

  ## Credits
  ${responses.Credits}

  ## License
  This repository is licensed under: ${responses.License}

  ## Test
  ${responses.Test}

  ## Questions
  If you have any questions about this repository, please contact me at ${responses.Email}. GitHub: https://github.com/${responses.Github}

`;
}

module.exports = generateMarkdown;
