// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Pleaese enter the title of your project:",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter the description of your project:",
        name: "description"
    },
    {
        type: "input",
        message: "Please enter the intallation instructions for your project:",
        name: "install"
    },
    {
        type: "input",
        message: "Please enter the usage information for your project:",
        name: "usage"
    },
    {
        type: "input",
        message: "Please enter the contribution guidelines for your project:",
        name: "contrib"
    },
    {
        type: "input",
        message: "Please enter the test intructions for your project:",
        name: "test"
    },
    {
        type: "list",
        message: "Please choose which type of licence your program has:",
        name: "license",
        choices: ["MIT", "Apache 2.0", "None"]
    },
    {
        type: "input",
        message: "Please enter your github username:",
        name: "github"
    },
    {
        type: "input",
        message: "Please enter your email address:",
        name: "email"
    }];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('output/README.md', data , (error) => {
        if(error){
            return console.log(error);
        }else{
            console.log('File successfully made.');
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        writeToFile(generateMarkdown(data));
    })
}

// Function call to initialize app
init();
