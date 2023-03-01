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
    let { name, id, email, officeNumber } = await inquirer.prompt([
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



    let addMember = true;

    while (addMember) {
        let memberQuestion = await inquirer.prompt({

            type: 'list',
            name: 'member',
            message: "What type of role you adding?",
            choices: ["Engineer", "Intern", "finish building the team"],



        });
        console.log(memberQuestion.member);
        if (memberQuestion.member === "finish building the team") {
            addMember = false;
            continue;


        }
        let memberAnswers = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: `what is the ${memberQuestion.member} name ?`,

            },
            {
                type: 'input',
                name: 'id',
                message: `what is the ${memberQuestion.member} id ?`,
            },
            {
                name: 'email',
                message: `what is the ${memberQuestion.member} email ? `,
                type: 'input',
            },
                ...(memberQuestion.member === 'Engineer'
            ? [
              {
                type: 'input',
                name: 'github',
                message: `Enter the ${memberQuestion.member}'s GitHub username:`,
              },
            ]
            : [
              {
                type: 'input',
                name: 'school',
                message: `Enter the ${memberQuestion.member}'s school:`,
              },
            ]),


        ]);

        

        if (memberQuestion.member === "Engineer") {
            team.push(new Engineer(memberAnswers.name, memberAnswers.id, memberAnswers.email, memberAnswers.github))
        } else {
            team.push(new Intern(memberAnswers.name, memberAnswers.id, memberAnswers.email, memberAnswers.school))
        }
    };
    

    let htmlDoc = render(team)
    await fs.writeFile(outputPath, htmlDoc)
};

