// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type : "input",
        name : "title",
        message : "what is the name of your application?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(path.join(fileName),data ,(err)=>{
        err? console.log("it broke"): console.log("success")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        console.log(answers)
        writeToFile("README.md", generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();
