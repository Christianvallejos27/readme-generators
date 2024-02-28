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
    },
    {
        type : "input",
        name : "description",
        message : "describe your application"

    },
    {
        
        type : "input",
        name : "installation",
        message : "do you need to install anything?"
    },
    {
        
        type : "input",
        name : "usage",
        message : "how long will you use your application"
    },
    {
        
        type : "input",
        name : "contributing",
        message : "are there any contributors"
    },
    {
        
        type : "input",
        name : "tests",
        message : "is there any test applications in your software"
    },
    {
        
        type : "input",
        name : "email",
        message : "enter your email address"
    },
    {
        
        type : "input",
        name : "github",
        message : "what is your github username"
    },
    {
        
        type : "list",
        name : "license",
        message : "who is licensing this application",
        choices : ["MIT","BSD 3.0","NONE"]
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
