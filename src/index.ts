import inquirer from "inquirer";

const questions = [
    {
        type: "list",
        name: "start_menu",
        message: "Choose Below",
        choices: [
            "view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role",
        ]
    }
];
inquirer.prompt(questions)
.then((answers) => {
    console.log(answers);
    if (answers.start_menu === "view all departments") {
        console.log("show departments");
    }
}
    // Display roles Table
inquirer.prompt(questions)
.then((answers) => {
        console.log(answers);
        if (answers.start_menu === "view all employees") {
            console.log("show employees");
        }
    }
    // View all employees
    inquirer.prompt(questions)
.then((answers) => {
        console.log(answers);
        if (answers.start_menu === "add department") {
            console.log("show role");
        }
}
    // Display role
    inquirer.prompt(questions)
.then((answers) => {
        console.log(answers);
        if (answers.start_menu === "add role") {
            console.log("show role");
        }
}
    // add employee
    inquirer.prompt(questions)
.then((answers) => {
        console.log(answers);
        if (answers.start_menu === "add employee") {
            console.log("show role");
        }
}
    // Update Role
    inquirer.prompt(questions)
.then((answers) => {
        console.log(answers);
        if (answers.start_menu === "update role") {
            console.log("show role");
        }
});