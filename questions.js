const mainMenu= [
    {
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View all departments','View all roles','View all employees','Add a department','Add a role','Add an employee','Update an employee role'],
        name:'mainMenu'

    },
]
const departmentQuestions= [
    {
        type:'input',
        message:'Name of the depatment you want to add?',
        name:'addDep'
}
]
    
const roleQuestions= [
    {
        type:'input',
        message:'Name of the role you would like to add?',
        name:'addRoleName'
    },
    {
        type:'input',
        message:'Salary for this role?',
        name:'addRoleSalary'
    },
    {
        type:'input',
        message:'Department this role will be a part of? Need department id.',
        name:'addRoleDep'
    },
]
const employeeQuestions= [
    {
        type:'input',
        message:'FIRST name of the employee you would like to add?',
        name:'firstName'
    },
    {
        type:'input',
        message:'LAST name of the employee you would like to add?',
        name:'lastName'
    },
    
    {
        type:'input',
        message:'Employee will have what role?',
        name:'newEmployeeRole'
    },

    {
        type:'input',
        message: 'What manager for this employee?',
        name:'newEmployeeManager'
    }
]

const updateEmployee= [
    {
        type:'input',
        message:'What employee will update?',
        name:'updateEmployee'
    }  
]


module.exports= {mainMenu, questions}