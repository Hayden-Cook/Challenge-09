// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "How would you describe your application?",
    },
    {
        type: "input",
        name: "installation",
        message: "How does the user install your application?",
    },
    {
        type: "input",
        name: "usage",
        message: "What usage information can you provide?",
    },
    {
        type: "input",
        name: "contributing",
        message: "How can users contribute to your application?",
    },
    {
        type: "list",
        name: "license",
        message: "Which license does your app use?",
        choices: ['Apache', 'MIT', 'Eclipse', 'Mozilla', 'None'],
    },
    {
        type: "input",
        name: "tests",
        message: "How can your application be tested?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error("Error writing file:", err);
        } else {
            console.log("The README.md file has been successfully generated!");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readme = generateMarkdown(answers);
        writeToFile("README.md", readme);
    });
}

// Function call to initialize app
init();
