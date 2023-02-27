const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs/promises");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

let team = [];
startApplication();

async function startApplication() {
    
    
    let {member, name,id,email,github,school,officeNumber} = await inquirer
    .prompt([
        {
            type: 'list',
            name: 'member',
            message: "What type of role you adding?",
            choices: ["Manager", "Engineer", "Intern"],
        },
        {
            type: 'input',
            name: 'name',
            message: "what is the managers name ?",
           
        },
        {
            type: 'input',
            name: 'id',
            message: "what is the managers id ?",
        },
        {
            type: 'input',
            name: 'email',
            message: "what is the managers email ? ",
        },
        {
            type: 'list',
            name: 'member',
            message: "What type of role you adding?",
            choices: [ "Engineer", "Intern"],
        },

        // when : input => {

        // }
        
        

    ]);

    
    let hmtlDoc = render(team)
    await fs.writeFile(outputPath,hmtlDoc)
}