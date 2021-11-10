// TODO: Include packages needed for this application
//const generator = require('generateMarkdown.js');
const util = require('util');
const fs = require("fs");
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const writeToFilePromise = util.promisify(fs.writeFile);

const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'readMeName',
        message: 'What name does the project have?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Write a description(3-5 sentences) of your project.'
      },
      {
        type: "input",
        name: "license",
        message: "Please enter the appropriate license if available."
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide instructions on how to install your project.'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What are the names of those who contributed to the project?'
      },
      {
        type: 'input',
        name: 'test',
        message: 'What instructions are needed for your project?'
      },
      {
        type: 'input',
        name: 'gitUser',
        message: 'What is your Github username?'
      },
      {
        type: 'input',
        message: "What is the Github repository's name?",
        name: 'gitRepo'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      },
    ]);
  };

// TODO: Create a function to write README file
const writeToFile = (data) =>
`# ${data.readMeName}\n\n
## Table of Contents\n\n
  🔎 [Description](#Description)\n\n
  🔎 [Installation](#Installation) \n\n
  🔎 [Contributers](#Contributers)\n\n
  🔎 [Repository](#Repository)\n\n
  🔎 [Test](#Test)\n\n
  🔎 [License](#License)\n\n
## Description\n\n
${data.description}\n\n
## Installation\n\n
${data.installation}\n\n
## Contributers\n\n
${data.contribution}\n\n
## Test\n\n
${data.test}\n\n
## Questions\n\n
Github: [${data.gitUser}](https://github.com/${data.gitUser})
Email: ${data.email}\n\n
## License\n\n
This repository is released under the license of: [${data.license}](https://opensource.org/licenses/${data.license})`;

// TODO: Create a function to initialize app
const init = () => {
    questions()

        .then((data) => writeToFilePromise('TestREADME.md', writeToFile(data)))
        .then(() => console.log('README.md Generated'))
        .catch((err) => console.log(err));

};

// Function call to initialize app
init();
