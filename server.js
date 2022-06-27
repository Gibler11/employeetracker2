const {mainMenu, departmentQuestions, roleQuestions, updateEmployee, employeeQuestions}= require('./questions');
const db = require('./connection');
const consoleTable = require('console.table');
const inquirer = require('inquirer');



function allChoices() {
    inquirer.prompt(mainMenu)
    .then(answers => {
        console.log(answers)
      
        switch(answers.mainMenu) {
            case 'View all departments':
                viewAllDep()
            break; 
            case 'View all roles':
                viewAllRoles()
            break;
            case 'View all employees':
                viewAllEmployees()
            break;
            case 'Add a department':
                addDep()
            break;
            case 'Add a role':
                addRole()
            break;
            case 'Add an employee':
                addEmployee()
            break;
            case 'Update an employee role':
                updateEmployee()
            break;
        }

    })

}

function viewAllDep(){
    db.query('SELECT* FROM role', function(err, results){
        console.log('\n');
        console.table(results);
    });
    allChoices()
}
function viewAllRoles(){
    db.query('SELECT* FROM role', function(err, results){
        console.log('\n');
        console.table(results);
    });
    allChoices()
}
function viewAllEmployees(){
    db.query('SELECT* FROM employee', function(err, results){
        console.log('\n');
        console.table(results);
    });
    allChoices()

function addDep(){ 
    inquirer.prompt(departmentQuestions)
    .then(answers => {
        console.log(answers)
        db.query(`INSERT INTO department(name) VALUES ('${answers.addDep}')`, function(err, results) {
            console.log('\n');
            console.log(`${answear.addDep} added to list of the departments`)
    });
    allChoices()
})
}

function addRole() {
    inquirer.prompt(roleQuestions)
    .then(answers=> {
        console.log(answers)
        db.query(`INSERT INTO role(title, salary, department_id) VALUES ('${answers.addRoleNme}',${answers.addRoleSalary},${answers.addRoleDep})`, function (err, results){
            console.log(`\n`);
            console.log(`${answers.addRoleName} added to list of roles`)
        });
        allChoices()
    })
}

function addEmployee() {
    inquirer.prompt(employeeQuestions)
    .then(answers => {
        console.log(answers)
        db.query(`INSERT INTO role(first_name, last_name, new_employee_role, new_employee_manager) VALUES ('${answers.firsttName}', ${answers.lastName}', ${answers.newEmployeeRole},${answers.newEmpyeeManager})`, function (err, results){
            console.log(`\n`);
            console.log(`${answers.firstName} ${answers.lastName} added to list of employees`)
        })
    })

}

function updateEmployee() {
    inquirer.prompt(updateEmployee)
    .then(answers=> {
        console.log(answers)
        db.query('UPDATE employee SET(first_name, last_name, employee_id, manager_id) WHERE', function (err, results){
            console.log(`\n`);
            console.log(`$answers.firstName} ${answers.lastname} added to employee list`)
        })
    })
}

}
allChoices()
