// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "appTitle",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "appDescription",
        message: "How would you describe your application?",
    },
    {
        type: "input",
        name: "appInstall",
        message: "How does the user install your application?",
    },
    {
        type: "input",
        name: "appUsage",
        message: "What can this application be used for?",
    },
    {
        type: "input",
        name: "appContribution",
        message: "How can users contribute to your application?",
    },
    {
        type: "list",
        name: "appLicense",
        message: "Which license does your app use?",
        choices: ['Apache', 'MIT', 'Eclipse', 'Mozilla'],
    },
    {
        type: "input",
        name: "appTest",
        message: "How can your application be tested?",
    },
    {
        type: "input",
        name: "userGitHub",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "userEmail",
        message: "What is your email address?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
