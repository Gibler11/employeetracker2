const Sequelize = require('sequelize');
require ('dotenv').config();
const mysql= require('mysql2');
// const sequelize= new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.ebv.DB_PASSWORD,
//     {
//         host: 'localhost',
//         dialect: 'mysql',
//         port: 3306
//     }
// );
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // {TODO: Add your MySQL password}
      password: "",
      database: 'employeetracker'
    },
    console.log(`Connected to the employeetracker database.`)
  );

module.exports= db



