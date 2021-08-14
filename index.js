const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const employees = [];

const start = () => {

    //1 ask questions to create employees
    inquirer.prompt({
        message: "Which type of employee do you want to add?",
        type: "list",
        choices: ["Manager", "Engineer", "Intern", "Done"],
        name: "type"
    }).then(data => {
        //check if data.type === "Manager", make new manager
        if(data.type === "Manager"){
            createManager();
        }else if(data.type === "Engineer"){
            createEngineer();
        }else if (data.type == "Intern"){
            createIntern();
        }else{
            createPage();
        }
    })
}

const createPage = () => {
    //loop through employees and create page
    const empCards = employees.map(emp => emp.getCard()).join('\n')
    const htmlTemplate = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
</head>
<body>
    <div class="p-4 bg-primary" style="text-align: center;color:black">
        <h1>Employee Directory</h1>
    </div>
    <div style="display: inline-flex">
    ${empCards}
    </div>
</body>
</html>`

fs.writeFileSync('index.html', htmlTemplate);
console.log("Done!")
}

const createIntern =() => {
    inquirer.prompt([
        {
            message: "What is the name of the intern?",
            name: "name"
        }, 
        {
            message: "What is the intern id?",
            name: "id"
        },
        {
            message: "What is the intern email?",
            name: "email",
        },
        {
            message:"What is the intern's school?",
            name: "school"
        }
    ]).then(data =>{
        const intern = new Intern(data.name, data.id, data.email, data.school);
            employees.push(intern);
            console.log(employees);
            start()

        
    })
}

const createEngineer =()=> {
    inquirer.prompt([
        {
            message: "What is the name of the engineer?",
            name: "name"
        }, 
        {
            message: "What is the engineer id?",
            name: "id"
        },
        {
            message: "What is the engineer email?",
            name: "email",
        },
        {
            message:"What is the engineers github?",
            name: "github"
        }
    ]).then(data =>{
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
            employees.push(engineer);
            console.log(employees);
            start()
    })
}

const createManager = () => {
    //ask questions about manager that we're creating
    inquirer.prompt([
        {
            message: "What is the name of the manager?",
            name: "name"
        }, 
        {
            message: "What is the manager id?",
            name: "id"
        },
        {
            message: "What is the manager email?",
            name: "email",
        },
        {
            message:"What is the office number?",
            name: "officeNumber",
        }
    ]).then(data => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
        employees.push(manager);
        console.log(employees);
        start();
    })
}

start()


//