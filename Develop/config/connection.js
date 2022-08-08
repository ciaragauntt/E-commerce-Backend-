require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  // : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, null, {
      host: 'localhost',
      dialect: 'mysql',
      password: '@Ciaraculverhouse365',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
