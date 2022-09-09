// TODO: Include packages needed for this application
const inquirer = require ("inquirer")
const fs = require ("fs")
const path = require ("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is the title of your project",
    },
    {
        type:"input",
        name:"description",
        message:"Describe the project",
    },
    {
        type:"input",
        name:"problems",
        message:"What problem does it solve",
    },
    {
        type:"input",
        name:"motivation",
        message:"What was your motivation?",
    },

    {
        type:"list",
        name:"license",
        message:"What is the title of your project", 
        choices:['MIT','APACHE2.0', 'GPL3.0','BSD3','None']
    },



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((userInput) => {
        writeToFile("ReadME.md",generateMarkdown({...userInput}))
    
})
}
// Function call to initialize app
init();
