// Packages required for this application.
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./utils/generateMarkdown.js')

// Questions for the user.
const questions = () => {
    return inquirer.prompt([

    {
        type: 'input',
        message: 'What is the project title?',
        name: 'ProjectTitle',
    },
    {
        type: 'input',
        message: 'Provide a short description of your project:',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project if any:',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use:',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'List your collaborators if any:',
        name: 'Credits',
    },
    {
        type: 'list',
        message: 'Choose a License for your project:',
        choices: ['MIT', 'GNU', 'BSD', 'N/A'],
        name: 'License',
    },
    {
        type: 'input',
        message: 'Provide examples on how to run your app:',
        name: 'Test',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'Github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email',
    },
])
}

// Function to write README file.
const writeTofile = responses => {
    fs.writeFile('README.md', responses, (err) => 
    
    err ? console.error(err) : console.log('Your README was successfully created!'))
}
// Function call to initialize app.
questions().then(answers => {
    return generateReadme(answers);

}).then(responses => {
    return writeTofile(responses);

}).catch(err => {
    console.log(err)
})