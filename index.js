// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('./Develop/utils/generateMarkdown');
const generateMarkdown = require('./Develop/utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    
    {
    type: "input",
    name: "name",
    message: "What is the project title?",
    },
    {
        type: "input",
        name: "Description",
        message: "Give a description of your project.",
    },
    {
        type: "input",
        name: "Table of contents",
        message: "What is the contents of the project",
    },
    {
        type: "input",
        name: "Installation",
        message: "How do you instal this project?",
    },
    {
        type: "input",
        name: "Usage",
        message: "How is this project used?",
    },
    {
        type: "input",
        name: "License",
        message: "what is you Liscense for this project?",
    },
    {
        type: "input", 
        name: "Contributing",
        message: "who contributed to the project?",
    },
    {
        type: "input",
        name: "Test",
        message: "how do i test the project?",
    },
    {
        type: "input",
        name: "Questions",
        message: "Do you have any question to add about the project?",
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
