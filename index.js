// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./utils/generateMarkdown.js')

//Create an array of questions.
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
        choices: ['MIT', 'GNU', 'BSD'],
        name: 'Licence',
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

// TODO: Create a function to write README file
const writeTofile = responses => {
    fs.writeFile('README.md', responses, (err) => 
    
    err ? console.error(err) : console.log('Success!'))
}
/*const writeTofile = responses => {
        fs.writeFile('README.md', responses, err => {
            if (err) {
                console.log(err);
                return;
            } else{
                console.log('Success!')
            }
        })
};
*/
questions().then(answers => {
    return generateReadme(answers);

}).then(responses => {
    return writeTofile(responses);

}).catch(err => {
    console.log(err)
})


/*       
// TODO: Create a function to initialize app
const init = () => {
    const responses = questions()
    writeToFile(responses)
}

// Function call to initialize app
init();
*/

/*User Story
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/