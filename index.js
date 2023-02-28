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

    console.log("the start");


    // while (answers==="finish building the team"){};
    console.log("the middle");
    let {name, id, email, officeNumber } = await inquirer.prompt([
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
            name: 'email',
            message: "what is the managers email ? ",
            type: 'input',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the team manager's office number:",
          },
    ]);
    team.push(new Manager(name, id, email, officeNumber))
    let htmlDoc = render(team)
    await fs.writeFile(outputPath, htmlDoc)
    

    let addMember = true;

    if (addMember){

    }
    // let { member, name, id, email, github, school, officeNumber } = await inquirer
    //     .prompt([

           
           
    //         {
    //             type: 'list',
    //             name: 'member',
    //             message: "What type of role you adding?",
    //             choices: ["Engineer", "Intern", "finish building the team"],

    //         },
    //         {
    //             type: 'input',
    //             name: 'name',
    //             message: "what is the engineers name ? ",
    //             when(answers) {
    //                 return answers.member === "Engineer"
    //             }
    //         },
    //         {
    //             type: 'input',
    //             name: 'github',
    //             message: "what is the engineers github ? ",
    //             when(answers) {
    //                 return answers.member === "Engineer"
    //             }
    //         },


    //         // when : input => {

    //         // }




    // ]);


    // team.push(new Manager(name, id, email, officeNumber))
    // let htmlDoc = render(team)
    // await fs.writeFile(outputPath, htmlDoc)

   
};

async function employeeQuestions() {
    // let setQuestions = await inquirer.prompt([
    //     {
    //         type: 'input',
    //         name: 'name',
    //         message: "what is the managers name ?",

    //     },
    //     {
    //         type: 'input',
    //         name: 'id',
    //         message: "what is the managers id ?",
    //     },
    //     {
    //         name: 'email',
    //         message: "what is the managers email ? ",
    //         type: 'input',
    //     },
    // ])
}
