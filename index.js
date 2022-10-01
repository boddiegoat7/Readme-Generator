// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('./Develop/utils/generateMarkdown');
const generateMarkdown = require('./Develop/utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    
    {
    type: "input",
    name: "title",
    message: "What is the project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Give a description of your project.",
    },
    {
        type: "input",
        name: "table of contents",
        message: "What is the contents of the project",
    },
    {
        type: "input",
        name: "installation",
        message: "How do you instal this project?",
    },
    {
        type: "input",
        name: "usage",
        message: "How is this project used?",
    },
    {
        type: "list",
        message: "What is you Liscense for this project?",
        name: "license",
        choices: ['None', 'MPL', 'ODbl', 'GPL', 'MIT', 'ISC'],
    },
    {
        type: "input", 
        name: "contributing",
        message: "who contributed to the project?",
    },
    {
        type: "input",
        name: "test",
        message: "how do i test the project?",
    },
    {
        type: 'input',
        name: 'username',
        message: ' Add github username so that users can ask questions',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
    },
    

];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
            console.log("You have generated your README file");
        }); 
};

// Function call to initialize app

function init() {
    inquirer.prompt(questions).then((userAnswer) => {
        const data = generateMarkdown(userAnswer);
        console.log(userAnswer);
        writeToFile('README.md', data);
    })

} 


init();
