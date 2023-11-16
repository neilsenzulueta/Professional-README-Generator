// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = responses =>{
  return `# ${responses.ProjectTitle}

  ## Description
  ${responses.Description}

  ## Table of Contents
  
  ## Installation
  ${responses.Installation}

  ## Usage
  ${responses.Usage}

  ## Credits
  ${responses.Credits}

  ## License
  ${responses.License}

  ## Test
  ${responses.Test}

  ## Questions
  ${responses.Github}.${responses.Email}

`;
}

module.exports = generateMarkdown;
